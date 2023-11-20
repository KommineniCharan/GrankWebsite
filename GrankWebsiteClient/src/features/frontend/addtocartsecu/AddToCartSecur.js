import React, { useEffect, useState } from "react";
// import AddtocartService from "../../../services/AddtocartService";
// import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import {
  selectProductssecu,
  selectCardsecu,
  addsecuCard,
} from "../../../app/slices/shoppingsecuSlice";

const Product = ({ _id, name, price }) => {
  console.log(_id, "aaa");
  const dispatch = useDispatch();
  const cardsecu = useSelector(selectCardsecu);
  let message = "Add To Cart";
  if (cardsecu?.productssecu?.some((pro) => pro.id == _id))
    message = "Added To Cart";

  return (
    // <div className="col-12">
    //   <motion.div
    //     className="domain-plan-div"
    //     initial={{ opacity: 0, scale: 0 }}
    //     whileInView={{ opacity: 1, scale: 1 }}
    //     transition={{ duration: 1 }}
    //   >
    //     <h1>{_id}</h1>
    //     <h1>{name}</h1>
    //     <p>{discription}</p>
    //     <h5>Starting at</h5>
    //     <h4>
    //       Rs.{price}
    //       <span>/mo</span>
    //     </h4>
    //     <h3>
    //       <span
    //         onClick={() =>
    //           sessionStorage.setItem("product23", _id) |
    //           dispatch(addCard({ id: _id }))
    //         }
    //       >
    //         {message}
    //       </span>
    //     </h3>
    //   </motion.div>
    // </div>

    <div className="col-12 col-lg-3 p-0">
      <div className="table-add-to-cart-div">
        <h1 className="table-cell-tagsecu">{name}</h1>

        <h4>
          ${price}
          <span>/per year</span>
        </h4>
        <h4>
          <div className="cell-inner">
            <p className="secu-table-text">1 Site</p>
          </div>
        </h4>
        <h4>
          <div className="cell-inner">
            <p className="secu-table-text">Domain</p>
          </div>
        </h4>
        <h4>
          <div className="cell-inner">
            <p className="secu-table-text">SHA-2 & 2048-bit</p>
          </div>
        </h4>
        <h4>
          <div className="cell-inner">
            <p className="secu-table-text">Boost SEO rankings</p>
          </div>
        </h4>
        <h4>
          <div className="cell-inner">
            <p className="secu-table-text">5 Mins</p>
          </div>
        </h4>

        <h4>
          <div className="cell-inner">
            <img src="assest/photos/hosting/wright.png" alt="" />
          </div>
        </h4>
        <h4>
          <div className="cell-inner">
            <img src="assest/photos/hosting/wright.png" alt="" />
          </div>
        </h4>

        <h4>
          <div className="cell-inner">
            <img src="assest/photos/hosting/wrong.png" alt="" />
          </div>
        </h4>
        <h4>
          <div className="cell-inner">
            <p className="secu-table-text">Unlimited Servers</p>
          </div>
        </h4>
        <h4>
          <div className="cell-inner">
            <p className="secu-table-text">Unlimited</p>
          </div>
        </h4>
        <h4>
          <div className="cell-inner">
            <img src="assest/photos/hosting/wright.png" alt="" />
          </div>
        </h4>
        {/* <tr>
          <td>
            <div className="cell-inner">
              <img src="assest/photos/hosting/wrong.png" alt="" />
            </div>
          </td>

          <td>
            <div className="cell-inner">
              <img src="assest/photos/hosting/wrong.png" alt="" />
            </div>
          </td>

          <td>
            <div className="cell-inner">
              <img src="assest/photos/hosting/wright.png" alt="" />
            </div>
          </td>
        </tr> */}
        <h3 className="secu-add-to-cart-butt">
          <span
            onClick={() =>
              sessionStorage.setItem("product23", _id) |
              dispatch(addsecuCard({ id: _id }))
            }
          >
            {message}
          </span>
        </h3>
      </div>
    </div>
  );
};
const AddToCartSecu = () => {
  // const [addtocart, setAddtocart] = useState([]);

  // const loadAddtocart = () => {
  //   AddtocartService.fetchAllAddtocart()
  //     .then((response) => {
  //       setAddtocart(response?.data?.data);
  //       console.log(response?.data?.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // useEffect(() => {
  //   loadAddtocart();
  // }, []);
  const productssecu = useSelector(selectProductssecu);
  console.log("productsecu", productssecu);
  // useEffect(() => {
  //   sessionStorage.setItem("products", JSON.stringify(products));
  // }, [products]);

  return (
    <>
      {Array.isArray(productssecu) &&
        productssecu.map((prod, i) => <Product key={i} {...prod} />)}
    </>
  );
};

export default AddToCartSecu;
