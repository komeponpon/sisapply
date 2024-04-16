import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../utils/authContext";
import Header from "../components/Header";
import { logout } from "../utils/authUtils";

export default function Dashboard() {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if(!user) {
      router.replace('/login');
    }
  },[user, router]);

  if (!user) {
    return null;
  }

  return (
    <div>
      <Header user={user} logout={logout} />
      <h1>ダッシュボード</h1>
      <p>ごきげんよう,{user.email}!</p>
    </div>
  );
}