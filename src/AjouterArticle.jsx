import React, { useState } from "react";

function AjouterArticle({ articles, setArticles }) {
  const [nomA, setNomA] = useState("");
  const [pu, setPu] = useState("");
  const [categorie, setCategorie] = useState("jeans");
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImageFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const ajouter = () => {
    if (!nomA || !pu || !categorie) {
      alert("Veuillez remplir tous les champs !");
      return;
    }

    const nouvelArticle = {
      id: Date.now(),
      nomA,
      pu: Number(pu),
      image: preview || "OIP.webp",
      categorie, // 👈 IMPORTANT
    };

    setArticles([...articles, nouvelArticle]);

    // Reset
    setNomA("");
    setPu("");
    setCategorie("jeans");
    setImageFile(null);
    setPreview(null);
  };

  return (
    <div className="card p-4 shadow-sm mb-5">
      <h5>➕ Ajouter un article</h5>

      {/* NOM */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Nom de l’article"
          value={nomA}
          onChange={(e) => setNomA(e.target.value)}
        />
      </div>

      {/* PRIX */}
      <div className="mb-3">
        <input
          type="number"
          className="form-control"
          placeholder="Prix (DH)"
          value={pu}
          onChange={(e) => setPu(e.target.value)}
        />
      </div>

      {/* CATEGORIE */}
      <div className="mb-3">
        <select
          className="form-control"
          value={categorie}
          onChange={(e) => setCategorie(e.target.value)}
        >
          <option value="jeans">👖 Jeans</option>
          <option value="robes">👗 Robes</option>
          <option value="tshirt">👕 T-Shirts</option>
        </select>
      </div>

      {/* IMAGE */}
      <div className="mb-3">
        <input
          type="file"
          className="form-control"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>

      {/* BOUTON */}
      <div className="d-grid mb-3">
        <button className="btn btn-success" onClick={ajouter}>
          Ajouter
        </button>
      </div>

      {/* PREVIEW */}
      {preview && (
        <div className="mt-3 text-center">
          <h6>Aperçu :</h6>
          <img
            src={preview}
            alt="aperçu"
            style={{ height: "150px", borderRadius: "10px" }}
          />
        </div>
      )}
    </div>
  );
}

export default AjouterArticle;
