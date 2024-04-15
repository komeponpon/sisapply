import { Request, Response } from "express";
import Application from "../models/Application.js";
import { sendEmail } from "../utils/emailUtils.js";
import Company from "../models/Company.js";


interface ApplicationRequestBody {
  companyId: string;
  propertyName: string;
  propertyAddress: string;
  remarks: string;
  responseStatus: string;
  applyDateTime: Date;
  // ファイルに関する情報は、ファイルアップロード時に扱う
}

// ApplicationRequestインターフェースを拡張して、fileプロパティと正しいparamsを含める
interface ApplicationRequest extends Request {
  body: ApplicationRequestBody;
  params: {
    id: string;
  };
  file?: Express.Multer.File; // MulterによるFileインターフェースの定義を使用
}// multerを使用してファイルアップロードを処理する場合

// 新規申請の作成
export const createApplication = async (req: ApplicationRequest, res: Response) => {
  try {
    const application = await Application.create(req.body);
    res.status(201).json(application);
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred.' });
    }
  }
};

//　ファイルアップロード
export const uploadFile = async (req: ApplicationRequest, res: Response) => {
  try {
    // req.fileが存在するかどうかを確認
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded.' });
    }

    const application = await Application.findByIdAndUpdate(
      req.params.id,
      { $push: { files: { fileType: req.file.mimetype, fileName: req.file.originalname } } },
      { new: true }
    );

    if (!application) {
      return res.status(404).json({ error: 'Application not found' });
    }

    // メール送信処理
    const company = await Company.findById(application.companyId);
    if (company) {
      sendEmail(company.mailAddress, 'File uploaded', `File ${req.file.originalname} has been uploaded for application ${application.id}`);
    }

    res.status(200).json(application);
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred.' });
    }
  }
};


// 申請情報の取得
export const getApplication = async (req: ApplicationRequest, res: Response) => {
  try {
    const application = await Application.findById(req.params.id);
    if (!application) {
      return res.status(404).json({ error: 'Application not found' });
    }
    res.status(200).json(application);
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred.' });
    }
  }
};

// 申請情報の更新
export const updateApplication = async (req: ApplicationRequest, res: Response) => {
  try {
    const application = await Application.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!application) {
      return res.status(404).json({ error: 'Application not found' });
    }
    res.status(200).json(application);
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred.' });
    }
  }
};

// 申請情報の削除
export const deleteApplication = async (req: ApplicationRequest, res: Response) => {
  try {
    const application = await Application.findByIdAndDelete(req.params.id);
    if (!application) {
      return res.status(404).json({ error: 'Application not found' });
    }
    res.status(200).json({ message: 'Application deleted' });
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred.' });
    }
  }
};

// applicationControllers.ts の最後に追加
export default { createApplication, uploadFile, getApplication, updateApplication, deleteApplication };
