import {ContactForm} from "@/components/contact/form";
import {Modal, ModalBody, ModalContent} from "@nextui-org/modal";
import {UseDisclosureReturn} from "@nextui-org/use-disclosure";
import {FC} from "react";

export const ContactModal: FC<Partial<UseDisclosureReturn>> = ({isOpen, onOpenChange}) => {
  return (
    <Modal size="lg" hideCloseButton onOpenChange={onOpenChange} isOpen={isOpen}>
      <ModalContent>
        {(onClose) => (
          <ModalBody>
            <ContactForm onClose={onClose}/>
          </ModalBody>
        )}
      </ModalContent>
    </Modal>
  )
}