import React from 'react';
import ContentLoader from 'react-content-loader';
import styles from './Card.module.scss';

import { AppContext } from '../../App';
import Convert from '../../utils/converter.jsx';

function Card({ id, name, imageUrl, price }) {
	const {
		OnAddDrawer,
		OnAddFavor,
		isLoading,
		isItemAddedDrawer = false,
		isItemAddedFavor = false,
	} = React.useContext(AppContext);

	const OnclickAdd = () => {
		OnAddDrawer({ id, name, price, imageUrl });
	};
	const OnclickFavor = () => {
		OnAddFavor({ id, name, price, imageUrl });
	};

	return (
		<li className={styles.sneakers}>
			{isLoading ? (
				<ContentLoader
					speed={2}
					width={170}
					height={210}
					viewBox='0 0 170 210'
					backgroundColor='#f3f3f3'
					foregroundColor='#ecebeb'
				>
					<rect x='10' y='10' rx='10' ry='10' width='150' height='100' />
					<rect x='10' y='125' rx='3' ry='3' width='150' height='15' />
					<rect x='10' y='145' rx='3' ry='3' width='100' height='15' />
					<rect x='10' y='180' rx='8' ry='8' width='80' height='24' />
					<rect x='130' y='175' rx='8' ry='8' width='32' height='32' />
				</ContentLoader>
			) : (
				<>
					<img
						onClick={OnclickFavor}
						src={
							isItemAddedFavor(id)
								? '/img/icons/favor_active.svg'
								: '/img/icons/favor_def.svg'
						}
						className={styles.sneakers__favor}
						alt='favor_icon'
					/>
					<div>
						<img
							src={imageUrl}
							className={styles.sneakers__image}
							alt='img sneakers'
						/>
					</div>
					<div style={{ cursor: 'pointer' }} className={styles.sneakers__title}>
						{name}
					</div>
					<div className={styles.block__info}>
						<div className={styles.block__prices}>
							<p>Цена:</p>
							<b>{Convert('RUB', 0, price)}</b>
						</div>
						<img
							onClick={OnclickAdd}
							src={
								isItemAddedDrawer(id)
									? '/img/icons/added_active.svg'
									: '/img/icons/added_def.svg'
							}
							className={styles.sneakers__added}
							alt='add_icon'
						/>
					</div>
				</>
			)}
		</li>
	);
}

export default Card;
