import React, { useRef } from 'react';
import styles from './navBar.module.css';
const NavBar = props => {
	const inputRef = useRef();
	const search = () => {
		const value = inputRef.current.value;
		props.handleSearch(value);
	};
	const onClick = () => {
		search();
	};

	const onKeyPress = event => {
		if (event.key === 'Enter') {
			search();
		}
	};

	return (
		<>
			<header className={styles.header}>
				<div className={styles.logo}>
					<img className={styles.img} src='/images/logo.png' alt='logo' />
					<h1 className={styles.title}>YouTube</h1>
				</div>
				<input
					ref={inputRef}
					className={styles.input}
					type='search'
					onKeyPress={onKeyPress}
					placeholder='Search...'
				/>
				<button className={styles.button} type='submit' onClick={onClick}>
					<img
						className={styles.buttonImg}
						src='/images/search.png'
						alt='searchImg'
					/>
				</button>
			</header>
		</>
	);
};

export default NavBar;
