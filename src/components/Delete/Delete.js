import ButtonDC from "../ButtonDC/ButtonDC";
import Close from "../../assets/Icons/close-24px.svg";
import "./Delete.scss";

const Delete = (prop) => {
  return (
    <>
      <div className="delete__overlay"></div>
      <div className="delete">
        <div className="delete__container">
          <button className="delete__closeButton">
            <img className="delete__img" src={Close} alt="close"></img>
          </button>
          <p className="delete__title">
            Delete {prop.name} Washington warehouse?
          </p>
          <p className="delete__content">
            Please confirm that you'd like to delete the {prop.name}Washington
            from the list of warehouses. You won't be able to undo this action.
          </p>
        </div>
        <div className="delete__buttonDC">
          <ButtonDC />
        </div>
      </div>
    </>
  );
};
export default Delete;
