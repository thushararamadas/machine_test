import React, { useState } from "react";
import { styled } from "styled-components";

function QuestionThree() {
    const [firstname, setFirstName] = useState("");
    const [Phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [errormsg, setErrormsg] = useState("");
    const [err, setErr] = useState("");

    const mailformat = "/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/";
    const handleSubmit = (e) => {
        e.preventDefault();
        if (firstname === "") {
            // setErrormsg("This field cannot be blank");
            alert("Enter Name");
        } else if (email === "" && email != mailformat) {
            alert("Enter Valid email");
        } else if (Phone === "") {
            alert("Enter valid Phone number");
        } else if (Phone.length < 10 || Phone.length > 10) {
            alert("Enter a Valid Phone Number");
        } else {
            const otp = Math.floor(100000 + Math.random() * 900000);
            console.log("OTP:", otp);
        }
    };
    return (
        <>
            <MainContainer>
                <h1>Registration Form</h1>
                <Label>
                    Enter Name:
                    <Input
                        type="text"
                        placeholder="FirstName"
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </Label>
                <Err>{errormsg}</Err>
                <Label>
                    Enter Email:
                    <Input
                        type="text"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Err>{err}</Err>
                </Label>
                <Label>
                    Enter Phone:
                    <Input
                        type="text"
                        placeholder="Phone Number"
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </Label>
                <Sumbit type="submit" onClick={(e) => handleSubmit(e)}>
                    Submit
                </Sumbit>
                //The generated otp can see in console
            </MainContainer>
        </>
    );
}

export default QuestionThree;
const MainContainer = styled.form`
    /* padding: 20px;
    width: 40%;
    margin: 0 auto; */
    /* text-align: center; */
`;
const Input = styled.input`
    margin-right: 10px;
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
`;
const Label = styled.label``;
const Sumbit = styled.button`
    text-align: center;
    padding: 10px 50px;
    background-color: aqua;
    border: none;
    outline: none;
    font-size: 14px;
`;
const Err = styled.p`
    font-size: 12px;
    color: red;
    margin: 0;
`;
