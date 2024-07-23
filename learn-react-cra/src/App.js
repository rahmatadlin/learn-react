import logo from "./logo.svg";
import "./App.css";
import Header from "./components/global/Header";
import Content from "./components/global/Content";
import Footer from "./components/global/Footer";
import { useState, useEffect, useRef } from "react";

// // State bersifat sementara atau bisa diubah2
// function App() {
//   // const headingRef = useRef();
//   // const inputRef = useRef();
//   // const [lokasi, setLokasi] = useState("Bandung");
//   // const [lokasiKedua, setLokasiKedua] = useState("Palembang");

//   const [nama, setNama] = useState("");

//   // useRef bisa memanipulasi dom

//   useEffect(() => {
//     console.log('Nama yang diinput =', nama);
//     if(nama.length<3) {
//       console.error('Nama harus lebih dari 3 huruf')
//     }
//   }, [nama]);

//   // Functionakan handle submit form di bawah
//   const onSubmit = (event) => {
//     event.preventDefault();
//     console.log("onSubmit");

//     // Kalau mau collect form nya
//     // const form = event.target;
//     // const formData = new FormData(form);
//     // const formJSON = Object.fromEntries(formData.entries());

//     // console.table(formJSON);
//   };
//   // useEffect
//   // [] sebuah func akan di execute sekali saja
//   // useEffect(() => {
//   //   console.log("lokasi ====>", lokasi);

//   //   console.log("heading", headingRef.current);
//   //   headingRef.current.innerHTML = "Saya ingin ke Surabaya";
//   //   // Dapatin tinggi dari h1
//   //   console.log("h1 height", headingRef.current.clientHeight);
//   //   console.log("h1 classname", headingRef.current.className);
//   //   console.log("h1 ID", headingRef.current.id);
//   // }, [lokasi]);

//   // useEffect(() => {
//   //   console.log("Lokasi lain yang ingin saya kunjungi", lokasiKedua);
//   // }, []);

//   // console.log("lokasi ====>", lokasi);
//   return (
//     <div className="App">
//       {/* <h1 id="ini-h1" className="ini-classname" ref={headingRef}>
//         Saya ingin ke {lokasi}
//       </h1>

//       <hr />
//       <input ref={inputRef}/>
//       <button onClick={() => inputRef.current.focus()}>Focus</button> */}
//       {/* <button onClick={() => setLokasi("Jakarta")}>Jakarta</button>
//       <button onClick={() => setLokasi("Semarang")}>Semarang</button>

//       <hr />
//       <h1>Lokasi lain yang ingin saya kunjungi {lokasiKedua}</h1>
//       <button onClick={() => setLokasiKedua("Lampung")}>Lampung</button> */}
//       {/* Bikin form */}
//       <h1>Data Fetching</h1>
//       <hr />
//       <form className="form" onSubmit={onSubmit}>
//         <div>
//           <label htmlFor="nama">Nama Pegawai</label>
//           <input
//             id="nama"
//             value={nama}
//             onChange={(e) => setNama(e.target.value)}
//           />
//         </div>
//         <div>
//           Nama yang diinput adalah {nama}
//         </div>
//         {nama.length > 0 && nama.length < 3 &&(
//           <div className="error" style={{color: "red"}}>
//           Nama kurang dari 5 huruf
//         </div>
//         )}

//         {/* <div>
//           <label htmlFor="warna">Warna Favorit</label>
//           <input id= "warna" name="warna" type="text"/>
//         </div> */}
//         {/* <div>
//           <label htmlFor="palet">Palet</label>
//           <input id= "palet" name="palet" type="color"/>
//         </div> */}
//         {/* <div>
//           <button>
//             Submit
//           </button>
//         </div> */}
//       </form>
//     </div>
//   );

//   // Bikin Form
// }

///// Fetching Data

// function App() {
//   // Kita bisa tampung datanya ke state
//   const [profile, setProfile] = useState(null);

//   const fetchDataProfile = async () => {
//     const data = await fetch("https://api.github.com/users/rahmatadlin")
//     const userProfile = await data.json()

//     setProfile(userProfile)
//   }

//   useEffect(() => {
//     // fetch("https://api.github.com/users/rahmatadlin")
//     //   .then((response) => response.json())
//     //   .then((data) => setProfile(data));
//     fetchDataProfile()
//   }, []);

//    return (
//     <div className="App">
//       <h1>Data Fetching</h1>
//       <hr />
//       {profile ? (
//         <div>
//           <div>Nama: {profile.name}</div>
//           <div>
//             <img src={profile.avatar_url} alt="Avatar" />
//           </div>
//           <div>Lokasi: {profile.location}</div>
//         </div>
//       ) : (
//         <div>Loading...</div>
//       )}
//     </div>
//   );
// }

//// Conditonal Rendering

function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked && "✔"}
    </li>
  );
}
function App() {
  return (
    // <section>
    //   {/* <h1>Sally Ride's Packing List</h1> */}
    //   <Header/>
    //   <ul>
    //     <Item isPacked={true} name="Space suit" />
    //     <Item isPacked={true} name="Helmet with a golden leaf" />
    //     <Item isPacked={false} name="Photo of Tam" />
    //   </ul>
    // </section>

    <section>
      <Header />
      <Content />
      <Footer/>
    </section>
  );
}

export default App;
