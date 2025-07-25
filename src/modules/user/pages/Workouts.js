import React, { useEffect, useState } from "react";
import { CustomInput } from "../../common/components/CustomInput";
import { CustomText } from "../../common/components/CustomText";
import { CustomButton } from "../../common/components/CustomButton";
import { WorkoutExerciseCard } from "../components/WorkoutExerciseCard";
import program from "../../../data/program.json";
import { WeekWorkout } from "../components/WeekWorkout";
import ReactPlayer from "react-player";
import { initModals, initDrawers } from "flowbite";
import Video from "../../../assets/images/cartoon.mp4";
function Workouts(props) {
  const [programs, setPrograms] = useState({});
  const [activeCard, setActiveCard] = useState(null);
  const onSubmit = () => {};
  let data = program;
  useEffect(() => {
    setPrograms(data);
    initModals();
  }, []);
  const getRemovedCard = (weekIndex, dayIndex, sessionIndex, index) => {
    let tempData = programs;
    // programs.weeks.forEach((week) => {
    //   if (week.name.match(activeCard.weekIndex + 1)) {
    //     console.log("week is ", week.name);
    //     week.days.forEach((element) => {});
    //   }
    // });
    // getting the card
    let card =
      programs.weeks[activeCard.weekIndex].days[activeCard.dayIndex].workout
        .sessoions[activeCard.sessionIndex].exercise[activeCard.index];
    console.log("selected Programs", card);
    // removing the card
    programs.weeks[activeCard.weekIndex].days[
      activeCard.dayIndex
    ].workout.sessoions[activeCard.sessionIndex].exercise.splice(
      activeCard.index,
      1
    );

    // adding the card
    programs.weeks[weekIndex].days[dayIndex].workout.sessoions[
      sessionIndex
    ].exercise.splice(index, 0, card);
  };
  const onDrop = (weekIndex, dayIndex, sessionIndex, index) => {
    if (activeCard == null || activeCard == undefined) return;

    getRemovedCard(weekIndex, dayIndex, sessionIndex, index);
  };
  return (
    <div>
      <div className="px-5 py-3">
        <div className="w-1/3">
          <CustomText
            className="text-cblack font-custom font-bold text-lg"
            text={programs.name}
          ></CustomText>

          <CustomText
            className="text-cblack font-custom text-500  text-sm pt-3"
            text={programs.description}
          ></CustomText>
        </div>
        <div className="border border-gray-300 border-solid my-3"></div>
        <div className="w-full">
          {program.weeks.map((row, i) => {
            return (
              <WeekWorkout
                setActiveCard={setActiveCard}
                data={row}
                index={i}
                onDrop={onDrop}
              ></WeekWorkout>
            );
          })}
        </div>
      </div>
      <div
        id="select-modal"
        tabindex="-1"
        aria-hidden="true"
        className="hidden  overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-baseline w-full mt-10 md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative bg-cblue  w-auto max-w-3xl max-h-full">
          {/* <div dir="rtl">
            <div class="relative bg-slate-200">
              <img
                class="w-full  "
                src={require("../../../assets/images/ex4.jpg")}
                alt="Program Image"
              ></img>
            </div>
          </div> */}
          <div className="w-full ">
            <ReactPlayer
              url={Video}
              loop
              controls
              className="react-player"
            ></ReactPlayer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workouts;
