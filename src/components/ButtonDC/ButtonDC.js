import "./ButtonDC.scss";

const ButtonDC = () => {
  return (
    <section className="buttonDC__container">
      <div className="buttonDC__container--cancel">
        <button className="buttonDC__cancel">Cancel</button>
      </div>
      <div className="buttonDC__container--delete">
        <button className="buttonDC__delete">Delete</button>
      </div>
    </section>
  );
};
export default ButtonDC;
