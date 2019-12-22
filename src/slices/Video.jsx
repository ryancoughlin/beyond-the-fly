import ReactPlayer from 'react-player';

const Video = ({ input }) => (
  <>
    <ReactPlayer url={input.primary.video.embed_url} width="100%" />
  </>
);

export default Video;
