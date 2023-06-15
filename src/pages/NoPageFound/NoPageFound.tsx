import { Link } from "react-router-dom";

export default function NoPageFound() {
    return (
        <div className="no-page-container">
            <h1>woah... what do you think ur doing ? 🤔</h1>
            <Link to="/" className="button">
                return home
            </Link>
        </div>
    );
}
