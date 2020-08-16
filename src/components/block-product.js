import React from "react"
import { Link } from "gatsby"

import SingleProduct from "./single-product"

const Block = ({ title, link, linkText, products }) => (
  <div className="block-wrapper">
    <div className="block-header">
      <h3>{title}</h3>
      <Link to={link} className="link-flat text-secondary">
        {`${linkText} `}
        <svg
          viewBox="0 0 16 16"
          className="bi bi-arrow-right"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"
          />
          <path
            fill-rule="evenodd"
            d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"
          />
        </svg>
      </Link>
    </div>
    <div className="block-body">
      {products.map(({ node: product }) => (
        <div className="block-product" key={product.id}>
          <SingleProduct data={product} />
        </div>
      ))}
    </div>
  </div>
)

export default Block
