import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (result.success) {
                setSubmitMessage('Thank you for your message! We will get back to you soon.');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setSubmitMessage('There was an error sending your message. Please try again.');
            }
        } catch (error) {
            setSubmitMessage('There was an error sending your message. Please try again.');
            console.error('Error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact">
            <section className="contact-hero">
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Get In Touch
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="contact-subtitle"
                    >
                        Join the movement or share your thoughts with us
                    </motion.p>
                </div>
            </section>

            <section className="contact-content">
                <div className="container">
                    <div className="contact-grid">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="contact-info"
                        >
                            <h2>Contact Information</h2>
                            <div className="info-item">
                                <h3>Headquarters</h3>
                                <p>APC National Headquarters<br />Abuja, Nigeria</p>
                            </div>
                            <div className="info-item">
                                <h3>Email</h3>
                                <p>info@tinubuforpresident.ng</p>
                            </div>
                            <div className="info-item">
                                <h3>Phone</h3>
                                <p>+234 123 456 7890</p>
                            </div>
                            <div className="info-item">
                                <h3>Follow Us</h3>
                                <div className="social-links">
                                    <a href="#" className="social-link">Facebook</a>
                                    <a href="#" className="social-link">Twitter</a>
                                    <a href="#" className="social-link">Instagram</a>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="contact-form"
                        >
                            <h2>Send us a Message</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="submit-button" disabled={isSubmitting}>
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                                {submitMessage && (
                                    <p className={`submit-message ${submitMessage.includes('Thank you') ? 'success' : 'error'}`}>
                                        {submitMessage}
                                    </p>
                                )}
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;