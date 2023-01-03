import axios from "axios";
import { ActionTypes } from "../types/action-types";

export const setAllProducts = (dlt) => async (dispatch) => {
  const res = await axios("https://dummyjson.com/products");

  {
    dispatch({
      type: ActionTypes.All_PRODUCT,
      payload: res.data.products,
    });
  }
};

export const setCategory = () => async (dispatch) => {
  const res = await axios("https://dummyjson.com/products/categories");
  {
    dispatch({
      type: ActionTypes.SET_CATEGORY,
      payload: res.data,
    });
  }
};

export const setProduct = (title) => async (dispatch) => {
  const res = await axios(`https://dummyjson.com/products/category/${title}`);

  {
    dispatch({
      type: ActionTypes.SET_PRODUCT,
      payload: res.data.products,
    });
  }
};

export const setAddCart = (product) => async (dispatch) => {
  const res = await axios.post(" https://dummyjson.com/carts/add", {
    userId: product.id,
    products: [
      {
        id: product.id,
        quantity: 1,
      },
    ],
  });

  {
    dispatch({
      type: ActionTypes.ADD_TO_CART,
      payload: product,
    });
  }
};

export const setDetails = (id) => async (dispatch) => {
  const res = await axios.get(`https://dummyjson.com/products/${id}`);

  {
    dispatch({
      type: ActionTypes.SET_DETAILS,
      payload: res.data,
    });
  }
};

export const setAllCategory = (category) => async (dispatch) => {
  const res = await axios(
    `https://dummyjson.com/products/category/${category}`
  );

  {
    dispatch({
      type: ActionTypes.SET_CATEGORY_PRODUCT,
      payload: res.data.products,
    });
  }
};

export const setAddWish = (wish) => async (dispatch) => {
  {
    dispatch({
      type: ActionTypes.ADD_WISH,
      payload: wish,
    });
  }
};

export const setSearch = (title) => async (dispatch) => {
  const res = await axios(`https://dummyjson.com/products/search?q=${title}`);

  {
    dispatch({
      type: ActionTypes.SET_SEARCH,
      payload: res.data,
    });
  }
};

export const setDelete = (del) => async (dispatch) => {
  {
    dispatch({
      type: ActionTypes.DELETE_DATA,
      payload: del,
    });
  }
};

export const setWishDelete = (id) => async (dispatch) => {
  {
    dispatch({
      type: ActionTypes.WISH_DELETE_DATA,
      payload: id,
    });
  }
};

export const setDec = (id, quantity) => async (dispatch) => {
  {
    dispatch({
      type: ActionTypes.SET_DEC,
      payload: quantity,
      proid: id,
    });
  }
};

export const setInc = (id, quantity) => async (dispatch) => {
  {
    dispatch({
      type: ActionTypes.SET_INC,
      payload: quantity,
      proid: id,
    });
  }
};

export const RemoveCart = () => async (dispatch) => {
  {
    dispatch({
      type: ActionTypes.REMOVE_ALL_CART,
    });
  }
};

export const OrderItems = (value) => async (dispatch) => {
  {
    dispatch({
      type: ActionTypes.ORDER_ITEM,
      payload: value,
    });
  }
};
export const OrderCancel = (id) => async (dispatch) => {
  console.log(id);
  {
    dispatch({
      type: ActionTypes.CANCEL_ORDER_ITEM,
      payload: id,
    });
  }
};

export const setAddress = (add) => async (dispatch) => {
  {
    dispatch({
      type: ActionTypes.SET_ADDRESS,
      payload: add,
    });
  }
};

export const setRemoveAddress = () => async (dispatch) => {
  {
    dispatch({ type: ActionTypes.RMV_ADDRESS });
  }
};

export const setHomeDesignDetails = (item) => {
  return {
    type: ActionTypes.HOME_DESIGN_DETAILS,
    payload: item,
  };
};

export const singleBuyProduct = (i) => {
  return {
    type: ActionTypes.BUY_SINGLE_PRODUCT,
    payload: i,
  };
};
