import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Menu from "./Menu";
import ListeArticles from "./ListeArticles";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Footer from "./Footer";
import PresentationSociete from "./PresentationSociete";
import CarteAdresse from "./Carte";

function App() {
    // - loggedIn: boolean qui indique si l'utilisateur est connecté
  const [loggedIn, setLoggedIn] = useState(false);
  const [articles, setArticles] = useState([
  {
    id: 1,
    nomA: "chemise",
    pu: 2000,
    image: "OIP.webp",
    categorie: "jeans"   
  },
  {
    id: 2,
    nomA: "robe",
    pu: 30,
    image: "OIP (1).webp",
    categorie: "robes"   
  },
  {
    id: 3,
    nomA: "robe",
    pu: 50,
    image: "image6.jpg",
    categorie: "tshirt"  
  },
  {
    id: 4,
    nomA: "tshirt",
    pu: 50,
    image: "image5.jpg",
    categorie: "tshirt"  
  }

]);



  const DashboardRoute = () => {
  // - Si l'utilisateur n'est PAS connecté (!loggedIn) : affiche la page de login
  // - Si l'utilisateur EST connecté : affiche le dashboard
    if (!loggedIn) {
    return <Login onLogin={setLoggedIn} />;
  } else {
    return <Dashboard articles={articles} setArticles={setArticles} />;
  }
  };

  return (
    <Router>
      <Menu />

      {<Routes>
        {<Route path="/" element={<PresentationSociete/>} />}
          
        <Route path="/contact" element={<CarteAdresse/>}/>
          
        {<Route path="/dashboard/*" element={<DashboardRoute />} />}
          
        {<Route path="/produits" element={<ListeArticles articles={articles} />} />}
      </Routes>}
     <Footer />

    </Router>
  );
}

export default App;
