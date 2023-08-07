import React, { useState, useEffect } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
import '../components/Navbar.css'

function Navbar() {
  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    // Set active tab based on current location
    const path = window.location.pathname.split("/").pop();
    const target = $(`#navbarSupportedContent ul li a[href="${path}"]`);
    setActiveTab(target.parent().index());
  }, []);

  useEffect(() => {
    // Initialize responsive navbar animation
    function test() {
      const tabsNewAnim = $("#navbarSupportedContent");
      const selectorNewAnim = tabsNewAnim.find("li").length;
      const activeItemNewAnim = tabsNewAnim.find(".active");
      if (!activeItemNewAnim.length) return; // Return if active item is not found
      const activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
      const activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
      const itemPosNewAnimTop = activeItemNewAnim.position();
      const itemPosNewAnimLeft = activeItemNewAnim.position();
      $(".hori-selector").css({
        top: `${itemPosNewAnimTop?.top}px`, // Add the safe navigation operator to check for undefined values
        left: `${itemPosNewAnimLeft?.left}px`, // Add the safe navigation operator to check for undefined values
        height: `${activeWidthNewAnimHeight}px`,
        width: `${activeWidthNewAnimWidth}px`,
      });
      $("#navbarSupportedContent").on("click", "li", function (e) {
        $("#navbarSupportedContent ul li").removeClass("active");
        $(this).addClass("active");
        const activeWidthNewAnimHeight = $(this).innerHeight();
        const activeWidthNewAnimWidth = $(this).innerWidth();
        const itemPosNewAnimTop = $(this).position();
        const itemPosNewAnimLeft = $(this).position();
        $(".hori-selector").css({
          top: `${itemPosNewAnimTop?.top}px`, // Add the safe navigation operator to check for undefined values
          left: `${itemPosNewAnimLeft?.left}px`, // Add the safe navigation operator to check for undefined values
          height: `${activeWidthNewAnimHeight}px`,
          width: `${activeWidthNewAnimWidth}px`,
        });
      });
    }
  
    setTimeout(() => {
      test();
    });
  
    $(window).on("resize", function () {
      setTimeout(() => {
        test();
      }, 500);
    });
  
    $(".navbar-toggler").click(function () {
      $(".navbar-collapse").slideToggle(300);
      setTimeout(() => {
        test();
      });
    });
  }, []);
  

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <nav className="navbar navbar-expand-custom navbar-mainbg">
      {/* <a className="navbar-brand navbar-logo" href="#">
        Navbar
      </a> */}
      <button
        className="navbar-toggler"
        type="button"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars text-white"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>
          <li className={`nav-item ${activeTab === 0 ? "active" : ""}`}>
            <a
              className="nav-link"
              href="/dashboard"
              onClick={() => handleTabClick(0)}
            >
              <i className="fas fa-tachometer-alt"></i>Home
            </a>
          </li>


          <li className={`nav-item ${activeTab === 1 ? "active" : ""}`}>
            <Link
              className="nav-link"
              to="/profile"
              onClick={() =>
                handleTabClick(1)
            }
            >
              <i className="far fa-user"></i>Profile
            </Link>
          </li>



          <li className={`nav-item ${activeTab === 2 ? "active" : ""}`}>
            <a
              className="nav-link"
              href="/marketplace"
              onClick={() => handleTabClick(2)}
            >
              <i className="fas fa-cog"></i>Marketplace
            </a>
          </li>
          <li className="nav-item b">
            <a className="nav-link" href="#">
              <i className="far fa-envelope"></i>Contact Us
            </a>
          </li>




          <div className="text-container1">
          <a href="">Signup</a>
          <a href="">Signup</a>
          </div>


  
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;






