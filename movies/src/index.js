import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* This code is creating a root element using `ReactDOM.createRoot()` and rendering the `<App />`
component inside it. The root element is obtained by calling `document.getElementById('root')`,
which is typically a `<div>` element in the HTML file where the React application is mounted. The
`<React.StrictMode>` component is used to enable additional checks and warnings for potential issues
in the application. */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
