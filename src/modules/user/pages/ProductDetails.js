import React from "react";
import { ReviewCard } from "../components/ReviewCard";
import { CustomText } from "../../common/components/CustomText";
import Navbar from "../components/Navbar";
import { ProductDetailCard } from "../components/ProductDetailCard";
import { useNavigate } from "react-router-dom";

function ProductDetails(props) {
  const navigate = useNavigate();
  const chooseActive = (item) => {
    console.log(item);
    navigate(`/${item}`, { replace: true });
  };
  return (
    <>
      <div className="pb-5 ">
        <div
          role="button"
          onClick={() => {
            chooseActive("user/marketplace");
          }}
          className="flex  items-center space-x-1 rtl:space-x-reverse"
        >
          <a href="#" className="text-sm overflow-hidden ">
            <img
              src={require("../../../assets/icons/backButton.png")}
              className="h-4 max-w-4 overflow-hidden  "
              style={{ borderRadius: 50 }}
              alt="User Icon"
            />
          </a>
          <CustomText
            className="text-cblue  font-bold text-sm"
            text="Back"
          ></CustomText>
        </div>
        <ProductDetailCard
          cardImage={require("../../../assets/images/ex2.jpg")}
        ></ProductDetailCard>
      </div>

      <div className=" pb-5">
        <CustomText
          text="Reviews"
          className="text-xl  font-bold  text-cblack"
        ></CustomText>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-2  justify-between  mt-5 px-5 bg-cwhite rounded-2xl">
          <ReviewCard
            cardImage={require("../../../assets/images/ex2.jpg")}
          ></ReviewCard>
          <ReviewCard
            cardImage={require("../../../assets/images/ex2.jpg")}
          ></ReviewCard>
          <ReviewCard
            cardImage={require("../../../assets/images/ex4.jpg")}
          ></ReviewCard>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
