import React from "react";
import NotesAppBar from "./NotesAppBar";

const Notes = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
          name="title"
        />

        <textarea
          placeholder="What happened today"
          className="notes__textarea"
          name="body"
        ></textarea>

        <div className="notes__image">
          <img
            src={
              "https://s3.us-east-1.amazonaws.com/maxonsites/images/maxon/_1200x630_crop_center-center_82_none/Universe_5_Hero.jpg?mtime=1630681085"
            }
            alt="imagen"
          />
        </div>
      </div>

      <button className="btn btn-danger">Delete</button>
    </div>
  );
};

export default Notes;
