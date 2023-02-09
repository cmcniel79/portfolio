import classNames from 'classnames';
import s from './Navbar.module.css';


const MenuIcon = ({ className = '' }) => {
  const classes = classNames(s.rootMenuIcon, className);

  return (
    <svg
      className={classes}
      width="35"
      height="35"
      viewBox="0 0 18 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fillRule="evenodd">
        <rect width="18" height="2" rx="1" />
        <rect y="5" width="18" height="2" rx="1" />
        <rect y="10" width="18" height="2" rx="1" />
      </g>
    </svg>
  );
};

export default MenuIcon;
