import { Link } from "react-router-dom";
import "./VideoListing.css";
import YouTube from "react-youtube";
const YOUTUBE_COMPONENT_OPTIONS = {
  width: "100%",
  height: "100%",
  
};

export default function VideoListing({ video }) {
 
  return (
    <article className="video">
      <YouTube videoId={video.id?.videoId} opts={YOUTUBE_COMPONENT_OPTIONS} />
      <h5 className="title">
        <Link to={`/videos/${video.id?.videoId}`}>{video.snippet?.title}</Link>
      </h5>
    </article>
  );
}
