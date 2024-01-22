import React from "react";
import "./Counter.scss";


export default function Counter({value}) {

    return (
        <h1 className={ value < 0 ? "text-danger" : "text-success" }>{value}</h1>
    )
}