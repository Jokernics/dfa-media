import { Outlet } from "react-router-dom";
import './Layout.scss';
import Nav from "./Nav/Nav";
import Header from './Header/Header';
import { useState } from "react";

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="main">
      <div className="content-container">
        <Nav  {...{ isOpen, setIsOpen }} />
        <div className="content-wrp">
          <Header {...{ isOpen, setIsOpen }} />
          <div className="container"><Outlet /></div>
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  )
}