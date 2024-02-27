import React from 'react';

import styles from './Slide.module.scss';

function Slide({ id }) {
	const src = `../../../public/img/slider/${id}.png`;

	return (
		<li
			className={styles.slide}
			style={{
				background: `no-repeat 100% / 100% url(${src})`,
			}}
		>
			<div className={styles.text}>
				<span>Stan Smith</span>
				<span>,</span>
				<div>Forever</div>
			</div>
			<button className={styles.btn}>Купить</button>
		</li>
	);
}

export default Slide;
