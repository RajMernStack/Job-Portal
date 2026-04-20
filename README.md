# Job Portal

A full-stack MERN (MongoDB, Express.js, React, Node.js) application that serves as a comprehensive job portal. This platform connects job seekers with recruiters, providing distinct interfaces and functionalities for each role.

## 📑 Table of Contents

- [Description](#description)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Key Dependencies](#key-dependencies)
- [Run Commands](#run-commands)
- [Screenshots](#screenshots)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

This application offers a tailored experience for two primary user roles: Students (job seekers) and Recruiters (admins).

### For Students (Job Seekers)

-   **Authentication:** Secure registration and login functionality.
-   **Profile Management:** Create and update a personal profile including bio, skills, and resume upload (PDF format).
-   **Job Discovery:**
    -   Search and browse for jobs using keywords.
    -   Filter jobs by location, industry, and salary range.
    -   View a curated list of the latest job openings on the homepage.
-   **Application Management:**
    -   Apply for jobs with a single click.
    -   View a comprehensive list of all applied jobs.
    -   Track the status of applications (Pending, Accepted, Rejected).

### For Recruiters (Admins)

-   **Authentication:** Secure registration and login for recruiters.
-   **Company Management:**
    -   Register one or more companies.
    -   Update company details, including name, description, website, location, and logo.
-   **Job Management:**
    -   Post new job openings associated with their registered companies.
    -   View and manage all jobs posted by them.
-   **Applicant Tracking:**
    -   View a list of all applicants for each job posting.
    -   Access applicant details, including their resume.
    -   Update the application status for each candidate (Accepted, Rejected).

### General Features

-   **Homepage:** A welcoming landing page featuring a hero section, job category carousel, platform statistics, and the latest job listings.
-   **Statistics:** A public-facing section displaying real-time counts of total jobs, registered companies, and active job seekers.
-   **Responsive UI:** A clean and modern user interface built with Tailwind CSS and Shadcn/ui components.

## Tech Stack

The project is divided into a frontend client and a backend server.

### Backend

-   **Framework:** Node.js, Express.js
-   **Database:** MongoDB with Mongoose ODM
-   **Authentication:** JSON Web Tokens (JWT) for stateless session management.
-   **File Storage:** Cloudinary for storing user profile photos, logos, and resumes.
-   **Middleware:**
    -   `multer`: For handling multipart/form-data (file uploads).
    -   `cookie-parser`: For parsing cookie headers.
    -   `cors`: For enabling Cross-Origin Resource Sharing.
-   **Password Hashing:** `bcryptjs`
-   **Environment Variables:** `dotenv`

### Frontend

-   **Framework:** React (using Vite for a fast development experience).
-   **Routing:** React Router DOM for client-side navigation.
-   **State Management:** Redux Toolkit for centralized state management, with `redux-persist` to maintain state across sessions.
-   **UI Components:** A combination of custom components and primitives from `shadcn/ui`, including Dialog, Table, Badge, and Popover.
-   **Styling:** Tailwind CSS for a utility-first CSS framework.
-   **Animations:** `framer-motion` for smooth UI transitions and `react-countup` for animated statistics.
-   **API Communication:** `axios` for making HTTP requests to the backend.
-   **Notifications:** `sonner` for clean and simple toast notifications.

## Project Structure

The repository is organized into two main directories: `backend` and `frontend`.

```
/
├── backend/
│   ├── controllers/  # Request handling and business logic
│   ├── middlewares/  # Authentication and file upload middleware
│   ├── models/       # Mongoose data schemas
│   ├── routes/       # API endpoint definitions
│   ├── utils/        # DB connection, Cloudinary config, etc.
│   └── index.js      # Server entry point
└── frontend/
    ├── src/
    │   ├── components/ # React components (UI, auth, admin, shared)
    │   ├── hooks/      # Custom hooks for data fetching
    │   ├── redux/      # Redux Toolkit store and slices
    │   ├── utils/      # Constants and utilities
    │   └── App.jsx     # Main application component with routing
    └── vite.config.js  # Vite configuration
```

## Local Development Setup

To run this project on your local machine, follow these steps:

### Prerequisites

-   Node.js (v18.x or later)
-   npm or yarn
-   MongoDB instance (local or cloud-based like MongoDB Atlas)
-   A Cloudinary account for file storage

### 1. Clone the Repository

```bash
git clone https://github.com/RajMernStack/Job-Portal.git
cd Job-Portal
```

### 2. Backend Setup

1.  Navigate to the backend directory:
    ```bash
    cd backend
    ```

2.  Install the dependencies:
    ```bash
    npm install
    ```

3.  Create a `.env` file in the `backend` directory and add the following environment variables:
    ```env
    MONGO_URI=your_mongodb_connection_string
    PORT=8000
    SECRET_KEY=your_jwt_secret_key

    # Cloudinary Credentials
    CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
    CLOUDINARY_API_KEY=your_cloudinary_api_key
    CLOUDINARY_API_SECRET=your_cloudinary_api_secret
    ```

4.  Start the backend server:
    ```bash
    npm run dev
    ```
    The server will be running on `http://localhost:8000`.

### 3. Frontend Setup

1.  Open a new terminal and navigate to the frontend directory:
    ```bash
    cd frontend
    ```

2.  Install the dependencies:
    ```bash
    npm install
    ```

3.  The frontend is configured to connect to the backend at `http://localhost:8000`. If your backend is running on a different port, update the API endpoint URLs in `frontend/src/utils/constant.js`.

4.  Start the frontend development server:
    ```bash
    npm run dev
    ```
    The application will be accessible at `http://localhost:5173`.
## Screenshots    

<img width="1913" height="899" alt="Screenshot 2026-04-21 022701" src="https://github.com/user-attachments/assets/8e299ae4-a570-4e17-956a-3f2e0f0ea696" />

<img width="1883" height="847" alt="Screenshot 2026-04-21 024759" src="https://github.com/user-attachments/assets/c3a2ad90-9846-4540-9bfe-5a3aedbe2c84" />
<img width="1880" height="897" alt="Screenshot 2026-04-21 024648" src="https://github.com/user-attachments/assets/ed5f636b-a813-432e-abd6-6a0288ff595b" />
<img width="1858" height="878" alt="Screenshot 2026-04-21 024824" src="https://github.com/user-attachments/assets/e028617e-fe1d-4a1a-bf12-98f5632a96dd" />
<img width="1887" height="903" alt="Screenshot 2026-04-21 022757" src="https://github.com/user-attachments/assets/08a6501f-b3dc-4880-b460-7d7bb7c75d26" />
<img width="1912" height="877" alt="Screenshot 2026-04-21 022721" src="https://github.com/user-attachments/assets/b76136d2-b5b6-40cd-8caf-22bbb349431a" />






## 👥 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/RajMernStack/Job-Portal.git`
3. **Create** a new branch: `git checkout -b feature/your-feature`
4. **Commit** your changes: `git commit -am 'Add some feature'`
5. **Push** to your branch: `git push origin feature/your-feature`
6. **Open** a pull request

Please ensure your code follows the project's style guidelines and includes tests where applicable.

## 📜 License

This project is licensed under the ISC License.

    
