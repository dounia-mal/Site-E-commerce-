import React, { useState } from "react";
import "./Panier.css";
import { FaTrash, FaPlus, FaMinus, FaTimes } from "react-icons/fa";

function Panier({
  isOpen = false,
  onClose = () => {},
  panierArticles = [],
  setPanierArticles = () => {},
}) {
  // Ajouter un article au panier
  const ajouterAuPanier = (article) => {
    const articleExistant = panierArticles.find(
      (item) => item.id === article.id,
    );

    if (articleExistant) {
      // Si l'article existe déjà, augmenter la quantité
      setPanierArticles(
        panierArticles.map((item) =>
          item.id === article.id
            ? { ...item, quantite: item.quantite + 1 }
            : item,
        ),
      );
    } else {
      // Ajouter le nouvel article
      setPanierArticles([...panierArticles, { ...article, quantite: 1 }]);
    }
  };

  // Augmenter la quantité
  const augmenterQuantite = (id) => {
    setPanierArticles(
      panierArticles.map((item) =>
        item.id === id ? { ...item, quantite: item.quantite + 1 } : item,
      ),
    );
  };

  // Diminuer la quantité
  const diminuerQuantite = (id) => {
    setPanierArticles(
      panierArticles.map((item) =>
        item.id === id && item.quantite > 1
          ? { ...item, quantite: item.quantite - 1 }
          : item,
      ),
    );
  };

  // Supprimer un article du panier
  const supprimerDuPanier = (id) => {
    setPanierArticles(panierArticles.filter((item) => item.id !== id));
  };

  // Calculer le total
  const total = panierArticles.reduce(
    (acc, item) => acc + item.pu * item.quantite,
    0,
  );

  return (
    <>
      {isOpen && <div className="panier-overlay" onClick={onClose}></div>}

      {/* Sidebar Panier à droite */}
      <aside className={`panier-sidebar ${isOpen ? "open" : ""}`}>
        {/* Bouton Fermer (Croix) */}
        <div className="panier-header">
          <h1>Mon Panier</h1>
          <button className="btn-close" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        {panierArticles.length === 0 ? (
          <div className="panier-vide">
            <p>Votre panier est vide</p>
          </div>
        ) : (
          <>
            <div className="panier-articles">
              {panierArticles.map((article) => (
                <div key={article.id} className="panier-item">
                  <div className="item-info">
                    <h4>{article.nomA}</h4>
                    <p className="prix-unitaire">{article.pu} DH</p>
                  </div>

                  <div className="item-quantite">
                    <button
                      className="btn-quantite"
                      onClick={() => diminuerQuantite(article.id)}
                    >
                      <FaMinus />
                    </button>
                    <span className="quantite">{article.quantite}</span>
                    <button
                      className="btn-quantite"
                      onClick={() => augmenterQuantite(article.id)}
                    >
                      <FaPlus />
                    </button>
                  </div>

                  <p className="item-subtotal">
                    {article.pu * article.quantite} DH
                  </p>

                  <button
                    className="btn-supprimer"
                    onClick={() => supprimerDuPanier(article.id)}
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}
            </div>

            <div className="panier-total">
              <div>
                <p>Total:</p>
                <span>{total} DH</span>
              </div>
              <button className="btn-commander">Commander</button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}

export default Panier;
