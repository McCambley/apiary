import React from 'react';

function HeaderWrapper(props) {
  function setPageMenuActiveClass() {
    if (props.isMenuOpen && props.isProfessionPageFocused) {
      return 'header__profession-menu_type_active';
    }
    if (props.isMenuOpen) {
      return 'header__homepage-menu_type_active';
    }
    return 'header__menu_type_inactive';
  }

  if (props.wrapMobileMenu) {
    return <div className={`header__menu ${setPageMenuActiveClass()}`}>{props.children}</div>;
  }
  return props.children;
}

export default HeaderWrapper;
