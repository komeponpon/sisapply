import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../utils/authContext";
import Header from "../components/Header";

export default function Dashboard() {
  const router = useRouter();
  const { user, logout } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token && !user) {
      router.replace('/login');
    }
  }, [router, user]); // user を依存配列に追加

  if (!user) {
    return null;
  }

  return (
    <div>
      <Header user={user} logout={logout} />
      <h1>ダッシュボード</h1>
      <p>こんにちは！{user.companyName}!</p>
    </div>
  );
}
