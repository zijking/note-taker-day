import React from 'react';
import style from './HeaderMenu.module.css';

const HeaderMenu = () => {
  return (
    <ul className={style.menuMain}>
      <li>
        <a href="" className={style.current}>
          Work space
        </a>
      </li>
      <li>
        <a href="">Order</a>
      </li>
      <li>
        <a href="">Information</a>
      </li>
      <li>
        <a href="">Shop</a>
      </li>
    </ul>
  );
};

export default HeaderMenu;
