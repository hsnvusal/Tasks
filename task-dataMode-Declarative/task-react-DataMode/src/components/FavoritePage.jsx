import React, { useEffect, useState } from "react";

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(favs);

    
  }, []);

  const removeFromFavorites = (id) => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  
    favorites = favorites.filter(item => item.id !== id); 
  
    localStorage.setItem("favorites", JSON.stringify(favorites));
    setFavorites(favorites); 
  };

  




  return (
    <div>
      <h2>Favorilər</h2>
      {favorites.length === 0 ? (
        <p>Favorilər siyahısı boşdur.</p>
      ) : (
        favorites.map((item) => (
          <div key={item.id}>{item.title} - ${item.price} 
          <img src={item.image} alt=""  style={{width:'100px'}}/>
          <button onClick={() => removeFromFavorites(item.id)}>Favoridən sil</button>

          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesPage;
