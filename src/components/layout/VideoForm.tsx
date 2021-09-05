import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Video } from "../../interfaces/Video";
import { toast } from "react-toastify";

type changeInputType = React.ChangeEvent<HTMLInputElement>;
type changeTextAreaType = React.ChangeEvent<HTMLTextAreaElement>;

const initialState = {
    title: "",
    url: "",
    description: "",
};

interface Params {
    id: string;
}

const VideoForm: React.FC = () => {
    const [formData, setFormData] = useState<Video>(initialState);
    const history = useHistory();
    const params: Params = useParams();

    const handleChange = (e: changeInputType | changeTextAreaType): void =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!params.id) {
            await axios.post(
                "https://mern-tutorial-api.herokuapp.com/videos",
                formData
            );
            toast("New video added");
        } else {
            await axios.put(
                `https://mern-tutorial-api.herokuapp.com/videos/${params.id}`,
                formData
            );
            toast("Update video");
        }

        history.push("/");
    };

    useEffect(() => {
        if (!params.id) return;

        axios
            .get(`https://mern-tutorial-api.herokuapp.com/videos/${params.id}`)
            .then((res) => setFormData(res.data));
    }, [params.id]);

    return (
        <form
            className="flex flex-col w-2/5 m-auto mt-20"
            onSubmit={handleSubmit}
        >
            <h1 className="text-xl font-bold mb-5">
                {params.id ? "Update video: " : "New video:"}
            </h1>
            <input
                className="border-2 border-blue-200 p-2 mb-2 outline-none"
                type="text"
                name="title"
                placeholder="Title..."
                onChange={handleChange}
                value={formData.title}
                required
                autoFocus
            />
            <input
                className="border-2 border-blue-200 p-2 mb-2 outline-none"
                type="text"
                name="url"
                placeholder="Url..."
                onChange={handleChange}
                value={formData.url}
                required
            />
            <textarea
                className="border-2 border-blue-200 p-2 mb-2 outline-none"
                name="description"
                placeholder="Description..."
                onChange={handleChange}
                value={formData.description}
            />
            {params.id ? (
                <input
                    className="bg-blue-200 text-black h-10 cursor-pointer outline-none transition duration-500 hover:bg-blue-300"
                    type="submit"
                    value="Update video"
                />
            ) : (
                <input
                    className="bg-blue-200 text-black h-10 cursor-pointer outline-none transition duration-500 hover:bg-blue-300"
                    type="submit"
                    value="Create video"
                />
            )}
        </form>
    );
};

export default VideoForm;
