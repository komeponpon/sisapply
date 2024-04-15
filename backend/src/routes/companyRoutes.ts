import express from 'express';
import companyController from '../controllers/companyController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

// 新規会社登録
router.post('/', companyController.createCompany);

// 会社情報の取得
router.get('/:id', authMiddleware, companyController.getCompany);

// 会社情報の更新
router.put('/:id', authMiddleware, companyController.updateCompany);

// 会社の削除
router.delete('/:id', authMiddleware, companyController.deleteCompany);

export default router;
