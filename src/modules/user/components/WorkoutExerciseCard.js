import React, { useEffect } from "react";
import { cn } from "../../../utls/utlis";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrows, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import DropArea from "./DropArea";

const WorkoutExerciseCard = React.forwardRef(
  (
    {
      data,
      index,
      weekIndex,
      dayIndex,
      sessionIndex,
      setActiveCard,
      className,
      cardImage,
      bgPopular,
      onDrop,
      ...props
    },
    ref
  ) => {
    const navigate = useNavigate();
    const chooseActive = (item) => {
      console.log(item);
      // navigate(`/${item}`, { replace: true });
    };
    useEffect(() => {}, []);
    return (
      <div>
        <div
          className=" border-b   border-b-gray-300 "
          draggable
          onDragStart={() => {
            setActiveCard({
              index: index,
              weekIndex: weekIndex,
              dayIndex: dayIndex,
              sessionIndex: sessionIndex,
            });
          }}
          onDragEnd={() => {
            setActiveCard(null);
          }}
        >
          <div
            role="button"
            onClick={() => {
              chooseActive("user/productDetails");
            }}
            className=" flex-1 shadow-xl rounded-lg active:opacity-70 active:border active:border-solid active:border-cblack cursor-grab "
          >
            <div class="   ">
              <div class=" px-1">
                <div className="flex justify-between items-center  ">
                  <div
                    class="font-bold text-cblack text-xs "
                    style={{ fontSize: 10, lineHeight: 1 }}
                  >
                    {data.name}
                  </div>
                  <div className="flex items-center justify-end  rtl:space-x-reverse">
                    <a href="#" className="text-sm overflow-hidden ">
                      <FontAwesomeIcon
                        icon={faArrows}
                        className="text-sm text-cblack "
                        role="button"
                        style={{ fontSize: 8, lineHeight: 1 }}
                      />
                    </a>
                    <div className="text-cgray text-xs font-semibold">
                      {" "}
                      <FontAwesomeIcon
                        icon={faEllipsisH}
                        className="text-sm text-cblack pl-2 "
                        style={{ fontSize: 8, lineHeight: 1 }}
                        role="button"
                      />
                    </div>
                  </div>
                </div>
                <div className=" py-0.5">
                  <div dir="rtl">
                    <div
                      class="relative"
                      data-modal-target="select-modal"
                      data-modal-toggle="select-modal"
                      type="button"
                    >
                      <img
                        class="w-full  h-16 object-cover"
                        src={require("../../../assets/images/ex4.jpg")}
                        alt="Program Image"
                      ></img>
                    </div>
                  </div>
                </div>
                <div className=" border-b-2 mb-1 border-dashed border-cgray">
                  <div class="relative overflow-x-auto">
                    <table class="w-full  text-sm text-left rtl:text-right  border-separate border-spacing-y-1 border-spacing-x-1 ">
                      <thead class="text-xs  text-center text-cblue uppercase dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                          <th
                            scope="col"
                            class="text-xs"
                            style={{ fontSize: 10, lineHeight: 1 }}
                          >
                            Set
                          </th>
                          <th
                            scope="col"
                            class=" text-xs"
                            style={{ fontSize: 10, lineHeight: 1 }}
                          ></th>
                          <th
                            scope="col"
                            class="text-xs"
                            style={{ fontSize: 10, lineHeight: 1 }}
                          >
                            Reps
                          </th>

                          <th
                            scope="col"
                            class="text-xs"
                            style={{ fontSize: 10, lineHeight: 1 }}
                          >
                            Rest
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.detail.map((row, i) => {
                          return (
                            <tr class=" bg-white text-black   text-center">
                              <td scope="row" class="text-xs bg-greyLight ">
                                {row.set}
                              </td>
                              <td
                                class="text-xs "
                                style={{ fontSize: 10, lineHeight: 1 }}
                              >
                                X
                              </td>
                              <td
                                class="text-xs font-bold bg-greyLight "
                                style={{ fontSize: 10, lineHeight: 1 }}
                              >
                                {row.reps}
                              </td>
                              <td
                                class=" text-xs font-bold bg-greyLight "
                                style={{ fontSize: 10, lineHeight: 1 }}
                              >
                                {row.rest}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div
                  class="text-cblack font-bold text-xs "
                  style={{ fontSize: 10, lineHeight: 1 }}
                >
                  Note:
                </div>
                <div
                  class="text-cgray text-xs pb-1 "
                  style={{ fontSize: 10, lineHeight: 1 }}
                >
                  {data.note}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-1">
          <DropArea
            onDrop={() => {
              onDrop(weekIndex, dayIndex, sessionIndex, index + 1);
            }}
          ></DropArea>
        </div>
      </div>
    );
  }
);

WorkoutExerciseCard.displayName = "WorkoutExerciseCard";

export { WorkoutExerciseCard };
