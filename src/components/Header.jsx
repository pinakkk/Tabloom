import React from "react";

const Header = () => {
  return (
    <header className="bg-pink-500 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Tabloom</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#shortcuts" className="hover:underline">Shortcuts</a></li>
            <li><a href="#todo" className="hover:underline">To-Do List</a></li>
            <li><a href="#settings" className="hover:underline">Settings</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
