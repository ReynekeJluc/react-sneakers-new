import axios from 'axios';
import React from 'react';

import { source_slides } from '../../source';
import styles from './Slider.module.scss';

import Slide from './Slide';

function Slider(props) {
	const [images, setImages] = React.useState([]);

	React.useEffect(() => {
		async function GetImage() {
			const data = await axios.get(source_slides);
			setImages(data.data);
		}
		GetImage();
	}, []);

	return (
		<div
			className={styles.slider}
			style={!images.length ? { display: 'none' } : null}
		>
			<ul className={styles.list_slide}>
				{images.map((img, slideIndex) => (
					<Slide key={slideIndex} img={img.imageUrl} />
				))}
			</ul>
			<div className={styles.dots}></div>
		</div>
	);
}

export default Slider;
