import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-stone-200 flex justify-center items-center gap-10 p-5">
      <Link to={"/"}>Home</Link>
      <Link to={"/show-book"}>show book</Link>
      <Link to={"/add-book"}>add book</Link>
    </nav>
  );
}

export default Navbar;
