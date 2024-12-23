# React Weather App

This is a weather app created using React and Material UI.

![image](https://github.com/user-attachments/assets/11a46302-6de7-4644-bbf0-0d4edbb47ea7)


# Running the React App Locally
Follow these steps to run the React app locally on your machine:

# Prerequisites
Make sure you have the following installed on your machine:

Node.js (v14.x or higher)

npm (comes with Node.js) or yarn

# Steps
## Clone the Repository:

```bash
git clone https://github.com/MohammmadAnas/WeatherApp.git
```

## Navigate to the Project Directory:

```bash
cd WeatherApp
```

## Install Dependencies: 
If you are using npm:

```bash
npm install
```
If you are using yarn:

```bash
yarn install
```

## Start the Development Server: 
If you are using npm:

```bash
npm run dev
```
If you are using yarn:

```bash
yarn dev
```

## Open the App in Your Browser:

After starting the development server, open your browser and navigate to http://localhost:5173 (or the port specified in the terminal).

# Additional Notes
## Building for Production: To create a production build of the app, run:

```bash
npm run build
```

```bash
yarn build
```
The build output will be located in the dist directory.

## Serving the Production Build: To serve the production build locally, you can use a tool like serve:

```bash
npm install -g serve
serve -s dist
```


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
