import React, { useEffect, useState } from "react";
import ProductFilter from "../components/common/Filter";
import RoomCard from "../components/common/RoomCard";
// import { Link } from "react-router-dom";
import Navbar from "../components/common/Navbar";

const List = () => {
  const [rooms, setRooms] = useState([]); // Danh sách phòng từ API
  const [page, setPage] = useState(0); // Trang hiện tại
  const [totalPages, setTotalPages] = useState(1); // Tổng số trang
  const size = 5; // Số phòng mỗi trang (tuỳ chỉnh)

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const token = localStorage.getItem("authToken");

        const response = await fetch(
          `http://localhost:8080/v1/room/pagination?page=${page}&size=${size}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 401) {
          localStorage.removeItem("authToken");
          window.location.href = "/login"; // Chuyển hướng đến trang đăng nhập
          return;
        }

        if (!response.ok) {
          throw new Error("Failed to fetch rooms");
        }

        const data = await response.json();
        setRooms(data.content); // Cập nhật danh sách phòng
        setTotalPages(data.totalPages); // Cập nhật tổng số trang
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };

    fetchRooms();
  }, [page]); // Chạy lại khi `page` thay đổi

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="w-full py-8">
        <ProductFilter /> {/* Thêm bộ lọc */}
        <div className="max-w-6xl mx-auto px-4 mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {rooms.map((room) => (
              <RoomCard key={room.id} product={room} />
            ))}
          </div>
        </div>
        {/* Pagination Controls */}
        <div className="text-center mt-6">
          <button
            disabled={page === 0}
            onClick={() => setPage(page - 1)}
            className="bg-gray-500 text-white px-4 py-2 mx-2 rounded-lg disabled:opacity-50">
            Previous
          </button>

          <span className="mx-4">
            Page {page + 1} of {totalPages}
          </span>

          <button
            disabled={page + 1 >= totalPages}
            onClick={() => setPage(page + 1)}
            className="bg-yellow-600 text-white px-4 py-2 mx-2 rounded-lg hover:bg-yellow-700 transition-colors disabled:opacity-50">
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default List;
