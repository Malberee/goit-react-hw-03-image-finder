import styled from 'styled-components'

export const GalleryItem = styled.li`
    width: 100%;
    flex-basis: calc(25% - 15px);
    cursor: pointer;

    transition: transform 100ms linear;

    &:hover,
    &:focus {
        transform: scale(1.01);
    }
`

export const Image = styled.img`
	width: 100%;
    height: 100%;
    object-fit: cover;
`
