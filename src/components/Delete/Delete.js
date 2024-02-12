import ButtonDC from "../ButtonDC/ButtonDC";
import Close from "../../assets/Icons/close-24px.svg";
import "./Delete.scss";

const Delete = ({ name, styleName, list, onDeleteConfirm, onClose }) => {

  const handleDelete = () => {
    onDeleteConfirm(name);
  };
  const handleCancel = () => {
    onClose();
  };
  return (
    <>
      <div className="delete__overlay" onClick={onClose}></div>
      <div className="delete" onClick={(e) => e.stopPropagation()}>
        <div className="delete__container">
          <button className="delete__closeButton" onClick={onClose}>
            <img className="delete__img" src={Close} alt="close"></img>
          </button>

          <p className="delete__title">
            Delete {name} {styleName}?
          </p>
          <p className="delete__content">
            Please confirm that you'd like to delete{" "}
            {styleName === "warehouse" ? "the " + name : name} from {list}. You
            won't be able to undo this action.

          </p>
        </div>
        <div className="delete__buttonDC">
          <ButtonDC onClick={handleDelete} onCancel={handleCancel} />
        </div>
      </div>
    </>
  );
  }
export default Delete;
