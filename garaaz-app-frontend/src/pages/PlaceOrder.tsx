import {
  TableContainer,
  Table,
  TableCaption,
  Tr,
  Th,
  Thead,
  Tbody,
  Tfoot,
  ChakraProvider,
} from "@chakra-ui/react";
import OrderComponent from "../components/order-component";
import axios from "axios";
import { useState } from "react";
import ButtonSection from "../components/ButtonSection";
import { validateStates } from "../utils/validation.utils";
const url = "http://localhost:3000/spares";
const create = true;

function PlaceOrder() {
  const [txn, setTxn] = useState<any>([""]);
  const [brand, setBrand] = useState<any>([""]);
  const [qty, setQty] = useState<any>([""]);
  const [total, setTotal] = useState<any>([""]);
  const [gm, setGm] = useState<any>([""]);
  const [data, setData] = useState([{ index: 0 }]);
  const url = "http://localhost:3000/spares/add";
  const [valid, setValid] = useState<any>({
    0: {
      transaction_type: true,
      brand: true,
      total_Orders: true,
      total_Order_Value: true,
      grossMarginPercentage: true,
    },
  });

  function addRowHandler(callbackFunction: any) {
    if (Object.keys(valid).length) {
      callbackFunction();
      return;
    }
    setData([...data, { index: data.length }]);
    setTxn([...txn, ""]);
    setBrand([...brand, ""]);
    setQty([...qty, ""]);
    setTotal([...total, ""]);
    setGm([...gm, ""]);
  }

  function resetStates() {
    setData([{ index: 0 }]),
      setBrand([""]),
      setGm([""]),
      setTxn([""]),
      setQty([""]),
      setTotal([""]);
  }

  function submitHandler(callbackFunction: any) {
    if (Object.keys(valid).length) {
      callbackFunction();
      return;
    }
    const payload = data.map((item, index) => {
      return {
        date: new Date(),
        brand: brand[index],
        transaction_type: txn[index],
        total_Orders: qty[index],
        total_Order_Value: total[index],
        grossMarginPercentage: gm[index],
      };
    });
    axios
      .post(url, payload)
      .then(() => {
        callbackFunction(true, "onSubmit");
        resetStates();
        setValid({
          0: {
            transaction_type: true,
            brand: true,
            total_Orders: true,
            total_Order_Value: true,
            grossMarginPercentage: true,
          },
        })
      })
      .catch(() => callbackFunction(false, "onSubmit"));
  }

  function setField(
    key: any,
    index: number,
    value: any,
    callbackFunction: any
  ) {
    let flag = "";
    switch (key) {
      case "brand":
        setBrand(
          brand.map((k: any, i: any) => {
            return i == index ? value : k;
          })
        );
        if (value.trim().length === 0) {
          flag = "Brand Name Cannot be Empty!";
        }
        break;
      case "transaction_type":
        setTxn(
          txn.map((k: any, i: any) => {
            return i == index ? value : k;
          })
        );
        if (value == "Select option") {
          flag = "Please select transaction type!";
        }
        break;
      case "total_Orders":
        setQty(
          qty.map((k: any, i: any) => {
            return i == index ? value : k;
          })
        );
        if (value <= 0 || value > 13) {
          flag = "Total Orders cannot exceed 13!";
        }
        break;
      case "total_Order_Value":
        setTotal(
          total.map((k: any, i: any) => {
            return i == index ? value : k;
          })
        );
        if (value <= 0 || value > 12000) {
          flag = "Total Order Value cannot exceed 12000 INR";
        }
        break;
      case "grossMarginPercentage":
        setGm(
          gm.map((k: any, i: any) => {
            return i == index ? value : k;
          })
        );
        if (value > 4 || value < 1) {
          flag = "Gross Margin % should lie between 1-4";
        }
        break;
    }
    validateStates({
      flag,
      setValid,
      valid,
      index,
      key,
      callbackFunction,
    });
  }

  const deleteRowHandler = (index: any) => {
    setData(
      data.filter((f) => {
        return f.index !== index;
      })
    );
    setBrand((v: any) => v.filter((f: any, i: number) => i !== index));

    setTxn((v: any) => v.filter((f: any, i: number) => i !== index));

    setGm((v: any) => v.filter((f: any, i: number) => i !== index));

    setQty((v: any) => v.filter((f: any, i: number) => i !== index));

    setBrand((v: any) => v.filter((f: any, i: number) => i !== index));

    setTotal((v: any) => v.filter((f: any, i: number) => i !== index));
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
          <ButtonSection
            addRowHandler={addRowHandler}
            submitHandler={submitHandler}
          />
        </TableContainer>
      </ChakraProvider>
    </>
  );
}
export default PlaceOrder;
