import { useDispatch, useSelector } from "react-redux";
import { saveNote } from "../../actions/notes";

const NotesAppBar = () => {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.notes);
  const handleSave = () => {
    dispatch(saveNote(active));
  };
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

        <button className="btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default NotesAppBar;
