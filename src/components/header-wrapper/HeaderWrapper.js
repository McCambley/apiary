import React from 'react';

function HeaderWrapper(props) {
    if (props.wrapMobileMenu) {
        return <div className={`header__menu ${props.isMenuOpen ? 'header__menu_type_active' : 'header__menu_type_inactive'}`}>{props.children}</div>
    }
    return props.children;
}

export default HeaderWrapper;