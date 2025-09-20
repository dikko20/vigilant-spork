# Bola Ahmed Tinubu for President - APC Campaign Website

A modern, responsive website for Bola Ahmed Tinubu's presidential campaign under the APC party.

## Features

- Responsive design that works on all devices
- Smooth animations and transitions
- Modern UI/UX design
- Manifesto showcase
- About the candidate section
- Contact form
- Full-stack implementation with React frontend and Node.js/Express backend

## Technologies Used

### Frontend
- React.js
- React Router
- Framer Motion (for animations)
- React Icons
- CSS3 (with modern features)

### Backend
- Node.js
- Express.js
- CORS

## Setup Instructions

1. Clone the repository
2. Install dependencies for both frontend and backend:
   ```bash
   npm install
   cd backend && npm install
   ```
3. Start the development server:
   ```bash
   # Start frontend
   npm run dev
   
   # Start backend (in a separate terminal)
   npm run dev:backend
   ```

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Manifesto.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── backend/
│   ├── server.js
│   └── package.json
├── public/
└── package.json
```

## API Endpoints

- `GET /api/manifesto` - Get the campaign manifesto
- `POST /api/contact` - Submit contact form

## Deployment

To build the project for production:
```bash
npm run build
```

This will create a `dist/` folder with the optimized production build.

## License

This project is for educational purposes only.