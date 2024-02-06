import "./ButtonDC.scss";

const ButtonDC = () => {
  return (
    <section className="buttonDC__container">
      <div>
        <button className="buttonDC__cancel">Cancel</button>
      </div>
      <div>
        <button className="buttonDC__delete">Delete</button>
      </div>
    </section>
  );
};
export default ButtonDC;
