import React from "react";
import "./Contacto.css";
function Contacto() {
  return (
    <div className="Contact-container">
      <div className="Contact-title">
        <h2>Contacto</h2>
      </div>
      <div className="Contact-number">
        <h3>4-444-0001</h3>
      </div>
      <div className="Contact-form">
        <h3>24 horas al dia , los 365 dias del año.</h3>
      </div>
      <div className="Contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1380.762103114836!2d-58.381623204213774!3d-34.60354869487722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses-419!2sar!4v1628216184009!5m2!1ses-419!2sar"
          style={{
            width: 600,
            height: 400,
            border: 0,
            allowfullscreen: 0,
            loading: "lazy",
          }}
        ></iframe>
      </div>
    </div>
  );
}

export default Contacto;
