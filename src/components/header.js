import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `lightslategray`,
      background: '#bdc3c7', /* fallback for old browsers */
      background: '-webkit-linear-gradient(to right, #bdc3c7, #2c3e50)' /* Chrome 10-25, Safari 5.1-6 */,
      background: 'linear-gradient(to right, #bdc3c7, #2c3e50)',
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        // maxWidth: 960,
        // padding: `1.45rem 1.0875rem`,
        // margin: `0 auto`,
        width: '200px',
        height: '135px',
        marginLeft: '42vw',
        borderRadius: '40px',

      }}
    >
      <StaticImage
        src="../images/cmc-logo.png"
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{
          marginTop: '10px',
          borderRadius: '15px',
          opacity: 0.1
        }}
      />
      {/* <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1> */}
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
