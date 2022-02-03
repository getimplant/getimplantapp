import React from "react";
import { Popup /* or Slider */ } from "react-typeform-embed";
import "./Modals.css";
export default function Types({ modal, setModal }) {
  return (
    <div className="Modal">
      <div className="ModalChild">
        <div>
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
          {modal === 2 && <h1>Single tooth</h1>}
          {modal === 3 && <h1>Multiple teeth</h1>}
          {modal === 4 && <h1>Full mouth</h1>}
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
          {modal === 2 && <div className="typesIMG1" />}
          {modal === 3 && <div className="typesIMG2" />}
          {modal === 4 && <div className="typesIMG3" />}
          {modal === 2 && (
            <div>
              <h3>
                Single tooth implants replace one missing tooth. An implant
                replaces both the roots and the natural tooth. Adjacent teeth
                are not affected due to this procedure because one tooth is
                replaced instead of a bridge.
                <br />
                There are multiple types of dental implants available at
                GetImplant. Our system uses computer-assisted planning software
                based on dental CT scans to plan precise implant surgery.
                <br />
                <br />
                Before a dental implant is placed, Our prosthodontics measures
                the exact dimensions of the jaw, selects the appropriate design,
                and customize the implants according to your needs. <br />
                <br />
                <b>Implants have 3 Parts</b>
                <br />
                <br />
                <ul>
                  <li>
                    <b>The Implant:</b> Your new teeth are attached to this
                    screw. Your jaw permanently attaches to this part.
                  </li>
                  <li>
                    <b>The Abutment:</b> The device that holds and supports a
                    tooth or set of teeth permanently, but can be easily removed
                    by your doctor.
                  </li>
                  <li>
                    <b>A Crown (or artificial tooth):</b> The crown is the
                    visible part of the tooth. A porcelain or zirconia filling
                    is used because of its durability and natural appearance.
                  </li>
                </ul>
                At GetImplant we provide the best and the safest dental
                procedures which are performed by our in-house prosthodontics
                nearest you.
              </h3>
            </div>
          )}
          {modal === 3 && (
            <div>
              <h3>
                An implant-supported bridge replaces Multiple missing and
                damaged teeth. <br />
                Patients who are missing multiple teeth on one side of the mouth
                and need several crowns will benefit from this treatment. An
                artificial tooth is held in place by two crowns on each side of
                a gap between your teeth. In order for many dental crowns to be
                placed into the patient's mouth, multiple dental implants are
                used as anchors.
                <br />
                <br />
                A crown is connected directly to the dental implants rather than
                to the teeth when using these implants.
                <br />
                <br />
                In general, two implants can hold a three-tooth bridge, three
                implants can hold a four or five tooth bridge, and four to eight
                implants are needed for full-arch or longer bridges. It is
                similar to placing a single dental implant. But the teeth that
                are missing in the middle of the gap, will not be implanted
                <br />
                <br />
                It typically requires two surgeries, an implant-supported bridge
                is considered the strongest and most stable system:
                <br />
                <br />
                <ul>
                  <li>An implant is embedded in the jawbone.</li>
                  <li>In the second surgery, Bridge is placed. </li>
                </ul>
                As the entire process can take many months to complete
                GetImplant tries to make the process as easy and convenient for
                patients as possible.
              </h3>
            </div>
          )}
          {modal === 4 && (
            <div>
              <h3>
                For many patients who require full mouth treatment using dental
                implants, this is an excellent choice when replacing all their
                teeth. Only an implant treatment for the full mouth can fulfill
                the needs of an individual in terms of appearance, comfort, and
                function in comparison to natural teeth <br />
                <br />
                <b>Putting an end to loose dentures! </b>
                <br />
                <br />
                <b>A Full mouth treatment typically entails:</b>
                <br />
                <br />
                <ul>
                  <li>
                    The diagnostic and planning phases often take a few weeks
                    (x-rays, CT scans, diagnostic design, virtual planning,
                    smile design, etc.).
                  </li>
                  <li>
                    Dental implants are placed in six to eight places on the
                    upper jaw.
                  </li>
                  <li>A lower jaw implant can include four or six implants.</li>
                  <li>Designing of the temporarily fixed bridges.</li>
                  <li>
                    A pair of teeth made from porcelain are fixed to these
                    implants with screws or dental cement, providing a durable,
                    natural-looking result.
                  </li>
                </ul>
                This results in a reliable, permanent Full Mouth dental implant
                that is designed specifically for your facial aesthetics. Using
                modern technology, a temporary bridge can be permanently
                attached to the implants the same day of their placement. Our
                technology allows us to quickly and easily transition from bad
                teeth to an amazing set of temporary teeth. <br />
                <br />
                This may be an answer to all your denture problems if you wear
                dentures.
                <br />
                <br />
              </h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
