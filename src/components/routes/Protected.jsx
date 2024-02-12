import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import PropTypes from "prop-types";

const Protected = ({ children }) => {
  const { user, isLoading } = useAuth();
  
  if (isLoading) {
    return null;
  }

  return <>{user ? children : <Navigate to={"/"} />}</>;
};

export default Protected;

Protected.propTypes = {
  children: PropTypes.node.isRequired,
};
