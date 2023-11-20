import { API, endpoints } from "../api";

class AddtocartService {
  static createAddtocart() {
    return API.post(endpoints.api.addtocart.create);
  }

  static updateAddtocart() {
    return API.post(endpoints.api.addtocart.update);
  }

  static deleteAddtocart() {
    return API.post(endpoints.api.addtocart.delete);
  }

  static fetchOneAddtocart() {
    return API.post(endpoints.api.addtocart.getOne);
  }

  static fetchAllAddtocart() {
    return API.post(endpoints.api.addtocart.getAll);
  }

  static fetchAllAddtocart(query) {
    const url = query
      ? endpoints.api.addtocart.getAll + query
      : endpoints.api.addtocart.getAll;
    return API.get(url);
  }
}

export default AddtocartService;
