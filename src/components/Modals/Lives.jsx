import React, { useEffect, useRef, useState } from "react";
import "./Modals.css";
import "./Modals2.css";
export default function Lives({ modal, setModal }) {
  const [before, setBefore] = useState(false);
  const changeBefore = useRef(false);

  useEffect(() => {
    setInterval(() => {
      changestateBefore();
    }, 2000);
  }, []);
  function changestateBefore() {
    setBefore(changeBefore.current);
    changeBefore.current = !before;
  }
  return (
    <div className="Modal2">
      <div className="ModalChild2">
        <div>
          <div className="close" onClick={() => setModal(0)} />
          {/* <div className="share"/> */}
        </div>
        <div className="ModalContent2">
          {modal === 7 && (
            <div
              className={before ? "livesIMG1B" : "livesIMG1"}
              onClick={() => setBefore(!before)}
            />
          )}
          {modal === 8 && (
            <div
              className={
                "imgPositionChnage " + (before ? "livesIMG2B" : "livesIMG2")
              }
              onClick={() => setBefore(!before)}
            />
          )}
          {modal === 9 && (
            <div
              className={before ? "livesIMG3B" : "livesIMG3"}
              onClick={() => setBefore(!before)}
            />
          )}
          {modal === 10 && (
            <div
              className={before ? "livesIMG4B" : "livesIMG4"}
              onClick={() => setBefore(!before)}
            />
          )}
          {modal === 7 && (
            <div>
              <h2>
                When your age can't stop you from getting that perfect smile. -
                Ms. EG
              </h2>
              <h3>
                When Ms. EG. came to see us with her family she was facing
                difficulty smiling freely as some of her teeth were missing, and
                a few were even broken. After analyzing her problem we suggested
                a digital smile enhancement procedure where implants will be
                placed in the place of missing teeth and the broken ones will be
                reparied. We used an AFT face scanner to design her smile and to
                analyze the problem areas. At first she was reluctant to get the
                treatment done because of her age and conservative behaviours,
                but after getting the much-needed encouragement and support from
                her grandkids, she went ahead with her treatment which was 4
                months long. After the end of treatment, she got back her smile
                and was more than happy and pleased as this was a life changing
                experience for her at this age.
              </h3>
            </div>
          )}
          {modal === 8 && (
            <div>
              <h2>
                When all you need is a Smile Makeover to feel great about
                yourself. - Ms. TA
              </h2>
              <h3>
                Ms. TA, unfortunately, in an accident, lost some of her Incisors
                (teeth in the front) and now wanted to get a smile makeover so
                that she could stop stressing and getting conscious thinking
                about the missing front teeth, which was also affecting her
                emotionally and professionally. After a full analysis, she opted
                for a digital smile enhancement procedure, which was just a
                month-long. After precise analysis of the implants' placement,
                we used an AFT face scanner to design her smile first on the
                digital platform, then executed as discussed. At the end of
                treatment, she was very happy and fully contend with the before
                and after Smile and appearance.
                <br />
                She was so happy that she made a video review to appreciate the
                efforts made by the doctors in such a small instinct of time.
              </h3>
            </div>
          )}
          {modal === 9 && (
            <div>
              <h2>
                How a perfect smile through precise dental implants can
                completely change your life? - Mr. ES
              </h2>
              <h3>
                Mr. ES never had what we called a healthy tooth; he always had
                problems with his teeth. When we came to us for treatment that
                time, he had lost most of his teeth and even faced difficulty
                eating. We had a big challenge in front of us, first to save the
                existing teeth and second to securely put implants for giving a
                natural structure. After a smile makeover consultation, we
                decided to go for all smile enhancement procedures using a full
                digital smile makeover where missing teeth will be fixed so that
                he can effortlessly eat and have his smile back. His treatment
                was completed in the span of 6 months, and the results were
                beyond his expectations, which not only enhanced his overall
                personality but also gave him a brand new confidence.
              </h3>
            </div>
          )}
          {modal === 10 && (
            <div>
              <h2>
                How a smile makeover cured chronic dental problems that
                subsisted since childhood. - Mr. JA
              </h2>
              <h3>
                Mr. JA when came in for a consultation, his oral health was not
                in good condition. Since childhood, he has suffered gum disease
                and always has missing, crooked, or bad teeth. At a very young
                age, he even had to wear dentures, but now even the thought of
                wearing a denture gave him a feeling of fear and embarrassment.
                So we had to find the best and affordable solution because his
                finances were not that strong but had the backing of his sister
                and Boss. After a thorough analysis and smile makeover
                consultation, he decided to go with the procedure. We first
                placed dental implants and fixed his missing teeth, then worked
                on his smile makeover. In just one visit, his procedure was
                completed, and he got relief from the bad and painful tooth.
                Moreover, treatment boosted his confidence and motivated him to
                maintain his lifestyle.
              </h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
