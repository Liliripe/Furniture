import styled from 'styled-components'
import Modal from 'react-bootstrap/Modal'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import BackgroundImage from 'gatsby-background-image'

export const StyledHeader = styled(Modal.Header)`
    border: 0;
    padding: 0;
    position: absolute;
    z-index: 99999;
    right: 10px;
    top: 10px;
`
export const StyledContainer = styled(Container)`
    padding-left: 0;

    @media screen and (max-width: ${props => props.theme.responsive.medium}) {
        padding-right: 0;
    }
`
export const StyledCol = styled(Col)`
    padding: 0;
`
export const StyledText = styled(Col)`
  padding: 0;
  display: flex;
  align-items: center;
`
export const StyledImage = styled(BackgroundImage)`
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: ${props => props.theme.colors.pink};
    height: 60vh;
`
export const Body = styled.div`
    padding: 20px;

`