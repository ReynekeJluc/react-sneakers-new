import React from 'react';
import Card from '../../components/Card/index.jsx';
import styles from './Home_and_favor.module.scss';

import { AppContext } from '../../App';

function Favor() {
	const { cards_favor } = React.useContext(AppContext);

	return (
		<div className={styles.wrapper__content}>
			<div className={styles.content}>
				<div className={styles.content__title}>
					<h2>То что вам понравилось</h2>
				</div>
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
			</div>
		</div>
	);
}

export default Favor;
