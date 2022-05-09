import React from "react"
// import gsap from "gsap/all"
import TweenMax from "gsap"
// import { connect } from "react-redux"
// import Embers from "./Embers"
import { import2Array } from "../../../helpers/helpers"
import {
  Wrapper,
  Sun,
  SunWrapper,
  Filter,
  Mountains,
  MountainsItem,
} from "./styled"

// webpack imports all the images from the folder that comply with the regex
const mountainsImport = import2Array(
  require.context(
    "./../../../images/background_scene/mountains",
    false,
    /\.(jpg|jpeg|png|svg)$/
  )
)

const BackgroundScene = () => {
  // TODO: {assets}  is only pulling the sun, and that could be with css alone, with proportions. Remove the import2Object and move the sun to css

  let mountainsImgs = []
  const mountainsImportKeys = Object.keys(mountainsImport)

  if (mountainsImportKeys.length) {
    mountainsImgs = mountainsImportKeys.map((key, index) => (
      <MountainsItem
        src={mountainsImport[key]}
        alt="mountain"
        className="mountain"
        key={index}
      />
    ))
  }

  const mountainSel =
    typeof document !== "undefined"
      ? document.querySelectorAll(".mountain")
      : null
  if (mountainSel) {
    TweenMax.to(".mountain", 4, { opacity: "1", bottom: "-100px" })
    TweenMax.to("#sunWrapper", 2, {
      top: "0",
      opacity: "1",
      visibility: "visible",
    })
    TweenMax.to("#backgroundSceneFilter", 3, { opacity: "0.2" })
  }

  return (
    <Wrapper id="backgroundScene">
      <SunWrapper id="sunWrapper">
        <Sun isFlare />
        <Sun />
        {/* <Embers /> */}
      </SunWrapper>

      <Mountains>{mountainsImgs}</Mountains>
      <Filter isOrange id="backgroundSceneFilter" />
      <Filter isVignette />
    </Wrapper>
  )
}

export default BackgroundScene
// export default connect(
//   ({app: {players}}, ownProps) => ({
//     player: players[ownProps.playerId],
//   }),
//   null
// )(Player)
