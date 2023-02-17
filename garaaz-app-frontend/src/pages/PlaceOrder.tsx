import {
  TableContainer,
  Table,
  TableCaption,
  Tr,
  Th,
  Thead,
  Tbody,
  Tfoot,
  HStack,
  ChakraProvider,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { AddIcon, CheckIcon } from "@chakra-ui/icons";
import OrderComponent from "../components/order-component";
import axios from "axios";
import { useState, useEffect } from "react";
const url = "http://localhost:3000/spares";
const onAddBtnClick = () => {};
const create = true;

function PlaceOrder() {
  const [success, setSuccess] = useState(false);
  const [txn, setTxn] = useState<any>([""]);
  const [brand, setBrand] = useState<any>([""]);
  const [qty, setQty] = useState<any>([""]);
  const [total, setTotal] = useState<any>([""]);
  const [gm, setGm] = useState<any>([""]);
  const [data, setData] = useState([{ index: 0 }]);

  const url = "http://localhost:3000/spares/add";

  function showSuccess()
  {
    return (<Alert status="success">
    <AlertIcon />
    Data uploaded to the server. Fire on!
  </Alert>);
  }
  function addRowHandler() {
    console.log("data.length " + data.length);
    setData([...data, { index: data.length }]);
    setTxn([...txn, ""]);
    setBrand([...brand, ""]);
    setQty([...qty, ""]);
    setTotal([...total, ""]);
    setGm([...gm, ""]);
    console.log(data);
  }

  function submitHandler() {
    const payload = data.map((item, index) => {
      return {
        brand: brand[index],
        transaction_type: txn[index],
        total_Orders: qty[index],
        total_Order_Value: total[index],
        grossMarginPercentage: gm[index],
      };
    });
    axios
      .post(url, payload)
      .then(() => (
        <Alert status="success">
          <AlertIcon />
          Data uploaded to the server. Fire on!
        </Alert>
      ))
      .catch();
  }

  function setField(key: any, index: number, value: any) {
    switch (key) {
      case "brand":
        console.log("At line 81");
        const temp = [...brand];
        setBrand(
          temp.map((k: any, i: any) => {
            return i == index ? value : k;
          })
        );
        break;
      case "transaction_type":
        setTxn(
          txn.map((k: any, i: any) => {
            return i == index ? value : k;
          })
        );
        break;
      case "total_Orders":
        setQty(
          qty.map((k: any, i: any) => {
            return i == index ? value : k;
          })
        );
        break;
      case "total_Order_Value":
        setTotal(
          total.map((k: any, i: any) => {
            return i == index ? value : k;
          })
        );
        break;
      case "grossMarginPercentage":
        setGm(
          gm.map((k: any, i: any) => {
            return i == index ? value : k;
          })
        );
        break;
    }
    console.log(
      brand.map((k: any, i: any) => {
        return i == index ? value : k;
      }),
      "Hello World",
      key
    );
  }

  const deleteRowHandler = (index: any) => {
    console.log(index);
    setData(
      data.filter((f) => {
        return f.index !== index;
      })
    );
    console.log(data);
  };

  return (
    <>
      <ChakraProvider>
        <TableContainer
          position="absolute"
          width="100vw"
          border={"solid"}
          padding="1vh"
        >
          <Table variant="simple" colorScheme="blue" size="lg">
            <TableCaption>Build your Inventory here</TableCaption>
            <Thead>
              <Tr textAlign="center">
                <Th textAlign="center">S.No</Th>
                <Th textAlign="center">Transaction Type</Th>
                <Th textAlign="center">Brand</Th>
                <Th textAlign="center">Quantity</Th>
                <Th textAlign="center">Total</Th>
                <Th textAlign="center">Gross Margin %</Th>
                <Th textAlign="center">Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((item, index) => {
                return (
                  <Tr>
                    <OrderComponent
                      key={index + 1}
                      deleteRowHandler={deleteRowHandler}
                      textAlign="center"
                      border="solid"
                      element={{ ...item, create }}
                      data={{
                        brand: brand[index],
                        transaction_type: txn[index],
                        total_Orders: qty[index],
                        total_Order_Value: total[index],
                        grossMarginPercentage: gm[index],
                      }}
                      setField={setField}
                    />
                  </Tr>
                );
              })}
            </Tbody>
            <Tfoot></Tfoot>
          </Table>
          <HStack spacing="2.5vw" justifyContent="center" textAlign="center">
            <Button
              onClick={addRowHandler}
              leftIcon={<AddIcon />}
              colorScheme="blue"
              variant="solid"
            >
              Add row
            </Button>
            <Button
              onClick={submitHandler}
              leftIcon={<CheckIcon />}
              colorScheme="green"
              variant="solid"
            >
              Submit
            </Button>
          </HStack>
        </TableContainer>
      </ChakraProvider>
    </>
  );
}
export default PlaceOrder;
