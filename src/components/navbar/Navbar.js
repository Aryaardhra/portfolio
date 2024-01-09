import React, { useState } from 'react';
import { BsPersonCircle } from "react-icons/bs";
import { MdPermPhoneMsg } from "react-icons/md";
import { HiHome } from "react-icons/hi2";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { RiServiceLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import "../navbar/navbar.css";

const Navbar = () => {

  const [active, setActive] = useState("/")
  return (
    <>
    <nav>
     <Link className="link_path " to="/about" style = {{ textDecoration : "none"}}><HiHome /></Link>
     <Link className="link_path" to="/experience" style = {{ textDecoration : "none"}}><MdOutlineLibraryBooks /></Link>
     <Link className="link_path" to="/portfolio" style = {{ textDecoration : "none"}}><BsPersonCircle /></Link>
     <Link className="link_path" to="/services" style = {{ textDecoration : "none"}}><RiServiceLine /></Link>
     <Link className="link_path" to="/contact" style = {{ textDecoration : "none"}}><MdPermPhoneMsg /></Link>
    </nav>
    </>
  )
}

export default Navbar