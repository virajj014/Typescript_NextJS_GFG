"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { increment, decrement , incrementByAmount } from "@/redux/features/value-slice";
export default function Home() {


  const dispatch = useDispatch<AppDispatch>();
  const valueObj = useAppSelector((state)=> state.valueReducer)

  console.log(valueObj)
  return (
    <div>
      <h1>  This is profile page</h1>
      <h2>Redux tore valueReducer =   {valueObj.value}</h2>

      <button
        onClick={() => {
          dispatch(increment());
        }}
      >Increment</button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >Decrement</button>
      <button
        onClick={() => {
          dispatch(incrementByAmount(9));
        }}
      >Increment by amount</button>

    </div>
  );
}
