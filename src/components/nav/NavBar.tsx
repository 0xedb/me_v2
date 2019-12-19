import { nav, content, left, right, a } from './navbar.scss';
import Link from 'next/link';
import Menu from '../menu/Menu';
 
function NavBar() {
	
	return (
		<nav className={nav}>
			<div className={content}>
				<div className={left}>
					<Link href="/">
						<a className={a}>{`<bruno />`}</a>
					</Link>
				</div>
				<div className={right}> 
					<Menu />
				</div>
			</div>
		</nav>
	);
}

export default NavBar;
