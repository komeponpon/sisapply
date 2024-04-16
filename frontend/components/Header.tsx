import Link from "next/link";
import {User} from '../utils/authContext'

interface HeaderProps {
  user: User | null;
  logout: () => void;
}

export default function Header ({ user, logout}: HeaderProps) {
  return(
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>home</a>
            </Link>
          </li>
          {user ?  (
            <>
              <li>
                <Link href="/dashboad">
                  <a>Dashboard</a>
                </Link>
              </li>
              <li>
                <button onClick={logout}>Logout</button>
              </li>
            </>
          ) : (
            <li>
              <Link href="/login">
                <a>Login</a>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}