import { useState } from "react";
import TabAtom1 from "./tabAtom1";
import TabAtom2 from "./tabAtom2";
import TabAtom3 from "./tabAtom3";

export default function TabsComponent() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <>
    
      <ul className="tab-menu">
        <button 
          className={`button button-blue ${activeTab === "tab1" ? "t-active" : ""}`} 
          onClick={() => setActiveTab("tab1")}
        >
          Simple Bookmarking
        </button>
        <button 
          className={`button button-blue ${activeTab === "tab2" ? "t-active" : ""}`} 
          onClick={() => setActiveTab("tab2")}
        >
          Speedy Searching
        </button>
        <button 
          className={`button button-blue ${activeTab === "tab3" ? "t-active" : ""}`} 
          onClick={() => setActiveTab("tab3")}
        >
          Easy Sharing
        </button>
      </ul>
    
    
      
        {activeTab === "tab1" && (
          <div className="tab-pane">
            <TabAtom1/>
          </div>
        )}
        {activeTab === "tab2" && (
          <div className="tab-pane">
            <TabAtom2/>

          </div>
        )}
        {activeTab === "tab3" && (
          <div className="tab-pane">
            <TabAtom3/>

          </div>
        )}
      
    </>
  );
}
