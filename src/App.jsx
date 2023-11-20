import "./App.css";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./Homepage/HomePage";

function NotFound() {
  return (
    <div className="mx-4 mt-32 flex h-screen flex-col items-center justify-start gap-12 text-xl sm:mx-8 md:text-4xl">
      <h1 className="text-center">404 - Not Found</h1>
      <p className="text-center">
        The page you are looking for does not exist.
      </p>
      <p className="text-center">
        Go back to the{" "}
        <Link
          to="/"
          className="text-logoGreen underline hover:text-logoGreenHover"
        >
          homepage
        </Link>
      </p>
    </div>
  );
}

function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route exact path="/" element={<HomePage openModal={openModal} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
