import express from 'express';
import applicationController from '../controllers/applicationController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import upload from '../middlewares/uploadMiddleware.js';
var router = express.Router();
// 新規申請の作成
router.post('/', applicationController.createApplication);
// ファイルのアップロード
router.post('/:id/files', authMiddleware, upload.single('file'), applicationController.uploadFile);
// 申請の取得
router.get('/:id', authMiddleware, applicationController.getApplication);
// 申請の更新
router.put('/:id', authMiddleware, applicationController.updateApplication);
//　申請の削除
router.delete('/:id', authMiddleware, applicationController.deleteApplication);
export default router;
