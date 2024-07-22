import logo from "./logo.svg";
import "./App.css";
import Header from "./components/global/Header";
import Content from "./components/global/Content";
import Footer from "./components/global/Footer";
import { useState } from "react";

// State bersifat sementara atau bisa diubah2
function App() {
  const [lokasi, setLokasi] = useState("Bandung");

  console.log("lokasi ====>", lokasi);
  return (
    <div className="App">
      <h1>Saya ingin ke {lokasi}</h1>
      <button onClick={() => setLokasi("Jakarta")}>Jakarta</button>
      <button onClick={() => setLokasi("Semarang")}>Semarang</button>

    </div>
  );
}

export default App;

// wkwkkw
// function App({ library }) {
//   const onSubmit = () => {
//     console.log("Submit form");
//   };

//   const data = {
//     nama: "Rara",
//     alamat: "Jakarta",
//     universitas: {
//       nama: "Kampus Tertutup",
//       alamat: "Sunter",
//     },
//   };

//   const {
//     nama,
//     alamat,
//     universitas: { nama: namaUniversitas, alamat: alamatUniversitas },
//   } = data;
//   // console.log(nama, alamat, namaUniversitas, alamatUniversitas);

//   const array = [
//     'Sunter',
//     'Bintaro',
//     'Kelapa Gading',
//     'Gambir',
//     'Pancoran'
//   ]

//   // console.log(array[0]);

//   const [lokasiSatu, lokasiDua, ...sisa] = array;
//   // console.log(lokasiSatu);
//   // console.log(lokasiDua);
//   // console.log(sisa);

//   return (
//     <div className="App">
//       {/* <Header/>
//       <Content/>
//       <Footer/> */}
//       <h1>Belajar {library}</h1>
//       <button
//         onClick={() => {
//           onSubmit();
//         }}
//       >
//         Submit
//       </button>
//     </div>
//   );
// }
