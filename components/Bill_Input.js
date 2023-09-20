import { FaDollarSign } from "react-icons/fa";
const Bill_Input = (props) => {
  const { bill, setBill } = props;
  const isNegative = bill < 0;

  const handleKeyDown = (e) => {
    // handling negative sign
    // if (isNegative && e.key === '-') {
    //   e.preventDefault();
    // }
  };

  const handleChange = (e) => {
    // replacing leading minus sign if it's the first character
    if (e.target.value === '-') {
      setBill('');
    } else {
      setBill(e.target.value);
    }
  };

  return (
    <div>
      <label
        htmlFor="bill"
        className="block font-serif text-sm leading-6 text-gray-600 font-semibold"
      >
        Bill
      </label>

      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <FaDollarSign className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>

        <input
          type="number" 
          name="bill"
          id="bill"
          className="block w-full font-bold rounded-md border-0 py-1.5 pl-7 pr-2  text-right text-[#114A4E] outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6"
          placeholder="0.00"
          aria-describedby="bill-currency"
          value={bill}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      {isNegative && (
        <p className="mt-2 text-red-600 text-sm">Tip amount must be a positive value.</p>
      )}
    </div>
  );
};

export default Bill_Input;
