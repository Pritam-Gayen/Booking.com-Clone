import React from "react";

const SelectOption = (props) =>{
    var arr = [];
    for(let i=0; i<props.size; i++){
        arr.push(<option key={i} value = {i}> {i} </option>);
    }
    // console.log(arr)
    return(arr);

}

export {SelectOption}