import type { AppProps } from "next/app";
import { AuthProvider } from "../utils/authContext";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

export default function App ({Component, pageProps}: AppProps) {
  return(
    <AuthProvider>
      <Component {...pageProps}/>
      <ToastContainer/>
    </AuthProvider>
  );
}