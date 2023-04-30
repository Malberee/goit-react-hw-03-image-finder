import React, { Component } from 'react'
import { FaSearch } from 'react-icons/fa'
import PropTypes from 'prop-types'
import { Header, Form, Input, SearchBtn } from './SearchBar.styled'

class SearchBar extends Component {
	state = {
		query: '',
	}

	onInputChange = (e) => {
		this.setState({
			query: e.target.value,
		})
	}

	onSubmit = (e) => {
		e.preventDefault()
		if(this.state.query.trim() !== '') this.props.onSubmit(this.state.query)
	}

	render() {
		return (
			<Header>
				<Form onSubmit={this.onSubmit}>
					<SearchBtn type="submit">
						<FaSearch></FaSearch>
					</SearchBtn>

					<Input
						type="text"
						autocomplete="off"
						autoFocus
						placeholder="Search images and photos"
						value={this.state.query}
						onChange={this.onInputChange}
					/>
				</Form>
			</Header>
		)
	}
}

SearchBar.propTypes = {
	onSubmit: PropTypes.func.isRequired
}

SearchBar.defaultProps = {}

export default SearchBar
