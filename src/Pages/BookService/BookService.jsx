import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const BookService = () => {
  const service = useLoaderData();
  const { title, price, img, service_id } = service;
  const { user } = useContext(AuthContext);

  const handleServiceSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = user?.email;
    const date = form.date.value;
    const price = form.price.value;

    const newService = { name, img, service_id, title, email, date, price };

    fetch("https://car-doctor-server-shanin18.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("service book successfully!");
          form.reset();
        }
      });
  };

  return (
    <div>
      <form
        onSubmit={handleServiceSubmit}
        className="bg-[#F3F3F3] space-y-6 p-8 md:p-14 lg:p-24 rounded-xl"
      >
        <h2 className="text-3xl font-semibold text-center">{title}</h2>
        {/* row -1 */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-medium">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user && user.displayName}
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-medium">Date</span>
            </label>
            <input
              type="date"
              name="date"
              required
              className="input input-bordered"
            />
          </div>
        </div>

        {/* row -2 */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-medium">Email</span>
            </label>
            <input
              type="text"
              defaultValue={user && user.email}
              placeholder="email"
              name="email"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-medium">price</span>
            </label>
            <input
              defaultValue={`$${price}`}
              readOnly
              name="price"
              className="input input-bordered"
            />
          </div>
        </div>

        <div>
          <input
            type="submit"
            className="btn btn-block bg-[#FF3811] border-0"
            value="Order Confirm"
          />
        </div>
      </form>
    </div>
  );
};

export default BookService;
