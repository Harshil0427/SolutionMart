import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./App.css";

export default function AllProduct() {
    const [myData, setData] = useState([]);
    const [search, setSearch] = useState([]);

    let navigate = useNavigate();

    function passdata(id) {
        navigate(`/ProductDetails/${id}`);
    }

    // Show all products
    useEffect(() => {
        axios.get(`https://dummyjson.com/products`)
            .then((response) => {
                setData(response.data.products);
            });
    }, []);

    // Search products
    function SearchData() {
        axios
            .get(`https://dummyjson.com/products/search?q=${search}`)
            .then((response) => {
                setData(response.data.products);
            });
    }

    return (
        <>
            <center>
                <input
                    type="text"
                    className="form-control"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button onClick={SearchData} className="btn btn-primary">
                    Search
                </button>
            </center>
            <h2>All Products</h2>
            <hr />
            <div className="product-list">
                {myData && myData.length ? (
                    myData.map((p, index) => (
                        <div key={index}>
                            <div className="product-card">
                                <div className="product-image">
                                    <img alt={p.images} src={p.images} height="100" />
                                </div>
                                <div className="product-details">
                                    <h3>{p.title}</h3>
                                    <p>Price: Rs. {p.price}</p>
                                    <button
                                        onClick={() => passdata(p.id)}
                                        className="btn btn-warning"
                                    >
                                        Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No Record Found</p>
                )}
            </div>
        </>
    );
}