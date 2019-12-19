import { nav, nav_content, left, right } from './navbar.scss';

function NavBar() {
    return (
        <nav className={nav}>
            <div className={nav_content}>
                <div className={left}>one</div>
                <div className={right}>
                    hey
				</div>
            </div>
        </nav>
    );
}

export default NavBar;
