import React from "react";

const ReviewStars = ({ rating = 0 }) => {
    return (
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            {[1, 2, 3, 4, 5].map((star) => {
                const isFull = rating >= star;
                const isHalf = rating >= star - 0.5 && rating < star;

                return (
                    <span
                        key={star}
                        style={{
                            fontSize: "24px",
                            background: isHalf
                                ? "linear-gradient(90deg, #FFC107 50%, #E4E5E9 50%)"
                                : "none",
                            WebkitBackgroundClip: isHalf ? "text" : "unset",
                            WebkitTextFillColor: isHalf
                                ? "transparent"
                                : isFull
                                    ? "#FFC107"
                                    : "#E4E5E9",
                        }}
                    >
                        ★
                    </span>
                );
            })}

            <span style={{ fontSize: "14px", marginLeft: "6px" }}>
                {rating} / 5
            </span>
        </div>
    );
};

export default ReviewStars;
