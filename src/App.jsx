import axios from 'axios';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './assets/index.scss';
import { source_drawer, source_favor, source_main } from './source';

import Drawer from './components/Drawer/index.jsx';
import Header from './components/Header/index.jsx';
import Favor from './pages/Home/favor.jsx';
import Home from './pages/Home/home.jsx';
import Order from './pages/Home/order.jsx';

export const AppContext = React.createContext({});

function App() {
	const [cards_list, setCards_list] = React.useState([]);
	const [cards_drawer, setCards_drawer] = React.useState([]);
	const [cards_favor, setCards_favor] = React.useState([]);
	const [isDrawer, setIsDrawer] = React.useState(false);
	const [isLoading, setIsLoading] = React.useState(true);

	React.useEffect(() => {
		async function fetchData() {
			const cardItems = await axios.get(source_main);
			const cardDrawer = await axios.get(source_drawer);
			const cardFavor = await axios.get(source_favor);

			setCards_list(cardItems.data);
			setCards_drawer(cardDrawer.data);
			setCards_favor(cardFavor.data);
			setIsLoading(false);
		}

		fetchData();
	}, []);

	const OnAddDrawer = obj => {
		try {
			if (cards_drawer.find(item => item.id === obj.id)) {
				OnRemoveDrawer(obj.id);
			} else {
				axios.post(source_drawer, obj);
				setCards_drawer(prev => [...prev, obj]);
			}
		} catch (error) {
			console.log(error.message);
		}
	};
	const OnAddFavor = obj => {
		try {
			if (cards_favor.find(item => item.id === obj.id)) {
				OnRemoveFavor(obj.id);
			} else {
				axios.post(source_favor, obj);
				setCards_favor(prev => [...prev, obj]);
			}
		} catch (error) {
			console.log(error.message);
		}
	};
	const OnRemoveDrawer = id => {
		axios.delete(source_drawer + `/${id}`);
		setCards_drawer(prev => prev.filter(item => item.id !== id));
	};
	const OnRemoveFavor = id => {
		axios.delete(source_favor + `/${id}`);
		setCards_favor(prev => prev.filter(item => item.id !== id));
	};

	const isItemAddedFavor = id => {
		return cards_favor.some(obj => Number(obj.id) === Number(id));
	};
	const isItemAddedDrawer = id => {
		return cards_drawer.some(obj => Number(obj.id) === Number(id));
	};

	return (
		<AppContext.Provider
			value={{
				cards_drawer,
				setCards_drawer,
				cards_favor,
				OnAddFavor,
				OnRemoveFavor,
				OnAddDrawer,
				OnRemoveDrawer,
				isItemAddedFavor,
				isItemAddedDrawer,
				isLoading,
			}}
		>
			<>
				{isDrawer ? (
					<Drawer
						DrawerOpen={() => {
							setIsDrawer(false);
							document.body.style.overflow = 'visible';
						}}
						OnRemove={OnRemoveDrawer}
					/>
				) : undefined}
				<div className='wrapper'>
					<Header
						DrawerOpen={() => {
							setIsDrawer(true);
							document.body.style.overflow = 'hidden';
						}}
					/>
					<hr />
					<Routes>
						<Route
							path='/'
							element={<Home cards_list={cards_list}></Home>}
						></Route>
						<Route path='/favorites' element={<Favor></Favor>}></Route>
						<Route path='/orders' element={<Order></Order>}></Route>
					</Routes>
				</div>
			</>
		</AppContext.Provider>
	);
}

export default App;
