import React, { useState } from "react";
import { styled } from "styled-components";

function QuestionOne() {
    const [isView, setView] = useState(false);
    return (
        <>
            <Container>
                <Click
                    onClick={() => {
                        setView(!isView);
                    }}
                >
                    Click here..
                </Click>
                <Para className={isView ? "view " : ""}>
                    Why do we use it? It is a long established fact that a
                    reader will be distracted by the readable content of a page
                    when looking at its layout. The point of using Lorem Ipsum
                    is that it has a more-or-less normal distribution of
                    letters, as opposed to using 'Content here, content here',
                    making it look like readable English. Many desktop
                    publishing packages and web page editors now use Lorem Ipsum
                    as their default model text, and a search for 'lorem ipsum'
                    will uncover many web sites still in their infancy. Various
                    versions have evolved over the years, sometimes by accident,
                    sometimes on purpose (injected humour and the like).
                </Para>
            </Container>
        </>
    );
}

export default QuestionOne;
const Container = styled.div``;
const Click = styled.a`
    display: inline-block;
    width: 90px;
    background-color: red;
    padding: 10px;
`;
const Para = styled.p`
    display: none;
    &.view {
        display: block;
    }
`;
