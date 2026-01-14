import React, { useEffect, useRef, useState } from "react";

function PresentationSociete() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target === section1Ref.current) setShow1(true);
            if (entry.target === section2Ref.current) setShow2(true);
            if (entry.target === section3Ref.current) setShow3(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (section1Ref.current) observer.observe(section1Ref.current);
    if (section2Ref.current) observer.observe(section2Ref.current);
    if (section3Ref.current) observer.observe(section3Ref.current);
  }, []);

  return (
    <div>

      {/* ================= HERO FIXE ================= */}
      <section className="hero">
        <div className="hero-content">
          <h1>DouniaShop</h1>
          <p>
            La mode qui reflète ta personnalité.  
            Élégance, confort et confiance.
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

            <div className={`col-md-6 text-box left delay ${show1 ? "visible" : ""}`}>
              <h3>Mode moderne</h3>
              <p>
                Des vêtements tendances pensés pour toutes les occasions,
                alliant style, confort et qualité.
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

            <div className={`col-md-6 text-box right delay ${show2 ? "visible" : ""}`}>
              <h3>Expérience fluide</h3>
              <p>
                Navigation simple, paiement sécurisé et livraison rapide
                pour une expérience d’achat agréable.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="section" ref={section3Ref}>
        <div className="container">
          <div className="row align-items-center">

            <div className={`col-md-6 img-box left ${show3 ? "visible" : ""}`}>
              <img src="images/image6.jpg" alt="Mode" />
            </div>

            <div className={`col-md-6 text-box left delay ${show3 ? "visible" : ""}`}>
              <h3>Mode moderne</h3>
              <p>
                Des vêtements tendances pensés pour toutes les occasions,
                alliant style, confort et qualité.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= STYLE ================= */}
      <style>{`
        /* -------- HERO -------- */
        .hero {
          height: 100vh;
          background: url("/images/image3.jpg") center/cover fixed;
          position: relative;
        }

        .hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.45);
          backdrop-filter: blur(4px);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          color: white;
          padding: 20px;
        }

        .hero-content h1 {
          font-size: 4rem;
          font-weight: bold;
          margin-bottom: 20px;
        }

        .hero-content p {
          font-size: 1.3rem;
          max-width: 600px;
        }

        /* -------- SECTIONS -------- */
        .section {
          padding: 50px 0;
        }

        .img-box img {
          width: 500px;
          height:400px;
          border-radius: 12px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
          animation: float 3s ease-in-out infinite;
        }

        .text-box h3 {
          font-size: 2.2rem;
          margin-bottom: 5px;
        }

        .text-box p {
          font-size: 1.1rem;
          line-height: 1.8;
        }

        /* -------- ANIMATIONS -------- */
        .left {
          opacity: 0;
          transform: translateX(-120px);
          transition: transform 1.5s cubic-bezier(0.22,1,0.36,1) ,
                      opacity 1.5s ease;
        }

        .right {
          opacity: 0;
          transform: translateX(120px);
          transition: transform 1.5s cubic-bezier(0.22,1,0.36,1),
                      opacity 1.5s ease;
        }

        .delay {
          transition-delay: 0.4s;
        }

        .visible {
          opacity: 1;
          transform: translateX(0);
        }

        /* -------- FLOAT IMAGE -------- */
        @keyframes float {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        /* -------- RESPONSIVE -------- */
        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.5rem;
          }

          .section {
            padding: 60px 20px;
          }
        }
      `}</style>

    </div>
  );
}

export default PresentationSociete;
