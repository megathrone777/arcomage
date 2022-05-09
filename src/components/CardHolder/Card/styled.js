import styled, { keyframes, css } from "styled-components"
import { flexCenter, boxShadowGlow } from "../../styled"
import { animated } from "react-spring"
import { import2Array } from "../../../helpers/helpers"

const svgImport = import2Array(
  require.context("../../../images/cards", false, /\.(svg)$/)
)

const bgImport = import2Array(
  require.context("../../../images/cards", false, /\.(jpg)$/)
)

const cardDisappear = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

const cardWidth = `calc(90vw / 6)`
const cardTitleFontSize = `18px`

export const Wrapper = styled(animated.div)`
  ${props =>
    props.carddisappear &&
    css`
      animation: ${cardDisappear} 0.8s;
      opacity: 0;
    `}
`

export const Layout = styled(animated.div)`
  position: relative;
  width: ${cardWidth};
  max-height: calc(35vh + 20px); //20px to compensate or the -20px of the cardholder
  min-height: calc(35vh + 20px);
  cursor: pointer;
  flex: 1 0 auto;
  max-width: calc(35vh * 0.8); // here you control the proportion
`

const disabledCardStyles = `
content: ' ';
display: block;
background-color: rgba(0, 0, 0, 0.4);
width: 100%;
height: 100%;
position: absolute;
top: 0;
transition: background-color 0.8s;
`

export const CardClip = styled.div`
  // clip-path: polygon(0 3%, 100% 0, 95% 100%, 9%  99%);
  clip-path: polygon(0 7%, 0 4%, 2% 2%, 96% 0, 98% 1%, 100% 3%, 100% 5%, 94% 95%, 93% 98%, 90% 100%, 13% 100%, 10% 99%, 7% 98%, 6% 95%, 1% 10%);
  color: ${props => props.theme.colors.colorCopperRed};
  width: ${cardWidth};
  max-height: calc(35vh + 20px); //20px to compensate or the -20px of the cardholder
  min-height: calc(35vh + 20px);
  flex: 1 0 auto;
  max-width: calc(35vh * 0.8); // here you control the proportion
  ${({ type, theme }) => `
  background: ${theme.cardTypes[type.toLowerCase()]}
  `}
  background-size: 180%; // is needed like this to work with the clip path 
  
  cursor: ${props => props.isaffordable ? `pointer` : `default`};;
  transition: filter 0.8s;

  &:after {
    ${props => props.isaffordable ? `` : disabledCardStyles}
  }
`
// ${props => props.isaffordable ? `` : disabledCardStyles}


export const Discard = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  border: none;
  background: url(${svgImport[0]}) no-repeat 50% 50% black;
  background-size: 60%;
  padding: 6%;
  z-index: 20;
`

export const Title = styled.div`
  font-size: ${cardTitleFontSize};
  font-family: "yataghan";
  padding: 15px 15px 5px;
  text-transform: capitalize;
  text-align: center;
  min-height: 60px;
  filter: drop-shadow(1px 1px 1px black);

  ${flexCenter};
`

export const ImageHolder = styled.div`
  clip-path: polygon(0 0, 100% 0, 90% 100%, 10% 100%);
  position: relative;
  min-height: 15vh;
  background: black;
  overflow: hidden;
  margin: 0 15px 0 20px;
`

export const DiscardTitle = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 990;
    color: red;
    color: #ff0000;
    font-size: 42px;
    background: black;
    width: 100%;
    padding: 20px 0 8px 0;
    text-align: center;
    opacity: 0.66;
`

export const Image = styled.img`
  max-width: 70%;
  position: absolute;
  top: -2vh;
  left: 15%;
`

export const Descr = styled.div`
  padding: 10px 20px 5px;
  ${flexCenter};
`

export const Text = styled.p`
  text-align: center;
  font-family: "BenchNine", sans-serif;
  font-size: 3vh;
  filter: drop-shadow(1px 1px 1px black);
  margin: 0;
`

export const Cost = styled.div`
  position: absolute;
  bottom: 0px;
  right: 3%;
  font-size: 24px;
  background: black;
  padding: 5px 8px;
`

export const Enemy = styled.div`
  clip-path: polygon(0 7%, 0 4%, 2% 2%, 96% 0, 98% 1%, 100% 3%, 100% 5%, 94% 95%, 93% 98%, 90% 100%, 13% 100%, 10% 99%, 7% 98%, 6% 95%, 1% 10%);
  background: url(${bgImport[0]}) no-repeat center center transparent;
  background-size: cover;
  width: 100%;
  min-height: calc(
    35vh + 20px
  ); /* 20px to compensate or the -20px of the cardholder */
  background-position: center;
`
export const HoverGlow = styled.div`
  position: absolute;
  top: 1vh;
  left: 1vh;
  height: calc(33vh + 20px);
  width: calc(31vh * 0.8);
  border-radius: 10px;
  background: transparent;
  transform: scale(0.7);
  transition: transform 0.4s, opacity 0.4s;
  filter: blur(4px);
  ${boxShadowGlow};
  opacity: 0;

  ${Layout}:hover & {
    transform: ${props => props.isaffordable ? `scale(0.95)` : `scale(0.7)`};
    opacity: ${props => props.isaffordable ? `0.9` : `0`};
  }
`