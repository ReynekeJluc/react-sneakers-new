import styles from './Drawer.module.scss';

function PlugRightBlock(props) {
	return (
		<div className={styles.drawer__items}>
			<div className={styles.drawer_empty}>
				<img src={props.imageUrl}></img>
				<h4>{props.title}</h4>
				<p>{props.text}</p>
				<div onClick={props.DrawerOpen} className={styles.button__back}>
					<img src='/img/icons/arrow_left.png' alt='arrow_left' />
					Вернуться назад
				</div>
			</div>
		</div>
	);
}

export default PlugRightBlock;
