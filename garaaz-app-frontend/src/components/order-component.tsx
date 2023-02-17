import {
  TableContainer,
  Table,
  TableCaption,
  Select,
  Tr,
  Th,
  Td,
  Thead,
  Tbody,
  Tfoot,
  Grid,
  GridItem,
  Input,
  HStack,
  Button,
  ButtonGroup,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
function handleDelete() {}
function OrderComponent(props: any) {
  const array = [
    "index",
    "date",
    "transaction_type",
    "brand",
    "total_Orders",
    "total_Order_Value",
    "grossMarginPercentage",
    "action",
  ];

  return (
    <>
      {array.map((key) => {
        if (!props.element.create) {
          if (key == "date") {
            const dt = new Date(props.element.date);
            var options = {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            };
            const d = dt.toLocaleDateString("en-US", options);
            console.log(d);
            return (
              <Td key={props.element.index} textAlign="center">
                {d}
              </Td>
            );
          }
          if (key == "index") {
            return (
              <Td key={props.element.index} textAlign="center">
                {props.element.index + 1}
              </Td>
            );
          }
          else if (key == "action") {
            return(
            <Td key={props.element.index + "db"} textAlign="center">
              <Button
                onClick={() => props.deleteRowHandler(props.element.index)}
                leftIcon={<DeleteIcon />}
                colorScheme="red"
                size="sm"
                variant="solid"
              >
                Delete
              </Button>
            </Td>)
            }else {
            return (
              <Td key={props.element.index} textAlign="center">
                {props.element[`${key}`]}
              </Td>
            );
          }
        } else {
          if (key == "index") {
            return (
              <Td key={props.element.index} textAlign="center">
                {props.element.index + 1}
              </Td>
            );
          }
          else if (key == "action") {
            return(
            <Td key={props.element.index + "db"} textAlign="center">
              <Button
                onClick={() => props.deleteRowHandler(props.element.index)}
                leftIcon={<DeleteIcon />}
                colorScheme="red"
                size="sm"
                variant="solid"
              >
                Delete
              </Button>
            </Td>)
            }
          switch (key) {
            case "transaction_type":
              return (
                <Td key={props.element.index + "txn"}>
                  <Select
                    placeholder="Select option"
                    value={props.data.transaction_type}
                    onChange={(e) =>
                      props.setField(
                        "transaction_type",
                        props.element.index,
                        e.target.value
                      )
                    }
                  >
                    <option value="Facilitation">Facilitation</option>
                    <option value="Trading">Trading</option>
                  </Select>
                </Td>
              );

            case "brand":
              return (
                <Td key={props.element.index + "brand"}>
                  <Input
                    textAlign="center"
                    width="20vw"
                    variant="outline"
                    placeholder="Brand"
                    value={props.data.brand}
                    onChange={(e) =>
                      props.setField(
                        "brand",
                        props.element.index,
                        e.target.value
                      )
                    }
                  />
                </Td>
              );

            case "total_Orders":
              return (
                <Td key={props.element.index + "to"}>
                  <NumberInput
                    step={1}
                    defaultValue={1}
                    min={1}
                    max={13}
                    value={props.data.total_Orders}
                    onChange={(e) =>
                      props.setField("total_Orders", props.element.index, e)
                    }
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Td>
              );

            case "total_Order_Value":
              return (
                <Td key={props.element.index + "tov"}>
                  <NumberInput
                    step={100}
                    defaultValue={0}
                    min={0}
                    max={12000}
                    value={props.data.total_Order_Value}
                    onChange={(e) =>
                      props.setField(
                        "total_Order_Value",
                        props.element.index,
                        e
                      )
                    }
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Td>
              );

            case "grossMarginPercentage":
              return (
                <Td key={props.element.index + "gmv"}>
                  <NumberInput
                    step={1}
                    defaultValue={1}
                    min={1}
                    max={4}
                    value={props.data.grossMarginPercentage}
                    onChange={(e) =>
                      props.setField(
                        "grossMarginPercentage",
                        props.element.index,
                        e
                      )
                    }
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Td>
              );
          }
        }
      })}
    </>
  );
}
export default OrderComponent;
