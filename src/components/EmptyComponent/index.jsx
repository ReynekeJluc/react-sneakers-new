import { Link } from 'react-router-dom';
import styles from './EmptyComponent.module.scss';

function PlugRightBlock(props) {
	return (
		<div className={styles.drawer__items}>
			<div className={styles.drawer_empty}>
				<img src={props.imageUrl} width={100} height={100}></img>
				<h4>{props.title}</h4>
				<p>{props.text}</p>
				{props.isDrawer ? (
					<div onClick={props.DrawerOpen} className={styles.button__back}>
						<img src='/img/icons/arrow_left.png' alt='arrow_left' />
						Вернуться назад
					</div>
				) : (
					<Link to='/'>
						<div className={styles.button__back}>
							<img src='/img/icons/arrow_left.png' alt='arrow_left' />
							Вернуться назад
						</div>
					</Link>
				)}
			</div>
		</div>
	);
}

export default PlugRightBlock;
