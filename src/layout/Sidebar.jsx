import React from "react";
import JournalEntries from "../components/Journal/JournalEntries";

const Sidebar = () => {
  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-navbar">
        <h3>
          <i className="far fa-moon"></i>
          <span>Edward Ramos</span>
        </h3>
        <button className="btn">Logout</button>
      </div>

      <div className="journal__new-entry">
        <i className="far fa-calendar-plus fa-5x"></i>
        <p className="mt-5">New entry</p>
      </div>
      <JournalEntries />
    </aside>
  );
};

export default Sidebar;