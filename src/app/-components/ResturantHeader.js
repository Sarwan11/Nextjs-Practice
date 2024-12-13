import React from "react";

const ResturantHeader = () => {
  return (
    <div className="flex justify-between px-4 py-2 items-center ">
      <div>
        <img width={100} src="/foodlogo.jpg" alt="logo" />
      </div>
      <div>
        <ul className="flex gap-4 cursor-pointer ">
          <li>Home</li>
          <li>Content</li>
          <li>Paragraph</li>
        </ul>
      </div>
    </div>
  );
};
export default ResturantHeader;
