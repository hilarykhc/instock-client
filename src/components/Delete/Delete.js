import ButtonDC from "../ButtonDC/ButtonDC";
import Close from "../../assets/Icons/close-24px.svg";
import "./Delete.scss";

const Delete = ({ name, onDeleteConfirm, onClose }) => {
  const handleDelete = () => {
    onDeleteConfirm(name);
    handleClose();
  };
  return (
    <>
      <div className="delete__overlay" onClick={onClose}></div>
      <div className="delete" onClick={(e) => e.stopPropagation()}>
        <div className="delete__container">
          <button className="delete__closeButton" onClick={onClose}>
            <img className="delete__img" src={Close} alt="close"></img>
          </button>
          <p className="delete__title">Delete {name} Washington warehouse?</p>
          <p className="delete__content">
            Please confirm that you'd like to delete the {name}Washington from
            the list of warehouses. You won't be able to undo this action.
          </p>
        </div>
        <div className="delete__buttonDC">
          <ButtonDC onClick={handleDelete} />
        </div>
      </div>
    </>
  );
};
export default Delete;
