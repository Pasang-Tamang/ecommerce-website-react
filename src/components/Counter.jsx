import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../slice/counterSlice";

const Counter = () => {
  //useSelector((state) => console.log(state.counterReducer.count));
  const { count } = useSelector((state) => state.counterReducer);
  //console.log(count);

  const dispatch = useDispatch();
  return (
    <Card className="container" style={{ width: "25rem", height: "18rem" }}>
      <CardHeader className=" text-center" style={{ fontSize: "25px" }}>
        COUNTER
      </CardHeader>

      <CardBody
        className=" align-items-center d-flex justify-content-center"
        style={{ fontSize: "25px" }}
      >
        Count: {count}
      </CardBody>

      <CardFooter className="text-center">
        <Button variant="primary me-2" onClick={(e) => dispatch(increment())}>
          Increment
        </Button>
        <Button variant="success me-2" onClick={(e) => dispatch(decrement())}>
          Decrement
        </Button>
        <Button variant="danger me-2" onClick={(e) => dispatch(reset())}>
          Reset
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Counter;
