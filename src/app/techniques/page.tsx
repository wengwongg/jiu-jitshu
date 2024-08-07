"use client";
import TabList from "@/components/TabList";
import { useState } from "react";

const techniqueCategories = [
  "Takedowns",
  "Chokeholds",
  "Joint locks",
  "Sweeps",
  "Guards/Positions",
];

export default function Techniques() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main>
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">My Techniques</h1>
        <button className="btn btn-primary btn-md">Add</button>
      </div>
      <br />
      <TabList
        tabs={techniqueCategories.map((t, i) => ({
          name: t,
          active: i === activeTab,
        }))}
        activeTabHandler={setActiveTab}
      />
      <br />
    </main>
  );
}
