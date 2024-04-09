import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import "./App.css";

function ProductDetails() {
    const [myData, setData] = useState({});
    let { id } = useParams();

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`)
            .then((response) => {
                setData(response.data);
            });
    }, [id]);

    function addtoCart(pid) {
        var myformData = new FormData();
        var id = localStorage.getItem("id");
        myformData.append("id", id);
        myformData.append("id", pid);
        myformData.append("quantity", 1);
        axios.post("https://dummyjson.com/carts/add", myformData)
            .then((response) => {
                setData(response.data.carts);
            });
        navigate("/ViewCart");
    }

    let navigate = useNavigate();

    return (
        <>
            <h2>Product Details</h2>
            <hr />
            <h3>Name is : {myData.title} <br /></h3>
            <h5>Price is : {myData.price}</h5>
            <img alt={myData.thumbnail} src={myData.thumbnail} height={250} /> <br /> <br />
            <button onClick={() => addtoCart(id)} className="btn btn-warning">AddtoCart</button>
        </>
    );
}

export default ProductDetails;