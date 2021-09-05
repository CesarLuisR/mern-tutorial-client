import { useState, useEffect } from "react";
import axios from "axios";
import { Video } from "../../interfaces/Video";
import VideoItem from "../common/VideoItem";

const VideoList: React.FC = () => {
    const [videos, setVideos] = useState<Video[]>([]);

    const loadVideos = () => {
        axios
            .get("https://mern-tutorial-api.herokuapp.com/videos")
            .then((res) => {
                const formatedVideos = res.data
                    .map((video: any) => ({
                        ...video,
                        createdAt: new Date(video.createdAt),
                        updateAt: new Date(video.updateAt),
                    }))
                    .sort(
                        (a: any, b: any) =>
                            b.createdAt.getTime() - a.createdAt.getTime()
                    );

                setVideos(formatedVideos);
            });
    };

    useEffect(() => {
        loadVideos();
        return () => setVideos([]);
    }, []);

    return (
        <div className="grid gap-6 grid-cols-3 mt-10">
            {videos.map((video) => (
                <VideoItem {...video} loadVideos={loadVideos} key={video._id} />
            ))}
        </div>
    );
};

export default VideoList;
