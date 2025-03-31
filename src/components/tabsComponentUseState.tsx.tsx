import { useState } from "react";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div>
      {/* Menú de pestanyes */}
      <ul className="tab-menu">
        <button 
          className={`tab-item ${activeTab === "tab1" ? "active" : ""}`} 
          onClick={() => setActiveTab("tab1")}
        >
          Simple Bookmarking
        </button>
        <button 
          className={`tab-item ${activeTab === "tab2" ? "active" : ""}`} 
          onClick={() => setActiveTab("tab2")}
        >
          Speedy Searching
        </button>
        <button 
          className={`tab-item ${activeTab === "tab3" ? "active" : ""}`} 
          onClick={() => setActiveTab("tab3")}
        >
          Easy Sharing
        </button>
      </ul>

      {/* Contingut de les pestanyes */}
      <div className="tab-content">
        {activeTab === "tab1" && (
          <div className="tab-pane">
            <h2>Bookmark in one click</h2>
            <p>Organitza els teus marcadors com vulguis...</p>
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
  );
}
