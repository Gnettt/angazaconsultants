import Sidebar from "../Components/sidebar";
import React from "react";

function SidebarSection({ onProgramSelect }) {
  return (
    <div className="col-md-3 bg-light min-vh-100 p-3 border-end">
      <Sidebar onProgramSelect={onProgramSelect} />
    </div>
  );
}

export default SidebarSection;