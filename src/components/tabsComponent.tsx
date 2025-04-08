import { useState } from "react";
import { NewTabs } from "../data/tabs";
import Button from "./buttonComponent";

export default function TabsComponent() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <ul className="tab-menu">
        <button 
          className={`button button-blue ${activeTab === 0? "t-active" : ""}`} 
          onClick={() => setActiveTab(0)}
        >
          Simple Bookmarking
        </button>
        <button 
          className={`button button-blue ${activeTab === 1 ? "t-active" : ""}`} 
          onClick={() => setActiveTab(1)}
        >
          Speedy Searching
        </button>
        <button 
          className={`button button-blue ${activeTab === 2 ? "t-active" : ""}`} 
          onClick={() => setActiveTab(2)}
        >
          Easy Sharing
        </button>
      </ul>
      <div className="half text-center">
        <img src={NewTabs[activeTab].url} className="img-tab" alt="..."/>
      </div>
      <div className="half text-left">
        <h2>{NewTabs[activeTab].title}</h2>
        <p>{NewTabs[activeTab].description}</p>
        <Button className="button button-blue">More info</Button>
      </div>
    </>
  );
}
