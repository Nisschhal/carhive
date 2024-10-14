# CarHive

**CarHive** is a comprehensive car marketplace platform aimed at streamlining the process of buying and selling vehicles. The project integrates modern frontend and backend technologies to offer a smooth user experience and efficient data management.

## Features

- **User Authentication**: Modal-based sign-in experience using Clerk.
- **Image Management**: Image storage with Firebase.
- **Database**: Serverless PostgreSQL via Neon, managed using Drizzle ORM.
- **Responsive UI**: TailwindCSS and Shadcn for styling and component management.
- **Real-time Chat**: Integrated chat using Sendbird for seamless communication between buyers and sellers.

## Technologies Used

### Frontend

- **[Vite](https://vitejs.dev/)**: Fast build and development setup.
- **[React](https://reactjs.org/)**: Modern JavaScript library for building user interfaces.
- **[TailwindCSS](https://tailwindcss.com/)**: Utility-first CSS framework for quick UI design.
- **[Shadcn](https://shadcn.dev/)**: Fast, customizable components with TailwindCSS.
- **[React Router](https://reactrouter.com/)**: Declarative routing for React applications.
- **[Clerk](https://clerk.dev/)**: Authentication service for seamless sign-in and user management.
- **[React Icons](https://react-icons.github.io/react-icons/)**: Simple inclusion of icons in React apps.

### Backend

- **[Firebase](https://firebase.google.com/)**: Used for image uploads and management.
- **[PostgreSQL](https://www.postgresql.org/)**: Powerful, open-source relational database.
- **[Drizzle ORM](https://github.com/drizzle-team/drizzle-orm)**: Type-safe SQL ORM for Postgres with a minimalist approach.
- **[Neon](https://neon.tech/)**: Serverless Postgres platform for managing the database.
- **[Sendbird](https://sendbird.com/)**: API for implementing real-time chat functionality.
- **[Axios](https://axios-http.com/)**: HTTP client for making API calls to Sendbird.

### DevOps & Deployment

- **[GitHub](https://github.com/)**: For version control and repository hosting.
- **[Vercel](https://vercel.com/)**: For deployment of the frontend and backend services.

## Installation and Setup

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/carhive.git
    ```
2.  **Install dependencies**:
    ```
    npm install
    ```
3.  **Set Up Environment Variables**:

    To run this project, you will need to add the following environment variables to your `.env.local` file:

    ```bash
    VITE_CLERK_PUBLISHABLE_KEY=<your-clerk-publishable-key>
    VITE_DRIZZLE_DATABASE_URL=<your-postgres-database-url>
    VITE_FIREBASE_API_KEY=<your-firebase-api-key>
    VITE_SENDBIRD_APP_ID=<your-sendbird-app-id>
    VITE_SENDBIRD_API_KEY=<your-sendbird-api-key>
    ```

    _**Note**: Never share your environment variables publicly or commit them to the repository. Use .gitignore to ensure the .env.local file is not tracked._

## How It Works

- ### Authentication

Clerk manages the entire user authentication process, including sign-up, login, and session management.

- ### Image Management

Firebase handles the storage of images, ensuring scalable and secure media management.

- ### Database

PostgreSQL combined with Drizzle ORM manages the database operations, including vehicle listings, user data, and transactions.

- ### Real-time Communication

Sendbird provides a chat API for real-time messaging between users (buyers and sellers).

- ## Project Structure

```bash
/src                  # React, Tailwind, Shadcn UI for the frontend
/drizzle.config.js     # Drizzle ORM configuration for database schema and migrations
/.env.local            # Environment variables (not included in repo)
```

## Learning Outcomes

During the development of CarHive, I gained experience in:

- Integrating modern authentication solutions with Clerk.
- Managing routing, state transitions, and API integration with React Router and Axios.
- Working with serverless database solutions like Neon and PostgreSQL.
- Implementing real-time communication using Sendbird.
- Utilizing Firebase for scalable image storage and management.

## Deployment

The application is deployed using Vercel, which handles both frontend and backend hosting.

## Contributions

Feel free to fork this repository, submit issues, or make pull requests to improve this project further.

### Contribution Guidelines

- Fork the project and create a branch (feature-branch).
- Commit your changes.
- Push your branch to the remote repository.
- Submit a Pull Request.
- Please make sure to update tests as appropriate.

---

## Thank you for checking out CarHive! If you have any questions, feel free to reach out. (mrnischalpuri@gmail.com)
