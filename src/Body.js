import style from "./Body.module.css";

function Body() {
  return (
    <>
      {/* carousel */}
      <div className={`${style.wrapper}`}>
        <div className={`${style.carouselContainer}`}>
          <div className={`${style.carousel}`}>
            <div id="skyline" className={`${style.carouselItem}`}>
              <img
                src="https://www.coveredca.com/marketing-blog/uploads/WhyHealthInsuranceIsCritical_RF_1144x630.jpg"
                alt="Skyline of Wai Tan, Shanghai"
                className="carousel__image"
              />
            </div>
            <div id="great-wall-of-china" className={`${style.carouselItem}`}>
              <img
                src="https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=960&h=420&q=80"
                alt="Great wall of China."
                className="carousel__image"
              />
            </div>
            <div
              id="sunset-on-the-li-river"
              className={`${style.carouselItem}`}
            >
              <img
                src="https://images.unsplash.com/photo-1543097692-fa13c6cd8595?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=960&h=420&q=80"
                alt="Sunset on the Li River as the few remaining cormorant fisherman pack their."
                className="carousel__image"
              />
            </div>
          </div>
          <div id="controls" className={`${style.controls}`}>
            <a href="#skyline" className={`${style.controlsDot}`}>
              <span className={`${style.visuallyhidden}`}>
                Skyline of Wai Tan, Shanghai
              </span>
            </a>
            <a href="#great-wall-of-china" className={`${style.controlsDot}`}>
              <span className={`${style.visuallyhidden}`}>
                Great wall of China
              </span>
            </a>
            <a
              href="#sunset-on-the-li-river"
              className={`${style.controlsDot}`}
            >
              <span className={`${style.visuallyhidden}`}>
                Sunset on the Li River
              </span>
            </a>
          </div>
        </div>
      </div>
      {/* messageSection */}
      <div className={`${style.messageSection}`}>
        <div className={`${style.part1}`}>
          <h1>THINK HEALTH. THINK MESSAGE</h1>
          <p>
          "We must recognize the major impediment to development posed by drug abuse and illicit trafficking," said Secretary-General Ban Ki-moon in his message. Cultivating illicit crops and producing drugs threaten the environment, taking drugs puts the health of users at risk and the illicit drug trade undermines the rule of law.{" "}
          </p>
        </div>
        <div className={`${style.part2}`}>
          <button>LEARN MORE ABOUT US</button>
          <button>CONTACT US TODAY</button>
        </div>
      </div>
      {/* featuress */}
      <div className={`${style.featureSection}`}>
        <p className={`${style.paragraph}`}>
        To cultivate coca, for example, farmers cut trees and use a lot of water. Deforestation and erosion are the result. The chemicals used to produce cocaine cause further damage to the environment, as they poison locals streams. Farmers, their families and communities become poorer, as their land is their livelihood.
        </p>
        <p>
        For its part, drug trafficking erodes governance and institutions. "Drug traffickers typically seek routes where the rule of law is weak. In turn, drug-related crime deepens vulnerability to instability and poverty", Mr. Ban said. West Africa and Central America are two regions affected by the flow of drugs transiting from drug-producing countries to drug-consuming countries.
        </p>
        <p>
        UNODC is assisting States in their efforts to provide sustainable development alternatives for farmers and their communities, to enhance justice and reduce corruption, to prevent drug use and to treat those who need health-care services. Everyone has a role to play. As Mr. Ban said, on this day it is important to "reaffirm our commitment to this shared responsibility within our communities, and among the family of nations". As the theme of the world drug campaign stresses, "it is time to think health, not drugs".
        </p>
        <hr></hr>
      </div>
      {/* contact sectiob   */}

      <div className={`${style.contact}`} id="contact">
        <h1>Family Wellness, Massage Therepy</h1>
        <p>rangpuri Delhi ,igi airport 110037 </p>
        <p>+91 8968475108</p>
      </div>

    </>
  );
}
export default Body;
