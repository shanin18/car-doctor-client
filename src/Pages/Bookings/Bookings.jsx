import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import BookingsRow from "./BookingsRow";
import checkoutImage from "/images/checkout/checkout.png";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const navigate = useNavigate()

  const url = `https://car-doctor-server-shanin18.vercel.app/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("car-access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) =>{
        if(!data.error){
          setBookings(data)
        }
        else{
          navigate("/")
        }
      })
  }, [url, navigate]);

  const handleDeleteService = (id) => {
    fetch(`https://car-doctor-server-shanin18.vercel.app/bookings/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remaining = bookings.filter((booking) => booking._id !== id);
          setBookings(remaining);
        }
      });
  };

  const handleStatus = (id) => {
    fetch(`https://car-doctor-server-shanin18.vercel.app/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "pending" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const remaining = bookings.filter((booking) => booking._id !== id);
          const updated = bookings.find((booking) => booking._id === id);
          updated.status = "pending";
          const updatedBookings = [updated, ...remaining];
          setBookings(updatedBookings);
        }
      });
  };

  return (
    <div>
      <div className="relative overflow-hidden rounded-xl h-fit mb-[132px]">
        <img className="w-full" src={checkoutImage} alt="image" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#151515] to[rgba(21, 21, 21, 0) 100%)] flex items-center ">
          <div className="ml-5 md:ml-14 lg:ml-32 space-y-2">
            <h2 className="font-bold text-4xl text-white">Cart Details</h2>
            <p className="text-[#FF3811] font-medium">Home - Product Details</p>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <tbody>
            {bookings?.map((booking) => (
              <BookingsRow
                key={booking._id}
                booking={booking}
                handleDeleteService={handleDeleteService}
                handleStatus={handleStatus}
              ></BookingsRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
