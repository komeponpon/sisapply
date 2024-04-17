import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import Company from '../models/Company.js';
import config from '../config/config.js';

const router = express.Router();

router.post('/login', async (req, res) => {
  const { loginId, password } = req.body;

  try {
    // loginId に基づいてユーザーを検索
    const company = await Company.findOne({ loginId });
    if (!company) {
      return res.status(401).json({ message: '認証情報が無効です' });
    }

    // パスワードの検証
    const isMatch = await bcrypt.compare(password, company.password);
    if (!isMatch) {
      return res.status(401).json({ message: '認証情報が無効です' });
    }

    // JWT トークンの生成
    const token = jwt.sign(
      { companyId: company.id, role: company.role },
      config.jwtSecret,
      { expiresIn: '1h' }
    );

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'サーバーエラー' });
  }
});

export default router;
