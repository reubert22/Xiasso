import React from "react";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export const Toast = (text) => {
  return (
    toast(
      <div>
        <span>{text}</span>
      </div>,
      {
        position: "top-right",
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        autoClose: 5000
      }
    )
  )
}
