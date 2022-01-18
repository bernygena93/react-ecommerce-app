import React, { useContext } from "react";
import { useNavigate } from "react-router";
import EcommerceContext from "../../context/EcommerceContext";

export default function Items({ option, path }) {
  const context = useContext(EcommerceContext);
  const navigate = useNavigate();

  const handlePath = () => {
    if (path === "/") {
      context.logoutUser();
    }
    navigate(path);
  };
  return (
    <div aria-hidden="true" onClick={handlePath}>
      <p>{option}</p>
    </div>
  );
}
