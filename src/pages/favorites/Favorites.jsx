import React from 'react';
import { Link } from 'react-router-dom';

import Card from '../../components/Card';
import AppContext from '../../context';

function Favorites() {
  const { favoriteItems, addToFavoriteItemsClick, setCartIsOpened } = React.useContext(AppContext);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои закладки</h1>
      </div>
      {favoriteItems.length > 0 ? (
        <div>
          {favoriteItems.map((item, index) => (
            <Card
              key={index}
              isAddedToFavoriteItems
              addToFavorite={addToFavoriteItemsClick}
              {...item}
            />
          ))}
        </div>
      ) : (
        <div className="cartEmpty d-flex align-center justify-center flex-column flex">
          <img
            className="mb=20"
            width="75px"
            height="75px"
            src="img/favorites-empty.png"
            alt="Empty"
          />
          <h2>Любимых товаров нет</h2>
          <p className="opacity-6">Добавьте товар</p>
          <Link to="/">
            <button className="greenButton">
              <img src="img/arrow.svg" alt="Arrow" />
              Вернуться к товарам
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Favorites;
