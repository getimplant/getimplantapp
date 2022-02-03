import React from "react";
import "./Modals.css";
import { Popup /* or Slider */ } from "react-typeform-embed";

export default function Procedure({ modal, setModal }) {
  return (
    <div className="Modal">
      <div className="ModalChild">
        <div className="absoluteClose">
          <div className="close" onClick={() => setModal(0)} />
          {/* <button
            className="HomeBTN"
            onClick={() =>
              window.open("https://e4h3uqkvd80.typeform.com/to/a31vCGUw")
            }
          >
            Book an appointment
          </button> */}
          <button className="HomeBTN">
            <Popup id="a31vCGUw" size={80}>
              Book an appointment
            </Popup>
          </button>
          {/* <div className="share"/> */}
        </div>
        <div>
          <h1>Implant Treatment: Step-by-Step</h1>
          {/* <button
            className="HomeBTN"
            onClick={() =>
              window.open("https://e4h3uqkvd80.typeform.com/to/a31vCGUw")
            }
          >
            Book an appointment
          </button> */}
          <button className="HomeBTN">
            <Popup id="a31vCGUw" size={80}>
              Book an appointment
            </Popup>
          </button>
        </div>
        <div className="ModalContent">
          <div className="procedureIMG" />
          <div>
            <h3>
              The placement of dental implants is typically a same-day
              procedure. Prior to scheduling an appointment for dental implant
              surgery, it is important to learn how long it will take to
              complete this treatment. Every patient will experience a different
              type of procedure depending upon the number of teeth they wish to
              replace, also their allergies, and the condition of their jawbone.
              Depending on how fast you heal, the process of getting a dental
              implant from the consultation to your procedure to your recovery
              can take more or less time. A lot depends on your oral health, the
              type of surgery you need, and whether you need grafting or tooth
              extractions.
              <br />
              <br />
              A general dental implant procedure timeline is as follows:
              <br />
              <br />
              <ul>
                <li>
                  <b>Consultation:</b> The free initial consultation at
                  GetImplant allows you to ask questions about the upcoming
                  procedure and see if implants are the right choice for you. A
                  detailed consultation and treatment plan will be presented.
                  The first step is the implant placement which usually takes
                  only one office visit.
                </li>
                <li>
                  <b>Extractions:</b> Not every case requires tooth extraction,
                  but you may need to have one or several. There is no standard
                  procedure for this step. Depending on how healthy your bone
                  is, implant surgery could be performed in one day. Infections
                  or bone loss can cause this to not always be the case. If this
                  is the case with you, you may require bone grafting. Once the
                  implant is successfully integrated into the mouth, an implant
                  cap is added to the fixture.
                </li>
                <li>
                  <b>Bone Grafting:</b> Bone grafting may be necessary if you
                  recently had a tooth extracted or if you have been missing
                  teeth for some time. With bone grafting, you will be able to
                  ensure that your dental implant is attached to a solid bone
                  foundation. So it's crucial to go through this stage as it
                  prevents bone loss. Usually, it takes several months for the
                  bone to heal before dental implants can be placed.
                </li>
                <li>
                  <b>Implant Surgery:</b> After your dentist has completed the
                  above preparations, they will schedule the dental implant
                  procedure. The final phase usually begins about 2 - 6 weeks
                  after the bone grafting. During the surgery, the dentist
                  places your implants into your bone. The implant can either be
                  submerged in your gums or not, depending on what's right for
                  you. A new crown is built, fitted, and checked in the mouth
                  for comfort and to assure that your implants match your
                  regular color. A brand new smile is only a few weeks away once
                  you have completed this phase.
                </li>
              </ul>
              <br />
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
