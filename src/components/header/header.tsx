import React, { useState } from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import { HeaderModalImportProject } from './__header-modal-import-project';

interface HeaderProps {
    className?: string;
}

export const Header = ({ className }: HeaderProps) => {
    const [modalOpened, setModalOpened] = useState(false);
    const openModalImportProject = () => setModalOpened(true);
    const closeModalImportProject = () => setModalOpened(false);
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
            <div>userName</div>
        </header>
    );
};
