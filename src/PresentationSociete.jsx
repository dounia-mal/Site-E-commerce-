import React, { useEffect, useRef, useState } from "react";
import "./PresentationSociete.css";

function PresentationSociete() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === section1Ref.current) setShow1(true);
            if (entry.target === section2Ref.current) setShow2(true);
            if (entry.target === section3Ref.current) setShow3(true);
            if (entry.target === section4Ref.current) setShow4(true);
          }
        });
      },
      { threshold: 0.3 },
    );

    if (section1Ref.current) observer.observe(section1Ref.current);
    if (section2Ref.current) observer.observe(section2Ref.current);
    if (section3Ref.current) observer.observe(section3Ref.current);
    if (section4Ref.current) observer.observe(section4Ref.current);
  }, []);

  return (
    <div>
      {/* ================= HERO FIXE ================= */}
      <section className="hero">
        <div className="hero-content">
          <h1>DouniaShop</h1>
          <p>
            La mode qui reflète ta personnalité. Élégance, confort et confiance.
          </p>
        </div>
      </section>

      {/* ================= SECTION 1 ================= */}
      <section className="section" ref={section1Ref}>
        <div className="container">
          <div className="row align-items-center">
            <div className={`col-md-6 img-box left ${show1 ? "visible" : ""}`}>
              <img src="images/image4.jpg" alt="Mode" />
            </div>

            <div
              className={`col-md-6 text-box left delay ${show1 ? "visible" : ""}`}
            >
              <h3>Mode moderne</h3>
              <p>
                Découvrez notre collection de vêtements tendance, conçus pour
                sublimer votre style au quotidien. Élégance et confort garantis
                pour toutes vos occasions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2 ================= */}
      <section className="section" ref={section2Ref}>
        <div className="container">
          <div className="row align-items-center flex-row-reverse">
            <div className={`col-md-6 img-box right ${show2 ? "visible" : ""}`}>
              <img src="images/image5.jpg" alt="Shopping" />
            </div>

            <div
              className={`col-md-6 text-box right delay ${show2 ? "visible" : ""}`}
            >
              <h3>Expérience d'achat fluide</h3>
              <p>
                Profitez d'une navigation intuitive, d'un paiement sécurisé et
                d'une livraison rapide. Votre satisfaction est notre priorité.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ================= SECTION 3 ================= */}
      <section className="section" ref={section3Ref}>
        <div className="container">
          <div className="row align-items-center">
            <div className={`col-md-6 img-box left ${show3 ? "visible" : ""}`}>
              <img src="images/image6.jpg" alt="Mode" />
            </div>

            <div
              className={`col-md-6 text-box left delay ${show3 ? "visible" : ""}`}
            >
              <h3>Style unique</h3>
              <p>
                Exprimez votre personnalité avec nos pièces exclusives. De la
                robe élégante au t-shirt casual, trouvez votre look idéal.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ================= SECTION 4 ================= */}
      <section className="section" ref={section4Ref}>
        <div className="container">
          <div className="row align-items-center flex-row-reverse">
            <div className={`col-md-6 img-box right ${show4 ? "visible" : ""}`}>
              <img src="images/imm.jpeg" alt="Shopping" />
            </div>

            <div
              className={`col-md-6 text-box right delay ${show4 ? "visible" : ""}`}
            >
              <h3>Service client exceptionnel</h3>
              <p>
                Notre équipe est là pour vous accompagner. Retours faciles,
                conseils personnalisés et support 24/7 pour une expérience sans
                souci.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default PresentationSociete;
