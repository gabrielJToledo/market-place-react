import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { setProducts } from '../../redux/actions/productActions'
import './ProductListing.css'

const ProductListing = () => {
    const dispatch = useDispatch()

    useEffect(() => { async function fetchProducts() {
                const res = await axios.get("https://fakestoreapi.com/products").catch(err => console.log(err))
                dispatch(setProducts(res.data))
            }
            fetchProducts()
    }, [dispatch])
    return (
            <ProductComponent></ProductComponent>
    )
}

export default ProductListing