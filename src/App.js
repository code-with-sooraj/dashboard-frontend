import React from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      <Sidebar className="w-full md:w-1/4 lg:w-1/5" />
      <div className="flex flex-col flex-grow">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
