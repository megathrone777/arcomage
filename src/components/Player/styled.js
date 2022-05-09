import styled from "styled-components"

export const Board = styled.div`
  position: absolute;
  top: 0;
  height: ${props => props.theme.heights.scenarioHeight};
  width: 50vw;

  ${props =>
    props.playerId === "player1" &&
    `
	left: -100%;
  `}

  ${props =>
    props.playerId === "player2" &&
    `
	right: -100%;

	& > div {
		right: 0;
	}
  `}
`
