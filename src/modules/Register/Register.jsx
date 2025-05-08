import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

import Container from "../../modules/layouts/Container/Container";
import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";
import LoadingError from "../../shared/components/LoadingError/LoadingError";

import RegisterForm from "./RegisterForm/RegisterForm";

import { registerUser } from "../../redux/auth/auth-thunks";

import { selectAuthRequestData } from "../../redux/auth/auth-selectors";

const Register = () => {
  const {loading, error, success} = useSelector(selectAuthRequestData);

  const dispatch = useDispatch();

  const submitForm = async (payload) => {
   dispatch(registerUser(payload));
  };

  if(success) return <Navigate to="/login" />;

  return (
    <div>
      <Container>
        <SectionTitle title="Регистрация" />
        <RegisterForm submitForm={submitForm} />
        {loading && <p>Register...</p>}
        {error && <LoadingError>{error}</LoadingError>}
      </Container>
    </div>
  );
};

export default Register;
