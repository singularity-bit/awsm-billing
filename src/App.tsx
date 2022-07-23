import React, { useEffect } from "react";
import { useAppSelector } from "./hooks/redux";
import { useAction } from "./hooks/useAction";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  const { checkTokenAction } = useAction();
  useEffect(() => {
    checkTokenAction();
  }, []);
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
