import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/common/Navbar";

function RoomDetail() {
  const navigate = useNavigate();
  const { roomId } = useParams();
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isOrdering, setIsOrdering] = useState(false); // Trạng thái đặt hàng

  useEffect(() => {
    const fetchRoomDetail = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await fetch(
          `http://localhost:8080/v1/room/${roomId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch room details");
        }

        const data = await response.json();
        setRoom(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRoomDetail();
  }, [roomId]);

  const handleOrder = async () => {
    if (!room) return;
    setIsOrdering(true); // Hiển thị trạng thái đang đặt hàng

    try {
      const token = localStorage.getItem("authToken");
      const response = await fetch("http://localhost:8080/v1/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          roomId: room.id,
          guestSize: quantity,
          price: room.price * quantity,
          phone: "0123456789", // Có thể lấy từ thông tin user
          email: "user@example.com", // Có thể lấy từ thông tin user
        }),
      });

      if (!response.ok) {
        throw new Error("Đặt phòng thất bại!");
      }

      alert("Đặt phòng thành công!");
      navigate("/"); // Chuyển về trang home
    } catch (error) {
      alert(error.message);
    } finally {
      setIsOrdering(false); // Tắt trạng thái đang đặt hàng
    }
  };

  if (loading) return <h2>Loading...</h2>;
  if (error || !room) return <h2>Room Not Found</h2>;

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 grid md:grid-cols-2 gap-8">
        {/* Hình ảnh phòng */}
        <div className="relative w-full h-[400px] bg-gray-100 rounded-lg overflow-hidden">
          <img
            src={
              room.imageUrl ||
              "https://via.placeholder.com/500?text=Image+Not+Found"
            }
            alt={room.roomName}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Thông tin phòng */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{room.roomName}</h1>
          <p className="text-gray-600 text-lg mb-4">{room.description}</p>
          <p className="text-2xl font-bold text-gray-900">${room.price}</p>

          {/* Số lượng */}
          <div className="flex items-center gap-4 my-6">
            <button
              className="border px-3 py-1 rounded"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
              -
            </button>
            <span className="text-lg">{quantity}</span>
            <button
              className="border px-3 py-1 rounded"
              onClick={() => setQuantity((q) => q + 1)}>
              +
            </button>
          </div>

          {/* Nút đặt hàng */}
          <button
            onClick={handleOrder}
            className={`flex-1 bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700 transition ${
              isOrdering ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isOrdering}>
            {isOrdering ? "Đang đặt hàng..." : "Đặt Hàng"}
          </button>
        </div>
      </div>
    </>
  );
}

export default RoomDetail;
