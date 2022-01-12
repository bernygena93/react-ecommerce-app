import React from "react";
import { useNavigate } from "react-router";

export default function Items({ option, path }) {
  const navigate = useNavigate();

  const handlePath = () => {
    navigate(path);
  };
  return (
    <div aria-hidden="true" onClick={handlePath}>
      <p>{option}</p>
    </div>
  );
}
