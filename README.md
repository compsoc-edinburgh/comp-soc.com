# CompSoc

Welcome to CompSoc - The University of Edinburgh's Tech Society!

This repository contains the source code for our main website, [comp-soc.com](https://comp-soc.com). The website features:

- Information about our society
- Details about our Special Interest Groups (SIGs)
- Current and past committee members
- Meeting minutes
- CompSoc news, sponsors and updates

The website is built using:

- NextJS
- TailwindCSS
- Static site generation
- GitHub Pages hosting

This is the latest iteration of our website, following several [previous versions](https://github.com/compsoc-edinburgh/website).

While NextJS typically runs dynamically, we currently generate a static version for GitHub Pages hosting. We plan to transition to a dynamic NextJS application hosted on [Tardis](https://tardisproject.uk/) in the future.

Want to contribute? Follow the setup instructions below to get the project running on your machine.

## Installation

### Installing Node

1. **Download Node.js**: Go to the [Node.js website](https://nodejs.org/) and download the latest stable version for your operating system.

2. **Install Node.js**: Follow the installation steps for your OS:

   - **Windows**: Run the `.msi` installer and follow the prompts.
   - **macOS**: Run the `.pkg` installer.
   - **Linux**: Use the package manager:
     ```bash
     sudo apt install nodejs npm
     ```

3. **Verify Installation**: Open a terminal and check if Node and npm are installed:
   ```bash
   node -v
   npm -v
   ```

### Cloning the Project

1. **Fork the Repository**: Click on the "Fork" button at the top of the repository page.

2. **Clone Your Fork**: Clone the project to your local machine:

   ```bash
   git clone https://github.com/YOUR_USERNAME/comp-soc.com.git
   ```

3. **Navigate to the Project Directory**:
   ```bash
   cd comp-soc.com
   ```

### Running the Project

1. **Install Dependencies**: Install the necessary packages using npm:

   ```bash
   npm install
   ```

2. **Start the project**:

   ```bash
   npm run dev
   ```

3. **Open in browser**:
   Usually, the project will be running at `http://localhost:3000`. You can open it in your browser to view.

## Contributing

We welcome contributions! Here's a simple guide to get started:

1. **Create a New Branch**:

   ```bash
   git checkout -b feature/feature-name
   ```

2. \*\*Make your Changes:
   write your code and commit with a clear message:

   ```bash
   git commit -m "Detailed message"
   ```

3. **Push to your Forked Repository**:

   ```bash
   git push orgin feature/feature-name
   ```

4. **Open a Pull Request**:
   Go to your fork on GitHub, and you'll see a prompt to open a pull request.

## Adding Meeting Minutes and News Posts

1. Go to the folder `/constants`.

2. There are two folders `minutes` and `news`, Both of this hold `.md` files.

3. You can add your `.md` file to the corresponding folder.

4. Open a Pull Request to get the changes on CampSoc.
