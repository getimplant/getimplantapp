import React from "react";
import "./Modals.css";
import "./Modals2.css";
import "./Modals3.css";

export default function Compare({ setModal }) {
  return (
    <div className="Modal">
      <div className="ModalChild2">
        <div>
          <div className="close" onClick={() => setModal(0)} />
          {/* <div className="share"/> */}
        </div>
        <div className="scrollRight" />
        <div className="ModalContent3">
          <div>
            <h2>Dental Implant</h2>
            <h3>
              <ul>
                <li>
                  Being as natural-looking and feeling like natural teeth and
                  being more durable than any other procedure.
                </li>
                <li>
                  An implant-supported dental bridge replaces teeth without
                  requiring the support of adjacent teeth, functioning like a
                  natural tooth.
                </li>
                <li>
                  A bridge dental implant replaces some of your tooth roots and
                  maintains your bone while restoring your smile.
                </li>
                <li>
                  Dental implants let you keep your jawbone healthy and intact
                  by integrating with it.
                </li>
                <li>
                  Implants have aesthetic, functional, and comfort benefits in
                  the long run.
                </li>
              </ul>
            </h3>
          </div>

          <div>
            <div>
              <div className="DentalBridge">
                <h2>Dental Bridge</h2>
                <h3>
                  <ul>
                    <li>
                      A dental bridge can fill in a gap when one or more of your
                      teeth are missing. A bridge also referred to as fixed
                      partial dentures, is attached to neighboring teeth for
                      support.
                    </li>
                    <li>
                      Dental bridges may be fixed or removable, but implants can
                      also be attached to bridges.
                    </li>
                    <li>
                      Bridges are made from a range of different metals, such as
                      gold, alloys, or porcelain.
                    </li>
                    <li>
                      Bridges place a greater amount of stress on the
                      surrounding structure, especially the two teeth attached
                      to them. Therefore, a bridge is rarely expected to last
                      forever.
                    </li>
                    <li>
                      Bridges do not solve structural issues, which means In the
                      absence of bone loss, bridges do not require bone
                      grafting. Also, long-term health issues.
                    </li>
                  </ul>
                </h3>
              </div>
              <div className="Filling">
                <h2>Dental Crown</h2>
                <h3>
                  <ul>
                    <li>
                      A crown is a tooth-shaped cap that protects and covers the
                      top part of an existing tooth.
                    </li>
                    <li>
                      A dental crown remains a highly effective way to save and
                      restore existing teeth that are cracked, chipped, broken,
                      decayed, or have recently undergone root canal treatment.
                    </li>
                    <li>
                      A dental crown covers a damaged tooth but dental implants
                      protect your smile by replacing missing teeth.
                    </li>
                    <li>
                      Crowns will need to be replaced if they become chipped or
                      worn. But Implants resolve all the missing tooth problems
                      which also prevent bone loss and facial sagging.
                    </li>
                    <li>
                      Dental crowns can be both durable and natural-looking,
                      blending seamlessly with your existing smile when done
                      properly and with the right materials.
                    </li>
                  </ul>
                </h3>
              </div>
              <div className="Denture">
                <h2>Denture</h2>
                <h3>
                  <ul>
                    <li>
                      Dentures are another feasible option for those missing
                      multiple teeth.
                    </li>
                    <li>
                      Dentures are removable teeth replacements that can be
                      either complete or partial depending on your needs.
                    </li>
                    <li>
                      The dentures can be made either to completely replace the
                      dentition on the upper or lower jaws or to replace a few
                      missing teeth. They are referred to as partial dentures.
                    </li>
                    <li>
                      Dentures need to be refitted over a period of time due to
                      an individual's changing bite. In the absence of denture
                      adhesive, dentures can easily slip out of place.
                    </li>
                    <li>
                      An improperly fitted denture can cause tooth decay or
                      infection.
                    </li>
                    <li>
                      Dentures need to be maintained daily in order to remain
                      viable for the long run. They show signs of wear if they
                      are not cleaned properly.
                    </li>
                  </ul>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
