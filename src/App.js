import React from "react";
import FormValidation from "./components/QuestionThree";
import QuestionOne from "./components/QuestionOne";
import QuestionTwo from "./components/QuestionTwo";
import { styled } from "styled-components";

function App() {
    return (
        <>
            <MainConatiner>
                <QuestionOne />
                <QuestionTwo />
                <FormValidation />
            </MainConatiner>
        </>
    );
}

export default App;
const MainConatiner = styled.div`
    padding: 20px;
    width: 40%;
    margin: 0 auto;
`;
