import styled from "styled-components"
import { import2Array } from "../../helpers/helpers"

const bgImport = import2Array(
  require.context("../../images", false, /\.(png)$/)
)

export const Wrapper = styled.div`
  height: 452px;
  position: absolute;
  padding-bottom: 10px;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  z-index: 20;
  opacity: 0;
  visibility: hidden;
`

export const Content = styled.div`
  width: 0;
  height: 100%;
  overflow: hidden;
  background: url(${bgImport[5]}) left center no-repeat;
  background-size: 650px 100%;
  position: relative;
`

export const Helper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: url(${bgImport[6]}) left -1px bottom -2px no-repeat;
  background-size: auto 100%;
  width: 100%;
  height: 100%;
`

export const Roll = styled.div`
  width: 105px;
  height: 103%;
  position: absolute;
  top: 0;
  right: -20px;
  background: url(${bgImport[3]}) center center no-repeat;
  z-index: 20;
`

export const Layout = styled.div`
  height: 160px;
  position: absolute;
  left: 40px;
  bottom: 75px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Input = styled.input`
  visibility: hidden;
  opacity: 0;
  font-size: 1.5rem;
  background: url(${bgImport[2]}) -251px bottom no-repeat;
  width: 251px;
  height: 0;
  border: none;
  padding-left: 20px;
  color: ${props => props.theme.colors.colorCopperRed};
  text-shadow: 1px 1px 1px ${props => props.theme.colors.colorBlack};
  margin-bottom: 0;
  line-height: 20px;

  &::placeholder,
  &::-webkit-input-placeholder {
    color: ${props => props.theme.colors.colorCopperRed};
    text-shadow: 1px 1px 1px ${props => props.theme.colors.colorBlack};
  }

  &:-ms-input-placeholder {
    color: ${props => props.theme.colors.colorCopperRed};
    text-shadow: 1px 1px 1px ${props => props.theme.colors.colorBlack};
  }

  &:focus {
    outline: none;

    &::placeholder,
    &::-webkit-input-placeholder {
      color: transparent;
      text-shadow: none;
    }

    &:-ms-input-placeholder {
      color: transparent;
      text-shadow: none;
    }
  }
`

export const Button = styled.button`
  display: block;
  font-size: 1.5rem;
  z-index: 10;
  border-radius: 5px;
  outline: none;
  text-align: left;
  padding: 0 0 0 30px;
  background: url(${bgImport[4]}) center center no-repeat;
  background-size: 100% 100%;
  color: ${props => props.theme.colors.colorCopperRed};
  cursor: pointer;
  width: 251px;
  height: 72px;
  border: 0;
  line-height: 80px;

  &:focus {
    outline: none;
  }
`

export const Rules = styled.div`
  display: none;
  width: 500px;
  height: calc(100% - 150px);
  margin: 100px 100px 0px 50px;
  overflow-y: auto;
  font-family: "BenchNine";
  font-size: 24px;
  padding-right: 10px;
  color: ${props => props.theme.colors.colorWhite}B3;
  scrollbar-width: 5px;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.5);

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #9a593d;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`

export const RulesClose = styled.button`
  display: none;
  position: absolute;
  width: 30px;
  height: 30px;
  border: none;
  top: 55px;
  left: 50px;
  padding: 0;
  background-color: transparent;

  path {
    fill: ${props => props.theme.colors.colorCopperRed};
  }

  &:focus {
    outline: none;
  }
`

export const Caption = styled.p`
  font-size: 30px;
  font-weight: bold;
`