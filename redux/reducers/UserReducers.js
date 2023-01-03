import { ActionTypes } from "../types/action-types";

const intialState = {
  allproo: [],
  products: [],
  carts: [],
  details: [],
  singledetails: [],
  wish: [],
  search: [],
  productCategory: [],
  moreproduct: [],
  incdec: [],
  quantity: [],
  orders: [],
  address: [],
  designdetails: [],
  singlebuyproduct: [],
};

export const setAllProductsReducer = (
  state = intialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.All_PRODUCT:
      return {
        ...state,
        allproo: payload,
      };
    case ActionTypes.DELETE_DATA:
      return {
        ...state,
        allproo: state.allproo?.filter((del) => {
          return del.id !== payload;
        }),
      };
    default:
      return state;
  }
};

export const setCategoryReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_CATEGORY:
      return {
        ...state,
        category: payload,
      };
    default:
      return state;
  }
};

export const setProductReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCT:
      return {
        ...state,
        products: payload,
      };
    default:
      return state;
  }
};

export const setAddCartReducer = (
  state = intialState,
  { type, payload, proid }
) => {
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      return {
        ...state,
        carts: state.carts?.concat(payload),
      };
    case ActionTypes.DELETE_DATA:
      return {
        ...state,
        carts: state.carts?.filter((del) => {
          return del.id !== payload;
        }),
      };
    case ActionTypes.SET_INC:
      return {
        ...state,
        carts: state.carts.map((content, i) =>
          content.id === proid ? { ...content, qty: payload } : content
        ),
      };
    case ActionTypes.SET_DEC:
      return {
        ...state,
        carts: state.carts.map((content, i) =>
          content.id === proid ? { ...content, qty: payload } : content
        ),
      };

    case ActionTypes.REMOVE_ALL_CART:
      return {
        carts: [],
      };

    default:
      return state;
  }
};

export const setDetailsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_DETAILS:
      return {
        ...state,
        details: payload,
      };

    default:
      return state;
  }
};

export const setAllProductReducer = (
  state = intialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SET_CATEGORY_PRODUCT:
      return {
        ...state,
        productCategory: payload,
      };
    default:
      return state;
  }
};

export const setWishReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_WISH:
      return {
        ...state,
        wish: state.wish?.concat(payload),
      };
    case ActionTypes.WISH_DELETE_DATA:
      return {
        ...state,
        wish: state.wish?.filter((delWish) => {
          return delWish.id !== payload;
        }),
      };
    default:
      return state;
  }
};

export const setSearchReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_SEARCH:
      return {
        ...state,
        search: payload,
      };
    default:
      return state;
  }
};

export const setIncDecReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_DEC:
      return {
        ...state,
        incdecid: payload,
      };
    case ActionTypes.SET_INC:
      return {
        ...state,
        incdecid: payload,
      };
    default:
      return state;
  }
};

export const setOrderItemReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ORDER_ITEM:
      return {
        ...state,
        orders: payload,
      };
    case ActionTypes.CANCEL_ORDER_ITEM:
      return {
        ...state,
        orders: state.orders.filter((elem) => {
          return elem.id !== payload;
        }),
      };

    default:
      return state;
  }
};

export const setAddressReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ADDRESS:
      return {
        ...state,
        address: payload,
      };
    case ActionTypes.RMV_ADDRESS:
      return {
        address: [],
      };
    default:
      return state;
  }
};

export const setHomeDesignDetailsReducer = (
  state = intialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.HOME_DESIGN_DETAILS:
      return {
        ...state,
        designdetails: payload,
      };
    default:
      return state;
  }
};

export const singleBuyProductReducer = (
  state = intialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.BUY_SINGLE_PRODUCT:
      return {
        ...state,
        singlebuyproduct: payload,
      };
    default:
      return state;
  }
};
