import React from "react";
import Dropdown from "./dropdown";
import data from "../data/animals.json";
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState(null);

  return (
    <div style={{ width: 200 }}>
      <Dropdown
        options={data}
        prompt="Select animal"
        id="id"
        label="name"
        value={value}
        onChange={(val) => setValue(val)}
      />
    </div>
  );
}
