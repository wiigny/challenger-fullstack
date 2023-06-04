import { useContact } from "@/hooks/UserHook";
import {
  useDisclosure,
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useRef } from "react";

export function ButtonDeleteUser() {
  const { deleteUser } = useContact();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  return (
    <>
      <Button
        colorScheme="red"
        onClick={onOpen}
        className="w-full text-gray-800 border-red-700 border-2 hover:text-white mb-2 font-normal"
      >
        Deletar Conta
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Deletar Conta ?
            </AlertDialogHeader>
            <ModalCloseButton />

            <AlertDialogBody>
              Tem certeza? Você não pode desfazer esta ação depois.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button
                ref={cancelRef}
                onClick={onClose}
                className="border-2 border-gray-200"
              >
                Cancelar
              </Button>
              <Button
                colorScheme="red"
                onClick={() => {
                  onClose();
                  deleteUser();
                }}
                ml={3}
                className="text-gray-800 border-2 border-red-800 hover:text-white"
              >
                Deletar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
