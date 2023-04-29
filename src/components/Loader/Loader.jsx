import React from 'react'
import PropTypes from 'prop-types'
import { LineWave } from 'react-loader-spinner'
import { LoaderWrapper } from './Loader.styled'

const Loader = () => (
    <LoaderWrapper>
        <LineWave
					height="100"
					width="100"
					color="#ffffff"
					ariaLabel="line-wave"
					wrapperStyle={{}}
					wrapperClass=""
					visible={true}
					firstLineColor=""
					middleLineColor=""
					lastLineColor=""
				/>
    </LoaderWrapper>
)

Loader.propTypes = {}

Loader.defaultProps = {}

export default Loader
