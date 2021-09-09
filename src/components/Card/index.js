import React from "react";
import ContentLoader from "react-content-loader";
import styles from "./Card.module.scss";
import AppContext from "../../context";

function Card({
  id,
  title,
  imageUrl,
  price,
  addToFavorite,
  addToCart,
  inFavoriteItems = false,
  contentLoaded = false,
}) {
  const { isAddedToCart } = React.useContext(AppContext);
  const [isFavorite, setIsFavorite] = React.useState(inFavoriteItems);
  const obj = { id, parentId: id, title, imageUrl, price };

  const addToCartHandle = () => {
    addToCart(obj);
  };

  const addToFavoriteHandle = () => {
    addToFavorite(obj);
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {contentLoaded ? (
        <ContentLoader
          speed={2}
          width={158}
          height={229}
          viewBox="0 0 150 202"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="150" height="100" />
          <rect x="0" y="118" rx="5" ry="5" width="150" height="15" />
          <rect x="0" y="141" rx="5" ry="5" width="100" height="15" />
          <rect x="0" y="177" rx="5" ry="5" width="80" height="25" />
          <rect x="118" y="170" rx="5" ry="5" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div className={styles.favorite} onClick={addToFavoriteHandle}>
            {addToFavorite && (
              <img
                src={
                  isFavorite ? "img/heart-liked.svg" : "img/heart-unliked.svg"
                }
                alt="Unliked"
              />
            )}
          </div>
          <img width={133} height={112} src={imageUrl} alt="Sneakers" />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена</span>
              <b>{price} руб.</b>
            </div>
            {addToCart && (
              <img
                className={styles.plus}
                onClick={addToCartHandle}
                src={
                  isAddedToCart(id) ? "img/btn-checked.svg" : "img/btn-plus.svg"
                }
                alt="Plus"
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
