import React, { useState } from 'react'
import { FaChevronDown } from "react-icons/fa";
import styled from "styled-components";
import { FaChevronRight } from "react-icons/fa";






const DressStyle = () => {
    const [dress, setDress] = useState(true);

    const DressDetail = [
        { id: 1, name: "Casual" },
        { id: 2, name: "Formal" },
        { id: 3, name: "Party" },
        { id: 4, name: "Gym" }
    ]
    return (
        <Dressing>
            <div className="row" style={{ fontSize: "20px", fontWeight: "700", color: "black" }}>
                <p>Dress Style</p>
                <div className="icon">
                    <FaChevronDown onClick={() => setDress(!dress)}
                        style={{
                            transform: dress ? "rotate(180deg)" : "rotate(0deg)",
                            transition: "transform 0.3s",
                            cursor: "pointer"
                        }} />
                </div>

            </div>
            {
                dress && (
                    <div className="warper">
                        {
                            DressDetail.map((item) => (
                                <div className='row' key={item.id}>
                                    <p>{item.name}</p>
                                    <div className="icon">
                                        <FaChevronRight
                                        />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                )
            }
            <button className='filterbtn'>Apply Filter</button>


        </Dressing>
    )
}

export default DressStyle




const Dressing = styled.div`
    .row{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
    }
    .filterbtn{
        width: 247px;
        border-radius: 62px;
        background-color: black;
        color: white;
        padding: 16px 54px;
        cursor: pointer;
    }
`