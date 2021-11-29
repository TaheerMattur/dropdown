import React, { useState } from "react";
import Dropdown from "./components/Dropdown"
import data from "./data/animals.json";

export default function App() {

  const [value, setValue] = useState(null);

  return (
    <div style={{ width: 200 }}>
      <Dropdown
        options = {data}
        prompt="Select animals.."
        id="id"
        label="name"
        value={value}
        onChange={val => setValue(val)}
      />
    </div>
  );
}