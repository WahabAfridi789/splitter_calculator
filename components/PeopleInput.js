
import {FaUser} from 'react-icons/fa'; 

const PeopleInput = ({ people, setPeople }) => {
  const isNegative = people < 0;

  const handleKeyDown = (e) => {
    // Prevent typing a minus sign if the value is already negative
    if (isNegative && e.key === '-') {
      e.preventDefault();
    }
  };

  const handleChange = (e) => {
    // Remove leading minus sign if it's the first character
    if (e.target.value === '-') {
      setPeople('');
    } else {
      setPeople(e.target.value);
    }
  };

  return (
    <div>
      <label
        htmlFor="people"
        className="block font-serif text-sm font-semibold leading-6 text-gray-600"
      >
        Number of People
      </label>

      <div className="relative mt-2 flex flex-grow items-stretch focus-within:z-10">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <FaUser className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>

        <input
          type="text" // Change the input type to text
          name="people"
          id="people"
          className="block w-full text-right rounded-md border-0 py-1.5 pl-10 pr-3 font-semibold text-blue-900 outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6"
          placeholder="0"
          aria-describedby="number-of-people"
          value={people}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
};

export default PeopleInput;
