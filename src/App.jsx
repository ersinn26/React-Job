
import axios from "axios";

import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
