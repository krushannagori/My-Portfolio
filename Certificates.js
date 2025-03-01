import React from "react";
import "./Certificates.css";

function Certificates() {
  return (
    <div className="certificates-container">
      <h2>My Certificates</h2>
      <div className="certificates">
        <img
          src="./logos/alteryx.png"
          alt=" Alteryx Designer Core"
          className="certificate-logo"
        />
        <img
          src="./logos/AWS.png"
          alt="AWS Academy Cloud Foundations"
          className="certificate-logo"
        />
        <img
          src="./logos/celonis.png"
          alt="Process Mining Fundamentals-Celonis"
          className="certificate-logo"
        />
        <img
          src="./logos/ct.png"
          alt="Coding Thinker"
          className="certificate-logo"
        />
        <img
          src="./logos/foundation.png"
          alt="Alteryx Foundation"
          className="certificate-logo"
        />
      </div>
      <p>Click on a certificate for more details.</p>
    </div>
  );
}

export default Certificates;

