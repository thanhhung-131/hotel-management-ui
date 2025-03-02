import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RoomCard from "./RoomCard";

function ProductList() {
  const [rooms, setRooms] = useState([]); // Danh sách phòng
  const [page, setPage] = useState(0); // Trang hiện tại
  const [totalPages, setTotalPages] = useState(1); // Tổng số trang
  const size = 5; // Số phòng trên mỗi trang (cùng với BE)
  const navigate = useNavigate();

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
          navigate("/login");
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
  }, [page, navigate]); // Chạy lại khi `page` thay đổi

  return (
    <div className="w-full py-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold">Our Rooms</h2>
        <p className="text-gray-500">
          We provide the best rooms for our customers
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4">
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
  );
}

export default ProductList;
