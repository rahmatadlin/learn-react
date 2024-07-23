import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const {locale} = router

  console.log("ini adalah locale", locale);

  // Ketika menggunakan func yang berjalan dan melakukan redirect
  const onRedirect = () => {
    router.push("/about");
  };
  return (
    <>
      <h1>Belajar NextJS</h1>

      <button onClick={onRedirect}>Ke About</button>
      <ul>
        <li>
          <Link href="/menu/detail/12">Pizza Tuna</Link>
        </li>
        <li>
          <Link href="/menu/detail/pizza-tuna/10">Pizza Tuna Lagi</Link>
        </li>
      </ul>
    </>
  );
}
