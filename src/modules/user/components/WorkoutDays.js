import React, { useEffect, useState } from "react";
import { cn } from "../../../utls/utlis";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrows, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { CustomText } from "../../common/components/CustomText";
import { CustomButton } from "../../common/components/CustomButton";
import { WorkoutExerciseCard } from "../components/WorkoutExerciseCard";
import { WorkoutSession } from "./WorkoutSession";

const WorkoutDays = React.forwardRef(
  (
    {
      data,
      index,
      weekIndex,
      setActiveCard,
      className,
      cardImage,
      bgPopular,
      onDrop,
      ...props
    },
    ref
  ) => {
    const [loading, setLoading] = useState(false);
    const onSubmit = () => {
      // setFromErrors(validate());
      // setIsSubmit(true);
    };
    const navigate = useNavigate();
    const chooseActive = (item) => {
      console.log(item);
      navigate(`/${item}`, { replace: true });
    };
    return (
      <div>
        <div className="bg-gray-300">
          <CustomText
            className="text-black font-custom font-bold text-sm py-2  px-2  "
            text={`Day ${index + 1}`}
          ></CustomText>
        </div>
        <div className="">
          <CustomText
            className="text-cblack font-custom font-bold text-sm py-2  pl-2  "
            text={data.workout.title}
          ></CustomText>
          <div className="border border-gray-300 border-solid "></div>
          <div>
            {data.workout.sessoions.map((row, i) => {
              return (
                <WorkoutSession
                  weekIndex={weekIndex}
                  dayIndex={index}
                  setActiveCard={setActiveCard}
                  data={row}
                  index={i}
                  onDrop={onDrop}
                ></WorkoutSession>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
);

WorkoutDays.displayName = "WorkoutDays";

export { WorkoutDays };
