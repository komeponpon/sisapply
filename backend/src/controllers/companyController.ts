import { Request, Response } from 'express';
import Company from '../models/Company.js';

interface CompanyRequestBody {
  companyName: string;
  mailAddress: string;
  loginId: string;
  password: string;
}

interface CompanyRequest extends Request {
  body: CompanyRequestBody;
  params: {
    id: string; // MongoDB の `_id` に対応
  };
}

// 新規会社登録
export const createCompany = async (req: CompanyRequest, res: Response) => {
  try {
    const company = await Company.create(req.body);
    res.status(201).json(company);
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred.' });
    }
  }
};

// 会社情報の取得
export const getCompany = async (req: CompanyRequest, res: Response) => {
  try {
    const company = await Company.findById(req.params.id);
    if (!company) {
      return res.status(404).json({ error: 'Company not found' });
    }
    res.status(200).json(company);
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred.' });
    }
  }
};

// 会社情報の更新
export const updateCompany = async (req: CompanyRequest, res: Response) => {
  try {
    const company = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!company) {
      return res.status(404).json({ error: 'Company not found' });
    }
    res.status(200).json(company);
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred.' });
    }
  }
};

// 会社の削除
export const deleteCompany = async (req: CompanyRequest, res: Response) => {
  try {
    const company = await Company.findByIdAndDelete(req.params.id);
    if (!company) {
      return res.status(404).json({ error: 'Company not found' });
    }
    res.status(200).json({ message: 'Company deleted' });
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred.' });
    }
  }
};

export default {createCompany, getCompany, updateCompany, deleteCompany};