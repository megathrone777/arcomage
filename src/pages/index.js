import React from "react"
// import { Link } from "gatsby"
import { connect } from "react-redux"
// import { Tween, Timeline } from "react-gsap"
import Layout from "../components/layout"
import Board from "../components/Board/Board"

const IndexPage = () => (
  <Layout>
    <Board />
  </Layout>
)

// export default IndexPage
export default connect(
  state => ({
    ...state,
  }),
  null
)(IndexPage)
