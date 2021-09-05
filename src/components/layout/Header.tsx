import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="bg-blue-100 w-full h-16 flex items-center justify-around">
            <Link to="/" className="text-xl">
                My favorite videos
            </Link>
            <Link to="/new">Create new video</Link>
        </div>
    );
};

export default Header;
