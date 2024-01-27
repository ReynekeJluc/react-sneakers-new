import React from 'react';
import { Link } from 'react-router-dom';

import Card from '../../components/Card/index.jsx';
import styles from './Home_and_favor.module.scss';

import { AppContext } from '../../App';
import EmptyComponent from '../../components/EmptyComponent';

function Favor() {
	const { cards_favor } = React.useContext(AppContext);

	return (
		<div className={styles.wrapper__content}>
			<div className={styles.content}>
				<div className={styles.content__title}>
					<Link to='/'>
						<svg
							width='35'
							height='35'
							viewBox='0 0 35 35'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<rect
								x='0.5'
								y='0.5'
								width='34'
								height='34'
								rx='7.5'
								fill='white'
								stroke='#F2F2F2'
							/>
							<path
								d='M19 22L14 17L19 12'
								stroke='#C8C8C8'
								strokeWidth='1.5'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</Link>
					<h2>Мои закладки</h2>
				</div>
				{cards_favor.length ? (
					<ul className={styles.list__sneakers}>
						{cards_favor.map(item => (
							<Card
								key={item.id}
								id={item.id}
								name={item.name}
								price={item.price}
								imageUrl={item.imageUrl}
							/>
						))}
					</ul>
				) : (
					<EmptyComponent
						title='У вас нет закладок :('
						text='Вы ничего не добавляли в закладки'
						imageUrl='../../../public/img/empty_favor.png'
						isDrawer={false}
					/>
				)}
			</div>
		</div>
	);
}

export default Favor;
