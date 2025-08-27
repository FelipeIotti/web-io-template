import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useId, useState } from "react";
import { Button } from "../../button";
import { IconButton } from "../../icon-button";
import { Modal } from "../../modal";
import {
  ToggleMenu,
  ToggleMenuContent,
  ToggleMenuItem,
  ToggleMenuTrigger,
} from "../../toggle-menu";

interface EditDeleteCellProps {
  id: string;
  onDelete?: () => Promise<void> | void;
  editDisabled?: boolean;
}

export function EditDeleteCell({ id, onDelete }: EditDeleteCellProps) {
  const pathname = usePathname();
  const router = useRouter();

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function handleDelete() {
    setIsLoading(true);
    try {
      await onDelete?.();
      router.refresh();
    } finally {
      setShowDeleteModal(false);
      setIsLoading(false);
    }
  }

  function handleEdit() {
    router.push(`${pathname.replace("list", `edit/${id}`)}`);
  }

  function handleNavigate() {
    router.push(`${pathname}/details/${id}`);
  }

  const menuId = useId();

  return (
    <>
      <ToggleMenu>
        <ToggleMenuTrigger
          className="flex peer-checked:bg-black/10"
          defaultMenuId={menuId}
        >
          <IconButton
            iconName="ThreeDotsVertical"
            iconClassName="fill-black"
            iconSize={18}
            htmlFor={menuId}
          />
        </ToggleMenuTrigger>

        <ToggleMenuContent orientation="left" className="bottom-0">
          <ToggleMenuItem className="group flex gap-2" onClick={handleNavigate}>
            <Icon
              name={"ArrowRight"}
              size={12}
              className="fill-text group-hover:fill-primary"
            />
            <Text>view</Text>
          </ToggleMenuItem>
          <ToggleMenuItem className="group flex gap-2" onClick={handleEdit}>
            <Icon
              name={"Pencil"}
              size={12}
              className="fill-text group-hover:fill-primary"
            />
            <Text>edit</Text>
          </ToggleMenuItem>
          {onDelete && (
            <ToggleMenuItem
              className="group flex gap-2"
              onClick={() => setShowDeleteModal(true)}
            >
              <Icon
                name={"Trash"}
                size={12}
                className="fill-text group-hover:fill-primary"
              />
              <Text>delete</Text>
            </ToggleMenuItem>
          )}
        </ToggleMenuContent>
      </ToggleMenu>

      <Modal show={showDeleteModal} setShow={setShowDeleteModal}>
        <div className="flex flex-col gap-4">
          <Text type="h1">delete_title</Text>
          <Text>delete_description</Text>

          <Button className="flex justify-center bg-red-500 text-center">
            <Text className="text-center">confirm</Text>
          </Button>
        </div>
      </Modal>
    </>
  );
}
