import styled from "styled-components"

export const Wrapper = styled.div`
  position: relative;
  height: ${props => props.theme.heights.scenarioHeight};
`

export const Item = styled.div`
  position: absolute;
  bottom: -1vh;
`

export const Stats = styled.div`
  font-size: 1.5rem;
  padding: 45px 0 0;
  position: relative;
  z-index: 20;

  ${props =>
    props.playerId === "player1" &&
    `
	  text-align: right;
  `}
`
