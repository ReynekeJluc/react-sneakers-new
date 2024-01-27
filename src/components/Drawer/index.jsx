import axios from 'axios';
import React from 'react';
import { AppContext } from '../../App.jsx';
import Convert from '../../utils/converter.jsx';

import { source_drawer, source_orders } from '../../source/index.jsx';
import styles from './Drawer.module.scss';

import PlugRightBlock from './PlugRightBlock.jsx';

function Drawer({ DrawerOpen, OnRemove, items = [] }) {
	const { cards_drawer, setCards_drawer } = React.useContext(AppContext);
	const [isOrdered, setIsOrdered] = React.useState(false);

	const OrderComplete = async () => {
		try {
			await axios.post(source_orders, {
				items: cards_drawer,
			});

			for (let i = 0; i < cards_drawer.length; i++) {
				const item = cards_drawer[i];
				await axios.delete(source_drawer + '/' + item.id);
			}

			setCards_drawer([]);
			setIsOrdered(true);
		} catch (error) {
			alert('Не удалось составить заказ, попробуйте позже');
		}
	};

	return (
		<div className={styles.drawer_wrapper}>
			<div onClick={DrawerOpen} className={styles.drawer_bg}></div>
			<div className={styles.drawer__block}>
				<h4>Корзина</h4>
				{items.length !== 0 ? (
					<div className={styles.drawer__items}>
						{items.map(obj => (
							<div className={styles.drawer__item}>
								<div className={styles.card__img}>
									<img
										width={120}
										height={120}
										src={obj.imageUrl}
										alt='sneakers'
									/>
								</div>
								<div className={styles.card__info}>
									<p>{obj.name}</p>
									<b>{Convert('RUB', 0, obj.price)}</b>
								</div>
								<img
									onClick={() => OnRemove(obj.id)}
									style={{ cursor: 'pointer' }}
									src='/img/icons/cancel.png'
									alt='delete'
								/>
							</div>
						))}
					</div>
				) : (
					<PlugRightBlock
						title={isOrdered ? 'Заказ оформлен!' : 'Корзина пуста'}
						text={
							isOrdered
								? 'Ваш заказ скоро будет передан курьерской доставке'
								: 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
						}
						imageUrl={isOrdered ? '/img/order.png' : '/img/empty_drawer.png'}
						DrawerOpen={DrawerOpen}
					/>
				)}
				<div className={styles.drawer__info}>
					{isOrdered ? null : (
						<div className={styles.drawer__prices}>
							<ul className={styles.total}>
								<li>
									<span>Итого:</span>
									<div></div>
									<b>{Convert('RUB', 0, 3000)}</b>
								</li>
								<li>
									<span>Налог 5%:</span>
									<div></div>
									<b>{Convert('RUB', 0, 3000)}</b>
								</li>
							</ul>
						</div>
					)}
					<div className={styles.order__block}>
						<button
							disabled={isOrdered}
							onClick={OrderComplete}
							className={styles.button__order}
						>
							Оформление заказа
						</button>
						<svg
							width='16'
							height='14'
							viewBox='0 0 16 14'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M1 7H14.7143'
								stroke='white'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M8.71436 1L14.7144 7L8.71436 13'
								stroke='white'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Drawer;
