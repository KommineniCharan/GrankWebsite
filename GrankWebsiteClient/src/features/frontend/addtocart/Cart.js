import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCard,
  selectProducts,
  addCard,
  removeCard,
} from "../../../app/slices/shoppingSlice";
import {
  selectCardsecu,
  selectProductssecu,
  addsecuCard,
  removesecuCard,
} from "../../../app/slices/shoppingsecuSlice";

import Header from "../../../layout/blanklayout/header2/Header";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cardProducts = useSelector(selectCard);
  const cardProductssecu = useSelector(selectCardsecu);
  //   const cardProduct = [users:0,products:[{id:1,quantity:1},{id:2,quantity:2}]]
  const products = useSelector(selectProducts);
  const productssecu = useSelector(selectProductssecu);
  const [productList, setProductList] = useState([]);
  const [productsecuList, setProductSecuList] = useState([]);
  const [productcartList, setProductcartList] = useState([]);

  console.log("cardproduct", cardProducts);
  console.log("cardproduct", cardProductssecu);

  useEffect(() => {
    const cartget = JSON.parse(localStorage.getItem("responce.data"));
    const prodListget = cartget.map((prod) => {
      const p = products.find(({ _id }) => _id == prod.id);

      return { ...prod, ...p };
    });
    const prodList = cardProducts.products.map((prod) => {
      const p = products.find(({ _id }) => _id == prod.id);

      return { ...prod, ...p };
    });
    setProductList(prodList);
    // var cart = sessionStorage.getItem("product23");
    // setProductList(cart);
    // console.log("cartget", cartget);
    setProductcartList(prodListget);
  }, [cardProducts]);

  // security start

  useEffect(() => {
    const prodListsecu = cardProductssecu.productssecu.map((prod) => {
      const p = productssecu.find(({ _id }) => _id == prod.id);

      return { ...prod, ...p };
    });
    setProductSecuList(prodListsecu);
    // setProductList(products2);
  }, [cardProductssecu]);

  const addToCard = (_id) => {
    dispatch(addCard({ id: _id }));
  };
  const removeToCard = (_id) => {
    dispatch(removeCard({ id: _id }));
  };
  const addToCardsecu = (_id) => {
    dispatch(addsecuCard({ id: _id }));
  };
  const removeToCardsecu = (_id) => {
    dispatch(removesecuCard({ id: _id }));
  };

  let total = 0;
  return (
    <>
      <section className="section-top">
        <Header />

        <div className="container-fluid  your-cart-container">
          <div className="row">
            <div className="col-12 total-cart-header">
              <h1>Your cart</h1>
              {/* <Link to="/">
                <h2>Go to list</h2>
              </Link> */}
            </div>
            <div className="col-12 col-md-7 col-lg-7">
              {productList.map((prod, i) => {
                total += prod.price * prod.quantity;
                return (
                  <div key={prod._id} className="">
                    <div className=" total-cart ">
                      {/* <div key={prod.id} className="domain-plan-div">
                        <h1>
                          {prod.id}-{prod.name}
                        </h1>
                        <p>
                          {prod.id}-{prod.discription}
                        </p>
                        <h5>Starting at</h5>
                        <h4>
                          Rs.{prod.price} <span>/mo</span>
                        </h4>
                        <div>
                          <button onClick={() => removeToCard(prod.id)}>
                            --
                          </button>
                          <span>Quantity:{prod.quantity}</span>
                          <button onClick={() => addToCard(prod.id)}>++</button>
                        </div>
                        <h2>Sub-Total:{prod.price * prod.quantity}</h2>
                      </div> */}
                      <div>
                        <img
                          className="img-fluid "
                          src="assest/photos/social.png"
                          alt="G-Rank"
                        />
                      </div>
                      {/* <div key={prod.id}> */}
                      <div key={prod.id}>
                        {/* <h1>{prod.name}</h1> */}
                        <h1>{prod.name}</h1>

                        <p>{prod.discription}</p>
                        <h4>
                          <img
                            className="img-fluid "
                            src="assest/photos/rupee3.png"
                            alt="G-Rank"
                          />
                          {prod.price} <span>/mo</span>
                        </h4>
                        <div>
                          <select>
                            <option>3 year</option>
                            <option>2 year</option>
                            <option>1 year</option>
                          </select>
                          <button onClick={() => removeToCard(prod._id)}>
                            -
                          </button>
                          <span>Quantity:{prod.quantity}</span>
                          <button onClick={() => addToCard(prod._id)}>+</button>
                        </div>
                      </div>
                      <div>
                        <h2>
                          <img
                            className="img-fluid "
                            src="assest/photos/rupee3.png"
                            alt="G-Rank"
                          />
                          {Math.round(prod.price * prod.quantity)}
                        </h2>
                        <div
                          className="button-dis"
                          onClick={() => removeToCard(prod.id)}
                        >
                          remove cart
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              {/* <CartSecu /> */}
              {productsecuList.map((prod, i) => {
                total += prod.price * prod.quantity;
                return (
                  <div key={prod._id} className="">
                    <div className=" total-cart ">
                      {/* <div key={prod.id} className="domain-plan-div">
                        <h1>
                          {prod.id}-{prod.name}
                        </h1>
                        <p>
                          {prod.id}-{prod.discription}
                        </p>
                        <h5>Starting at</h5>
                        <h4>
                          Rs.{prod.price} <span>/mo</span>
                        </h4>
                        <div>
                          <button onClick={() => removeToCard(prod.id)}>
                            --
                          </button>
                          <span>Quantity:{prod.quantity}</span>
                          <button onClick={() => addToCard(prod.id)}>++</button>
                        </div>
                        <h2>Sub-Total:{prod.price * prod.quantity}</h2>
                      </div> */}
                      <div>
                        <img
                          className="img-fluid "
                          src="assest/photos/social.png"
                          alt="G-Rank"
                        />
                      </div>
                      {/* <div key={prod.id}> */}
                      <div key={prod.id}>
                        <h1>{prod.name}</h1>
                        <p>{prod.discription}</p>
                        <h4>
                          <img
                            className="img-fluid "
                            src="assest/photos/rupee3.png"
                            alt="G-Rank"
                          />
                          {prod.price} <span>/mo</span>
                        </h4>
                        <div>
                          <select>
                            <option>3 year</option>
                            <option>2 year</option>
                            <option>1 year</option>
                          </select>
                          <button onClick={() => removeToCardsecu(prod._id)}>
                            -
                          </button>
                          <span>Quantity:{prod.quantity}</span>
                          <button onClick={() => addToCardsecu(prod._id)}>
                            +
                          </button>
                        </div>
                      </div>
                      <div>
                        <h2>
                          <img
                            className="img-fluid "
                            src="assest/photos/rupee3.png"
                            alt="G-Rank"
                          />
                          {Math.round(prod.price * prod.quantity)}
                        </h2>
                        <div
                          className="button-dis"
                          onClick={() => removeToCardsecu(prod.id)}
                        >
                          remove cart
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="col-12 col-md-5 col-lg-5">
              <div className="total-payment">
                <h2>Order Summary</h2>
                {/* <p>1 item</p> */}
                <hr />
                <h2>
                  Subtotal <span>(INR)</span>
                  <pre className="total-price">
                    <img
                      className="img-fluid "
                      src="assest/photos/rupee3.png"
                      alt="G-Rank"
                    />
                    {Math.round(total)}
                  </pre>
                </h2>
                <p style={{ textAlign: "center" }}>
                  Subtotal does not include applicable taxes
                </p>
                <h3>Have A promo code ?</h3>
                <h5>
                  Nice!<pre>you save Rs.1,200,00 on your order</pre>
                </h5>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#000" : "#000",
                  })}
                  to="/login"
                >
                  <h4 className="ready-to-pay">I'm ready to pay</h4>
                </NavLink>
                <h4>
                  <img
                    className="img-fluid "
                    src="assest/photos/lock.png"
                    alt="G-Rank"
                  />
                  Secured Payment
                </h4>
                <div className="total-pay-img">
                  <img
                    className="img-fluid "
                    src="assest/photos/visa.png"
                    alt="G-Rank"
                  />
                  <img
                    className="img-fluid "
                    src="assest/photos/mastercard-logo.jpg"
                    alt="G-Rank"
                  />
                  <img
                    className="img-fluid "
                    src="assest/photos/amex-card.png"
                    alt="G-Rank"
                  />
                  <img
                    className="img-fluid "
                    src="assest/photos/rupay.png"
                    alt="G-Rank"
                  />
                  <img
                    className="img-fluid "
                    src="assest/photos/maestro.png"
                    alt="G-Rank"
                  />
                  <img
                    className="img-fluid "
                    src="assest/photos/paytm.jpg"
                    alt="G-Rank"
                  />
                </div>
                <p>We also accept indian debit cards, UPI and Netbanking</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
