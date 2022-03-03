import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveNote, uploadImage } from "../../actions/notes";

const NotesAppBar = () => {
  const imageRef = useRef(null);
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.notes);
  const handleSave = () => {
    dispatch(saveNote(active));
  };

  const handlePictureCLick = () => {
    imageRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(uploadImage(file, active));
    }
  };

  return (
    <div className="notes__appbar">
      <span>25/02/2022</span>

      <input
        ref={imageRef}
        type="file"
        name="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />

      <div>
        <button className="btn" onClick={handlePictureCLick}>
          Picture
        </button>

        <button className="btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default NotesAppBar;
