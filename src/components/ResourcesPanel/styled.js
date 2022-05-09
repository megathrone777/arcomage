import styled from "styled-components"

export const Layout = styled.div`
  position: absolute;
  top: 0;
  left: -10px;
  top: 5vh;
  perspective: 550;
  perspective-origin: 50% 50%;

  ${props =>
    props.playerId === 'player2' &&
    `
	  right: -10px;
  	left: auto;
  `}
`
