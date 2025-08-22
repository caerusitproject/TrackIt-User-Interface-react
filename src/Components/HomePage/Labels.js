import React, { useState } from "react";
import {NavbarContainer,
TopTabsContainer,
TabButton} from '../../styled_components/navbar.styled'

export default function TopTabsExample() {
  const [activeTab, setActiveTab] = useState("myView");

  return (
    <TopTabsContainer>
      <TabButton
        active={activeTab === "myView"}
        onClick={() => setActiveTab("myView")}
      >
        <i className="bi bi-person"></i> My View
      </TabButton>

      <TabButton
        active={activeTab === "scheduler"}
        onClick={() => setActiveTab("scheduler")}
      >
        <i className="bi bi-calendar2"></i> Scheduler
      </TabButton>
    </TopTabsContainer>
  );
}
