import React from 'react'
import PropTypes from 'prop-types'
import { LoadMore } from './Button.styled'

const Button = ({ onLoadMore }) => (
	<LoadMore>
		<button type="button" onClick={onLoadMore}>
			Load more
		</button>
	</LoadMore>
)

Button.propTypes = {
	onLoadMore: PropTypes.func.isRequired,
}

Button.defaultProps = {}

export default Button
