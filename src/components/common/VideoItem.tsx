import { Video } from "../../interfaces/Video";
import ReactPlayer from "react-player";
import { useHistory } from "react-router-dom";
import axios from "axios";

type VideoItemTypes = (props: Video) => React.ReactElement;

const VideoItem: VideoItemTypes = ({
    title,
    description,
    url,
    _id,
    loadVideos,
}) => {
    const history = useHistory();

    const handleClick = (e: any) => history.push(`/update/${_id}`);

    const deleteVideo = async (e: any) => {
        e.stopPropagation();
        await axios.delete(
            `https://mern-tutorial-api.herokuapp.com/videos/${_id}`
        );
        if (loadVideos) loadVideos();
    };

    return (
        <div
            className="border-2 p-2 cursor-pointer hover:border-4 hover:border-blue-200"
            onClick={handleClick}
        >
            <div className="flex justify-between">
                <h2 className="text-3xl">{title}</h2>
                <span
                    className="material-icons text-red-500"
                    onClick={deleteVideo}
                >
                    close
                </span>
            </div>
            <p className="mb-4">{description}</p>
            <div className="w-full overflow-hidden">
                <ReactPlayer url={url} />
            </div>
        </div>
    );
};

export default VideoItem;
