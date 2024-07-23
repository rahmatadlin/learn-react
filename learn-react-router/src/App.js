import { Routes, Route, Link, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/About";
import Product from "./pages/Product";
import PageNotFound from "./pages/NotFound";
// Samain to dan path nya
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/product" element={<Product />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <>
      <header className="App-header">
        <Link to="/">Home</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/product">Product</Link>
      </header>
      <Outlet />
    </>
  );
}

export default App;
