import React, { useState } from "react";
import "./ListeArticles.css";

function ListeArticles({ articles, onAjouterPanier = () => {} }) {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [categorieActive, setCategorieActive] = useState("jeans");

  const articlesFiltres = articles.filter(
    (a) => a.categorie === categorieActive,
  );

  return (
    <div>
      <div
        style={{
          background: "linear-gradient(to bottom, #F0F3FA 0%, #D5DEEF 100%)",
          padding: "80px 0",
        }}
      >
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                color: "#395886",
              }}
            >
              Nos Collections
            </h2>
            <p style={{ color: "#395886", opacity: 0.7 }}>
              Choisissez une catégorie pour découvrir nos articles
            </p>
          </div>

          {/* ================= BOUTONS SECTIONS ================= */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              marginBottom: "60px",
              flexWrap: "wrap",
            }}
          >
            {[
              { key: "jeans", label: "Jeans" },
              { key: "robes", label: "Robes" },
              { key: "tshirt", label: "T-Shirts" },
            ].map((cat) => (
              <button
                key={cat.key}
                onClick={() => setCategorieActive(cat.key)}
                style={{
                  padding: "12px 30px",
                  borderRadius: "30px",
                  border: "none",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  cursor: "pointer",
                  background:
                    categorieActive === cat.key ? "#395886" : "#D5DEEF",
                  color: categorieActive === cat.key ? "white" : "#395886",
                  boxShadow:
                    categorieActive === cat.key
                      ? "0 8px 20px rgba(57, 88, 134, 0.4)"
                      : "none",
                  transition: "all 0.3s ease",
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* ================= GRILLE ARTICLES ================= */}
          <div className="row g-4">
            {articlesFiltres.map((a, index) => (
              <div
                className="col-lg-4 col-md-6 col-sm-12"
                key={a.id}
                style={{
                  opacity: 0,
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`,
                }}
              >
                <div
                  className="card h-100"
                  onMouseEnter={() => setHoveredCard(a.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    border: "none",
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow:
                      hoveredCard === a.id
                        ? "0 20px 40px rgba(57, 88, 134, 0.3)"
                        : "0 4px 12px rgba(0, 0, 0, 0.08)",
                    transform:
                      hoveredCard === a.id
                        ? "translateY(-10px) scale(1.02)"
                        : "translateY(0)",
                    transition: "all 0.4s ease",
                  }}
                >
                  <div style={{ height: "250px", overflow: "hidden" }}>
                    <img
                      src={
                        a.image.startsWith("blob:")
                          ? a.image
                          : `images/${a.image}`
                      }
                      alt={a.nomA}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transform:
                          hoveredCard === a.id ? "scale(1.1)" : "scale(1)",
                        transition: "transform 0.6s ease",
                      }}
                    />
                  </div>

                  <div className="card-body" style={{ padding: "25px" }}>
                    <h5 style={{ fontWeight: "700", marginBottom: "15px" }}>
                      {a.nomA}
                    </h5>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: "20px",
                        borderTop: "1px solid #e2e8f0",
                        paddingTop: "15px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "1.6rem",
                          fontWeight: "bold",
                          color: "#395886",
                        }}
                      >
                        {a.pu} DH
                      </span>

                      <button
                        onClick={() => onAjouterPanier(a)}
                        style={{
                          background: "#395886",
                          color: "white",
                          border: "none",
                          padding: "10px 16px",
                          borderRadius: "8px",
                          cursor: "pointer",
                          fontWeight: "600",
                          fontSize: "0.9rem",
                          transition: "all 0.3s ease",
                          transform:
                            hoveredCard === a.id ? "scale(1.05)" : "scale(1)",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = "scale(1.1)";
                          e.target.style.boxShadow =
                            "0 6px 20px rgba(57, 88, 134, 0.4)";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = "scale(1)";
                          e.target.style.boxShadow = "none";
                        }}
                      >
                        Ajouter
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* -------- AUCUN ARTICLE -------- */}
          {articlesFiltres.length === 0 && (
            <div style={{ textAlign: "center", marginTop: "60px" }}>
              <h3>Aucun article dans cette catégorie</h3>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default ListeArticles;
