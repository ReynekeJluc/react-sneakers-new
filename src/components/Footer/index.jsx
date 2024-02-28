import React from 'react';

import styles from './Footer.module.scss';

function Footer() {
	var curYear = new Date().getFullYear();
	return (
		<footer className={styles.copyright}>
			&#169; React Sneakers, магазин кроссовок, 2023-{curYear}
		</footer>
	);
}

export default Footer;
