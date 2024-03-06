import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../App.jsx';

import styles from './MainPageStyles.module.scss';

import Card from '../../components/Card/index.jsx';
import Footer from '../../components/Footer/index.jsx';
import Slider from '../../components/Slider/index.jsx';
import Arrow from './Arrow/index.jsx';

function Home({ cards_list }) {
	const { isLoading, images } = React.useContext(AppContext);
	const [search_input, setSearch_input] = React.useState('');
	const [curIndex, setCurIndex] = React.useState(0);

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
						<Link to={'sneakers/' + item.id}>
							<Card
								key={item.id}
								id={item.id}
								name={item.name}
								price={item.price}
								imageUrl={item.imageUrl}
							/>
						</Link>
					));
	};

	React.useEffect(() => {
		const lastIndex = images.length - 1;
		if (curIndex < 0) {
			setCurIndex(lastIndex);
		}
		if (curIndex > lastIndex) {
			setCurIndex(0);
		}
	}, [curIndex, images]);

	React.useEffect(() => {
		let slider = setInterval(
			() => setCurrentIndex(prevState => prevState + 1), //! Доделать и функции ниже тоже
			2000
		);
		return () => {
			clearInterval(slider);
		};
	}, [curIndex]);

	function Prev() {
		setCurIndex(prevState => prevState + 1);
	}
	function Next() {
		setCurIndex(prevState => prevState - 1);
	}

	return (
		<div className={styles.wrapper__content}>
			<div style={{ position: 'relative' }}>
				<Arrow fun={Prev} dir={'left'}></Arrow>
				<Slider></Slider>
				<Arrow fun={Next} dir={'right'}></Arrow>
			</div>
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
								src='/img/icons/clear.svg'
								className={styles.clear__btn}
								alt='clear'
							/>
						)}
					</div>
				</div>
				<ul className={styles.list__sneakers}>{renderCards()}</ul>
			</div>
			<Footer></Footer>
		</div>
	);
}

export default Home;
