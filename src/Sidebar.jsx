import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Sidebar({ onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/dashboard");
  };

  return (
    <div
      className="text-white p-3 d-flex flex-column"
      style={{ width: "220px", backgroundColor: "#4a6597" }}
    >
      <h4 className="text-center mb-4">Admin Dashboard</h4>
      <ul className="nav flex-column flex-grow-1">
        <li className="nav-item mb-2">
          <Link to="/dashboard" className="nav-link text-white">
            Tableau de bord
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/dashboard/ajouter" className="nav-link text-white">
            Ajouter Article
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/dashboard/gestion" className="nav-link text-white">
            Gérer Articles
          </Link>
        </li>
        <li className="nav-item mb-2 mt-auto">
          <button
            onClick={handleLogout}
            className="nav-link text-white btn btn-link"
            style={{ textDecoration: "none", padding: 0 }}
          >
            Déconnexion
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
