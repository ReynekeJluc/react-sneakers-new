import classNames from 'classnames';
import React from 'react';
import { AppContext } from '../../App.jsx';

import Card from '../../components/Card/index.jsx';
import styles from './Home_and_favor.module.scss';

function Home({ cards_list }) {
	const { isLoading } = React.useContext(AppContext);
	const [search_input, setSearch_input] = React.useState('');

	const ChangeInput = e => {
		setSearch_input(e.target.value);
	};
	const renderCards = () => {
		return isLoading
			? [...Array(30)].map(index => <Card key={index} />)
			: cards_list
					.filter(item =>
						item.name.toLowerCase().includes(search_input.toLowerCase())
					)
					.map(item => (
						<Card
							key={item.id}
							id={item.id}
							name={item.name}
							price={item.price}
							imageUrl={item.imageUrl}
						/>
					));
	};

	return (
		<div className={styles.wrapper__content}>
			<div className={styles.content}>
				<div
					className={classNames(
						styles.content__title,
						styles.content__title_flex
					)}
				>
					<h2>
						{search_input
							? `Поиск по запросу "${search_input}"`
							: 'Все кроссовки'}
					</h2>
					<div className={styles.content__search}>
						<img
							src='/img/icons/search.svg'
							className={styles.search__btn}
							alt='search'
						/>
						<input
							onChange={ChangeInput}
							value={search_input}
							type='search'
							placeholder='Поиск...'
						/>
						{search_input && (
							<img
								onClick={() => setSearch_input('')}
								src='/img/icons/clear.png'
								className={styles.clear__btn}
								alt='clear'
							/>
						)}
					</div>
				</div>
				<ul className={styles.list__sneakers}>{renderCards()}</ul>
			</div>
		</div>
	);
}

export default Home;
