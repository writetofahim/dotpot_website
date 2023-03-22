import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "../partials/Header";
import Sidebar from "../partials/Sidebar";

function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <Outlet />
        </main>

        {/* <Banner /> */}
      </div>
    </div>
  );
}

export default DashboardLayout;
