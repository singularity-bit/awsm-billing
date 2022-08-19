import React from "react";
import { useAction } from "./hooks/useAction";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  const { checkTokenAction } = useAction();
  const token = localStorage.getItem('token');
  if (token) {
    checkTokenAction({ isAuth: true })
  }
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
