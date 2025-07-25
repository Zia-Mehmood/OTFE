import React, { useEffect, useState } from "react";
import { cn } from "../../../utls/utlis";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrows, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { CustomText } from "../../common/components/CustomText";
import { CustomButton } from "../../common/components/CustomButton";
import { WorkoutExerciseCard } from "../components/WorkoutExerciseCard";
import { WorkoutDays } from "./WorkoutDays";
import DropArea from "./DropArea";

const WorkoutSession = React.forwardRef(
  (
    {
      data,
      index,
      weekIndex,
      dayIndex,
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
      // navigate(`/${item}`, { replace: true });
    };
    return (
      <div>
        <div className="">
          <div className="px-1">
            <DropArea
              onDrop={() => {
                onDrop(weekIndex, dayIndex, index, 0);
              }}
            ></DropArea>
          </div>

          {data.exercise.map((row, i) => {
            return (
              <WorkoutExerciseCard
                weekIndex={weekIndex}
                dayIndex={dayIndex}
                sessionIndex={index}
                setActiveCard={setActiveCard}
                data={row}
                index={i}
                onDrop={onDrop}
              ></WorkoutExerciseCard>
            );
          })}
        </div>
        <div className="py-2 text-right px-2">
          <CustomButton
            disabled={loading}
            loading={loading}
            name="Add exercise"
            width="28"
            source={require("../../../assets/icons/plus.png")}
            className=" py-1 text-xs  px-2 w-fit font-bold text-cblack focus:outline-none bg-cwhite border-cblue border-solid border rounded-md "
            click={() => onSubmit()}
          ></CustomButton>
        </div>
      </div>
    );
  }
);

WorkoutSession.displayName = "WorkoutSession";

export { WorkoutSession };
