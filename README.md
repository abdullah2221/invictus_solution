# Invictus Solutions - Web Application

[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/abdullah2221/invictus_solution)

## 1. Project Title and Description

This is the codebase for the Invictus Solutions web application. Invictus Solutions is a software development organization offering a range of IT services.  This application showcases the company's portfolio, services, blog, career opportunities, and contact information.

## 2. Features and Functionality

The application provides the following key features:

*   **Home:**  Landing page with a dynamic text writer, service highlights, featured work, and company statistics.
*   **Portfolio:** Displays a list of completed projects with descriptions and links to live sites (where available).  Includes a form for free consultations.
*   **About Us:**  Information about the company's mission, vision, values, affiliations, and CEO's message.
*   **Services:**  Overview of services offered by Invictus Solutions with links to detailed service descriptions.
*   **Careers:**  Lists open job vacancies and provides a form for submitting applications. Includes mission and benefits information.
*   **Training Program:**  Information on available training programs (both free and paid), including a collaboration with NAVTTC.
*   **Contact Us:**  Contact information for various offices and a contact form.
*   **Blog:**  Displays company news and random thoughts in blog post format.
*   **Privacy Policy:**  Details the privacy policy of Invictus Solutions.
*   **Service Detail:** Provides detailed information about a specific service.
*   **Blog Detail:** Provides detailed information about a specific blog post.
*   **Mobile-responsive design:**  The application is designed to be responsive and adapt to different screen sizes.
*   **Server-Side Rendering (SSR):**  Improves initial load time and SEO.
*   **Loading Spinner:** A loading spinner is displayed using `ngx-spinner` during initial page load.
*   **Scrolling behavior:** Adds 'scroll-to-top' phone and whatsapp links to the application.

## 3. Technology Stack

*   **Frontend:**
    *   Angular (v17)
    *   Angular Router
    *   Angular Forms (ReactiveFormsModule)
    *   Angular Common Module
    *   Angular SSR (@angular/ssr)
    *   ngx-spinner
    *   ngx-typed-writer
    *   @ng-bootstrap/ng-bootstrap
    *   Font Awesome
    *   AOS (Animate On Scroll Library)
*   **Backend:**
    *   Node.js
    *   Express
*   **API:**
    *   Consumes REST API from `https://api.invictussolutions.co/`
*   **Other:**
    *   Google Tag Manager

## 4. Prerequisites

Before you begin, ensure you have met the following requirements:

*   **Node.js:**  (Minimum version 18) - Required for running the Angular CLI and the Express server.
*   **npm:** (or yarn) - Package manager for installing dependencies.
*   **Angular CLI:** Install globally using `npm install -g @angular/cli`.

## 5. Installation Instructions

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/abdullah2221/invictus_solution.git
    cd invictus_solution
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

## 6. Usage Guide

### Running the application

1.  **Development server:**

    ```bash
    npm run start
    ```

    This will start the Angular development server.  Navigate to `http://localhost:4200/` in your browser.

2.  **Build for production:**

    ```bash
    npm run build
    ```

    This command builds the application for production and places the output in the `dist/` directory.

3.  **Running the server:**

    After building the application, run the server using:

    ```bash
    npm run serve:ssr
    ```

    This command builds and serves the application using server-side rendering. You can then access it in your browser at `http://localhost:4000/`. You can also start the server directly by executing the `server.ts` file using `node dist/server.js`, although it is preferable to use `npm run serve:ssr`.

### Key Files and Configuration

*   `server.ts`: Express server configuration for SSR. Defines routes for serving static files and rendering Angular pages.
*   `src/app/app.component.ts`: Main application component, including the initialization of AOS (Animate On Scroll) and the ngx-spinner configuration.
*   `src/app/app.routes.ts`: Defines the application's routes and maps them to the corresponding components.
*   `src/app/components/header/header.component.ts`: Component for the header section, handling navigation and scroll events.
*   `src/app/components/footer/footer.component.ts`: Component for the footer section.
*   `src/app/pages/...`: Contains the components for each page of the application (Home, About, Services, Portfolio, Contact, etc.).
*   `src/app/services/...`: Defines Angular services like `ApiService`, `ContactService`, and `QouteService` to handle API calls and data management.
*   `src/index.html`: Main HTML file with meta tags and the root `app-root` element.
*   `src/main.ts`: Main entry point for the client-side application bootstrap.
*   `src/main.server.ts`:  Main entry point for the server-side application bootstrap.

### Setting the API URL

The API URL is defined in `src/app/services/api.service.ts`:

```typescript
private apiURL =  'https://api.invictussolutions.co/';
```

Change this URL to point to your desired API endpoint.

### Form Submission

The following components use forms:
* Contact Component (`src/app/pages/contact/contact.component.ts`)
* Portfolio Component (`src/app/pages/portfolio/portfolio.component.ts`)
* Career Component (`src/app/pages/career/career.component.ts`)
* Training Component (`src/app/pages/training/training.component.ts`)

These components handle form submissions by calling the corresponding APIs from `https://api.invictussolutions.co/`. The response are handled with the new subscribe syntax using `next` and `error` to appropriately display success and error messages to the user.

### Environment Variables

The `server.ts` file uses the `PORT` environment variable:

```typescript
const port = process.env['PORT'] || 4000;
```

Set the `PORT` environment variable to specify the port the server should listen on.

## 7. API Documentation

This application consumes a REST API from `https://api.invictussolutions.co/`. The specific endpoints used are:

*   `api/careers`:  To retrieve job listings (GET).
*   `api/applycareers`: To submit career applications (POST).
*   `api/courses`: To retrieve course listings (GET).
*   `api/applycourses`: To submit training applications (POST).
*   `api/contact`: To submit contact form data (POST).
*   `api/free/consultation`:  To submit free consultation requests (POST).

Please refer to the API documentation at `https://api.invictussolutions.co/` for more details about the API endpoints, request parameters, and response formats.

## 8. Contributing Guidelines

We welcome contributions to this project.  Please follow these guidelines:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive commit messages.
4.  Test your changes thoroughly.
5.  Submit a pull request to the `main` branch.

## 9. License Information

No license information is provided in the repository.  All rights are reserved by Invictus Solutions.

## 10. Contact/Support Information

For questions or support, please contact:

*   Email: info@invictussolutions.co
*   Website: https://invictussolutions.co/
*   Phone: +92 (041) 2408084

## Static file structure

The project uses a `assets` folder at the root of the `src` directory to host the static files.
