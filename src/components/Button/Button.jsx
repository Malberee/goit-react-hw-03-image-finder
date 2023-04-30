import React from 'react'
import PropTypes from 'prop-types'
import { LoadMore } from './Button.styled'

const Button = ({ onLoadMore }) => (
	<LoadMore><button onClick={() => onLoadMore()}>Load more</button></LoadMore>
)

Button.propTypes = {}

Button.defaultProps = {}

export default Button
