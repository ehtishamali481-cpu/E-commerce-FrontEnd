import React, { useState } from 'react'
import { FaChevronDown } from "react-icons/fa";
import styled from "styled-components";




const Size = () => {
    const [sizeShow, setSizeShow] = useState(true);
    const [selected, setSelected] = useState("");


    const ButtonSize = [
        { id: 1, buttonName: "XX-Small" },
        { id: 2, buttonName: "X-Small" },
        { id: 3, buttonName: "Small" },
        { id: 4, buttonName: "Medium" },
        { id: 5, buttonName: "Large" },
        { id: 6, buttonName: "X-Large" },
        { id: 7, buttonName: "XX-Large" },
        { id: 8, buttonName: "3X-Large" },
        { id: 9, buttonName: "4X-Large" },
    ]
    return (
        <SizeStyle>
            <div className="row" style={{ fontSize: "20px", fontWeight: "700", color: "black" }}>
                <p>Size</p>
                <div className="icon">
                    <FaChevronDown onClick={() => setSizeShow(!sizeShow)}
                        style={{
                            transform: sizeShow ? "rotate(180deg)" : "rotate(0deg)",
                            transition: "transform 0.3s",
                            cursor: "pointer"
                        }} />
                </div>
            </div>
            {
                sizeShow && (
                    <div className="buttons">
                        {
                            ButtonSize.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => setSelected(item.id)}
                                    style={{
                                        backgroundColor: selected === item.id ? "#000" : "#F0F0F0",
                                        color: selected === item.id ? "#fff" : "#000",
                                    }}
                                >{item.buttonName}</button>
                            ))
                        }
                    </div>
                )
            }

        </SizeStyle>
    )
}

export default Size




const SizeStyle = styled.div`
border-bottom: 1px solid #0000001A;
margin-bottom: 20px;
    .row{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
    }
    .buttons{
        display: flex;
        align-items: center;
        gap: 12px;
        flex-wrap: wrap;
        margin-bottom: 20px;
        button{
            padding: 10px 20px;
            border-radius: 62px;
            border: none;
            cursor: pointer;
            
        }
    }
`