import React from "react";

export default function Button(props) {

    return (
        <button className={`btn btn-${props.color ? props.color : 'primary'} mx-1`} onClick={_ => props.onClickCustom()}>
            {props.text}
        </button>
    )
}