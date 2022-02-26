import React from "react";

const JournalEntry = () => {
  return (
    <div className="journal__entry pointer animate__animated animate__fadeIn animate__faster">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(https://s3.us-east-1.amazonaws.com/maxonsites/images/maxon/_1200x630_crop_center-center_82_none/Universe_5_Hero.jpg?mtime=1630681085)`,
        }}
      ></div>

      <div className="journal__entry-body">
        <p className="journal__entry-title">Title</p>
        <p className="journal__entry-content">Description</p>
      </div>

      <div className="journal__entry-date-box">
        <span> Friday </span>
        <h4> 25 </h4>
      </div>
    </div>
  );
};

export default JournalEntry;
