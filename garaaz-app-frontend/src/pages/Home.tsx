import Card from "react-bootstrap/Card";
import {
  VStack,
  Image,
} from "@chakra-ui/react";
export default function BasicCard() {
  return (
    <>
      <VStack>
        <Card
          style={{
            width: "28vw",
            height: "40vh",
            margin: "1vw",
            border: "solid",
            padding: "1vw",
            borderWidth: "2px"
          }}
        >
          <Card.Body style={{
            color: "green",
          }}>
            <Image src="../../public/garaaz-logo.png" style={{height:"10vh"}} />
            <Card.Title style={{
            fontSize: "2rem"
          }}>Welcome to Garaaz!</Card.Title>
            <Card.Text style={{
            fontSize: "1.5rem"
          }}>
              Automobile spares marketplace for distributors & workshops. Visit this page to view inventory. You can have a look at orders placed, quantity, price and transaction type.
            </Card.Text>
            <Card.Link href="/view">View Orders</Card.Link>
          </Card.Body>
        </Card>

        <Card
          style={{
            width: "28vw",
            height: "40vh",
            margin: "1vw",
            border: "solid",
            borderWidth: "2px",
            padding: "1vw"
          }}
        >
          <Card.Body style={{
            color: "blue",
          }}>
            <Image src="../../public/garaaz-logo.png" style={{height:"10vh"}} />
            <Card.Title style={{
            fontSize: "2rem"
          }}>Welcome to Garaaz!</Card.Title>
            <Card.Text style={{
            fontSize: "1.5rem"
          }}>
              By visting this page you can build your inventory. Once you are done placing your order you can visit our view order page to have a look at the same. 
            </Card.Text>
            <Card.Link href="/add">Add Spares</Card.Link>
          </Card.Body>
        </Card>
      </VStack>
    </>
  );
}
