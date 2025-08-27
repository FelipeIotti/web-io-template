import { ReactNode, useState } from "react";
import { IconButton } from "../../icon-button";
import { Modal } from "../../modal";

interface DetailsCellProps {
  modalContent: ReactNode;
}

export function DetailsCell({ modalContent }: DetailsCellProps) {
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  return (
    <>
      <IconButton
        iconName="Info"
        iconClassName="fill-black"
        className="rounded border p-1"
        iconSize={12}
        onClick={() => setShowDetailsModal(true)}
      />

      <Modal show={showDetailsModal} setShow={setShowDetailsModal}>
        {modalContent}
      </Modal>
    </>
  );
}
