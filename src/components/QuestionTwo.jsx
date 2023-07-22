import React, { useEffect, useRef, useState } from "react";

function QuestionTwo() {
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef(null);
    const handleFocusButtonClick = () => {
        if (isFocused) {
            inputRef.current.focus();
        }
    };

    return (
        <div>
            <input ref={inputRef} />
            <button
                onClick={() => {
                    setIsFocused(true);
                    handleFocusButtonClick();
                }}
            >
                Focus
            </button>
        </div>
    );
}

export default QuestionTwo;
