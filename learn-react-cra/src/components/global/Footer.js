import { SlPaypal } from "react-icons/sl";
import { CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";


const dataSosmed = [
  {
    id: 1,
    name: "Paypal",
    icon: <SlPaypal />,
    url: "https://www.paypal.com/id/home"
  },
  {
    id: 2,
    name: "Instagram",
    icon: <CiInstagram />,
    url: "https://www.instagram.com"
  },
  {
    id: 3,
    name: "X",
    icon: <FaXTwitter />,
    url: "https://x.com"
  },
];

// export default function Footer() {
//   const tahun = new Date().getFullYear();
//   return <footer>{tahun}</footer>;
// }
export default function Footer() {
  return (
    <footer>
      <ul>
        {dataSosmed.map((value) => (
          <li key={value.id}>
            <a href={value.url}>{value.icon}</a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
