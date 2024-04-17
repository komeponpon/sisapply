import mongoose from "mongoose";
import bcrypt from "bcrypt";
import Company from "../models/Company.js";
import config from "../config/config.js";

const seedCompany = async () => {
  try {
    await mongoose.connect(config.mongoURI);

    // 既存のデータを削除
    await Company.deleteMany({});

    // パスワードのハッシュ化
    const hashedPassword = await bcrypt.hash('yourPassword123', 10);

    // Company ドキュメントの作成
    const company = new Company({
      id: "company1",
      companyName: "Example Company",
      mailAddress: "contact@example.com",
      loginId: "company_login",
      password: hashedPassword, // ハッシュ化されたパスワード
      role: "admin",
    });

    // ドキュメントの保存
    await company.save();

    console.log("Company seeded successfully.");
    process.exit();
  } catch (error) {
    console.error("Error seeding company:", error);
    process.exit(1);
  }
};

seedCompany();