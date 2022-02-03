import React from "react";
import "./Modals.css";
import "./Modals2.css";
export default function Awareness({ modal, setModal }) {
  return (
    <div className="Modal2">
      <div className="ModalChild2">
        <div>
          <div className="close" onClick={() => setModal(0)} />
          {/* <div className="share"/> */}
        </div>
        {modal === 11 && <h1>Implant Isn't Expensive, But Negligence Is!</h1>}
        {modal === 12 && <h1>Dental Implants can last for a lifetime!</h1>}
        {modal === 13 && <h1>Single missing tooth can lead to missing many</h1>}
        {modal === 14 && <h1>Dental implants resemble natural teeth.</h1>}
        <div className="ModalContent2">
          {modal === 11 && <div className="awarenessIMG1" />}
          {modal === 12 && <div className="awarenessIMG2" />}
          {modal === 13 && <div className="awarenessIMG3" />}
          {modal === 14 && <div className="awarenessIMG4" />}
          {modal === 11 && (
            <div>
              <h3>
                Even a single missing tooth can have major implications on your
                oral health and overall health. A majority of people overlook or
                do not consider their missing teeth as a problem, resulting in
                gaps in their smiles over time as the surrounding teeth move
                into the new spaces and gain the advantage of the extra space.
                In addition to bridges, dentures and advanced dental implants,
                are the solutions for missing teeth. It is a sad fact that
                often, people delay getting a replacement for their missing
                teeth due to financial concerns, which puts them at a much
                greater risk of developing other oral health conditions, such as
                additional tooth loss. The following reasons explain the
                importance of replacing missing teeth.
                <ul>
                  <li>
                    A missing tooth leaves a gap that is visible to neighbor
                    teeth. Filling in the space will require them to shift their
                    roots.
                  </li>
                  <li>
                    Not only are neighboring teeth affected by this gap, but
                    they also get weak.
                  </li>
                  <li>
                    Both upper and lower teeth are affected by the sensitivity.
                  </li>
                  <li>
                    As your bite balance changes, you may experience severe jaw
                    pain and chronic headaches when you don’t replace a missing
                    tooth.
                  </li>
                  <li>
                    During biting and chewing, if the paired tooth no longer
                    meets its partner, it can begin to move out of its socket,
                    meaning the tooth is weaker and more likely to fall out. And
                    this is the "domino effect” of tooth loss.
                  </li>
                </ul>
                The benefits of dental implants go well beyond oral health,
                affecting mental and physical well-being. The procedure is one
                of the safest, most accurate, and most predictable when
                performed by an implant specialist.
              </h3>
            </div>
          )}
          {modal === 12 && (
            <div>
              <h3>
                Dental implants have the potential to last a lifetime. With
                adequate care and maintenance, dental implants are projected to
                endure for 25 years or longer in most situations. The best
                long-term approach is to replace your missing teeth with dental
                implants, which will restore the function of your missing teeth
                and improve your ability to eat certain foods you would
                otherwise avoid.
                <ul>
                  <li>
                    Regular brushing and flossing can add a lifetime to the
                    implant screw, as long as the patient receives regular
                    dental checkups.
                  </li>
                  <li>
                    In general, a crown typically only lasts between 10 and 15
                    years before it needs to be replaced.
                  </li>
                  <li>
                    The life of a crown can be extended beyond fifteen years by
                    maintaining excellent dental hygiene and using it prudently.
                  </li>
                  <li>
                    A dental implant's lifespan is also affected by its
                    placement in the mouth.
                  </li>
                </ul>
              </h3>
            </div>
          )}
          {modal === 13 && (
            <div>
              <h3>
                If you have a missing tooth, you already know how it can affect
                your self-esteem and make eating difficult. However, missing
                teeth affect your jawbone and face in more ways than you may
                realize. Some of these changes could cost a lot of money to
                reverse. If you have missing teeth, check out how they can
                affect the overall shape and health of your jawbone and face.
                <br />
                <ul>
                  <li>
                    <b>Jawbones in the lower jaw may shrink :</b>If you only
                    have one or two teeth missing, you may not even notice the
                    change, but if all or most of your teeth are missing, this
                    can make your jawbone weak. And if there are no teeth, the
                    jawbone shrinks.
                    <br />
                    If you lack the structural integrity of your jawbone, dental
                    implants and bridges are out of the question, leaving you
                    with only dentures as a solution.
                  </li>
                  <li>
                    <b>Sinuses may be affected :</b> Frequently removing upper
                    teeth will not necessarily cause damage to the lower jaw
                    bone, but it may damage the upper jaw bone. Your sinuses can
                    have problems even if you just lose one tooth. Sinuses and
                    teeth are already in close contact. In this situation, you
                    may not be concerned about replacing the tooth. The only way
                    to add bone to your jaw is to undergo a sinus lift if you
                    desire a dental implant.
                  </li>
                  <li>
                    <b>The bite may be off : </b> You can suffer from a bad bite
                    even if you have one missing tooth. The gap may not be
                    noticeable at first however, over time your teeth will begin
                    to fill in the gap. As a result, you might hit your teeth in
                    the wrong spot when eating or talking, leading to chips or
                    cracks. Dental bridges and implants will both prevent this
                    from occurring.
                  </li>
                  <li>
                    <b>Face collapse may occur :</b> Having a lot of missing
                    teeth will cause the lower half of your face to change. Your
                    facial features can appear shorter than they should be if
                    your jawbones shrink. Also, receding lower jawbones can
                    result in forwarding rotation.
                  </li>
                </ul>
                Not only do teeth play an important role in eating and talking,
                but they also play a role in forming your face. One missing
                tooth may not drastically change your appearance, but it can
                create problems such as shifting teeth. A dental implant is a
                good solution for restoring your smile if you have missing
                teeth.
              </h3>
            </div>
          )}
          {modal === 14 && (
            <div>
              <h3>
                An implant's visible part is a prosthetic crown that is attached
                to an abutment. The crown is shaped, sanded, and molded to
                perfectly match the shape of the tooth it replaces. Finally,
                each crown can be created to match the shape of your tooth
                replacement - so yes, it will feel like your natural teeth!
                <br />
                <ul>
                  <li>
                    Implants provide a natural-looking, strong replacement that
                    looks and performs just like a regular tooth does.
                  </li>
                  <li>
                    Implants are beneficial not just from a cosmetic standpoint,
                    but also when The jawbone fuses to the implant during the
                    osseointegration process, it gives a strong foundation to
                    the replacement tooth.
                  </li>
                  <li>
                    Dental implants don't just replace missing teeth - they're
                    also a wonderful way to protect your bite, chewing ability,
                    and jaw shape.
                  </li>
                  <li>
                    You will not experience any dietary restrictions, any
                    slipping or rocking during chewing, and no special brushing
                    or flossing is required in dental implants.
                  </li>
                  <li>
                    The function of an implant is identical to that of a natural
                    tooth, and oral hygiene is just as important as it is for
                    natural teeth.
                  </li>
                </ul>
              </h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
