import React from "react";
import { useParams } from "react-router-dom";

function ProductScreen() {
  const params = useParams();
  const { slug } = params;
  console.log("slug", slug);
  return (
    <div>
      <h2>{slug}</h2>
    </div>
  );
}

export default ProductScreen;
