import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { 
  StyledBackground, 
  Text, 
  Inner
} from './style'

export default function Hero() {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <StaticQuery
      query={graphql`
        query Hero {
          hero1: file(relativePath: { eq: "hero/1.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 2500) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
          hero2: file(relativePath: { eq: "hero/2.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 2500) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
          hero3: file(relativePath: { eq: "hero/3.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 2500) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
          hero4: file(relativePath: { eq: "hero/4.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 2500) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      `}
      render={(data) => (
        <>
          <div
          />

          <div
          >
            <Slider {...settings}>
              <div>
                <StyledBackground
                  fadeIn
                  Tag="div"
                  className="hero-image"
                  fluid={data.hero3.childImageSharp.fluid}
                >
                  <Text>
                    <Inner>
                      <div
                      >
                        Cane Sofa<sup>210</sup>
                      </div>
                      <div
                      >
                        <Link to="/">Discover</Link>
                      </div>
                    </Inner>
                  </Text>
                </StyledBackground>
              </div>
              <div>
                <StyledBackground
                  fadeIn
                  Tag="div"
                  className="hero-image"
                  fluid={data.hero4.childImageSharp.fluid}
                >
                  <Text>
                    <Inner>
                      <div
                      >
                        Cane Sofa<sup>210</sup>
                      </div>
                      <div
                      >
                        <Link to="/">Discover</Link>
                      </div>
                    </Inner>
                  </Text>
                </StyledBackground>
              </div>
              <div>
                <StyledBackground
                  fadeIn
                  Tag="div"
                  className="hero-image"
                  fluid={data.hero1.childImageSharp.fluid}
                >
                  <Text>
                    <Inner>
                      <div
                      >
                        Cane Sofa<sup>210</sup>
                      </div>
                      <div
                      >
                        <Link to="/">Discover</Link>
                      </div>
                    </Inner>
                  </Text>
                </StyledBackground>
              </div>
            </Slider>
          </div>
        </>
      )}
    />
  )
}
