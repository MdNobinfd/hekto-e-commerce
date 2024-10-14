"use client"
import React from 'react'
import { useState } from "react";import Container from './Container';
;
const Description = () => {
      // State to track which section is currently active
   const [activeSection, setActiveSection] = useState("home");

   // Function to handle navigation click
   const handleNavClick = (section) => {
     setActiveSection(section);
   };
  return (
   <>
   <Container>
   <div className='container'>
      {/* Navbar */}
      <nav className="nav flex item">
        <button onClick={() => handleNavClick("home")} className={`nav-link ${activeSection === "home" ? "active" : ""}`}>
        Description
        </button>
        <button onClick={() => handleNavClick("service")} className={`nav-link ${activeSection === "service" ? "active" : ""}`}>
        Additional Info
        </button>
        <button onClick={() => handleNavClick("products")} className={`nav-link ${activeSection === "products" ? "active" : ""}`}>
        Reviews
        </button>
        <button onClick={() => handleNavClick("special")} className={`nav-link ${activeSection === "special" ? "active" : ""}`}>
        Video
        </button>
      </nav>

      {/* Section Content */}
      <div className="content">
        {activeSection === "home" && (
         <div className="bg-[#F9F8FE] p-8">
         {/* Section 1 */}
         <div className="mb-8">
           <h2 className="text-2xl font-bold text-blue-900">Varius tempor.</h2>
           <p className="text-gray-500 mt-4 leading-relaxed">
             Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet.
             Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non
             varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec
             tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec.
             Dui, massa viverra.
           </p>
         </div>
   
         {/* Section 2 */}
         <div>
           <h3 className="text-xl font-semibold text-blue-900 mb-4">More details</h3>
           <ul className="space-y-4">
             <li className="flex items-center">
               <span className="mr-2 text-xl">➔</span>
               <p className="text-gray-500">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis.</p>
             </li>
             <li className="flex items-center">
               <span className="mr-2 text-xl text-blue-600">➔</span>
               <p className="text-gray-500">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis.</p>
             </li>
             <li className="flex items-center">
               <span className="mr-2 text-xl">➔</span>
               <p className="text-gray-500">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis.</p>
             </li>
             <li className="flex items-center">
               <span className="mr-2 text-xl">➔</span>
               <p className="text-gray-500">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis.</p>
             </li>
           </ul>
         </div>
       </div>
        )}
        {activeSection === "service" && (
          <div className="bg-purple-50 p-8">
          {/* Section 1 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-900">Varius tempor.</h2>
            <p className="text-gray-500 mt-4 leading-relaxed">
              Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet.
              Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non
              varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec
              tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec.
              Dui, massa viverra.
            </p>
          </div>
        </div>
        )}
        {activeSection === "products" && (
          <div className="bg-purple-50 p-8">
          {/* Section 2 */}
          <div>
            <h3 className="text-xl font-semibold text-blue-900 mb-4">More details</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="mr-2 text-xl">➔</span>
                <p className="text-gray-500">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis.</p>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-xl text-blue-600">➔</span>
                <p className="text-gray-500">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis.</p>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-xl">➔</span>
                <p className="text-gray-500">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis.</p>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-xl">➔</span>
                <p className="text-gray-500">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis.</p>
              </li>
            </ul>
          </div>
        </div>
        )}
         {activeSection === "special" && (
                <h2>Ther is no video!!!</h2>
        )}
      </div>

      <style jsx>{`
        .nav {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
        }
        .nav-link {
          border: none;
          cursor: pointer;
        }
        .nav-link.active {
          border-bottom: 1px solid #000000;
          color: #ffffff;
        }
      `}</style>
    </div>
   </Container>
   
   </>
  )
}

export default Description