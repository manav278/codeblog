import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
function Navbar() {
  return (
    <div>
      <nav className={`${styles.mainnav} ${styles.poppins}`}>
        <ul>
          <Link href="/" className="mx-4">
            <li>Home</li>
          </Link>
          <Link href="/about" className="mx-4">
            <li>AboutUs</li>
          </Link>
          <Link href="/blog" className="mx-4">
            <li>Blogs</li>
          </Link>
          <Link href="/contact" className="mx-4">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;



