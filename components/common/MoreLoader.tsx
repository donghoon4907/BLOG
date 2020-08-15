import React, { FC } from "react";
import { CircleToBlockLoading } from "react-loadingg";

const MoreLoader: FC = () => (
  <CircleToBlockLoading
    color="#3897f0"
    style={{ position: "relative", margin: "auto" }}
  />
);

export default MoreLoader;
