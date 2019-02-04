import React from 'react';


import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css'

const App = () => {

	const todoData = [
		{ label: 'Drink Coffee', important: false, id: 1, type: 's'},
		{ label: 'Make Awesome App', important: true, id: 2, type: 's'},
		{ label: 'Have a Lunch', important: false, id: 3, type: 's'}
	];

	return (
		<div className='todo-app'>
			<AppHeader toDo={1} done={3}/>
			<div className='top-panel d-flex'>
				<SearchPanel />
				<ItemStatusFilter />
			</div>
			<TodoList todos={todoData} />
		</div>
	);
};

export default App;