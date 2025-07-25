import React, { useEffect, useState } from "react";
import TextBox from "../components/TextBox";
import TextLable from "../components/TextLable";
import { CustomText } from "../components/CustomText";
import ErrorCustom from "../components/ErrorCustom";
import { CustomInput } from "../components/CustomInput";
import { CustomButton } from "../components/CustomButton";
import { Line } from "../components/Line";

function Login(props) {
  const logo = require("../../../assets/icons/GoogleIcon.png");
  const [email, setEmail] = useState("");
  const [passwrod, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const onSubmit = () => {
    // setFromErrors(validate());
    // setIsSubmit(true);
  };
  useEffect(() => {
    // change background color with a random color
    document.body.style.background = props.bodyBg;
  }, []);
  return (
    <>
      <div className="lg:flex lg:mt-10  items-center">
        <div className="w-full lg:w-1/2 lg:m-10 ">
          <div className="bg-cwhite lg:rounded-lg px-0 lg:px-0 md:px-36 lg:mx-36 ">
            <div>
              <CustomText
                text="Sign In"
                className="text-2xl pt-10 font-bold text-center text-cblack"
              ></CustomText>
              <CustomText
                text="Please enter credentials below to continue"
                className="text-sm  text-center font-semibold mt-2 text-cgray"
              ></CustomText>
            </div>
            <div className="mt-10 px-14">
              <div>
                <CustomText
                  text="Email address "
                  className="text-xs font-bold  text-cblack "
                  for="email"
                ></CustomText>
                <CustomInput
                  type="email"
                  name="email"
                  id="email"
                  placeholder="you@example.com"
                  className="py-0.5"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                {/* <ErrorCustom name={fromErrors.email}></ErrorCustom> */}
              </div>
            </div>
            <div className="mt-3 px-14">
              <div>
                <CustomText
                  text="Password "
                  className="text-xs font-bold  text-cblack"
                  for="password"
                ></CustomText>
                <CustomInput
                  type="password"
                  name="password"
                  id="password"
                  className="py-0.5"
                  placeholder="password"
                  value={passwrod}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                {/* <ErrorCustom name={fromErrors.email}></ErrorCustom> */}
              </div>
            </div>
            <div className=" mt-2 px-14">
              <CustomText
                text="Forgot password"
                className="text-xs text-end  font-semibold mt-2 cursor-pointer text-cblue"
                onClick={(e) => {
                  e.preventDefault();
                  alert("test");
                }}
              ></CustomText>
            </div>
            <div className=" mt-5 px-14 text-center">
              <CustomButton
                disabled={loading}
                loading={loading}
                name="Sign in"
                maxWidth=""
                className="w-full py-2 font-normal text-cwhite focus:outline-none bg-cblue rounded-md "
                click={() => onSubmit()}
              ></CustomButton>
            </div>
            <div className=" mt-5 px-14 text-center">
              <div className="flex justify-around  items-center">
                <line className=" block border-b w-full border-cgray border-solid"></line>
                <CustomText
                  text="Or"
                  className="text-sm  text-center px-2 font-semibold  text-cgray"
                ></CustomText>
                <line className=" block border-b w-full border-cgray border-solid"></line>
              </div>
            </div>
            <div className="flex justify-center px-5   mt-5">
              <div className=" me-2  ">
                <CustomButton
                  disabled={loading}
                  loading={loading}
                  name="Sign in with google"
                  width="28"
                  source={require("../../../assets/icons/GoogleIcon.png")}
                  className=" py-1 text-xs  px-2 w-fit font-normal text-cblack focus:outline-none bg-cwhite border-cblack border-solid border rounded-md "
                  click={() => onSubmit()}
                ></CustomButton>
              </div>
              <div className="ms-2">
                <CustomButton
                  disabled={loading}
                  loading={loading}
                  name="Sign in with apple"
                  width="25"
                  source={require("../../../assets/icons/apple-logo.png")}
                  className="py-1 text-xs  px-2 w-fit font-normal text-cblack focus:outline-none bg-cwhite border-cblack border-solid border rounded-md"
                  click={() => onSubmit()}
                ></CustomButton>
              </div>
            </div>
            <div className="flex   flex-wrap mx-5  mt-10 ">
              <CustomText
                text="Don’t have an account? Download the mobile app for "
                className="text-xs  font-semibold  text-cgray"
              ></CustomText>
              <CustomText
                text="iPhone "
                className="text-xs px-1   font-semibold  text-cblue"
              ></CustomText>
              <CustomText
                text="or for 
"
                className="text-xs  font-semibold  text-cgray"
              ></CustomText>

              <CustomText
                text=" Android "
                className="text-xs px-1   font-semibold  text-cblue"
              ></CustomText>
              <CustomText
                text=" to create free your account."
                className="text-xs  font-semibold  text-cgray"
              ></CustomText>
            </div>
            <div className="pt-10"></div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 ">
          <div className=" h-full  lg:mr-10 lg:rounded-lg bg-cblue">
            <div className="pt-10">
              <CustomText
                className=" text-2xl text-center text-cwhite tracking-wide "
                text="Please sign in using your "
              ></CustomText>
              <CustomText
                className=" text-2xl text-center text-cwhite tracking-wide "
                text="Orum Training account credentials"
              ></CustomText>
            </div>

            <div className=" cimg-login">
              <img
                src={require("../../../assets/images/mobileInHand.png")}
                className="cimg-height"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
