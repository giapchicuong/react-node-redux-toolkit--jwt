import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { Rings } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { fetchAccountRedux } from "../redux/slices/accountSlice";
const PrivateRoutes = (props) => {
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname !== "/login") {
      dispatch(fetchAccountRedux())
    }
  }, [location]);
  
  if (account && account.isLoading) {
    return (
      <div className="loading-container">
        <Rings
          height="100"
          width="100"
          color="#1877f2"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
        <div className="loading-text">Loading data ...</div>
      </div>
    );
  } else {
    if (account && account.isAuthenticated === true) {
      return (
        <>
          <Route
            path={props.path}
            component={props.component}
            exact={props.exact}
          />
        </>
      );
    } else {
      return <Redirect to="/login"></Redirect>;
    }
  }
};

export default PrivateRoutes;
