import React, { useState } from 'react';
import './Home.css';
import '../Actions/videoscrool';
// import SingleTooth from "../assets/Home/singletooth.png";
// import Multipleteeth from "../assets/Home/multipleteeth.png";
// import Fullmouth from "../assets/Home/fullmouth.png";
import person1 from '../assets/Home/person1.png';
import person2 from '../assets/Home/person2.png';
import person3 from '../assets/Home/person3.png';
import person4 from '../assets/Home/person4.png';
import video2 from '../assets/patient video for website_2.mp4';
import video from '../assets/patient video for website.mp4';

import { Popup /* or Slider */ } from 'react-typeform-embed';
import { Sidetab /* or Popover */ } from 'react-typeform-embed';
import Howitworks from '../components/Howitworks';

// import { grid } from "@mui/system";

export default function Home({ setModal, setMenu }) {
  const [showLT, setShowLT] = useState(false);

  return (
    <div className='HomeMain' onClick={() => setMenu(false)}>
      <div className='HomeBanner'>
        <h1>A Dental Implant will support your smile forever</h1>
        <h6>An investment that transforms your life</h6>
        <div className='scrollLogo' />

        {/* <Popup id="a31vCGUw" size={80} className="HomeBTN chatbot">
          <button>Book an appointment</button>
        </Popup> */}
        <Sidetab id='a31vCGUw' buttonText='Book now'></Sidetab>

        <div></div>
        {/* <div
          className="chatbot2"
          onClick={() =>
            window.open("https://e4h3uqkvd80.typeform.com/to/a31vCGUw")
          }
        /> */}
      </div>
      <div className='implantStory'>
        <div className='implantDesktop'>
          <h6>Starting at</h6>
          <h1>8+</h1>
          <h6>Locations</h6>
        </div>
        <div>
          <h1>
            The <span>GET</span> IMPLANT story
          </h1>
          <div className='implantMobile'>
            <div>
              <h5>Starting at</h5>
              <h2>8+</h2>
              <h5>Locations</h5>
            </div>
          </div>

          {/* <h6 className="implantMobile">established clinics throughout Texas or missing teeth with artificial teeth that look and function much like real ones. Dental implant surgery can offer a welcome alternative to dentures or bridgework that doesn't fit well and can offer an option when a lack of natural teeth roots don't allow building denture or bridgework tooth replacements.</h6> */}
          <h6>
            Get Implant is an all-in-one implant solution for everyone - be it
            Patients, Doctors,Collaborators of established or new dental
            offices.We are a unique service provider that combines all the
            resources needed for dental implant treatments at one place for the
            benefit of both patients and practitioners.
          </h6>
          <button className='HomeBTN' onClick={() => setModal(1)}>
            Know more about our Story
          </button>
        </div>
      </div>

      <Howitworks />

      <div className='storysection' style={{ backgroundColor: '#f5e3b0' }}>
        <div className='storysectionIMG1'></div>
        <div>
          <h3>“Transformed his biting strength back to normal”</h3>
          <span>
            <h4>Juma Ayura</h4>
            <h5>Get Implant patient</h5>
          </span>
        </div>
      </div>
      <div className='whatsImplant'>
        <div>
          <h1>What is a Dental Implant?</h1>
          <h6>
            Dental Implants are artificial root structures that provide a
            permanent foundation for restored, fixed teeth. In dental implants,
            the root part of a missing tooth is replaced with a small titanium
            screw placed within your jawbone. With time, bone grows around the
            implant, which helps to keep the jawbone in place. This is followed
            by attaching an artificial tooth crown to fill in the gap left by
            the missing tooth, thereby giving you a look of a highly realistic
            and functional prosthetic tooth. Dental implants are also used to
            hold a dental bridge or dentures in place. For those whose natural
            teeth have been damaged or decayed, dental implants offer the best
            solution.
          </h6>
          <Popup
            size={80}
            id='a31vCGUw'
            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <button
              style={{
                height: '5vh',
                border: 'none',
                cursor: 'pointer',
                borderRadius: '5px',
                padding: '0.7vh 0.8vw',
                fontSize: '2.5vh',
                fontWeight: 'bold',
                transform: 'translatey(-50%)',
              }}
            >
              Do you Qualify for one?
            </button>
          </Popup>
        </div>
      </div>
      <div className=''>
        <div>
          <video
            className='video'
            src={video2}
            id='video'
            className='videosection'
            controls
          ></video>
        </div>
      </div>
      <div className='typesDental'>
        <h1>Types of Dental Implant?</h1>
        <div>
          <div onClick={() => setModal(2)} />
          <div onClick={() => setModal(3)} />
          <div onClick={() => setModal(4)} />
        </div>
        <Popup
          size={80}
          id='a31vCGUw'
          style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
        >
          <button
            style={{
              height: '5vh',
              border: 'none',
              cursor: 'pointer',
              borderRadius: '5px',
              padding: '0.7vh 0.8vw',
              fontSize: '2.5vh',
              fontWeight: 'bold',
            }}
          >
            Find out what works for you
          </button>
        </Popup>
      </div>
      <div className='storysection' style={{ backgroundColor: '#B5C9EF' }}>
        <div className='storysectionIMG2'></div>
        <div>
          <h3
            style={{
              textShadow:
                '-2px 2px 0 #B5C9EF, 2px -2px 0 #B5C9EF, -2px -2px 0 #B5C9EF, 2px 2px 0 #B5C9EF',
            }}
          >
            “That annoying pain is gone and his smile is back”
          </h3>
          <span>
            <h4>Hubert David</h4>
            <h5>Get Implant patient</h5>
          </span>
        </div>
      </div>
      <div className='treatment' id='treatment'>
        <h1 style={{ color: 'white' }}>Treatment procedure</h1>
        <h6
          style={{
            color: 'white',
            textAlign: 'justify',
            textJustify: 'inter-word',
          }}
        >
          Dental Implants placement is typically a same-day procedure. Prior to
          scheduling an appointment for dental implant surgery, it is important
          to learn how long it will take to complete this treatment. Every
          patient will experience a different type of procedure depending upon
          the number of teeth they wish to replace, also their allergies, and
          the condition of their jawbone. Depending on how fast you heal, the
          process of getting a dental implant from the consultation to your
          procedure to your recovery can take more or less time. A lot depends
          on your oral health, the type of surgery you need, and whether you
          need grafting or tooth extractions
        </h6>

        <button
          style={{ color: 'black' }}
          className='HomeBTN'
          onClick={() => setModal(5)}
        >
          <span style={{ color: 'white' }}>Know more</span>
        </button>
      </div>
      <div className='' style={{ lineHeight: '0px' }}>
        <div style={{ lineHeight: '0px' }}>
          <video
            className='video'
            style={{ lineHeight: '0px' }}
            src={video}
            id='video'
            className='videosection'
            controls
          ></video>
        </div>
      </div>
      <div className='vs' id='vs'>
        <h1>Dental Implant vs Denture</h1>
        <div className='vsPoints'>
          <div>
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
                Dental implants let you keep your jawbone healthy and intact by
                integrating with it.
              </li>
              <li>
                Implants have aesthetic, functional, and comfort benefits in the
                long run.
              </li>
            </ul>
            <h6>
              It is important to note that dental implants are not suitable for
              everyone since you must be in good health to undergo the surgery,
              your jaw must be strong and healthy enough to support the
              implants, and your gums must be completely healthy
            </h6>
          </div>
          <h1>VS</h1>
          <div>
            <ul>
              <li>
                Dentures are another feasible option for those missing multiple
                teeth.
              </li>
              <li>
                Dentures are removable teeth replacements that can be either
                complete or partial depending on your needs.
              </li>
              <li>
                The dentures can be made either to completely replace the
                dentition on the upper or lower jaws or to replace a few missing
                teeth. They are referred to as partial dentures.
              </li>
              <li>
                Dentures need to be refitted over a period of time due to an
                individual's changing bite. In the absence of denture adhesive,
                dentures can easily slip out of place.
              </li>
              <li>
                An improperly fitted denture can cause tooth decay or infection.
              </li>
              <li>
                Dentures need to be maintained daily in order to remain viable
                for the long run. They show signs of wear if they are not
                cleaned properly.
              </li>
            </ul>
          </div>
        </div>
        <button className='HomeBTN' onClick={() => setModal(6)}>
          Implant vs alternatives
        </button>
      </div>
      <div className='storysection' style={{ backgroundColor: '#F4D4E2' }}>
        <div className='storysectionIMG3'></div>
        <div>
          <h3>“She relishes her favourite cuisine without any pain.”</h3>
          <span>
            <h4>Jan Christopher</h4>
            <h5>Get Implant patient</h5>
          </span>
        </div>
      </div>
      <div className='livesTouched' id='liveswetouched'>
        <h1>Lives we touched</h1>
        <div className='livesTouchedCards'>
          <div onClick={() => setModal(8)}>
            <img src={person2} alt='' />
            <div>
              <h2>
                When all you need is a Smile Makeover to de-stress yourself. -
                Ms. TA
              </h2>
              <h6>
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
              </h6>
              <h5>Read more</h5>
            </div>
          </div>
          <div onClick={() => setModal(7)}>
            <img src={person1} alt='' />
            <div>
              <h2>
                When your age can't stop you from getting that perfect smile and
                right dental implants - Ms. EG.
              </h2>
              <h6>
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
              </h6>
              <h5>Read more</h5>
            </div>
          </div>
        </div>
        <div className={'livesTouchedCards ' + (showLT ? 'LTcardActive' : '')}>
          <div onClick={() => setModal(9)}>
            <img src={person3} alt='' />
            <div>
              <h2>
                How a perfect smile and precise dental implants can completely
                change your life? - Mr. ES
              </h2>
              <h6>
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
              </h6>
              <h5>Read more</h5>
            </div>
          </div>
          <div onClick={() => setModal(10)}>
            <img src={person4} alt='' />
            <div>
              <h2>
                How with a smile makeover and proper dental implant, childhood
                problems can get solved. - Mr. JA
              </h2>
              <h6>
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
              </h6>
              <h5>Read more</h5>
            </div>
          </div>
        </div>
        <button className='HomeBTN' onClick={() => setShowLT(!showLT)}>
          {showLT ? 'Load less' : 'Load more'}
        </button>
      </div>
      <div className='awareness'>
        <h1>Implant awareness</h1>
        <div className='awarenessCards'>
          <div onClick={() => setModal(11)}>
            <h2>Implant Isn't Expensive, But Negligence Is!</h2>
            <h6>
              Even a single missing tooth can have major implications on your
              oral health and overall health. A majority of people overlook or
              do not consider their missing teeth as a problem, resulting in
              gaps in their smiles over time as the surrounding teeth move into
              the new spaces and gain the advantage of the extra space.
            </h6>
            <h5>Read more</h5>
          </div>
          <div onClick={() => setModal(12)}>
            <h2>Dental Implants can last for a lifetime!</h2>
            <h6>
              Dental implants have the potential to last a lifetime. With
              adequate care and maintenance, dental implants are projected to
              endure for 25 years or longer in most situations. The best
              long-term approach is to replace your missing teeth with dental
              implants, which will restore the function of your missing teeth
            </h6>
            <h5>Read more</h5>
          </div>
          <div onClick={() => setModal(13)}>
            <h2>Single missing tooth can lead to many</h2>
            <h6>
              If you have a missing tooth, you already know how it can affect
              your self-esteem and make eating difficult. However, missing teeth
              affect your jawbone and face in more ways than you may realize.
              Some of these changes could cost a lot of money to reverse. If you
              have missing teeth, check out how they can affect the overall
              shape
            </h6>
            <h5>Read more</h5>
          </div>
          <div onClick={() => setModal(14)}>
            <h2>Dental implants resemble natural teeth</h2>
            <h6>
              An implant's visible part is a prosthetic crown that is attached
              to an abutment. The crown is shaped, sanded, and molded to
              perfectly match the shape of the tooth it replaces. Finally, each
              crown can be created to match the shape of your tooth replacement
              - so yes, it will feel like your natural teeth!
            </h6>
            <h5>Read more</h5>
          </div>
        </div>
        {/* <button className="HomeBTN">Load more</button> */}
      </div>
    </div>
  );
}
