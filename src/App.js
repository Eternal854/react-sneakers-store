import React from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import Drawer from "./components/Drawer/Index";
import Header from "./components/Header";
import AppContext from "./context";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favoriteItems, setFavoriteItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartIsOpened, setCartIsOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const [cartResponse, favoriteItemsResponse, itemsResponse] =
          await Promise.all([
            axios.get("https://612a4354068adf001789baa2.mockapi.io/cart"),
            axios.get(
              "https://612a4354068adf001789baa2.mockapi.io/favoriteItems"
            ),
            axios.get("https://612a4354068adf001789baa2.mockapi.io/items"),
          ]);

        setIsLoading(false);
        setCartItems(cartResponse.data);
        setFavoriteItems(favoriteItemsResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        alert(`Ошибка при запросе товаров`);
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const addToCartClick = async (obj) => {
    try {
      const findItem = cartItems.find(
        (item) => Number(item.parentId) === Number(obj.id)
      );
      if (findItem) {
        setCartItems((prev) =>
          prev.filter((item) => Number(item.parentId) !== Number(obj.id))
        );
        await axios.delete(
          `https://612a4354068adf001789baa2.mockapi.io/cart/${findItem.id}`
        );
      } else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post(
          "https://612a4354068adf001789baa2.mockapi.io/cart",
          obj
        );
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return { ...item, id: data.id };
            }
            return item;
          })
        );
      }
    } catch (error) {
      alert("ошибка при добавлении в корзину");
      console.error(error);
    }
  };

  const removeFromCartClick = async (id) => {
    try {
      setCartItems((prev) =>
        prev.filter((item) => Number(item.parentId) !== Number(id))
      );
      await axios.delete(
        `https://612a4354068adf001789baa2.mockapi.io/cart/${id}`
      );
    } catch (error) {
      alert(`Ошибка при удалении из корзины`);
      console.error(error);
    }
  };

  const addToFavoriteItemsClick = async (obj) => {
    try {
      if (
        favoriteItems.find((favObj) => Number(favObj.id) === Number(obj.id))
      ) {
        setFavoriteItems((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
        axios.delete(
          `https://612a4354068adf001789baa2.mockapi.io/favoriteItems/${obj.id}`
        );
      } else {
        const { data } = await axios.post(
          "https://612a4354068adf001789baa2.mockapi.io/favoriteItems",
          obj
        );
        setFavoriteItems((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Не удалось добавить в любимое");
      console.error(error);
    }
  };

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  const isAddedToCart = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favoriteItems,
        isAddedToCart,
        addToFavoriteItemsClick,
        addToCartClick,
        setCartIsOpened,
        setCartItems,
      }}
    >
      <div className="wrapper clear">
        <Drawer
          items={cartItems}
          onClose={() => setCartIsOpened(false)}
          onRemove={removeFromCartClick}
          isOpen={cartIsOpened}
        />
        <Header openCart={() => setCartIsOpened(true)} />

        <Route path="/" exact>
          <Home
            items={items}
            cartItems={cartItems}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onChangeSearchValue={onChangeSearchValue}
            addToFavoriteItemsClick={addToFavoriteItemsClick}
            addToCartClick={addToCartClick}
            isLoading={isLoading}
          />
        </Route>

        <Route path="/favorites" exact>
          <Favorites />
        </Route>

        <Route path="/orders" exact>
          <Orders />
        </Route>
      </div>
    </AppContext.Provider>
  );
}

export default App;
