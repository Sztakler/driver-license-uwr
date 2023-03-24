import React from "react";
import Label from "../../atoms/Label";
import ProgressBar from "@ramonak/react-progress-bar";

import {
    Container,
} from "./styles";

function Timer(props) {
    return (
        <Container>
            <Label timer size="xl">{props.currentTime}s</Label>
            <ProgressBar
                completed={props.currentTime}
                maxCompleted={props.maxTime}
                isLabelVisible={false}
                bgColor="rgb(34 197 94)"
                labelSize="1.25rem"
                barContainerClassName="bg-gray-500"
                height="2rem"
                padding="2rem"
                transitionDuration="100ms"
            />
        </Container>
    )
}

export default Timer;


