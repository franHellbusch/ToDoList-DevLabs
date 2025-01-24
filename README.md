[![MIT License][license-shield]][license-url] [![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<div align="center">

  <h1 align="center">ToDo List Application</h1>

  <p align="center">
    This project implements a simple task management web application using the MERN stack (MongoDB, Express, React, Node.js). It allows users to authenticate, create, edit, delete, and view tasks.
  </p>
</div>

## Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
- [Deployment](#deployment)
  - [Project Structure (Monorepo)](#project-structure-monorepo)
    - [Backend Deployment (Render)](#backend-deployment-render)
    - [Frontend Deployment (Vercel)](#frontend-deployment-vercel)
  - [Additional](#additional)
- [Contact](#contact)

## Features

This application empowers users to manage their tasks efficiently with a robust set of features:

- **Manage tasks effectively:** Create, edit, delete, and organize tasks with ease.
- **Authenticate securely:** Utilize Auth0 for robust user authentication and authorization.
- **Experience a modern interface:** Built with TypeScript, Material-UI, and Emotion for enhanced type safety and a visually appealing user experience.

## Technologies Used

### Frontend

- [![React](https://img.shields.io/badge/React-%2320232a.svg?logo=react&style=for-the-badge)](https://reactjs.org/)
- ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
- [![Axios](https://img.shields.io/badge/Axios-%23232F3E.svg?logo=axios&style=for-the-badge)](https://axios-http.com/)
- [![Redux](https://img.shields.io/badge/Redux-%23764ABC.svg?logo=redux&style=for-the-badge)](https://redux.js.org/)
- ![Material Ui](https://img.shields.io/badge/materialui-%230081CB.svg?style=for-the-badge&logo=material-ui&logoColor=white)
- ![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
- ![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)

### Backend

- [![Node.js](https://img.shields.io/badge/Node.js-%2343853D.svg?logo=node.js&style=for-the-badge)](https://nodejs.org/)
- ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
- ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
- [![Express](https://img.shields.io/badge/Express-%23404d59.svg?logo=express&style=for-the-badge)](https://expressjs.com/)
- [![Pino](https://img.shields.io/badge/Pino-%23074041.svg?logo=pino&style=for-the-badge)](https://getpino.io/)
- ![Zod](https://img.shields.io/badge/zod-%233068b7.svg?style=for-the-badge&logo=zod&logoColor=white)

### Authentication

- ![Auth0](https://a11ybadges.com/badge?logo=auth0)

### Testing

- ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
- ![Vitest](https://img.shields.io/badge/-Vitest-252529?style=for-the-badge&logo=vitest&logoColor=FCC72B)
- ![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)

### Deployment

- ![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white)
- ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

## Getting Started

A continuación, te proporciono una guía paso a paso para inicializar tanto el backend como el frontend de este proyecto en tu entorno local.

### Prerequisites

Node.js and npm: Make sure you have Node.js and npm installed on your machine. You can download them1 from [https://nodejs.org/](https://nodejs.org/).

1. **Clone the Repository**

   ```sh
   git clone https://github.com/franHellbusch/ToDoList-DevLabs.git
   ```

2. **Install Dependencies**

   ```sh
   # Navigate to the backend directory
    cd ./backend
    npm install

   # Navigate to the frontend directory
    cd ./frontend
    npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in both the backend and frontend directories and set your environment variables according to your project's requirements. Refer to the provided `.env.example` file for guidance.
   <br/>

4. **Run the Development Server**

   ```
   # Start the backend development server
    cd ./backend
    npm run dev

   # Start the frontend development server
    cd ./frontend
    npm run dev
   ```

## Deployment

### Project Structure (Monorepo)

This project utilizes a monorepository structure, housing both the frontend and backend within the same Git repository. This simplifies management and maintenance.

#### Backend Deployment ([Render](https://render.com/)):

- **Create a new service:** Create a new web service in your Render account.

- **Connect your Git repository:** Connect the `backend` directory within your Git repository to Render.

- **Configure build:**

  - **Directory:** Specify the directory containing your backend application as `backend`
  - **Build command:** `npm install && npm run build` (for TypeScript projects).

- **Start command:** Define start command: `npm run start`.

- **Set environment variables:** Define environment variables as specified in the `.env.example` file in the backend directory.

- **Configure domain:** If you have a custom domain, configure it to point to your deployed application.

#### Frontend Deployment ([Vercel](https://vercel.com/))

- **Import project:** Import the `frontend` directory of your repository into Vercel.

- **Configure build:**

  - **Directory:** Specify the directory containing your frontend application as `frontend`.
  - **Framework detection:** Vercel will automatically detect your frontend framework (React).

- **Set environment variables:** Define environment variables as specified in the `.env.example` file in the frontend directory.

- **Configure domain:** Connect your custom domain to Vercel.

#### Additional

- **Use of Auth0**: If you change domains after deployment, update the allowed callback, logout, and web URLs/origins in your [Auth0 aplication settings](https://manage.auth0.com/dashboard/).

- **Use of Mongo Atlas**: If using MongoDB Atlas, configure the IP whitelists to allow access from Render's servers. You can either allow access from all IPs (0.0.0.0/0) or specify the specific IP addresses of your Render servers ([Mongo Atlas](https://www.mongodb.com/es/atlas)).

## Contact

Feel free to reach out if you have any questions, suggestions, or would like to collaborate.

- **Email:** [fghellbusch@gmail.com](mailto:fghellbusch@gmail.com)
- **LinkedIn:** [Francisco Hellbusch](https://www.linkedin.com/in/fhdeveloper/)

[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/franHellbusch/ToDoList-DevLabs/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/fhdeveloper/
