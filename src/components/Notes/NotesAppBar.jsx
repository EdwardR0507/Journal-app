import React from "react";

const NotesAppBar = () => {
  return (
    <div className="notes__appbar">
      <span>25/02/2022</span>

      <input
        id="fileSelector"
        type="file"
        name="file"
        style={{ display: "none" }}
      />

      <div>
        <button className="btn">Picture</button>

        <button className="btn">Save</button>
      </div>
    </div>
  );
};

export default NotesAppBar;
