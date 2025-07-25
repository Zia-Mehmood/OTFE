import React, { useEffect, useState } from "react";
import { cn } from "../../../utls/utlis";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrows, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { CustomText } from "../../common/components/CustomText";
import { CustomButton } from "../../common/components/CustomButton";
import { WorkoutExerciseCard } from "../components/WorkoutExerciseCard";
import { WorkoutDays } from "./WorkoutDays";

const WeekWorkout = React.forwardRef(
  (
    {
      data,
      index,
      setActiveCard,
      className,
      cardImage,
      bgPopular,
      onDrop,
      ...props
    },
    ref
  ) => {
    useEffect(() => {
      console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", data);
    }, []);
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
        <CustomText
          className="text-cblack font-custom font-bold text-lg"
          text={`Week ${index + 1}`}
        ></CustomText>
        <div>
          <div className="flex ">
            {data.days.map((row, i) => {
              return (
                <div className="border-x-2 border-l-gray-300 border-solid ">
                  <WorkoutDays
                    setActiveCard={setActiveCard}
                    data={row}
                    index={i}
                    weekIndex={index}
                    onDrop={onDrop}
                  ></WorkoutDays>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
);

WeekWorkout.displayName = "WeekWorkout";

export { WeekWorkout };
