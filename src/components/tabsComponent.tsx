import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TabComponent = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </TabList>
      <TabPanel>
        <div>Content for Tab 1</div>
      </TabPanel>
      <TabPanel>
        <div>Content for Tab 2</div>
      </TabPanel>
      <TabPanel>
        <div>Content for Tab 3</div>
      </TabPanel>
    </Tabs>
  );
};

export default TabComponent;