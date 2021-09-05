import Header from "../components/layout/Header";
import VideoList from "../components/layout/VideoList";

const Home = () => {
    return (
        <div>
            <Header />
            <div className="w-3/5 m-auto">
                <VideoList />
            </div>
        </div>
    );
};

export default Home;
