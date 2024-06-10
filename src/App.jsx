import { BrowserRouter , Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";

import {Navbar} from "./components/Navbar.jsx";
import AllJobs from "./pages/AllJobs.jsx";

import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

import AddJob from "./pages/AddJob.jsx";

function App() {

   
  const [jobs, setJobs] = useState([]);
    
  const getJobs = async () => {
    try {
      const res = await axios.get("/api/jobs");
      const data = res.data;
      console.log(data);
      setJobs(data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  useEffect(() => {
    getJobs();
  }, []);




  return (
    <>
     <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage jobs={jobs} />} />
          <Route path="/jobs" element={<AllJobs jobs={jobs} />} />
          <Route path ="/add-job" element={<AddJob />} />

          
        </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;
