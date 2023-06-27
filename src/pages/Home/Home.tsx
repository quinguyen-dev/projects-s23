import { Link } from "react-router-dom";
import type { LinkProps } from "react-router-dom";

// children:
// | string
// | JSX.Element
// | JSX.Element[]
// | (() => JSX.Element)

type AnimatedLinkProps = {
    children: string /* TODO: move this to type file ? */;
} & LinkProps;

function AnimatedLink({ children, ...linkProps }: AnimatedLinkProps) {
    return (
        <Link {...linkProps}>
            <span>{children}</span>
        </Link>
    );
}

export default function Home() {
    return (
        <div className="home">
            <h1>Projects Summer 2023</h1>
            <nav>
                <ul className="projects">
                    <li>
                        <AnimatedLink to="/html-render">
                            HTML Phone Render
                        </AnimatedLink>
                    </li>
                    <li>
                        <AnimatedLink to="/revolving-asset">
                            Basic Revolving Torus Knot
                        </AnimatedLink>
                    </li>
                    <li>
                        <AnimatedLink to="/parallax">
                            Parallax Scrolling
                        </AnimatedLink>
                    </li>
                    <li>
                        <AnimatedLink to="/games">
                            Screen Transitions
                        </AnimatedLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
