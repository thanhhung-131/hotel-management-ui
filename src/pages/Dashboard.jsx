import React, { useEffect, useState } from "react";
import { Table } from "antd";
import Navbar from "../components/common/Navbar";

const DashboardPage = () => {
  const [bookings, setBookings] = useState([]); // State lưu danh sách booking
  const [loading, setLoading] = useState(true); // State loading khi chờ API

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const userId = localStorage.getItem("idUser");
        const response = await fetch(`http://localhost:8080/v1/bookings/${userId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch bookings");
        }

        const data = await response.json();
        setBookings(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  // Cấu trúc cột bảng
  const columns = [
    { title: "User Name", dataIndex: "userName", key: "user_id" },
    { title: "Room Name", dataIndex: "roomName", key: "room_id" },
    { title: "Guest Size", dataIndex: "guestSize", key: "guest_size" },
    { title: "Price", dataIndex: "price", key: "price" },
    { title: "Phone", dataIndex: "phone", key: "phone" },
    { title: "Email", dataIndex: "email", key: "email" },
  ];

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Booking List</h1>
        <Table
          id="table-xls"
          columns={columns}
          dataSource={bookings}
          loading={loading}
          rowKey="booking_id"
        />
      </div>
    </>
  );
};

export default DashboardPage;
