import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import config from './config/config.js';
import companyRoutes from './routes/companyRoutes.js'
import applicationRoutes from './routes/applicationRoutes.js'
import authRoutes from './routes/authRoutes.js'

const app = express();
const port = 4000;

// ミドルウェアの設定
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// データベース接続
mongoose.connect(config.mongoURI)
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));

// ルーティング設定
app.use('/api/companies', companyRoutes);
app.use('/api/applications', applicationRoutes);
app.use('/api', authRoutes);

// エラーハンドリング
app.use((err: Error, req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err);
  res.status(500).json({error: 'Internal Server Error'});
});


const PORT = process.env.PORT || port;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
