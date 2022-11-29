import { Link } from "react-router-dom";
import "./VideoListing.css";
import YouTube from "react-youtube";
const YOUTUBE_COMPONENT_OPTIONS = {
  width: "640",
  height: "390",
};

export default function VideoListing({ video }) {
 
  return (
    <article className="video">
      <h3 className="title">
        <Link to={`/videos/${video.id?.videoId}`}>{video.snippet?.title}</Link>
      </h3>
      <YouTube videoId={video.id?.videoId} opts={YOUTUBE_COMPONENT_OPTIONS} />
    </article>
  );
}
