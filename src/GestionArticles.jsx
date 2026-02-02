import React, { useState } from "react";

function GestionArticles({ articles, setArticles }) {
  const [editId, setEditId] = useState(null);
  const [nomA, setNomA] = useState("");
  const [pu, setPu] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const startEdit = (art) => {
    setEditId(art.id);
    setNomA(art.nomA);
    setPu(art.pu);

    setPreview(
      art.image.startsWith("blob:")
        ? art.image
        : process.env.PUBLIC_URL + "/images/" + art.image,
    );
    setImageFile(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const modifier = () => {
    if (!nomA || !pu) {
      alert("Tous les champs sont obligatoires !");
      return;
    }

    const imageUrl = imageFile ? preview : preview; 

    setArticles(
      articles.map((a) =>
        a.id === editId ? { ...a, nomA, pu: Number(pu), image: imageUrl } : a,
      ),
    );

    setEditId(null);
    setNomA("");
    setPu("");
    setImageFile(null);
    setPreview(null);
  };

  const supprimer = (id) => {
    if (window.confirm("Voulez-vous vraiment supprimer cet article ?")) {
      setArticles(articles.filter((a) => a.id !== id));
    }
  };

  return (
    <div className="container">
      <h3 className="mb-4">Gestion des articles</h3>

      <div className="row">
        {articles.map((a) => (
          <div className="col-md-4 mb-4" key={a.id}>
            <div className="card shadow-sm h-100">
              <img
                src={
                  a.image.startsWith("blob:")
                    ? a.image
                    : process.env.PUBLIC_URL + "/images/" + a.image
                }
                className="card-img-top"
                alt={a.nomA}
                style={{ height: "150px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{a.nomA}</h5>
                <p className="card-text">
                  Prix : <strong>{a.pu} DH</strong>
                </p>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <button
                  className="btn btn-sm"
                  style={{
                    backgroundColor: "#D5DEEF",
                    color: "#395886",
                    border: "none",
                    fontWeight: "600",
                  }}
                  onClick={() => startEdit(a)}
                >
                  Modifier
                </button>
                <button
                  className="btn btn-sm"
                  style={{
                    backgroundColor: "#ff6b6b",
                    color: "white",
                    border: "none",
                    fontWeight: "600",
                  }}
                  onClick={() => supprimer(a.id)}
                >
                  Supprimer
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {editId && (
        <div
          className="card p-4 mb-4 shadow-sm"
          style={{ borderColor: "#D5DEEF" }}
        >
          <h5 style={{ color: "#395886" }}>Modifier l'article sélectionné</h5>
          <div className="row g-3 mt-2">
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                value={nomA}
                onChange={(e) => setNomA(e.target.value)}
                placeholder="Nom"
              />
            </div>
            <div className="col-md-2">
              <input
                type="number"
                className="form-control"
                value={pu}
                onChange={(e) => setPu(e.target.value)}
                placeholder="Prix"
              />
            </div>
            <div className="col-md-3">
              <input
                type="file"
                className="form-control"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
            <div className="col-md-2 d-grid">
              <button
                className="btn"
                style={{
                  backgroundColor: "#395886",
                  color: "white",
                  border: "none",
                  fontWeight: "600",
                }}
                onClick={modifier}
              >
                Enregistrer
              </button>
            </div>
          </div>

          {preview && (
            <div className="mt-3">
              <h6>Aperçu :</h6>
              <img
                src={preview}
                alt="preview"
                style={{ height: "150px", objectFit: "cover" }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default GestionArticles;
