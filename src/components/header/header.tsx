import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

interface HeaderProps {
    className?: string;
}

export const Header = ({ className }: HeaderProps) => {
    return (
        <header className={className}>
            <h1 className="header__logo">logo</h1>
            <nav>
                <Link className="nav__item" to="/">
                    Projects
                </Link>
                <Link className="nav__item" to="/issues">
                    Issues
                </Link>
            </nav>
            <div className="header-controls">
                <div className="search header-controls__search">
                    <label htmlFor="search-input" className="search__title">
                        Search
                    </label>
                    <input
                        type="text"
                        id="search-input"
                        className="search__input"
                    />
                </div>
                <button className="add-project">+</button>
            </div>
            <div>userName</div>
        </header>
    );
};
