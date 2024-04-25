import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../utils/authContext";

export default function Dashboard() {
  const router = useRouter();
  const { user, logout } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.replace('/login');
    }
  }, [router]);

  if (!user) {
    return null;
  }
}