import styled, { createGlobalStyle, keyframes } from "styled-components"
import reboot from "styled-reboot"
import { import2Array, import2Object } from "../helpers/helpers"

const bgsImport = import2Object(
  require.context("../images/cards", false, /\.(png)$/)
)

const fontsImport = import2Object(
  require.context("../images/fonts", false, /\.(woff|woff2|ttf)$/)
)

export const GlobalStyle = createGlobalStyle`
	${reboot}
	/* Temporary fonts style */
	/* @import url('https://fonts.googleapis.com/css?family=Eater&display=swap'); */
	/* TODO: Import folders all at once */
	@font-face {
		font-family: "yataghan";
		src: url(${fontsImport["yataghan-webfont.woff2"]}) format("woff2"),
			 url(${fontsImport["yataghan-webfont.woff"]}) format("woff");
		font-weight: normal;
		font-style: normal;
	}

	@font-face {
		font-family: "BenchNine";
		src: url(${fontsImport["BenchNine.woff2"]}) format("woff2");
		font-weight: normal;
		font-style: normal;
	}

	/* @import url('https://fonts.googleapis.com/css?family=BenchNine&display=swap'); */

	body {
		background: ${props => props.theme.colors.colorBlack};
		font-family: "yataghan";
		overflow: hidden;
		line-height: 1.15;
	}

	.hidden {
		visibility: hidden;
	}

	img.img-fluid {
		display: block;
		max-width: 100%;
		height: auto;
	}

	button {
		&:hover {
			filter: brightness(1.3);
		}
	}
`

// Keyframes
export const windMove = keyframes`
	0% {
		transform: rotateX(-10deg);
	}

	50% {
		transform: rotateX(15deg);
	}

	100% {
		transform: rotateX(-10deg);
	}
`

// Mixins
export const flexCenter = () => `
	display: flex;
	justify-content: center;
	align-items: center;
`
export const boxShadowGlow = () => `
	box-shadow:
	0 0 12px 6px #fff,
	0 0 20px 12px #f0f,
	0 0 28px 18px #0ff;
`

// Global theme
export const theme = {
  colors: {
    colorPrimary: "#6c4878",
    colorSecondary: "#130f1d",
    colorWhite: "#ffffff",
    colorWhiteAlpha: `rgba(white, 0.5)`,
    colorBlack: "#000000",
    colorGrayLighter: "#f0f0f0",
    colorGrayLight: "#dfdfdf",
    colorGrayBase: "#7f7f7f",
    colorGrayDark: "#494949",
    colorTransparent: "rgba(white, 0)",
    colorCopperRed: "#CE7B4C",
    colorDesire: "#E94650",
    colorRust: "#A9450A",
  },

  // TODO: Finalize color palette
  cardTypes: {
    magic: `url(${bgsImport['bkg_gems_2.png']}) no-repeat 50% 50% transparent`,
    mines: `url(${bgsImport['bkg_bricks_2.png']}) no-repeat 50% 50% transparent`,
    dungeons: `url(${bgsImport['bkg_monsters_2.png']}) no-repeat 50% 50% transparent`,
  },

  shadows: {
    boxShadowSm: `0 1px 4px 0 rgba(black, 0.25)`,
    boxShadowMd: `0 5px 10px 0 rgba(black, 0.25)`,
    boxShadowLg: `0 2px 16px 0 rgba(black, 0.25)`,
  },

  heights: {
    fullHeight: "100vh",
    scenarioHeight: "65vh",
    cardHolderHeight: "35vh",
  },
}

export const Wrapper = styled.div``
