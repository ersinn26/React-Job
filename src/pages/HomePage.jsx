import React from 'react'
import{ Navbar} from '../components/Navbar'
import Hero from '../components/Hero'
import HomeCard from '../components/HomeCard'
import RecentJobs from '../components/RecentJobs'
import ViewAllJobs from '../components/ViewAllJobs'
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const HomePage = (
  {jobs}
) => {


  return (
    <div>
       
        <Hero />
        <HomeCard />
        <RecentJobs jobs={jobs} />
        <ViewAllJobs />




    </div>
  )
}

export default HomePage