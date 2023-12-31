import React, { useRef, useState } from "react";
import { checkValidData } from "../utils/validateData";
import { BACKGROUND_IMG } from "../utils/constant";
import { auth } from "../Firebase auth/Firebse";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { toast } from "react-toastify";
import { BiSolidHide } from "react-icons/bi";
import { IoMdEye } from "react-icons/io";
import BtnSpinner from "./btnSpinner";

const SignUpPage = () => {
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [passwordErrorMess, setPasswordErrorMess] = useState(null);
  const [emailErrorMess, setEmailErrorMess] = useState(null);
  const [validPassword, setValidPassword] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [showpass , setShowpass] = useState(false);
  const [loginSpinner , setLoginSpinner] = useState(false);
  const [nameErrorMess , setNameErrorMess] = useState(false);
  const LoginHandeler = () => {
    if(name.current.value.length === 0) setNameErrorMess(true);
    else setNameErrorMess(false);
    setLoginSpinner(true);
    const [EmailNotValidMessage, PassNotValidMessage] = checkValidData(
      email.current.value,
      password.current.value
    );
    if (EmailNotValidMessage && PassNotValidMessage) {
      setValidEmail(false);
      setValidPassword(false);
      setLoginSpinner(false);
      setEmailErrorMess("Enter Valid Email like abcd@gmail.com");
      setPasswordErrorMess("Enter Valid password like Abcd@1234");
    } else if (EmailNotValidMessage && !PassNotValidMessage) {
      setValidEmail(false);
      setEmailErrorMess("Enter Valid Email like abcd@gmail.com");
      setValidPassword(true);
      setLoginSpinner(false);
    } else if (PassNotValidMessage && !EmailNotValidMessage) {
      setValidPassword(false);
      setPasswordErrorMess("Enter Valid password like Abcd@1234");
      setValidEmail(true);
      setLoginSpinner(false);
    } else {
      // navigate the page to the Browse page
      setValidEmail(true);
      setValidPassword(true);
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              // auth current user se a raha hea update hone ke bad
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
              toast.success("logged Successfully");
              setLoginSpinner(false);
            })
            .catch((error) => {
              // An error occurred
              // ...
              // console.log(error);
              setLoginSpinner(false);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setLoginSpinner(false);
          setValidEmail(false);
          setEmailErrorMess("This email is already Registered");
          navigate("/login");
        });
    }
  };

  return (
    <div className=" relative w-full ">
      <div className="brightness-50">
        <img src={BACKGROUND_IMG} alt="backgound" className=" w-screen object-cover h-screen" />
      </div>
      <form
        className="bg-black absolute md:[100%] sm:w-[450px] w-[350px] min-h-[500px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
          rounded-lg bg-opacity-80 text-white sm:p-[58px] p-11 flex flex-col justify-around"
        onSubmit={(event) => event.preventDefault()}
      >
        <h1 className="text-white text-3xl font-bold">Sign In</h1>

        <input
          ref={name}
          type="text"
          placeholder="Email Enter your Name"
          className={`${
            nameErrorMess
              ? "w-full h-12 px-2 rounded-md bg-[#333333] border-b-2 border-b-yellow-500 outline-none"
              : "w-full h-12 px-2 rounded-md bg-[#333333] outline-none"
          }`}
        />
        {nameErrorMess && (
          <p className=" -mt-5 text-xs text-yellow-500">Please enter your name</p>
        )}
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
        {!validEmail && (
          <p className=" -mt-5 text-xs text-yellow-500">{emailErrorMess}</p>
        )}

        <div className=" relative flex flex-row">
          <input
            ref={password}
            type={!showpass ? "password" : "text"}
            placeholder="password"
            className={`${
              !validPassword
                ? "w-full h-12 px-2 rounded-md bg-[#333333] border-b-2 border-b-yellow-500 outline-none pr-10"
                : "w-full h-12 px-2 rounded-md bg-[#333333] outline-none pr-10"
            }`}
          />
          <button
            className=" absolute right-3 top-3"
            onClick={() => setShowpass(!showpass)}
          >
            {!showpass ? (
              <BiSolidHide className="h-6 w-6" />
            ) : (
              <IoMdEye className="h-6 w-6" />
            )}
          </button>
        </div>
        {!validPassword && (
          <p className=" -mt-5 text-xs text-yellow-500">{passwordErrorMess}</p>
        )}

        <button
          className=" bg-red-600 w-full rounded-md py-2.5"
          onClick={LoginHandeler}
        >
          {loginSpinner ? <BtnSpinner/>: "Sign Up"}
        </button>
        <p>
          Already Registered?
          <Link>
            <span className="cursor-pointer" onClick={() => navigate("/login")}>
              {" "}
              Sign in now.
            </span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUpPage;
