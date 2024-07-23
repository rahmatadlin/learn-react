// Cara panggil id menggunakan userRouter
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function DetailMenu() {
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    if (!id) return;
    console.log("router", id);
  }, [router.query]);

  return <section>Ini detail menu</section>;
}
