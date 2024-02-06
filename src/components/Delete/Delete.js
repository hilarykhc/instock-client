import ButtonDC from "../ButtonDC/ButtonDC";
import "./Delete.scss";

const Delete = (prop) => {
  return (
    <div className="delete">
      {/* maybe need change the prop name */}
      <p className="delete__title">Delete {prop.name} ?</p>
      <p className="delete__content">
        Please confirm that you'd like to delete the Washington from the list of
        warehouses. You won't be able to undo this action.
      </p>
      <ButtonDC />
    </div>
  );
};
export default Delete;
