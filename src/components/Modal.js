import React from "react";

const modal_style = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  backgroundColor: "#FFF",
  padding: "50px",
  zIndex: 1000,
};

const overlay_style = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,.7)",
  zIndex: 1000,
};

const button_style = {
  position: "relative",
  float: "right",
  background: "red",
  color: "white",
  top: "-10px",
  right: "-10px",
};

export default function Modal({ open, onClose }) {
  if (!open) {
    return null;
  }
  return (
    <>
      <div style={overlay_style} />
      <div style={modal_style}>
        <button id="close-modal" style={button_style} onClick={onClose}>
          X
        </button>
        <img
          alt="HTTP 400 Error"
          width="200px"
          height="100px"
          src="https://www.globalsign.com/application/files/9516/0389/3750/What_Is_an_SSL_Common_Name_Mismatch_Error_-_Blog_Image.jpg"
        />
        <h4>An Error has Occurred.</h4> <br />{" "}
        <h4>Status: HTTP Error Code 400</h4>
      </div>
    </>
  );
}
