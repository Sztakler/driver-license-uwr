import React, { useContext, useState } from "react";

import TaskContext from "../../../../../../../context/TaskContext";
import Illustrations from "../../../../../../../assets/images/svg/icons/Illustrations";

import Text from "../../../../atoms/Text";
import Image from "../../../../atoms/Image";
import Video from "../../../../atoms/Video";
import Button from "../../../../atoms/Button";

import { TaskTopSection, TaskInfo, ImageBox } from "./styles";

export default function TaskTopReview() {
  const [favoriteTask, setFavoriteTask] = useState(false);
  const { task } = useContext(TaskContext);

  const mediaExtension = task.media.includes(".")
    ? task.media.split(".").pop()
    : "";

  return (
    <TaskTopSection>
      <TaskInfo>
        <div>
          <Text className="font-light">Typ pytania: </Text>
          <Text className="font-normal">{task.zakres_struktury}</Text>
        </div>
        <div>
          <Text className="font-light">Wartość punktowa: </Text>
          <Text className="font-normal">{task.liczba_punktow} pkt</Text>
        </div>
        <div>
          <Text className="font-light">Liczba rozwiązanych zadań: </Text>
          <Text className="font-normal">100</Text>
        </div>
      </TaskInfo>
      <Button
        bubble
        onClick={() => {
          setFavoriteTask((prevState) => {
            return !prevState;
          });
        }}
        size="l"
        className="absolute top-4 -right-16"
      >
        {favoriteTask ? (
          <Image src={Illustrations.StarSet} />
        ) : (
          <Image src={Illustrations.StarNotSet} />
        )}
      </Button>
      <ImageBox>
        {mediaExtension === "mp4" ? (
          <Video src={task.media} autoPlay></Video>
        ) : mediaExtension === "jpg" ? (
          <Image exam src={task.media}></Image>
        ) : (
          ""
        )}
      </ImageBox>
    </TaskTopSection>
  );
}
