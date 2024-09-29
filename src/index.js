// Step 1: Import React and ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";

// Step 2: Create a simple functional component
function App() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

// Step 3: Render the component into the root DOM element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
