import React, { useRef, useState } from "react";
import { checkValidData } from "../utils/validateData";
import { BACKGROUND_IMG } from "../utils/constant";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";



const LoginPage = () => {
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = getAuth();
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
    } else if (EmailNotValidMessage && !PassNotValidMessage) {
      setValidEmail(false);
      setValidPassword(true);
    } else if (PassNotValidMessage && !EmailNotValidMessage) {
      setValidPassword(false);
      setValidEmail(true);
    } else {
      // navigate the page to the Browse page
      setValidEmail(true);
      setValidPassword(true);


      signInWithEmailAndPassword(auth,email.current.value , password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        const {uid , email , displayName} = user.auth;
        dispatch(addUser({uid : uid , email : email , displayName : displayName}));
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    }
  };

  return (
    <div
      className=" relative w-full bg-gradient-to-br from-gray-800 via-black to-opacity-24
     rounded-lg "
    >
      <div>
        <img src={BACKGROUND_IMG} alt="backgound" className=" bg-cover" />
      </div>
      <form
        className="bg-black absolute md:[100%] w-[450px] min-h-[500px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
          rounded-lg bg-opacity-80 text-white p-[58px] flex flex-col justify-around"
        onSubmit={(event) => event.preventDefault()}
      >
        <h1 className="text-white text-3xl font-bold">Sign In</h1>



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
          Sign In
        </button>


        <p>
          New here? 
          <Link><span className="cursor-pointer"
            onClick={() => navigate("/signup")}
          > Sign up now.</span></Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;