import axios from 'axios';
import React from 'react';

import { source_slides } from '../../source';
import styles from './Slider.module.scss';

import Arrow from './Arrow';
import Slide from './Slide';

function Slider(props) {
	const [images, setImages] = React.useState([]);
	const [slideId, setSlideId] = React.useState(1);

	React.useEffect(() => {
		async function GetImage() {
			const data = await axios.get(source_slides);
			setImages(data.data);
		}
		GetImage();
	}, []);

	const Prev = () => {
		setSlideId(slideId - 1);
	};
	const Next = () => {
		setSlideId(slideId + 1);
	};

	return (
		<div
			className={styles.slider}
			style={!images.length ? { display: 'none' } : null}
		>
			<Arrow
				fun={Prev}
				dir={'left'}
				style={slideId < 2 ? { display: 'none' } : null}
			></Arrow>
			<Arrow
				fun={Next}
				dir={'right'}
				style={slideId > images.length - 1 ? { display: 'none' } : null}
			></Arrow>
			<ul className={styles.list_slide}>
				{images.map((img, index) => (
					<Slide key={index} img={img.imageUrl} />
				))}
			</ul>
			<div className={styles.dots}></div>
		</div>
	);
}

export default Slider;
