import React from "react";
import Header from "../components/Header";
import ShortcutGrid from "../components/ShortcutGrid";
import ToDoList from "../components/ToDoList";
import Background from "../components/Background";
import Footer from "../components/Footer";

const MainTab = () => {
  return (
    <div className="main-tab">
      <Background />
      <Header />
      <div className="content-grid">
        <div className="left-section">
          <div className="large-card"></div>
          <div className="small-cards">
            <div className="small-card"></div>
            <div className="small-card"></div>
          </div>
        </div>
        <div className="center-section">
          <ShortcutGrid />
          <ToDoList />
        </div>
        <div className="right-section">
          <div className="side-card"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainTab;
