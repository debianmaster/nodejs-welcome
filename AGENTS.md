<general_rules>
This repository follows a flat directory structure with all source code in the root directory. When making changes, always examine the existing server.js file first as it contains the single entry point for the application. The repository uses npm as the package manager with a single "start" script defined in package.json. There are no linting tools (ESLint), formatting tools (Prettier), or pre-commit hooks configured, so developers should maintain consistent code style manually. When adding new functionality, extend the existing Express routes in server.js rather than creating separate modules unless the application grows significantly in complexity.
</general_rules>

<repository_structure>
This is a simple Node.js Express web application with a flat directory structure. The main entry point is server.js, which contains an Express server that listens on port 8080 and binds to '0.0.0.0'. The application provides three endpoints: a root endpoint ('/') that returns a hello world message with hostname, a health check endpoint ('/healthz') that returns the application's health status, and a '/cancer' endpoint that sets the health status to unhealthy. The server includes a SIGTERM handler for graceful shutdown. All application logic is contained within the single server.js file, with package.json defining the project metadata and dependencies, and .npmrc containing npm registry configuration.
</repository_structure>

<dependencies_and_installation>
This project uses npm as the package manager with custom registry configuration defined in .npmrc (strict-ssl=false, registry=http://registry.npmjs.org/). The application has minimal dependencies: express (^4.13.3) for the web framework and cors (^2.8.1) for cross-origin resource sharing. To install dependencies, run `npm install` from the root directory. The .npmrc file will automatically configure npm to use the specified registry settings. Dependencies are managed through package.json and package-lock.json, with node_modules excluded from version control via .gitignore.
</dependencies_and_installation>

<testing_instructions>
Currently, there is no testing framework configured in this repository. No test files, test scripts, or testing dependencies exist. For future test implementation, consider adding a testing framework like Jest or Mocha to package.json and creating a test script in the scripts section. Tests should focus on the Express endpoints (/, /healthz, /cancer) and the health status functionality. When implementing tests, create a test directory or place test files alongside the source code with appropriate naming conventions (e.g., server.test.js). Ensure tests cover both successful responses and error conditions, particularly for the health check functionality.
</testing_instructions>

