import React, { useState } from "react";

function CarteAdresse() {
  const adresse = "ISGI AZLI OFPPT MARRAKECH";
  const zoom = 16;

  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    adresse
  )}&t=&z=${zoom}&ie=UTF8&iwloc=B&output=embed`;

  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message envoyé avec succès !");
    setFormData({ nom: "", email: "", message: "" });
  };

  return (
    <div className="contact-wrapper">

      {/* ================= FORMULAIRE ================= */}
      <div className="contact-form">
        <h2>Contactez-nous</h2>
        <p>Nous sommes à votre écoute. Écrivez-nous à tout moment.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nom"
            placeholder="Votre nom"
            value={formData.nom}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Votre message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Envoyer le message</button>
        </form>
      </div>

      {/* ================= CARTE ================= */}
      <div
        style={{
          width: "100%",
          maxWidth: "1000px",
          height: "350px",
          margin: "0 auto",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        }}
      >
        <iframe
          title="Carte ISGI AZLI OFPPT Marrakech"
          width="100%"
          height="100%"
          style={{ border: "2px solid" }}
          loading="lazy"
          allowFullScreen
          src={mapUrl}
        ></iframe>
      </div>

      {/* ================= STYLE ================= */}
      <style>{`
        .contact-wrapper {
          width: 100%;
          padding: 80px 20px;
          background: #f8f9fc;
        }

        .contact-form {
          max-width: 700px;
          margin: 0 auto 60px auto;
          background: white;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.1);
          text-align: center;
        }

        .contact-form h2 {
          font-size: 2.2rem;
          margin-bottom: 10px;
        }

        .contact-form p {
          color: #666;
          margin-bottom: 30px;
        }

        .contact-form input,
        .contact-form textarea {
          width: 100%;
          padding: 14px;
          margin-bottom: 20px;
          border-radius: 8px;
          border: 1px solid #ccc;
          font-size: 1rem;
          transition: border 0.3s ease;
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
          outline: none;
          border-color: #667eea;
        }

        .contact-form button {
          background: #395886;
          color: white;
          border: none;
          padding: 14px 30px;
          border-radius: 8px;
          font-size: 1.1rem;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .contact-form button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(102,126,234,0.4);
        }

        @media (max-width: 768px) {
          .contact-form {
            padding: 30px 20px;
          }
        }
      `}</style>
    </div>
  );
}

export default CarteAdresse;
