import sortIcon from '../../assets/Icons/sort-24px.svg'
const HeaderItem = ({className , children}) => {
  return (
    <div className={`header-item ${className}`}>
      {children} <img className="header-icon" src={sortIcon} alt="sort" />
    </div>
  )
}

export default HeaderItem