import React, { Component } from 'react'
import { FaSearch } from 'react-icons/fa'
import PropTypes from 'prop-types'
import { Header, Form, Input, SearchBtn } from './SearchBar.styled'

const API_KEY = '34735495-c5ef181074f4f4736bdb9177b'

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
		this.props.onSubmit(this.state.query)
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

SearchBar.propTypes = {}

SearchBar.defaultProps = {}

export default SearchBar
