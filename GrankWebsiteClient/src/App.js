import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import BlankLayout from "./layout/blanklayout/BlankLayout";
import FullLayout from "./layout/full-layout/FullLayout";
import { HelmetProvider } from "react-helmet-async";
// ----
import { useSelector, useDispatch } from "react-redux";
import { selectUser, addUser } from "./app/slices/AuthSlice";
import { Navigate, useNavigate } from "react-router-dom";
import AuthService from "./services/AuthService";
const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedUSer = useSelector(selectUser);

  //login aastana page refresh kelyaver token validate krne.
  React.useEffect(() => {
    //validate the token
    AuthService.validateToken()
      .then((response) => {
        console.log(response.data, "valid token");
        dispatch(addUser(response?.data.data));
      })
      .catch((err) => {
        console.error(err);
        if (err.response.status == 404) {
          sessionStorage.clear();
          navigate("/login");
        }
      });
  }, []);
  const token = sessionStorage.getItem("access");
  //page refresh kelyavr redux state id jate ani redirect honar nai mhnun token aces krun valid krych
  return loggedUSer._id || token ? children : <Navigate to="/login" />;
};
// ---
function App() {
  const helmetContext = {};
  return (
    <>
      <HelmetProvider context={helmetContext}>
        <Routes>
          <Route path="/*" element={<BlankLayout />} />
          <Route
            path="/secured/*"
            element={
              <ProtectedRoute>
                <FullLayout />
              </ProtectedRoute>
            }
          />
        </Routes>
      </HelmetProvider>
    </>
  );
}

export default App;
