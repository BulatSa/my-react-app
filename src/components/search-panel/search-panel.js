import React from 'react';

import './search-panel.css'

const SearchPanel = () => {
	const searchText = 'Type here to search';
	const searchStyle = {
		fontSize: '16px',
		fontWeight: 'normal'
	};

	return <input
		type="text"
		className='form-control search-input'
		style={searchStyle}
		placeholder={searchText}/>;
};

export default SearchPanel;