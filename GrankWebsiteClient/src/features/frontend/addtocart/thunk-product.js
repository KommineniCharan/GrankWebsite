import axios from "axios";
import { addProducts } from "../../../app/slices/shoppingSlice";
import AddtocartService from "../../../services/AddtocartService";

export const loadProducts = () => (dispatch, getState) => {
  AddtocartService.fetchAllAddtocart()
    .then((response) => {
      // dispatch(addProducts(json.products))
      dispatch(addProducts(response?.data?.data));
      localStorage.setItem(
        "responce.data",
        JSON.stringify(response?.data?.data)
      );
      //   setAddtocart(response?.data?.data);
      console.log(response?.data?.data);
    })
    .catch((err) => {
      console.log(err);
    });
  // };

  //   fetch(
  //     "https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/products",
  //     {
  //       method: "get",
  //       headers: { Authorization: `Bearer ${token}` },
  //     }
  //   )
  // .then((res) => res.json())
  // .then((json) => dispatch(addProducts(json.products)));
};
