import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Menu from "./Menu";
import ListeArticles from "./ListeArticles";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Footer from "./Footer";
import PresentationSociete from "./PresentationSociete";
import CarteAdresse from "./Carte";
import Panier from "./Panier";

function AppContent() {
  // - loggedIn: boolean qui indique si l'utilisateur est connecté
  const [loggedIn, setLoggedIn] = useState(false);
  const [isPanierOpen, setIsPanierOpen] = useState(false);
  const [panierArticles, setPanierArticles] = useState([]);
  const location = useLocation();
  const [articles, setArticles] = useState([
    {
      id: 1,
      nomA: "chemise",
      pu: 2000,
      image: "OIP.webp",
      categorie: "chemises",
    },
    {
      id: 2,
      nomA: "robe",
      pu: 200,
      image: "OIP (1).webp",
      categorie: "robes",
    },
    {
      id: 3,
      nomA: "jean bleu",
      pu: 180,
      image: "j2.jpeg",
      categorie: "jeans",
    },
    {
      id: 4,
      nomA: "t-shirt",
      pu: 170,
      image: "t2.jpeg",
      categorie: "tshirt",
    },
    {
      id: 5,
      nomA: "jeans",
      pu: 150,
      image: "jeans1.jpeg",
      categorie: "jeans",
    },
    {
      id: 6,
      nomA: "jeans",
      pu: 150,
      image: "j3.jpeg",
      categorie: "jeans",
    },
    {
      id: 7,
      nomA: "jeans",
      pu: 140,
      image: "j4.jpeg",
      categorie: "jeans",
    },
    {
      id: 8,
      nomA: "jeans",
      pu: 150,
      image: "j5.jpeg",
      categorie: "jeans",
    },
    {
      id: 9,
      nomA: "t-shirt",
      pu: 150,
      image: "t-shirt1.jpeg",
      categorie: "tshirt",
    },
    {
      id: 10,
      nomA: "t-shirt",
      pu: 150,
      image: "t3.jpeg",
      categorie: "tshirt",
    },
    {
      id: 11,
      nomA: "t-shirt",
      pu: 150,
      image: "t4.jpeg",
      categorie: "tshirt",
    },
    {
      id: 12,
      nomA: "t-shirt",
      pu: 150,
      image: "t5.jpeg",
      categorie: "tshirt",
    },
    {
      id: 13,
      nomA: "robe",
      pu: 150,
      image: "r1.jpeg",
      categorie: "robes",
    },
    {
      id: 14,
      nomA: "robe",
      pu: 150,
      image: "r2.jpeg",
      categorie: "robes",
    },
    {
      id: 15,
      nomA: "robe",
      pu: 290,
      image: "r3.jpeg",
      categorie: "robes",
    },
    {
      id: 16,
      nomA: "robe",
      pu: 300,
      image: "r4.jpeg",
      categorie: "robes",
    },
    {
      id: 17,
      nomA: "robe",
      pu: 250,
      image: "r5.jpeg",
      categorie: "robes",
    },
  ]);

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
    // Ouvrir le panier automatiquement
    setIsPanierOpen(true);
  };

  const DashboardRoute = () => {
    // - Si l'utilisateur n'est PAS connecté (!loggedIn) : affiche la page de login
    // - Si l'utilisateur EST connecté : affiche le dashboard
    if (!loggedIn) {
      return <Login onLogin={setLoggedIn} />;
    } else {
      return (
        <Dashboard
          articles={articles}
          setArticles={setArticles}
          onLogout={() => setLoggedIn(false)}
        />
      );
    }
  };

  return (
    <>
      {!(loggedIn && location.pathname.startsWith("/dashboard")) && (
        <Menu onOpenPanier={() => setIsPanierOpen(true)} />
      )}

      <Panier
        isOpen={isPanierOpen}
        onClose={() => setIsPanierOpen(false)}
        panierArticles={panierArticles}
        setPanierArticles={setPanierArticles}
      />

      {
        <Routes>
          {<Route path="/" element={<PresentationSociete />} />}

          <Route path="/contact" element={<CarteAdresse />} />

          {<Route path="/dashboard/*" element={<DashboardRoute />} />}

          {
            <Route
              path="/produits"
              element={
                <ListeArticles
                  articles={articles}
                  onAjouterPanier={ajouterAuPanier}
                />
              }
            />
          }
        </Routes>
      }
      {!(loggedIn && location.pathname.startsWith("/dashboard")) && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
