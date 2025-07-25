import React from "react";
import Navbar from "../components/Navbar";
import { UperImageCard } from "../components/UperImageCard";
import { CustomText } from "../../common/components/CustomText";
import SearchButton from "../components/SearchButton";

function Products(props) {
  return (
    <>
      <div className="  flex justify-center">
        <div className="w-full md:w-5/6 lg:w-2/4 min-w-[200px] ">
          <SearchButton></SearchButton>
        </div>
      </div>
      <div className="pt-5  ">
        <div className="flex justify-between items-center">
          <CustomText
            text="Popular "
            className="text-xl  font-bold  text-cblack"
          ></CustomText>
          <CustomText
            text="See more "
            className="text-sm  font-bold  text-cblue"
          ></CustomText>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-between mt-5 px-5 py-10 bg-cseagreen rounded-2xl">
          <UperImageCard
            cardImage={require("../../../assets/images/ex1.jpg")}
          ></UperImageCard>
          <UperImageCard
            cardImage={require("../../../assets/images/ex2.jpg")}
          ></UperImageCard>
          <UperImageCard
            cardImage={require("../../../assets/images/ex4.jpg")}
          ></UperImageCard>
          <UperImageCard
            cardImage={require("../../../assets/images/ex5.jpg")}
          ></UperImageCard>
        </div>
      </div>
      <div className="pt-5 ">
        <div className="flex justify-between items-center">
          <CustomText
            text="Following "
            className="text-xl  font-bold  text-cblack"
          ></CustomText>
          <CustomText
            text="See more "
            className="text-sm  font-bold  text-cblue"
          ></CustomText>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-between px-5 py-5 bg-cwhite rounded-2xl">
          <UperImageCard
            cardImage={require("../../../assets/images/ex1.jpg")}
          ></UperImageCard>
          <UperImageCard
            cardImage={require("../../../assets/images/ex2.jpg")}
          ></UperImageCard>
          <UperImageCard
            cardImage={require("../../../assets/images/ex4.jpg")}
          ></UperImageCard>
          <UperImageCard
            cardImage={require("../../../assets/images/ex5.jpg")}
          ></UperImageCard>
        </div>
      </div>{" "}
      <div className="pt-5 pb-5 ">
        <div className="flex justify-between items-center">
          <CustomText
            text="Recommended "
            className="text-xl  font-bold  text-cblack"
          ></CustomText>
          <CustomText
            text="See more "
            className="text-sm  font-bold  text-cblue"
          ></CustomText>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-between mt-5 px-5 bg-cwhite rounded-2xl">
          <UperImageCard
            cardImage={require("../../../assets/images/ex1.jpg")}
          ></UperImageCard>
          <UperImageCard
            cardImage={require("../../../assets/images/ex2.jpg")}
          ></UperImageCard>
          <UperImageCard
            cardImage={require("../../../assets/images/ex4.jpg")}
          ></UperImageCard>
          <UperImageCard
            cardImage={require("../../../assets/images/ex5.jpg")}
          ></UperImageCard>
        </div>
      </div>
    </>
  );
}

export default Products;
