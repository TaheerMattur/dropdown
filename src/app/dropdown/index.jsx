import React from "react";
import "./styles.css";
import { useState, useRef, useEffect } from "react";

export default function Dropdown({
  options,
  id,
  label,
  prompt,
  value,
  onChange,
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener("click", close);
    return () => {
      document.removeEventListener("click", close);
    };
  }, []);

  function close(e) {
    console.dir([e.target, ref.current]);
    setOpen(e && e.target === ref.current);
  }

  function filter(options) {
    return options.filter(
      (option) => option[label].toLowerCase().indexOf(query.toLowerCase()) > -1
    );
  }

  function displayValue() {
      if(query.length > 0) return query;
      if(value) return value[label];
      return "";
  }

  return (
    <div className="dropdown">
      <div className="control" onClick={() => setOpen((prev) => !prev)}>
        <div className="selected-value" ref={ref}>
          <input
            type="text"
            ref={ref}
            value={displayValue()}
            placeholder={value ? value[label] : prompt}
            onChange={(e) => {
            setQuery(e.target.value);
            onChange(null);
            }}
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={`arrow ${open ? "open" : null}`}/>
      </div>
      <div className={` options ${open ? "open" : null}`}>
        {filter(options).map((option) => (
          <div
            key={option[id]}
            className={` option ${value === option ? "selected" : null}`}
            key={option.id}
            onClick={() => {
              onChange(option);
              setOpen(false);
              setQuery("");
            }}
          >
            {option[label]}
          </div>
        ))}
      </div>
    </div>
  );
}
