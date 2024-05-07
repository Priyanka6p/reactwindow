import React, { useState, useEffect } from 'react'
import { FixedSizeList } from "react-window";
import { url } from "../utils/ApiUrls";

export const ReactWindow = () => {
    const [data, setData] = useState([]);
    var arr = []

    async function fetchAPI() {
        const fetchdData = await fetch(url)
        const value = await fetchdData.json();
        value.map((ele) => {
            arr.push(ele.id)
            setData(arr)
            // if (ele.id < 6) {

            // }
        })
    }

    useEffect(() => {
        fetchAPI();
    }, []);

    const renderRow = ({ index, style }) => {
        return (
            <div style={style}>
                {data[index]}
            </div>
        )
    }

    return (
        <div style={{ display: "block", padding: 50 }}>
            <h3>React Window</h3>
            <FixedSizeList
                height={300}
                width={300}
                itemSize={100}
                itemCount={data.length}>
                {renderRow}
            </FixedSizeList>
        </div>
    );
};