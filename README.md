# CARHIVE

CarHive is a comprehensive car marketplace platform aimed at simplifying the process of buying and selling vehicles. This project leverages modern frontend and backend technologies to deliver a seamless user experience and robust data management.

## Dependencies

### Frontend

1. **Vite**  
   Utilized for fast project setup and optimized build processes.

2. **TailwindCSS**  
   Integrated for quick and efficient styling. Follow all necessary setup procedures before adding `shadcn` for fast custom components.

3. **Shadcn**  
   Added with Vite for fast and customizable component generation.

4. **React Router Dom**  
   Used for managing routing across different pages efficiently.

5. **Clerk for Authentication**  
   Clerk is integrated to handle authentication with a modal sign-in experience. Example implementation:

   ```jsx
   import { SignInButton } from "@clerk/clerk-react";

   <SignInButton mode="modal">
     <Button>Login</Button>
   </SignInButton>;
   ```

6. **React Icons**  
   Used for seamless icon integration throughout the UI.

7. **Moment.js** Get the current data and time with formats.

### Resources

- **Untitled UI**: for logo inspiration and branding.
- **Flaticon**: for additional icons and visual elements.
- **HyperUI.dev**: for pre-built TailwindCSS components.

---

### Backend

1. **Firebase (for Image Storage)**  
   Firebase is used for storing and managing uploaded images:

   - Create and register a Firebase project.
   - Install and add Firebase config to the source code to set up the integration.

2. **PostgreSQL with Drizzle ORM (Database)**

   - **PostgreSQL** is used for data storage, integrated with the **Drizzle ORM** for streamlined interaction.
   - **Neon** is used as a serverless database manager for PostgreSQL:
     - Create a Neon account and set up a project to obtain the necessary keys and database host.
     - Follow the PostgreSQL documentation to integrate with Drizzle.
     - Configure `drizzle.config.js` to manage database schema creation and data manipulation.

3. **Firebase for Image Storage**  
   Image uploads are managed using Firebase storage:

   - Configure Firebase as per documentation.
   - Use Firebase storage `ref` to reference the files.
   - Upload files using `uploadBytes(ref, file, metadata)` and access them via `getDownloadURL(ref)`.

   _Note: Ensure that Firebase storage rules allow read and write access, or it will throw CORS errors._

4. **CRUD Operations**
   - Drizzle orm to _`_insert()_, _select(), _update()_, and _delete()_`_
   -

---

## Learning Outcomes

Throughout this project, I have gained valuable experience with:

- Implementing authentication services using Clerk.
- Managing routing and state transitions with `react-router-dom`.
- Working with serverless databases like Neon and PostgreSQL.
- Handling file uploads and storage with Firebase, combined with creating scalable user interfaces using `shadcn` and `tailwindcss`.

CarHive showcases the potential of combining modern web development technologies to create a scalable, secure, and efficient marketplace platform.
