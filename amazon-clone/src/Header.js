import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from './firebase';

function Header() {
    const [{ cart, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div class='header'>

            <Link to="/">
                <img className="header__logo"
                    src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"></img>
            </Link>
            <div class="header__search">
                <input className="Search" type="text" />
                <button class="btn btn-sm">Search</button>

            </div>

            <div className="header__nav">
                <Link to={!user && "/login"}>
                    <div onClick={handleAuthentication} className="header__option">
                        <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
                        <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>

                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">Orders</span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>

                <Link to="/checkout">
                    <div className="header__option">
                        <span className="header__optionLineOne">Add to Cart</span>
                        <span className="header__optionLineTwo">{cart?.length}</span>
                    </div>
                </Link>
            </div>

        </div>



    )
}

export default Header