import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <section className="hero">
                <div className="hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="hero-text"
                    >
                        <h2 className="hero-title">BOLA AHMED TINUBU</h2>
                        <p className="hero-subtitle">For a United and Prosperous Nigeria</p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="cta-button"
                        >
                            Join the Movement
                        </motion.button>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hero-image"
                    >
                        <img src="/tinubu.jpeg" alt="Bola Ahmed Tinubu" />
                    </motion.div>
                </div>
            </section>

            <section className="vision">
                <div className="container">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="section-title"
                    >
                        Our Vision for Nigeria
                    </motion.h2>
                    <div className="vision-grid">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="vision-card"
                        >
                            <h3>Economic Growth</h3>
                            <p>Driving sustainable economic development through innovation and investment.</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="vision-card"
                        >
                            <h3>Unity & Peace</h3>
                            <p>Promoting national unity and peaceful coexistence among all Nigerians.</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="vision-card"
                        >
                            <h3>Education & Youth</h3>
                            <p>Empowering the youth through quality education and skills development.</p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;