import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InputDatePicker } from "@/components/ui/input-date-picker";
import { InputSelect } from "@/components/ui/input-select";
import { InputTextArea } from "@/components/ui/input-text-area";
import { Modal } from "@/components/ui/modal";
import { Text } from "@/components/ui/text";
import { selectOptions } from "@/shared/constants/mock/select-options";

interface RegisterModalProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
}

export function RegisterModal({ showModal, setShowModal }: RegisterModalProps) {
  return (
    <Modal show={showModal} setShow={setShowModal}>
      <Text type="h1">register_modal_title</Text>
      <Text>register_modal_description</Text>

      <form action="" className="my-4 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Input name="name" label="name" placeholder="type_name" />

          <Input
            name="password"
            label="password"
            placeholder="type_password"
            type="password"
          />

          <InputDatePicker
            name="date"
            label="date"
            placeholder="select_date"
            mode="range"
          />

          <InputSelect
            label="options"
            placeholder="select_option"
            options={selectOptions}
          />
        </div>
        <InputTextArea
          name="description"
          label="description"
          placeholder="type_description"
        />
      </form>

      <div className="flex items-center justify-end gap-2">
        <Button className="bg-black" onClick={() => {}}>
          <Text className="text-white">cancel</Text>
        </Button>
        <Button onClick={() => {}}>
          <Text>save</Text>
        </Button>
      </div>
    </Modal>
  );
}
