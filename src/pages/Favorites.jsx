import React from "react";
import Card from "../components/Card";
import AppContext from "../context";

function Favorites() {
  const { favoriteItems, addToFavoriteItemsClick } =
    React.useContext(AppContext);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои закладки</h1>
      </div>
      <div className="d-flex flex-wrap">
        {favoriteItems.map((item, index) => (
          <Card
            key={index}
            inFavoriteItems={true}
            addToFavorite={addToFavoriteItemsClick}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
