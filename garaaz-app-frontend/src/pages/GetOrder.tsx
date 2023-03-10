import {
  TableContainer,
  Table,
  TableCaption,
  Tr,
  Th,
  Thead,
  Tbody,
  ChakraProvider,
} from "@chakra-ui/react";
import OrderComponent from "../components/order-component";
import axios from "axios";
import { useEffect, useState } from "react";
const url = "http://localhost:3000/spares";

function GetOrder() {
  const [data, setData] = useState<any>([{}]);
  const spareData = async () => {
    try {
      const userdata = await axios.get(url);
      setData(userdata.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    spareData();
  }, []);

  function deleteRow(index:number) {
    const deleteData = async () => {
      try {
        const userdata = await axios.delete(url+"/"+data[index]._id);
        spareData();
      } catch (error) {
        console.log(error);
      }
    };
    deleteData();
  }

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
            <TableCaption>We found above data with us!</TableCaption>
            <Thead>
              <Tr textAlign="center">
                <Th textAlign="center">S.No</Th>
                <Th textAlign="center">Date Ordered</Th>
                <Th textAlign="center">Transaction Type</Th>
                <Th textAlign="center">Brand</Th>
                <Th textAlign="center">Quantity</Th>
                <Th textAlign="center">Total</Th>
                <Th textAlign="center">Gross Margin %</Th>
                <Th textAlign="center">Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((item:any, index:number) => {
                return (
                  <Tr key={index+"OrderComponent"}>
                    <OrderComponent key={index+"OrderComponent"} element={{ ...item, index }} deleteRowHandler={deleteRow} />
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </ChakraProvider>
    </>
  );
}
export default GetOrder;
