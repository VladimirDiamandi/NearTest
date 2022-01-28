
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { IRoute, PublicRoutes } from 'routes/routes';

function App() {
  return (
    <div className="App">
      <Routes>
        {PublicRoutes.map((route: IRoute) => (
          <Route path={route.path} element={route.element} key={route.path} />
        ))}
        <Route path="*" element={<Navigate to="/" key="*" />} />
      </Routes>
    </div>
  );
}

export default App;
