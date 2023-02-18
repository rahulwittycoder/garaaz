import { HStack, Button, useToast } from "@chakra-ui/react";
import { AddIcon, CheckIcon } from "@chakra-ui/icons";
function ButtonSection({ addRowHandler, submitHandler}: any) {

  const showToast = (isSuccess: boolean,source : "onSubmit" | "onAdd") => {
    if(source=="onSubmit")
    {
      isSuccess && toast({
        title: isSuccess ? "Order Placed." : "Something went wrong!",
        status: isSuccess ? "success" : "error",
        duration: 9000,
        isClosable: true,
      });
    }
    else{
      toast({
        title: "Error exists in fields! Please check and try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  const toast = useToast();
  return (
    <>
      <HStack spacing="2.5vw" justifyContent="center" textAlign="center">
        <Button
          onClick={()=>addRowHandler(showToast)}
          leftIcon={<AddIcon />}
          colorScheme="blue"
          variant="solid"
        >
          Add row
        </Button>
        <Button
          onClick={() => submitHandler(showToast)}
          leftIcon={<CheckIcon />}
          colorScheme="green"
          variant="solid"
        >
          Submit
        </Button>
      </HStack>
    </>
  );
}
export default ButtonSection;
