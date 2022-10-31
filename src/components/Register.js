import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    toast.success("You have successfully registered");
    setTimeout(() => {
      navigate("/", {replace: true, state: {name: "anjola"}});
    }, 3001);
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <h1>Welcome to Registration Page</h1>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default Register;
