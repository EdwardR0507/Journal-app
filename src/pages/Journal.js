import React from "react";
import { useSelector } from "react-redux";
import Notes from "../components/Notes/Notes";
import NothingSelected from "../components/NothingSelected";
import Sidebar from "../layout/Sidebar";

const Journal = () => {
  const { active } = useSelector((state) => state.notes);
  return (
    <div className="journal__main-content animate__animated animate__fadeIn animate__faster">
      <Sidebar />
      <main>{active ? <Notes /> : <NothingSelected />}</main>
    </div>
  );
};
export default Journal;
