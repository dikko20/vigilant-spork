const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist')));

// Routes
app.get('/api/manifesto', (req, res) => {
    const manifesto = {
        title: "Our Manifesto",
        points: [
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
        ]
    };
    res.json(manifesto);
});

app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    // In a real application, you would save this to a database
    console.log(`New message from ${name} (${email}): ${message}`);

    res.json({
        success: true,
        message: 'Thank you for your message! We will get back to you soon.'
    });
});

// Serve frontend static files
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});