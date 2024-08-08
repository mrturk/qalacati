"use client";
import React, { useEffect, useState } from "react";
import LoadingComponent from "./LoadingComponent";

const ClientLoadingComponent = () => {
  const [renderLoading, setRenderLoading] = useState(true);

  useEffect(() => {
    setRenderLoading(false);
  }, []);

  return <>{renderLoading && <LoadingComponent />}</>;
};

export default ClientLoadingComponent;
