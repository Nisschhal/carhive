# CARHIVE

## Dependencies

### Frontend

1. `vite` for Project Setup
2. `tailwindcss`, follow all procedure before adding shadcn, for fast CSS
3. `shadcn` with **vite** for Fast Custom Components
4. `react-router-dom` for Routing
5. `clerk` for Authentication

   ```js
   import { SignInButton } from "@clerk/clerk-react";

   <SignInButton mode="modal">
     <Button>Login</Button>
   </SignInButton>;
   ```

6. `react-icons` for Icons

## Resources

`untitledui` for logo
`flaticon` for icons || url
`hyperui.dev/` for tailwindcss CSS UI components

### Backend

`firebase` for Uploaded Image Storage

- create project >> register project to web >> install and copy-paste config code to source code

#### Database (data:postgreSQL) && (image:firebase)

- **PostgreSQL with drizzle**: ORM, with **_Neon_** as Serverless DB manager

  - Follow postgreSQL docs in drizzle (Neon Postgres)
  - Create Neon account and your project in it for **key** and db host
  - Install required dependecies and follow **drizzle-kit** configuration: create drizzle.config.js in source directory.
  - And now create Schema for data manipulation to and from db

- **firebase** :
  - setup the **_config_** file as per docs
  - setup the **_storage_** with the given config app
  - 
