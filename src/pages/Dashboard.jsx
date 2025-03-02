import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import Navbar from '../components/common/Navbar'
import {  Space, Table, Tag } from "antd";
function DashboardPage () {
  const columns = [
    {
      title: 'booking_id',
      dataIndex: 'booking_id',
      key: 'booking_id',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'user_id',
      dataIndex: 'user_id',
      key: 'user_id',
    },
    {
      title: 'room_id',
      dataIndex: 'room_id',
      key: 'room_id',
    },
    {
      title: 'guest_size',
      key: 'guest_size',
      dataIndex: 'guest_size',
    },
    {
      title: 'price',
      key: 'price',
      dataIndex: 'price',
    },
    {
      title: 'phone',
      key: 'phone',
      dataIndex: 'phone',
    },
    {
      title: 'email',
      key: 'email',
      dataIndex: 'email',
    },
    
  ];
  const data = [
    {
      "booking_id": "2f79ddde-cdb3-3430-8a69-837122e5afb3",
      "user_id": "2417e767-4d00-391e-a367-2bcd75c307df",
      "room_id": "5be93839-26ce-39ee-a629-0035882607f8",
      "guest_size": 2285546,
      "price": 292316,
      "phone": "+18788389968",
      "email": "efren39@bruen.org"
    },
    {
      "booking_id": "54089c0e-d33b-302a-a33f-677d4d8f7295",
      "user_id": "d5d183c1-f75b-3959-8a2c-36705d5b3b67",
      "room_id": "68d7eac4-71c0-3c6b-a435-c6e726e621e1",
      "guest_size": 963612153,
      "price": 90,
      "phone": "+15306784259",
      "email": "ziemann.gladyce@bayer.com"
    },
    {
      "booking_id": "a777df35-6c56-3c06-932f-475d3c9a6eaf",
      "user_id": "5b0d5549-c0db-3356-a2c2-b9a572176ece",
      "room_id": "69fabdf7-8fa6-3e14-b102-7fd5ba399b7c",
      "guest_size": 16,
      "price": 4994439,
      "phone": "+13519363821",
      "email": "lucienne.rutherford@borer.com"
    },
    {
      "booking_id": "c96087c3-7b8b-3f71-a120-0d7fd499f900",
      "user_id": "38d70a86-b09a-3272-9f51-8de92fa1ea95",
      "room_id": "23717f95-c1e6-3014-968c-36ff7cc2ca89",
      "guest_size": 9842413,
      "price": 184,
      "phone": "+17204301626",
      "email": "akassulke@schroeder.com"
    }
  ];
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className='container mx-auto p-6'>
        <h1 className='text-3xl font-bold mb-6'>Shopping Cart</h1>
        <Table id="table-xls" columns={columns} dataSource={data} />

        
      </div>
    </>
  )
}

export default DashboardPage