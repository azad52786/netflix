import React, { useRef, useState } from "react";
import { checkValidData } from "../utils/validateData";
import { BACKGROUND_IMG } from "../utils/constant";
import { auth } from "../Firebase auth/Firebse";
import { createUserWithEmailAndPassword  , updateProfile} from "firebase/auth";
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {addUser} from  "../utils/userSlice";



const SignUpPage = () => {
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [passwordErrorMess , setPasswordErrorMess] = useState(null);
  const [emailErrorMess , setEmailErrorMess] = useState(null);
  const [validPassword, setValidPassword] = useState(true);
  const [validEmail, setValidEmail] = useState(true);

  const LoginHandeler = () => {
    const [EmailNotValidMessage, PassNotValidMessage] = checkValidData(
      email.current.value,
      password.current.value
    );
    if (EmailNotValidMessage && PassNotValidMessage) {
      setValidEmail(false);
      setValidPassword(false);
      setEmailErrorMess("Enter Valid Email like abcd@gmail.com");
      setPasswordErrorMess("Enter Valid password like Abcd@1234");
    } else if (EmailNotValidMessage && !PassNotValidMessage) {
      setValidEmail(false);
      setEmailErrorMess("Enter Valid Email like abcd@gmail.com");
      setValidPassword(true);
    } else if (PassNotValidMessage && !EmailNotValidMessage) {
      setValidPassword(false);
      setPasswordErrorMess("Enter Valid password like Abcd@1234");
      setValidEmail(true);
    } else {
      // navigate the page to the Browse page
      setValidEmail(true);
      setValidPassword(true);
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        updateProfile(user, {
          displayName: name.current.value,
        }).then(() => {
          // Profile updated!
          // ...
          const {uid , email , displayName} = auth.currentUser;
          dispatch(addUser({uid : uid , email: email , displayName : displayName}));
          console.log(user);
        }).catch((error) => {
          // An error occurred
          // ...
          console.log(error);
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    }
  };

  return (
    <div
      className=" relative w-full "
    >
      <div className="brightness-50">
        <img src={BACKGROUND_IMG} alt="backgound" className=" bg-cover" />
      </div>
      <form
        className="bg-black absolute md:[100%] w-[450px] min-h-[500px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
          rounded-lg bg-opacity-80 text-white p-[58px] flex flex-col justify-around"
        onSubmit={(event) => event.preventDefault()}
      >
        <h1 className="text-white text-3xl font-bold">Sign In</h1>



        <input
          ref={name}
          type="text"
          placeholder="Email Enter your Name"
          className="w-full h-12 px-2 rounded-md bg-[#333333] outline-none"
        />
        <input
          ref={email}
          type="text"
          placeholder="Email or phone number"
          className={`${
            !validEmail
              ? "w-full h-12 px-2 rounded-md bg-[#333333] border-b-2 border-b-yellow-500 outline-none"
              : "w-full h-12 px-2 rounded-md bg-[#333333] outline-none"
          }`}
        />
        {!validEmail 
        &&
        <p className=" -mt-5 text-xs text-yellow-500">Enter Valid Email like abcd@gmail.com</p>}



        <input
          ref={password}
          type="password"
          placeholder="password"
          className={`${
            !validPassword
              ? "w-full h-12 px-2 rounded-md bg-[#333333] border-b-2 border-b-yellow-500 outline-none"
              : "w-full h-12 px-2 rounded-md bg-[#333333] outline-none"
          }`}
        />
        {!validPassword && (
          <p className=" -mt-5 text-xs text-yellow-500">
            Enter Valid password like Abcd@1234
          </p>
        )}



        <button
          className=" bg-red-600 w-full rounded-md py-2.5"
          onClick={LoginHandeler}
        >
          Sign Up
        </button>


        <p>
          Already Registered?
          <Link><span className="cursor-pointer"
            onClick={() => navigate("/login")}
          > Sign in now.</span></Link>
        </p>
      </form>
    </div>
  );
};

export default SignUpPage;
