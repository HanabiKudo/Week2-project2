"use client";
import React from "react";
import NavBar from './components/navbar';
import InteractiveExplorer from './components/InteractiveExplorer';
import dynamic from 'next/dynamic';

type InteractiveExplorerProps = {
  food: string[];
  disc: string[];
  price: number[];
}


 function Home() {
  let interXP : InteractiveExplorerProps = {
    'food' : ['Food1', 'Food2', 'Food3'],
    'disc' : ['Disc1', 'Disc2', 'Disc3'],
    'price' : [1, 2, 3],
  }
  return (
      <>
      <NavBar />
      <hr />
      

      <InteractiveExplorer {...interXP} />
      </>

  );
}

export default Home;



