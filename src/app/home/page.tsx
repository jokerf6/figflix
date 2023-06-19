'use client';
import validToken from "../util/tokens";
import { useEffect, useState } from "react";
import dynamic from 'next/dynamic';

export default function Home() {
  const [allData, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const Nav = dynamic(() => import('../components/nav'));
  const Movie = dynamic(() => import('./component/movie'));

  useEffect(() => {
    if(!validToken()){
      localStorage.clear();
      window.location.href = "/login";
      return;
    }
    async function getData() {
      const url =
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTBlMmM2ZDgxZGNiNzA5NTU2OWVjMDNmYzNiNzlkYSIsInN1YiI6IjY0ODRjNzMzYzlkYmY5MDBjNTcxYmMzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NMBljBEdcnM3GnK0s-mzk1rN1CyZFYfs0xatnCiz_Ic",
        },
      };

      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setData(json.results);
        setLoading(true);

      } catch (err) {
        console.error("error:", err);
      }
    }

    getData();
  }, []);

  return (
    <main className=" h-screen" >
      {loading ? (
        <div className=" h-screen">
          <Nav />
          <div className=" bg-red-400 absolute top-24 left-0 " style={{
            width:"100%",
            height:"87.7%",

            
          }}>

          <Movie data={allData} />
          
                  </div>
                  </div >

      )
       : (
        <div></div>
      )}
    </main>
  );
}
