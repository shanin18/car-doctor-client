const BookingsRow = ({ booking, handleDeleteService, handleStatus }) => {
  const { img, _id, title, date, price, status } = booking;

  return (
    <tr>
      <th>
        <button
          onClick={() => handleDeleteService(_id)}
          className="btn btn-circle btn-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <img src={img} className="w-[150px] rounded-md" alt="" />
      </td>
      <td>
        <h2 className="text-xl font-semibold">{title}</h2>
      </td>
      <td className="font-semibold text-xl">{price}</td>
      <td className="font-semibold text-xl">{date}</td>
      <th>
        {status === "pending" ? (
          <span className="border-[#29B170] rounded-md text-[#29B170] font-medium border px-5 py-2">
            Approved
          </span>
        ) : (
          <button
            onClick={() => handleStatus(_id)}
            className="btn bg-[#FF3811] border-0"
          >
            Pending
          </button>
        )}
      </th>
    </tr>
  );
};

export default BookingsRow;
