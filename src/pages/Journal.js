import React from "react";
import Notes from "../components/Notes/Notes";
import NothingSelected from "../components/NothingSelected";
import Sidebar from "../layout/Sidebar";

const Journal = () => {
  return (
    <div className="journal__main-content animate__animated animate__fadeIn animate__faster">
      <Sidebar />
      <main>
        {/* <NothingSelected /> */}
        <Notes />
      </main>
    </div>
  );
};
export default Journal;
