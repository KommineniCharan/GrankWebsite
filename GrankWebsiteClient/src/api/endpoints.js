export default {
  serverBaseurl: "http://localhost:2121",
  api: {
    user: {
      create: "/users/",
      update: "/users/",
      delete: "/users/",
      getone: "/users/",
      getAll: "/users",
      changeImage: "/users/image/",
    },
    auth: {
      userLogin: "/auth/login",
      validateToken: "/auth/validate-token",
      refreshToken: "/auth/refresh-token",
    },
    addtocart: {
      create: "/addtocart",
      update: "/addtocart/",
      delete: "/addtocart/",
      getOne: "/addtocart/",
      getAll: "/addtocart",
    },
    addtocartsecu: {
      create: "/addtocartsecu",
      update: "/addtocartsecu/",
      delete: "/addtocartsecu/",
      getOne: "/addtocartsecu/",
      getAll: "/addtocartsecu",
    },
  },
};
