import React from "react";

import { ModalContainer, ModalDialog, ModalContent, ModalBody } from "./styles";

import Illustrations from "assets/images/svg/icons/Illustrations";
import Button from "client/components/atoms/Button";
import Image from "client/components/atoms/Image";

export default function Modal(props) {
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
						<Image src={Illustrations.Cancel} />
					</Button>
					<ModalBody>{props.children}</ModalBody>
				</ModalContent>
			</ModalDialog>
		</ModalContainer>
	);
}
