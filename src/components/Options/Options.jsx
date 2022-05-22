import React, { useState } from "react";
import TabOptions from "./TabOptions/TabOptions";
import Tab from "./Tabs/Tab/Tab";
import Tabs from "./Tabs/Tabs";

const Options = ({ options }) => {
  const [selectedTab, setSelectedTab] = useState({});
  return (
    <div data-cy="options">
      {options.map((option, index) => (
        <Tab
          key={index}
          currentTab={selectedTab}
          onChange={setSelectedTab}
          label={option.label}
        />
      ))}
      <Tabs />
      <TabOptions />
    </div>
  );
};

export default Options;
