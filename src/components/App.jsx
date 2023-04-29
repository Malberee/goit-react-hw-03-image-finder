import { Component, useState } from 'react'
// import getImages from '../scripts/getImages'
import SearchBar from './SearchBar'
import ModalWindow from './Modal'

class App extends Component {
	state = {
		query: ''
	}

	onSearchSubmit = (query) => {
		console.log(query)
		this.setState({
			query: query
		})
	}

	render() {
		return (
			<>
				<SearchBar onSubmit={this.onSearchSubmit} />
				{/* <ModalWindow /> */}
			</>
		)
	}
}

export default App
