import {FC} from "react";

import './style.scss'

interface IHamburgerIcon {
  isActive: boolean;
  className?: string;
}

export const HamburgerIcon: FC<IHamburgerIcon> = ({isActive, className}) => {
  return (
    <div className={`${isActive && 'active'} menu-button`}>
      <span className={className}></span>
      <span className={className}></span>
      <span className={className}></span>
    </div>
  );
};