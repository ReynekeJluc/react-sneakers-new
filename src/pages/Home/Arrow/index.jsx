import React from 'react';

import styles from './Arrow.module.scss';

function Arrow({ fun, dir }) {
	return (
		<button
			onClick={fun}
			className={dir === 'left' ? styles.left : styles.right}
		>
			<img
				width={75}
				height={75}
				src={
					dir === 'left'
						? '../../../public/img/icons/slider/arrow_left.svg'
						: '../../../public/img/icons/slider/arrow_right.svg'
				}
				alt={dir === 'left' ? 'prev' : 'next'}
			/>
		</button>
	);
}

export default Arrow;
