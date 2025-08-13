import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InputDatePicker } from "@/components/ui/input-date-picker";
import { InputSelect } from "@/components/ui/input-select";
import { InputTextArea } from "@/components/ui/input-text-area";
import { Modal } from "@/components/ui/modal";
import { selectOptions } from "@/shared/constants/mock/select-options";

interface RegisterModalProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
}

export function RegisterModal({ showModal, setShowModal }: RegisterModalProps) {
  return (
    <Modal show={showModal} setShow={setShowModal}>
      <h1>Adicionar registro</h1>
      <p>Formulário de registro Lorem ipsum dolor sit amet consectetur</p>

      <form action="" className="my-4 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Input name="name" label="Nome" placeholder="Digite o seu nome" />

          <Input
            name="password"
            label="Senha"
            placeholder="Digite o sua senha"
            type="password"
          />

          <InputDatePicker
            name="date"
            label="Selecione uma data"
            placeholder="selecione uma daa"
            mode="range"
          />

          <InputSelect label="Selecione uma data" options={selectOptions} />
        </div>
        <InputTextArea
          name="description"
          label="Adicione uma descrição"
          placeholder="Digite uma descrição"
        />
      </form>

      <div className="flex items-center justify-end gap-2">
        <Button className="bg-black text-white" onClick={() => {}}>
          Cancelar
        </Button>
        <Button onClick={() => {}}>Salvar</Button>
      </div>
    </Modal>
  );
}
