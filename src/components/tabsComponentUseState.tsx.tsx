import { useState } from "react";
import TabAtoms from "./tabAtoms";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <>
    <div>
      <ul className="tab-menu">
        <button 
          className={`button chrome ${activeTab === "tab1" ? "t-active" : ""}`} 
          onClick={() => setActiveTab("tab1")}
        >
          Simple Bookmarking
        </button>
        <button 
          className={`button chrome ${activeTab === "tab2" ? "t-active" : ""}`} 
          onClick={() => setActiveTab("tab2")}
        >
          Speedy Searching
        </button>
        <button 
          className={`button chrome ${activeTab === "tab3" ? "t-active" : ""}`} 
          onClick={() => setActiveTab("tab3")}
        >
          Easy Sharing
        </button>
      </ul>
    </div>
    <div className="container">     
      <div className="">
        {activeTab === "tab1" && (
          <div className="tab-pane">
            <TabAtoms/>
          </div>
        )}
        {activeTab === "tab2" && (
          <div className="tab-pane">
            <h2>Speedy Searching</h2>
            <p>Troba els teus marcadors en segons...</p>
          </div>
        )}
        {activeTab === "tab3" && (
          <div className="tab-pane">
            <h2>Easy Sharing</h2>
            <p>Comparteix els teus marcadors fàcilment...</p>
          </div>
        )}
      </div>
    </div>
    </>
  );
}
