# BuildTrack - Construction Management System

BuildTrack is a web-based Construction Management System developed to help manage and monitor construction projects efficiently. The application provides features for managing projects, tracking project budgets and expenses, and generating and viewing project reports.

## Project Overview

Construction projects involve multiple activities, budgets, expenses, and reports. BuildTrack provides a simple interface to organize and manage these activities in one system.

The application currently includes the following main modules:

- Project Management
- Budget and Cost Management
- Reports and Documentation

Users can add, view, search, and delete records through an interactive user interface.

## Features

### 1. Project Management

The Project Management module allows users to manage construction projects.

Features include:

- View all construction projects
- Add new projects
- Search for projects
- View detailed project information in a dialog box
- Delete projects with a confirmation dialog
- Display project manager details
- Display project start and end dates
- Track project status

### 2. Budget and Cost Management

The Budget and Cost Management module helps users track project budgets and expenses.

Features include:

- View total budget
- View total expenses
- View remaining budget
- Add new project budgets
- Search for projects
- View detailed budget information in a dialog box
- Delete budget records with a confirmation dialog
- Calculate remaining budget
- Calculate budget utilization percentage
- Display budget status such as On Track, High Usage, and Over Budget

### 3. Reports and Documentation

The Reports module helps manage construction project reports.

Features include:

- View available reports
- Search reports
- View complete report details in a dialog box
- Delete reports with a confirmation dialog
- Display report name
- Display associated project
- Display report type
- Display report date
- Track report status

## Technologies Used

The project is developed using:

- Angular
- TypeScript
- HTML
- CSS
- Angular Routing
- Angular Forms
- Git
- GitHub

## Application Structure

```text
frontend/
│
├── src/
│   ├── app/
│   │   ├── budget/
│   │   │   ├── budget.ts
│   │   │   ├── budget.html
│   │   │   └── budget.css
│   │   │
│   │   ├── projects/
│   │   │   ├── projects.ts
│   │   │   ├── projects.html
│   │   │   └── projects.css
│   │   │
│   │   ├── reports/
│   │   │   ├── reports.ts
│   │   │   ├── reports.html
│   │   │   └── reports.css
│   │   │
│   │   ├── app.ts
│   │   ├── app.html
│   │   ├── app.css
│   │   ├── app.routes.ts
│   │   └── app.config.ts
│   │
│   ├── main.ts
│   └── styles.css
│
├── package.json
├── angular.json
├── tsconfig.json
└── README.md