import React, { useEffect, useState } from "react";
import AddtocartService from "../../../services/AddtocartService";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import {
  selectProducts,
  selectCard,
  addCard,
} from "../../../app/slices/shoppingSlice";

const Product = ({ _id, name, discription, price }) => {
  console.log(_id, "aaa");
  const dispatch = useDispatch();
  const card = useSelector(selectCard);

  let message = "Add To Cart";
  if (card?.products?.some((pro) => pro.id == _id)) message = "Added To Cart";

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
        <h1 className="table-cell-tag">{name}</h1>

        <h4>
          ${price}
          <span>/per year</span>
        </h4>
        <h4>
          <div className="cell-inner">
            <img src="assest/photos/hosting/wrong.png" alt="" />
          </div>
        </h4>
        <h4>
          <div className="cell-inner">
            <img src="assest/photos/hosting/wrong.png" alt="" />
          </div>
        </h4>
        <h4>
          <div className="cell-inner">
            <img src="assest/photos/hosting/wrong.png" alt="" />
          </div>
        </h4>
        <h4>
          <div className="cell-inner">
            <img src="assest/photos/hosting/wrong.png" alt="" />
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
        <h3>
          <span
            onClick={() =>
              // sessionStorage.setItem("product23", card) |
              dispatch(addCard({ id: _id }))
            }
          >
            {message}
          </span>
        </h3>
      </div>
    </div>
  );
};
const AddToCart = () => {
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
  const products = useSelector(selectProducts);
  useEffect(() => {
    localStorage.setItem("cart", products);
    console.log("productnew", products);
  }, []);

  return (
    <>
      {Array.isArray(products) &&
        products.map((prod, i) => <Product key={i} {...prod} />)}
    </>
  );
};

export default AddToCart;
