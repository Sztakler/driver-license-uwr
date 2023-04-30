import React from "react";

import Bubble from "../Bubble";

import {
	ModalContainer,
	ModalDialog,
	ModalContent,
	ModalOptions,
	ModalBody,
} from "./styles";
import Cancel from "../../../../../../src/assets/icons/Cancel";

export default function Modal(props) {
	const bodyScrollLock = require("body-scroll-lock");
	const disableBodyScroll = bodyScrollLock.disableBodyScroll;
	const enableBodyScroll = bodyScrollLock.enableBodyScroll;

	const targetElement = document.querySelector("body");

	// disableBodyScroll(targetElement);

	return (
		<ModalContainer show={props.show}>
			<ModalDialog show={props.show}>
				<ModalContent>
					<Bubble
						secondary
						size="m"
						className="absolute top-3 right-3"
						onClick={props.onClose}
					>
						<Cancel />
					</Bubble>
					<ModalBody>{props.children}</ModalBody>
					{/* <ModalOptions>{Array.isArray(options) && options}</ModalOptions> */}
				</ModalContent>
			</ModalDialog>
		</ModalContainer>
	);
}
