const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/config');
const companyRoutes = require('./routes/companyRoutes');
const applicationRoutes = require('./routes/applicationRoutes');


const app = express ();
const port = 4000;

//ミドルウェアの設定
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//データベース接続
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err: any) => console.log(err));

//ルーティング設定
app.use('/api/companies', companyRoutes);
app.use('/api/applications', applicationRoutes);

//エラーハンドリング
app.use((err: any, req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error: string; }): void; new(): any; }; }; }, next: any) => {
  console.error(err);
  res.status(500).json({error: 'Internal Server Error'});
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
