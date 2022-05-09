import styled from "styled-components"

export const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: rgb(251, 114, 140);
  background: linear-gradient(
    159deg,
    rgba(251, 114, 140, 1) 0%,
    rgba(230, 67, 97, 1) 99%
  );
`

export const Filter = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;

  ${props =>
    props.isOrange &&
    `
	  background-color: rgb(237, 136, 21);
  	opacity: 0.2;
  `}

  ${props =>
    props.isVignette &&
    `
	background: rgb(0, 0, 0);
	/* background: linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 15%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.3) 85%, rgba(0,0,0,0.5) 100%); */
	background: linear-gradient(
		90deg,
		rgba(0, 0, 0, 1) 0%,
		rgba(0, 0, 0, 0.8) 15%,
		rgba(0, 0, 0, 0) 50%,
		rgba(0, 0, 0, 0.8) 85%,
		rgba(0, 0, 0, 1) 100%
	);
	opacity: 0.7;
  `}
`

export const SunWrapper = styled.div`
  position: absolute;
  top: 100%;
  height: 100%;
  width: 100%;
  visibility: hidden;
`

export const Sun = styled.div`
  position: absolute;
  width: 16vw;
  height: 50vh;
  transform: rotate(22deg);
  background: rgb(230, 58, 95);
  background: linear-gradient(
    0deg,
    rgba(233, 42, 42, 1) 23%,
    rgba(230, 58, 95, 1) 91%
  );
  border-radius: 50%;
  left: calc(50vw - 6vw);
  top: 3vh;

  ${props =>
    props.isFlare &&
    `
	width: 19vw;
	height: 60vh;
	background: rgb(230, 58, 95);
	opacity: 0.6;
	left: calc(50vw - 7.5vw);
	top: -2vh;
	display: none;
  `}
`

export const Mountains = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
`

export const MountainsItem = styled.img`
  position: absolute;
  bottom: -200px; /* FIXME: this should be dynamic according to the proportion of the screen */
  display: block;
  width: 100%;
  height: auto;
  opacity: 0.2;
`
