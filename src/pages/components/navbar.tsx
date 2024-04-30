import React from 'react'; // Import React
import Link from 'next/link'

const NavBar = () => {
  return (
    <ul>
      <li key="home"><Link href="/">Home</Link></li>
      <li key="about"><Link href="/About">About</Link></li>
      <li key="Contact"><Link href="/Contact">Contact</Link></li>
    </ul>
  );
}
export default NavBar ;
