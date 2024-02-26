import styles from './Slider.module.scss';

function Slider(props) {
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
