import axios from "axios";
import { addsecuProducts } from "../../../app/slices/shoppingsecuSlice";
import AddtocartsecuService from "../../../services/AddtocartsecuService";

export const loadProducts = () => (dispatch, getState) => {
  AddtocartsecuService.fetchAllAddtocartsecu()
    .then((response) => {
      // dispatch(addProducts(json.products))
      dispatch(addsecuProducts(response?.data?.data));
      //   setAddtocart(response?.data?.data);
      console.log("secu", response?.data?.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
