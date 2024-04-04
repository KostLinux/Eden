# Eden

Eden is an web application written in Go as backend and React + TypeScript + TailwindCSS as frontend. The main goal is to self-educate myself in a web development field, but also to create a high performance web application that can be used by anyone. 

Eden is a web application that allows users to get to their goals by creating a list of tasks that they need to do.

## Frameworks used

- GinGonic as HTTP Server
- Goose as Database Migrations
- GoDotEnv as .env file parser
- TailwindCSS + TypeScript + React + Vite as Frontend Framework

## Compatibility table

|         | Desktop | Mobile | Tablets |
|---------|:-------:|:--------------:|:----:|
| Support |   ✅    |       ❌       |  ❌  |


## Technologies used

- [Dependabot](https://github.com/dependabot) - Dependency Management
- [Gin Gonic](https://github.com/gin-gonic/gin) - Golang Web Framework
- [Goose](https://github.com/pressly/goose) - Golang Migrations framework
- [GoDotEnv](https://github.com/joho/godotenv) - Golang .env file parser
- [Golang CI Lint](https://github.com/golangci/golangci-lint) - Golang Linter
- [GoSec](https://github.com/securego/gosec) - Golang Security Scan
- [TailwindCSS](https://tailwindcss.com/docs/installation/play-cdn) - CSS Framework from the CDN
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript

## Features

- About Page [x]
- Tasks - In Progress [ ]

## Folder structure

- `docs` - Documentation for the web application
- `migrations/` - Database migrations for the web application
- `public/` - Static files for the UI
- `public/errors` - Error pages served via [Gin Gonic Error Handlers](./src/handlers/error_handlers.go)
- `public/views` - HTML templates configured via Gin Gonic Handlers. You can look at example [here](./src/handlers/status_handlers.go)
- `src/config` - Configuration for the web application
- `src/handlers` - Handlers for the web application, contain error, status, API request and other handlers
- `src/http` - HTTP Server Configuration
- `src/models` - Models for the web application, contain data structures for the web application
- `src/routes` - Routes for the web application, contain all the routes for the web application
- `src/services` - External services that the web application uses (like database connections, redis etc)
- `tests/` - GO Unit Tests for the web application
- `ui/` - Frontend side of the web application

## Available Make Commands

- `make build` - Build the application
- `make run` - Run the application
- `make test` - Run the tests
- `make fumpt` - Run the go fmt
- `make linter` - Run the comprehensive [GolangCILint](.golangci.yml) to check the code quality
- `make gosec` - Run the GoSec to check code for vulnerabilities
- `make mod-vendor` - Vendor the dependencies
- `make validate` - Runs `make linter`, `make test` and `make gosec` to validate the code
- `make migrate-create MIGRATION_NAME` - Create a new migration
- `make migrate-up` - Run the migrations
- `make migrate-down` - Rollback the migrations

## Available Paths

- `/dashboard` - Main page
- `/about` - About page
- `/status` - Status page
- `API_PATH/ping` - API check endpoint
- `API_PATH/users` - Sample Users API endpoint

**Note!** Replace `API_PATH` with the actual path of the application. By default it's `/api/v1/`

## Managing environment variables

Environment variables are managed via struct in [envConfig Model](./src/model/envConfig.go). 

You can add new environment variables in the struct and configure the defaults in [envConfig Configuration File](./src/config/envConfig.go).

## Getting Started

1. Clone the repository

```bash
git clone git@github.com:KostLinux/Eden.git
```

2. Change the directory

```bash
cd Eden
```

3. Configure .env (optional)

```bash
cp .env.example .env && nano .env
```

4. Run the application

```bash
make run
cd ui && npm run dev
```

5. Visit the application in your browser

Feel free to visit the application at localhost:5167 and move around available paths

## Contribution

Feel free to contribute to the project by creating a pull request. Make sure to follow the [Contribution Guidelines](https://docs.github.com/en/get-started/exploring-projects-on-github/contributing-to-a-project).