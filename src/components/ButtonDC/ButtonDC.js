import "./ButtonDC.scss";

const ButtonDC = ({ onClick, onCancel }) => {
  return (
    <section className="buttonDC__container">
      <div className="buttonDC__container--cancel">
        <button className="buttonDC__cancel" onClick={onCancel}>
          Cancel
        </button>
      </div>
      <div className="buttonDC__container--delete">
        <button className="buttonDC__delete" onClick={onClick}>
          Delete
        </button>
      </div>
    </section>
  );
};
export default ButtonDC;
