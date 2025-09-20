import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    return (
        <div className="about">
            <section className="about-hero">
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        About Bola Ahmed Tinubu
                    </motion.h1>
                </div>
            </section>

            <section className="about-content">
                <div className="container">
                    <div className="about-grid">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="about-image"
                        >
                            <img src="/tinubu3.webp" alt="Bola Ahmed Tinubu" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="about-text"
                        >
                            <h2>A Visionary Leader</h2>
                            <p>
                                Bola Ahmed Tinubu is a seasoned Nigerian politician and businessman who has dedicated his life to public service and national development. With decades of experience in governance and administration, he has consistently demonstrated his commitment to building a stronger, more prosperous Nigeria.
                            </p>
                            <p>
                                As a leader who has served at various levels of government, Tinubu brings a wealth of experience in policy formulation, implementation, and execution. His leadership philosophy centers on inclusivity, transparency, and sustainable development that benefits all Nigerians.
                            </p>
                            <h3>Core Values</h3>
                            <ul>
                                <li>National Unity and Integration</li>
                                <li>Economic Empowerment and Growth</li>
                                <li>Good Governance and Accountability</li>
                                <li>Youth Development and Innovation</li>
                                <li>Peace and Security for All</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="achievements">
                <div className="container">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="section-title"
                    >
                        Key Achievements
                    </motion.h2>
                    <div className="achievements-grid">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="achievement-card"
                        >
                            <h3>Economic Reforms</h3>
                            <p>Pioneered economic policies that stimulated growth and attracted investment.</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="achievement-card"
                        >
                            <h3>Infrastructure Development</h3>
                            <p>Oversaw major infrastructure projects that improved connectivity and accessibility.</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="achievement-card"
                        >
                            <h3>Education Initiatives</h3>
                            <p>Launched programs to improve access to quality education across Nigeria.</p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;