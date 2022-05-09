import styled from "styled-components"

export const Wrapper = styled.div`
  position: absolute;
  height: ${props => props.theme.heights.scenarioHeight};
  width: 100%;
`

export const Image = styled.img`
  max-height: 110%;
  position: absolute;
  left: 50%;
  bottom: -9vh;

  ${props =>
    props.playerId === "player2" &&
    `right: 50%;
  	  left: auto;
  `}
`

export const Stats = styled.div`
  padding: 80px 0;
  font-size: 1.3rem;
  position: relative;
  z-index: 20;

  ${props =>
    props.playerId === "player1" &&
    `
	  text-align: right;
  `}
`
