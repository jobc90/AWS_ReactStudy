import React, { useRef, useState } from 'react';

const InputSample = () => {
    const userInfo = {
        username: '',
        email: '',
        password: ''
    }

    const [userInput, setUserInput] = useState(userInfo);
    const [userInfoText, setUsetInfoText] = useState(userInfo);

    const { username, email, password } = userInfoText;

    const passwordRef = useRef();
    const emailRef = useRef();

    const handlerChange = (e) => {
        const { name, value } = e.target;
        setUserInput({...userInput, [name]: value});
    }

    const nextFocusmail = (e) => {
        if(e.keyCode === 13) {
            emailRef.current.focus();
        }
    }

    const nextFocuspw = (e) => {
        if(e.keyCode === 13) {
            passwordRef.current.focus();
        }
    }

    const submitHandler = (e) => {
        if(e.keyCode === 13) {
            setUsetInfoText({...userInput});
        }
    }

    return (
        <div>
            <input 
                type="text" 
                onChange={handlerChange}
                onKeyUp={nextFocusmail} 
                name="username" 
            />
            <input 
                type="text"
                onChange={handlerChange}
                onKeyUp={nextFocuspw}
                name="email"
                ref={emailRef}
            />
            <input 
                type="text" 
                onChange={handlerChange}
                onKeyUp={submitHandler}
                name="password" 
                ref={passwordRef}
            />
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>password: {password}</div>
        </div>
    );
};

export default InputSample;