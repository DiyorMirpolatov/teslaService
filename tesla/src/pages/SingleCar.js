import React from "react";
import { useParams } from "react-router";

const SingleCar = () => {
  const { name } = useParams();

  return (
    <>
    <div>{name}</div>
    </>
  );
};

export default SingleCar;
