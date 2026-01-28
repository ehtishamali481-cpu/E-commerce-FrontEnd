import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa";





const RangeSlider = ({ priceRange, setPriceRange }) => {
    const [price, setPrice] = React.useState(true);
    const MIN = 50;
    const MAX = 300;

    return (
        <RangeSlide>
            <div className="row" style={{ fontSize: "20px", fontWeight: "700", color: "black" }}>
                <p>
                    Price
                </p>
                <div className="icon">
                    <FaChevronDown onClick={() => setPrice(!price)}
                        style={{
                            transform: price ? "rotate(180deg)" : "rotate(0deg)",
                            transition: "transform 0.3s",
                            cursor: "pointer"
                        }} />
                </div>
            </div>
            {
                price && (

                    <Box sx={{ width: 220, mt: 2, }} >
                        <Slider
                            value={priceRange}
                            onChange={(e, newValue) => setPriceRange(newValue)}
                            min={MIN}
                            max={MAX}
                            valueLabelDisplay="auto"
                            valueLabelFormat={(val) => `$${val}`}
                            sx={{ color: "#111" }}
                        />


                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <span>${MIN}</span>
                            <span>${MAX}</span>
                        </Box>
                        <p>
                            Price: ${priceRange[0]} - ${priceRange[1]}
                        </p>
                    </Box>

                )
            }

        </RangeSlide>
    );
};

export default RangeSlider;




const RangeSlide = styled.div`
    border-bottom: 1px solid #0000001A ;
    border-top: 1px solid #0000001A ;
    margin-bottom: 20px;
    padding-bottom: 20px;
    padding-top: 20px;
    .row{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`
