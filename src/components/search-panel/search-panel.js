import React, {Component} from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {

	state = {
		term: ''
	};

	onSearchChange = (e) => {
		const term = e.target.value;
		this.setState({ term });
		this.props.onSearchChange(term);
	};


	render() {
		const searchText = 'Type here to search';

		return(
			<input
				type="text"
				className='form-control search-input'
				placeholder={searchText}
				value={this.state.term}
				onChange={this.onSearchChange}
			/>
		);
	}
}
//
// const SearchPanel = () => {
// 	const searchText = 'Type here to search';
// 	const searchStyle = {
// 		fontSize: '16px',
// 		fontWeight: 'normal'
// 	};
//
// 	return <input
// 		type="text"
// 		className='form-control search-input'
// 		style={searchStyle}
// 		placeholder={searchText}/>;
// };

//export default SearchPanel;