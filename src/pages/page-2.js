import React from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"

import Layout from "../components/layout"

// import { toggleDarkMode } from '../state/app';

const SecondPage = ({ isDarkMode }) => (
  <Layout isDarkMode={isDarkMode}>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

// export default SecondPage
export default connect(
  state => ({
    isDarkMode: state.app.isDarkMode,
  }),
  null
)(SecondPage)
