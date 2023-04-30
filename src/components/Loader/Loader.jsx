import React from 'react'
import PropTypes from 'prop-types'
import { ThreeDots  } from 'react-loader-spinner'
import { LoaderWrapper } from './Loader.styled'

const Loader = () => (
    <LoaderWrapper>
        <ThreeDots 
height="80" 
width="80" 
radius="9"
color="#ffffff" 
ariaLabel="three-dots-loading"
wrapperStyle={{}}
wrapperClassName=""
visible={true}
 />
    </LoaderWrapper>
)

Loader.propTypes = {}

Loader.defaultProps = {}

export default Loader
