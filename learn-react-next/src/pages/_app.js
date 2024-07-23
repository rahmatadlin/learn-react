import "@/styles/globals.css";
import Layout from "@/components/Layout";

// Bisa validasi disini misal tampilan mobile ,web dll

// Jadi ketika content dipanggil dia bakal masuk ke children di layout.js
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
