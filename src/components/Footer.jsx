import React from "react";

const Footer = () => {
  return (
    <footer className="bg-pink-500 text-white p-4 mt-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Tabloom. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
