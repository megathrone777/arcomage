import styled from "styled-components"

export const Holder = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0;
  margin-top: -20px;

  ${props => !props.canPlay && `display: none;`}
`

export const Layout = styled.div``
