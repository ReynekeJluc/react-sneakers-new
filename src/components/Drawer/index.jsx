import styles from './Drawer.module.scss';

function Drawer({ DrawerOpen, OnRemove, items = [] }) {
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
									<b>
										{new Intl.NumberFormat('ru-RU', {
											style: 'currency',
											currency: 'RUB',
											minimumFractionDigits: 0,
										}).format(obj.price)}
									</b>
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
					<div className={styles.drawer__items}>
						<div className={styles.drawer_empty}>
							<img src='/img/empty_drawer.png' alt='empty'></img>
							<h4>Корзина пуста</h4>
							<p>
								Корзина пуста, добавьте хотя бы одну пару кроссовок, чтобы
								сделать заказ
							</p>
							<div onClick={DrawerOpen} className={styles.button__back}>
								<img src='/img/icons/arrow_left.png' alt='arrow_left' />
								Вернуться назад
							</div>
						</div>
					</div>
				)}
				<div className={styles.drawer__info}>
					<div className={styles.drawer__prices}>
						<ul className={styles.total}>
							<li>
								<span>Итого:</span>
								<div></div>
								<b>
									{new Intl.NumberFormat('ru-RU', {
										style: 'currency',
										currency: 'RUB',
									}).format(12000)}
								</b>
							</li>
							<li>
								<span>Налог 5%:</span>
								<div></div>
								<b>
									{new Intl.NumberFormat('ru-RU', {
										style: 'currency',
										currency: 'RUB',
									}).format(12000)}
								</b>
							</li>
						</ul>
					</div>
					<div style={{ cursor: 'pointer' }}>
						<div className={styles.order__block}>
							<div className={styles.button__order}>
								<p>Оформление заказа</p>
							</div>
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
		</div>
	);
}

export default Drawer;
