import sortIcon from '../../assets/Icons/sort-24px.svg';
const HeaderItem = ({ className, children, onSort }) => {
  return (
    <div
      className={`header-row__header-item header-row-${className}`}
      onClick={onSort}
    >
      {children}{' '}
      <img className="header-row__icon" src={sortIcon} alt="Sort Icon" />
    </div>
  );
};

export default HeaderItem;
