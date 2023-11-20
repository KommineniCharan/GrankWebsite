import { API, endpoints } from "../api";

class AddtocartsecuService {
  static createAddtocartsecu() {
    return API.post(endpoints.api.addtocartsecu.create);
  }

  static updateAddtocartsecu() {
    return API.post(endpoints.api.addtocartsecu.update);
  }

  static deleteAddtocartsecu() {
    return API.post(endpoints.api.addtocartsecu.delete);
  }

  static fetchOneAddtocartsecu() {
    return API.post(endpoints.api.addtocartsecu.getOne);
  }

  static fetchAllAddtocartsecu() {
    return API.post(endpoints.api.addtocartsecu.getAll);
  }

  static fetchAllAddtocartsecu(query) {
    const url = query
      ? endpoints.api.addtocartsecu.getAll + query
      : endpoints.api.addtocartsecu.getAll;
    return API.get(url);
  }
}

export default AddtocartsecuService;
