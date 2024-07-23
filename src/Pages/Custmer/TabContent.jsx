import React from "react";
import Yourneeds from "./Yourneeds";
import SavedReports from "./SavedReports";
import TailoredReport from "./TailoredReport";

function TabContent({ activeTab }) {
  const renderContent = () => {
    switch (activeTab) {
      case "first":
        return <Yourneeds title="Your needs" />;
      case "second":
        return <SavedReports title="Saved Reports" />;
      case "third":
        return <TailoredReport title="Tailored Reports" />;
      default:
        return null;
    }
  };

  return <div>{renderContent()}</div>;
}

export default TabContent;