# GitHub User Activity CLI

A simple and lightweight command-line interface (CLI) to fetch and display the recent activity of any GitHub user directly in your terminal, based on [Roadmap.sh Github User Activity Project](https://roadmap.sh/projects/github-user-activity). 

This is a great tool for quickly checking what developers have been working on without leaving your terminal.

## Features
- 🚀 Fetches the latest events from the public GitHub API.
- 🧹 Displays activity cleanly (e.g., Pushed commits, Opened issues, Starred repositories).
- 🔐 Supports GitHub Personal Access Tokens (PAT) via `.env` to prevent rate-limiting.
- 🛡️ Built with TypeScript for robust error handling.

## Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- npm or yarn

## Installation

1. **Clone this repository:**
   ```bash
   git clone [https://github.com/caioledan/github-user-activity-cli.git](https://github.com/caioledan/github-user-activity-cli.git)
   cd github-user-activity-cli
   ```

2. **Install the dependencies:**
   ```bash
   npm install
   ```

3. **Compile the TypeScript code:**
   ```bash
   npm run build
   ```
   *(This will compile the `.ts` files and place the executable `.js` file inside the `dist/` folder).*

4. **Link the package globally:**
   ```bash
   npm link
   ```
   *(This tells your operating system to recognize `github-activity` as a valid global command).*

## Configuration (Optional but recommended)

The GitHub API limits unauthenticated requests to 60 per hour. To increase this limit and avoid errors, you can use a Personal Access Token.

1. Create a `.env` file in the root of the project (you can copy from `.env.example` if available).
2. Add your GitHub token:
   ```env
   GITHUB_TOKEN=your_personal_access_token_here
   ```

## Usage

After installing and linking, you can run the tool from anywhere in your terminal using:

```bash
github-activity <username>
```

**Example:**
```bash
github-activity octocat
```

**Sample Output:**
```text
Searching github activity of: octocat
- Pushed to octocat/Hello-World
- Opened an issue in octocat/Hello-World
- Starred torvalds/linux
```

## Built With
- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [GitHub REST API](https://docs.github.com/en/rest)

## License
This project is open-source and available under the [MIT License](LICENSE).
