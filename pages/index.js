import React from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";

const Div = styled.div`
  margin: 0 auto;
  max-width: 1050px;
  width: 90%;
`;
const Button = styled.button`
  background: ${(props) =>
    props.color === "primary"
      ? "blue"
      : props.color === "secondary"
      ? "grey"
      : props.color === "success"
      ? "green"
      : props.color === "info"
      ? "skyblue"
      : props.color === "warning"
      ? "yellow"
      : props.color === "danger"
      ? "red"
      : "transparent"};
  color: ${(props) => (props.color ? "white" : "blue")};
  padding: 1rem 2rem;
  border: 0;
  border-radius: 0.4rem;
  font-size: 1.5rem;
  margin: 0.4rem;
  font-weight: bold;
`;

const Home = () => {
  return (
    <Div>
      <Button color="primary" onClick={() => toast("Wow so easy !")}>
        Notify !
      </Button>
      <Button color="secondary" onClick={() => toast.dark("wow so easy !")}>
        Notify !
      </Button>
      <Button color="success" onClick={() => toast.success("Wow so easy !")}>
        Notify !
      </Button>
      <Button color="info" onClick={() => toast.info("Wow so easy !")}>
        Notify !
      </Button>
      <Button color="warning" onClick={() => toast.warning("Wow so easy !")}>
        Notify !
      </Button>
      <Button color="danger" onClick={() => toast.error("Wow so easy !")}>
        Notify !
      </Button>
      <ToastContainer />
    </Div>
  );
};

export default Home;
