"use client";

import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { useState } from "react";
import { RegisterModal } from "../register-modal";

export function AddButton() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button onClick={() => setShowModal(true)}>
        <p>Adicionar</p>
        <Icon className="fill-text" name="Plus" size={12} />
      </Button>

      <RegisterModal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}
