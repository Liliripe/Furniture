import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

export const StyledBackground = styled(BackgroundImage)`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`
export const Text = styled.div`
    top: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Inner = styled.div`
    width: ${props => props.theme.sizes.maxWidthCentered};
    color: ${props => props.theme.colors.white};

    @media screen and (max-width: ${props => props.theme.responsive.medium}) {
        width: ${props => props.theme.sizes.maxWidth};
    }
`