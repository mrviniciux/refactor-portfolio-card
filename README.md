# Next.js Project Template

This is a **Next.js** project created with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), a tool for quickly starting **Next.js** applications. **Next.js** is a framework built on top of **React** that simplifies routing, server-side rendering, and other advanced features for building modern web applications.

![Project Screenshot](https://github.com/user-attachments/assets/5a153f6c-9f01-4292-9b2a-63b9594f4a5c)

## Minimum requirements
* Node v20 - Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.
tip: try use a Node Version Manager like nvm

## Prerequisites

### 1. Install Node.js

To run this project, you need to have **Node.js** installed on your system. If you don’t have it installed yet, download the latest version from the [official Node.js website](https://nodejs.org). Node.js includes **npm** (Node Package Manager), which is necessary for managing dependencies in the project.

Verify the installation by running this command in your terminal:

```bash
node -v
```

If you prefer using **yarn** (an alternative to npm) or another package manager like **pnpm** or **bun**, make sure it’s installed globally on your machine. You can install **yarn** with the following command:

```bash
npm install -g yarn
```

### 2. Setting Up the Project

Once you’ve installed Node.js, clone or download this repository, navigate to the project folder, and install the project dependencies using one of the following commands:

If using **npm**:
```bash
npm install
```

Or if using **yarn**:
```bash
yarn
```

Other alternatives include **pnpm** or **bun**, depending on your preference.

## Running the Development Server

To start the development server and view the application in your browser, use one of the following commands:

If using **npm**:
```bash
npm run dev
```

Or, if using **yarn**:
```bash
yarn dev
```

You can also use **pnpm** or **bun**:
```bash
pnpm dev
# or
bun dev
```

This will start a local server at [http://localhost:3000](http://localhost:3000), where you can interact with the application. Changes to the code will automatically reflect in the browser without needing to refresh the page.

## Editing the Application

You can start customizing the application by editing the file located at:

```bash
app/page.tsx
```

**Next.js** automatically updates the page whenever you make changes to this file, allowing for a smooth development experience.
