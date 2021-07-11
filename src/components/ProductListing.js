import React, { useEffect } from 'react';
import axios from "axios";

import { useDispatch, useSelector } from 'react-redux';

import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productActions";

const ProductListing = () => {
    const products = useSelector((state) => state.allProducts.product);
    const dispatch = useDispatch();

    //api-link for allProduct-setup
    const fetchProduct = async () => {
        const response = await axios.get("'https://fakestoreapi.com/products")
            .catch((err) => {
                console.log("Error: ", err);
            });
        dispatch(setProducts(response));
    };
    useEffect(() => {
        fetchProduct();
    });
    console.log("Products:", products);


    return (
        <div>
            <h2><ProductComponent /></h2>
        </div>
    )
}

export default ProductListing;
