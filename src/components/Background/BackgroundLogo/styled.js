import styled, { keyframes } from "styled-components"

const animate = keyframes`
  to {
    stroke-dashoffset: 0;
    fill: black;
  }
`

export const Wrapper = styled.div`
  width: 400px;
  position: absolute;
  left: 40px;
  top: 100px;
  opacity: 0;
  visibility: hidden;
`

export const SVGSymbol = styled.svg``

export const PathSymbol = styled.path`
  stroke: ${props => props.theme.colors.colorRust};
  stroke-width: 1px;
  fill: transparent;
  stroke-dasharray: 1500;
  stroke-dashoffset: 1500;
  animation: ${animate} 5s ease-out forwards;
`
