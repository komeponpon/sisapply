import { useState } from "react";
import { useRouter } from "next/router";
import { login } from "../utils/authUtils"

export default function LoginForm() {
  const router = useRouter();
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const token = await login (loginId, password);
      //　トークンを保存しダッシュボードへリダイレクト
      localStorage.setItem('token', token);
      router.push('/dashboard');
    } catch (err){
      console.error(err);
    }
  };

  return (
    <div>
      <h1>ログイン</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="id"
          value={loginId}
          onChange={(e) => setLoginId(e.target.value)}
          placeholder="ログインID"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="パスワード"
        />
        <button type="submit">ログイン</button>
      </form>
    </div>
  );
}