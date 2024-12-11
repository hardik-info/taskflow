# TaskFlow - Task Management Application

TaskFlow is a simple task management application built to demonstrate SonarCloud's code quality analysis. The project includes several intentional issues that are detected by SonarCloud's static analysis, including unused variables, improper logging, and missing error handling.

## Features

- Task creation and management
- User authentication (simple)
- Task prioritization and tracking

## Project Structure

- `src/`: Contains the main application code, including intentional issues like unused variables and missing error handling.
- `test/`: Includes test files with issues related to asynchronous handling, missing assertions, and improper mocking.
- `.eslintrc.js`: ESLint configuration file for static analysis.
- `sonar-project.properties`: SonarCloud configuration file for code analysis.

## Setup

1. Clone the repository to your local machine:
   ```bash
   git clone <repo_url>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the application:
   ```bash
   npm start
   ```

## Running Tests

1. Run tests:
   ```bash
   npm test
   ```

2. Run SonarCloud analysis locally:
   ```bash
   sonar-scanner
   ```

## SonarCloud Integration

- This project is integrated with SonarCloud to continuously analyze code quality.
- Check the SonarCloud dashboard for detailed reports and suggestions for improvement.
```

---

### Summary

This Node.js project **TaskFlow** includes intentional code quality issues across various files that SonarCloud will detect. These issues will help you test the effectiveness of your AI tool for code analysis and resolution.


