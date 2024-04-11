"use strict";
const router = express.Router();
const companyController = require('../controllers/companyController');
//新規会社登録
router.post('/', companyController.createCompany);
//会社情報の取得
router.get('/:id', authMiddleware, companyController.getCompany);
//会社情報の更新
router.put('/:id', authMiddleware, companyController.updateCompany);
//会社の削除
router.delete('/:id', authMiddleware, companyController.deleteCompany);
module.exports = router;
