import React from "react";

import {
	ModalContainer,
	ModalDialog,
	ModalContent,
	ModalOptions,
	ModalBody,
} from "./styles";
import Cancel from "../../../../icons/Cancel";
import Button from "../../atoms/Button";

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
					<Button
						bubble
						hover
						size="m"
						className="absolute top-3 right-3"
						onClick={props.onClose}
					>
						<Cancel />
					</Button>
					<ModalBody>{props.children}</ModalBody>
				</ModalContent>
			</ModalDialog>
		</ModalContainer>
	);
}
