import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <nav>
                <h1>projects summer 2023</h1>
                <ul className="projects">
                    <li>
                        <Link to="/games">game state screen transitions</Link>
                    </li>
                    <li>
                        <Link to="/parallax">parallax</Link>
                    </li>
                    <li>
                        <Link to="/revolving-asset">revolving asset</Link>
                    </li>
                    <li>
                        <Link to="/html-render">phone render</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}
