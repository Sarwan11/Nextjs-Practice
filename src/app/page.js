"use client";
import React, { useState } from "react";

const page = () => {
  const [to, setTo] = useState("Alice");
  const [message, setMessage] = useState("hello");
  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      alert(`you say the ${message} to ${to}`);
    }, 2000);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label>To:</label>
        <select name="" id="">
          <option value="">Alice</option>
          <option value="">Nobita</option>
          <option value="">Vardaan</option>
        </select>
        <textarea
          defaultValue={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button type="submit">submit</button>
      </form>
    </div>
  );
};
export default page;
