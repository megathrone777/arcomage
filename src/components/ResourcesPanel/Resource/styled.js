import styled from "styled-components"
import { windMove } from "../../styled"

export const Item = styled.div`
  position: relative;
  width: calc(18vh * 1.3); /* this is to keep the proportion */
  height: 18vh;
  transform-origin: 50% 0%;
  transform: rotateX(-10deg);
  animation: ${windMove} infinite ease-in-out;
  color: ${props => props.theme.colors.colorCopperRed};

  &:nth-child(1) {
    animation-duration: 4s;
  }

  &:nth-child(2) {
    animation-delay: 0.5s;
    animation-duration: 4.5s;
  }

  &:nth-child(3) {
    animation-delay: 1s;
    animation-duration: 5s;
  }
`

export const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
`

export const Points = styled.div`
  position: absolute;
  filter: drop-shadow(-1px -1px 2px black);
  ${props =>
    props.isGenerator
      ? `
    width: 75%;
    text-align: right;
    font-size: 2.6vh;
    top: 52%;
  `
      : `
    width: 92%;
    font-size: 5vh; /* 11vh; */
    text-align: center;
    top: 41%;
  `}
  ${props => props.playerId === 'player2' && `
    width: 100%;
  `}
  ${props => props.playerId === 'player2' && props.isGenerator &&`
    width: 31%;
  `}
`

export const Name = styled.div`
  position: absolute;
  text-align: center;
  width: 95%;
  bottom: 14%;
  margin-left: 5%;
  font-size: 2vh;
  filter: drop-shadow(-1px -1px 1px black);

  ${props => props.playerId === "player2" && `
    margin-left: 0;
  `}
`
