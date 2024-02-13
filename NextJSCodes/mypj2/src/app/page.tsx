"use client";
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { AppDispatch, useAppSelector } from '@/redux/store'
import React from 'react'
import { decrement, increment } from '@/redux/fetaures/value-slice';
import { useDispatch } from 'react-redux';
const page = () => {
  const dispatch = useDispatch<AppDispatch>()
  const valueObj = useAppSelector((state) => state.valueReducer)
  console.log(valueObj)
  return (
    <div>

      this is home page

      <h1>The value is {valueObj.value}</h1>
      <button onClick={() =>
        dispatch(increment())
      }>increment</button>

      <button onClick={() =>
        dispatch(decrement())
      }>decrement</button>
    </div>
  )
}

export default page