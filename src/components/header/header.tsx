import React, { useState } from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import { HeaderModalImportProject } from './__header-modal-import-project';
import { mixClasses } from '../panel/panel';

interface HeaderProps {
    className?: string;
}

export const Header = ({ className }: HeaderProps) => {
    const [modalOpened, setModalOpened] = useState(false);
    const openModalImportProject = () => setModalOpened(true);
    const closeModalImportProject = () => setModalOpened(false);
    const userName = localStorage.getItem('userName');
    const logout = () => {
        localStorage.removeItem('userName');
        localStorage.removeItem('authToken');
        window.location.reload();
    };

    return (
        <header className={mixClasses('header', className)}>
            <h1 className="header__logo">Drill's neighbour</h1>
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
                    <label
                        htmlFor="project-search-input"
                        className="search__title"
                    >
                        Search
                    </label>
                    <input
                        type="text"
                        id="project-search-input"
                        className="search__input"
                    />
                </div>
                <button
                    className="add-project"
                    onClick={openModalImportProject}
                >
                    +
                </button>
                {modalOpened && (
                    <HeaderModalImportProject
                        onCloseModal={closeModalImportProject}
                    />
                )}
            </div>
            <div>
                <div>{userName}</div>
                <button className="header__logout" onClick={logout}>
                    Logout
                </button>
            </div>
        </header>
    );
};
