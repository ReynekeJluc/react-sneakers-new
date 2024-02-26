import axios from 'axios';
import React from 'react';

import { source_slides } from '../../source';
import styles from './Slider.module.scss';

function Slider(props) {
	const [images, setImages] = React.useState([]);
	const [slide, setSlide] = React.useState(0);

	React.useEffect(() => {
		async function GetImage() {
			const data = await axios.get(source_slides);
			setImages(data.data);
		}

		setSlide(images.length);

		GetImage();
	}, []);

	return (
		<div className={styles.slider}>
			<div className={styles.arrows}>
				<button className={styles.left}>
					<img
						width={75}
						height={75}
						src='../../../public/img/icons/slider/arrow_left.svg'
						alt='prev'
					/>
				</button>
				<button className={styles.right}>
					<img
						width={75}
						height={75}
						src='../../../public/img/icons/slider/arrow_right.svg'
						alt='next'
					/>
				</button>
			</div>
			<ul className={styles.list_slide}>
				<li className={styles.slide}>
					<div className={styles.text}>
						<span>Stan Smith</span>
						<span>,</span>
						<div>Forever</div>
					</div>
					<button className={styles.btn}>Купить</button>
				</li>
			</ul>

			<div className={styles.dots}></div>
		</div>
	);
}

export default Slider;
