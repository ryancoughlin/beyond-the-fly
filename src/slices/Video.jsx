import React, { Component } from 'react'
import ReactPlayer from 'react-player'

const Video = ({input}) => (
  <>
  <ReactPlayer url={input.primary.video.embed_url} width="100%" playing />
  <p>{input.primary.video.description}</p>
  </>
)

export default Video