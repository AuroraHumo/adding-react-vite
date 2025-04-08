import { useState } from "react";
import { NewTabs } from "../data/tabs";
import Button from "./buttonComponent";

export default function TabsComponent() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <ul className="tab-menu">
        { NewTabs.map((tab, index) => (
              <button key={index}
              className={`button button-blue ${activeTab === index ? "t-active" : ""}`} 
              onClick={() => setActiveTab(index)}> 
              {tab.title}
            </button>
          ))}
          
      </ul>
      <div className="half text-center">
        <img src={NewTabs[activeTab].url} className="img-tab"/>
      </div>
      <div className="half text-left">
        <h2>{NewTabs[activeTab].title}</h2>
        <p>{NewTabs[activeTab].description}</p>
        <Button className="button button-blue">More info</Button>
      </div>
    </>
  );
}
