import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Manifesto.css';

const Manifesto = () => {
    const [manifestoPoints, setManifestoPoints] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchManifesto = async () => {
            try {
                const response = await fetch('/api/manifesto');
                const data = await response.json();
                setManifestoPoints(data.points);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching manifesto:', error);
                // Fallback to hardcoded data if API fails
                const fallbackData = [
                    {
                        id: 1,
                        title: "Economic Revitalization",
                        description: "Implement comprehensive economic reforms to stimulate growth, attract foreign investment, and create millions of jobs for Nigerians."
                    },
                    {
                        id: 2,
                        title: "Unity and National Integration",
                        description: "Promote national unity by ensuring equitable development across all regions and fostering peaceful coexistence among all ethnic and religious groups."
                    },
                    {
                        id: 3,
                        title: "Education and Human Capital Development",
                        description: "Revitalize the education sector with modern curricula, improved infrastructure, and increased access to quality education for all Nigerians."
                    },
                    {
                        id: 4,
                        title: "Healthcare for All",
                        description: "Establish a robust healthcare system that provides affordable and accessible medical services to every Nigerian, regardless of their socio-economic status."
                    },
                    {
                        id: 5,
                        title: "Infrastructure Development",
                        description: "Accelerate the development of critical infrastructure including roads, railways, power, and digital connectivity to support economic activities."
                    },
                    {
                        id: 6,
                        title: "Youth Empowerment",
                        description: "Create opportunities for young Nigerians through skills development programs, entrepreneurship support, and increased participation in governance."
                    }
                ];
                setManifestoPoints(fallbackData);
                setLoading(false);
            }
        };

        fetchManifesto();
    }, []);

    if (loading) {
        return (
            <div className="manifesto">
                <section className="manifesto-hero">
                    <div className="container">
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            Our Manifesto
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="manifesto-subtitle"
                        >
                            A Blueprint for a United and Prosperous Nigeria
                        </motion.p>
                    </div>
                </section>
                <section className="manifesto-content">
                    <div className="container">
                        <div className="loading">Loading manifesto...</div>
                    </div>
                </section>
            </div>
        );
    }

    return (
        <div className="manifesto">
            <section className="manifesto-hero">
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Our Manifesto
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="manifesto-subtitle"
                    >
                        A Blueprint for a United and Prosperous Nigeria
                    </motion.p>
                </div>
            </section>

            <section className="manifesto-content">
                <div className="container">
                    <div className="manifesto-grid">
                        {manifestoPoints.map((point, index) => (
                            <motion.div
                                key={point.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="manifesto-card"
                            >
                                <div className="card-number">0{index + 1}</div>
                                <h3>{point.title}</h3>
                                <p>{point.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="call-to-action">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="cta-content"
                    >
                        <h2>Join the Movement for Change</h2>
                        <p>Together, we can build a Nigeria that works for everyone.</p>
                        <button className="cta-button">Get Involved</button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Manifesto;