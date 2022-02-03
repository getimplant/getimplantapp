import React from "react";
import "./Modals.css";
export default function Implant({ setModal }) {
  return (
    <div className="Modal">
      <div className="ModalChild implant">
        <div>
          <div className="close" onClick={() => setModal(0)} />
          {/* <div className="share" /> */}
        </div>
        <h1>Get Implant LLC</h1>
        <div className="ModalContent">
          <div className="implantIMG" />
          <div>
            <h2>Mission</h2>
            <h3>
              We aim to be the largest network of affiliated dental offices
              empowering them to provide comprehensive dental implant treatments
              under one roof. Our focus is to provide a platform that helps
              startups as well as established dental offices to acquire, plan,
              treat and maintain implant patients.
            </h3>
            <h2>Vision</h2>
            <h3>
              Get Implants Vision strives to build the gold standard for dental
              implants and surgery with comprehensive prosthodontic services.
              Our vision is to create a network of dental offices that will be
              the world's leaders in implant surgery.
            </h3>
            <h2>Story so far</h2>
            <h3>
              GetImplant is an initiative of two highly skilled Prosthodontists
              with decades of experience in Implant surgeries and treatment.
              With an intent to share their knowledge they have conducted
              hundreds of Implant competency programs for fellow dentists and
              practitioners. GetImplant LLC intends to be an ecosystem which
              makes Dental Implant treatment affordable and accessible to all by
              creating a platform that helps startups and established dental
              offices acquire, plan and treat implant patients effectively.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
