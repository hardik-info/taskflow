# TaskFlow - Task Management Application

TaskFlow is a Node.js based task management application designed to showcase SonarCloud's code quality analysis. It contains several intentional issues detected by SonarCloud's static code analysis, such as unused variables, incorrect logging, and missing error handling.

## Features

- Task creation and management
- User authentication (simple)
- Task prioritization and tracking

## Project Structure

- `src/`: Contains the main application code, including intentional issues like unused variables and missing error handling.
- `test/`: Includes test files with issues related to asynchronous handling, missing assertions, and improper mocking.
- `.eslintrc.js`: ESLint configuration file for static analysis.
- `sonar-project.properties`: SonarCloud configuration file for code analysis.

## Prerequisites

- You need to have Node.js and npm installed on your system. If not, you can download and install Node.js from [here](https://nodejs.org/) which includes npm.
- Additionally, you need to have SonarQube installed on your system which can be downloaded from [here](https://www.sonarqube.org/downloads/).
- A text editor preferably VS Code.
- Working knowledge of Node.js and JavaScript.

## Setup (Mac)

1. In the terminal, clone the repository:
   ```bash
   git clone <repo_url>
   ```
2. Navigate into the directory:
   ```bash
   cd <project_directory>
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the application:
   ```bash
   npm start
   ```
## Setup (Windows)

1. In Command Prompt, clone the repository:
   ```bash
   git clone <repo_url>
   ```
2. Navigate into the directory:
   ```bash
   cd <project_directory>
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the application:
   ```bash
   npm start
   ```

## Running Tests

1. To run tests:
   ```bash
   npm test
   ```
2. To run SonarCloud analysis locally:
   ```bash
   sonar-scanner
   ```

## SonarCloud Integration

- This project is integrated with SonarCloud to continuously analyze code quality.
- You can check the SonarCloud dashboard for detailed reports and suggestions for improvement.


## Deployment

The code relating to the CI/CD pipeline should be referred for deployment steps.
