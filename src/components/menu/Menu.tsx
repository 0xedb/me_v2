import {} from './menu.scss';
import CodeIcon from '@atlaskit/icon/glyph/code';
import { useState } from 'react';

function Menu({ show }: MenuProps) {
	const [ showMenu, setShowMenu ] = useState(false);

	const handleMenuClick = () => {
		setShowMenu((prev) => !prev);
		console.log(showMenu);
	};

	return (
		<div onClick={handleMenuClick}>
			<CodeIcon label="menu" size="xlarge" />
		</div>
	);
}

export default Menu;
