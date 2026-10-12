# Soyeb Ahmed --- Developer Portfolio

A personal developer portfolio built with Next.js, React, TypeScript,
and Tailwind CSS. It showcases my technical skills, projects,
professional experience, certifications, coding profiles, GitHub
activity, achievements, and contact information.

-   **Live website:** https://soyebahmed.vercel.app
-   **GitHub repository:** https://github.com/SoyebAhmed5/portfolio

## Features

-   Responsive portfolio layout for desktop, tablet, and mobile screens
-   Light and dark theme support
-   Hero section with profile image and links to projects and resume
-   About section and technical skills
-   Project cards with technology tags and project/demo links
-   Experience and certification sections
-   GitHub contribution dashboard
-   Competitive programming and coding-profile section
-   Achievements and journey timeline
-   Contact form with server-side validation
-   SEO support through metadata, sitemap, and robots configuration
-   Vercel Analytics and Speed Insights integration

## Tech Stack

-   **Framework:** Next.js App Router
-   **UI:** React and TypeScript
-   **Styling:** Tailwind CSS
-   **Animation:** Framer Motion and GSAP
-   **Icons:** Lucide React and React Icons
-   **Forms and validation:** React Hook Form and Zod
-   **Theme support:** next-themes
-   **GitHub activity:** GitHub API / GraphQL integration
-   **Deployment:** Vercel

## Getting Started

### Prerequisites

Install a recent Node.js LTS version and npm.

### 1. Clone the repository

``` bash
git clone https://github.com/SoyebAhmed5/portfolio.git
cd portfolio
```

### 2. Install dependencies

``` bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the project root. Add the variables needed
for the features you want to enable:

``` env
NEXT_PUBLIC_GITHUB_USERNAME=your-github-username
GITHUB_GRAPHQL_TOKEN=your-github-token
EMAIL_USER=your-email-address
EMAIL_PASS=your-email-app-password
```

-   `NEXT_PUBLIC_GITHUB_USERNAME` is used to load GitHub
    profile/contribution information.
-   `GITHUB_GRAPHQL_TOKEN` is used for authenticated GitHub GraphQL
    requests.
-   `EMAIL_USER` and `EMAIL_PASS` are used by the contact form's email
    delivery configuration.

Use a GitHub token with only the permissions required by the
application. Use an app password or provider-approved credential for
email where applicable. **Never commit `.env.local` or expose private
tokens in client-side code.** If you only want to run the site locally
without GitHub or email features, configure the required variables for
those features before testing them.

### 4. Start the development server

``` bash
npm run dev
```

Open <http://localhost:3000> in your browser.

## Available Scripts

  Command           Description
  ----------------- --------------------------------------------
  `npm run dev`     Start the local development server
  `npm run build`   Create a production build
  `npm run start`   Start the production server after building
  `npm run lint`    Run ESLint

## Project Structure

``` text
portfolio/
├── app/                  # App Router pages, API routes, metadata, sitemap
├── components/           # Portfolio sections and reusable UI components
├── data/                 # Portfolio content and data (where applicable)
├── hooks/                # Custom React hooks
├── lib/                  # GitHub integration, utilities, contact validation
├── public/                # Profile image, resume, icons, and other static assets
├── types/                # TypeScript types
├── package.json
└── README.md
```

The exact files and folders may vary as the portfolio evolves.

## Customization

-   Update project details and links in the project's data/configuration
    files.
-   Update experience, certifications, skills, and achievements in the
    relevant section components or data files.
-   Replace the profile image and resume in `public/`, keeping file
    paths in sync with the code.
-   Update GitHub username and integration credentials in `.env.local`.
-   Review theme colors and global styles in `app/globals.css` and the
    relevant component classes.
-   Update page metadata in `app/layout.tsx` when changing the portfolio
    title or description.

## Deployment

The project can be deployed on [Vercel](https://vercel.com/):

1.  Push the repository to GitHub.
2.  Import the repository into Vercel.
3.  Add the required environment variables in the Vercel project
    settings.
4.  Deploy and test the live site in both light and dark themes and at
    mobile, tablet, and desktop widths.

## Notes

-   Do not commit `.env.local`, API tokens, email passwords, or other
    secrets.
-   Verify external project, resume, social, and certificate links
    before publishing.
-   Run `npm run build` before deployment to catch production-build
    errors.

## License

This repository is a personal portfolio project. Add a license file if
you intend to grant others explicit permission to reuse, modify, or
redistribute the code.
