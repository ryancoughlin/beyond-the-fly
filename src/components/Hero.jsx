import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import {Colors, Container} from '../styles/theme';
import facepaint from 'facepaint'

const breakpoints = [576, 768, 992]
const mq = facepaint(
  breakpoints.map(bp => `@media (min-width: ${bp}px)`)
)

const Metadata = styled.h6({
  margin: '0 24',
  fontSize: 12,
})

const Dot = styled.span({
  marginLeft: 8,
  marginRight: 8,
})

const IssueNumber = styled.span({
  color: Colors.Global.Primary,
  fontWeight: 700,
  
})

const Credits = styled.div({
  color: Colors.Palette.Text,
  fontWeight: 400,
  fontSize: 14,
})

const Title = styled.h1({
  color: Colors.Global.Highlight,
  textTransform: 'uppercase',
})

const Contents = styled.div({
  position: 'absolute',
  backgroundColor: Colors.Global.Background,
  maxWidth: 520,
  paddingTop: 32,
  paddingBottom: 32,
  paddingRight: 24,
  bottom: '-140px',
})

const HeroContainer = styled(Container)({
  marginBottom: 200,
})

const Hero = ({ data }) => (
  <HeroContainer>
    {console.log(data)}
    {data.featuredImage &&
      <Img fluid={data.featuredImage.fluid} />
    }
    <Contents>
      <Title>{data.title}</Title>
      {data.credits &&
        <Credits>{data.credits}</Credits>
      }
    </Contents>
  </HeroContainer>
);

export default Hero;

Hero.propTypes = {
  data: PropTypes.object.isRequired,
};
