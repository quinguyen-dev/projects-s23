import { motion, useScroll, useTransform } from "framer-motion";

export default function Parallax() {
    const { scrollY } = useScroll();

    const headerOffset = useTransform(scrollY, [0, 800], [0, 500]);

    return (
        <div className="parallax">
            <section className="hero">
                <motion.h1 style={{ y: headerOffset }}>
                    Achieve new heights.
                </motion.h1>
                <img
                    className="mountain"
                    src="/src/assets/images/mountain.png"
                />
            </section>
            <section className="content">
                <h2>Sign up today.</h2>
                <p>
                    Go from design to site with Framer, <br /> the web builder
                    for creative pros.
                </p>
                <span className="cta">
                    <button className="secondary">Learn More</button>
                    <button className="primary">Get Started</button>
                </span>
            </section>
            <footer>
                <div className="links">
                    <div className="products">
                        <h3>Products</h3>
                        <a href="#">Features</a>
                        <a href="#">Learn</a>
                        <a href="#">Plugins</a>
                    </div>
                    <div className="template">
                        <h3>Templates</h3>
                        <a href="#">Blog</a>
                        <a href="#">Personal</a>
                        <a href="#">Startup</a>
                    </div>
                    <div className="resources">
                        <h3>Resources</h3>
                        <a href="#">Updates</a>
                        <a href="#">Community</a>
                        <a href="#">Contact</a>
                    </div>
                </div>
                <hr />
                <div className="copyright">© 2022 Framer, Inc.</div>
            </footer>
        </div>
    );
}
