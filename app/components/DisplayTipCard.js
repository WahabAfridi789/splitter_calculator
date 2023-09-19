const DisplayTipCard = (props) => {
  const { tipPerPerson, totalPerPerson, total, reset } = props;

  const data = [
    {
      label: 'Tip Amount',
      value: tipPerPerson.toFixed(2),
    },
    {
      label: 'Total',
      value: totalPerPerson.toFixed(2),
    },
  ];

  return (
    <div className="flex flex-col justify-between rounded-xl bg-[#114A4E] p-5 lg:py-10">
      <div className="flex flex-col gap-y-8">
        {data.map((item, i) => (
          <div key={i} className="flex items-end justify-between">
            <div>
              <p className="font-serif text-white lg:text-lg">{item.label}</p>
              <p className="font-serif text-xs font-light text-gray-300 lg:text-sm">
                / person
              </p>
            </div>
            <div className="flex items-baseline gap-x-2">
              <span className="text-xl font-bold text-[#26C2AD]  lg:text-4xl">
                $
              </span>
              <span className="font-serif text-xl font-bold text-[#26C2AD]  lg:text-4xl">
                {item.value}
              </span>
            </div>
          </div>
        ))}

      </div>

      <button
        type="submit"
        className="mt-14 w-full rounded-md bg-[#26C2AD] px-3.5 py-2.5 text-lg font-semibold uppercase tracking-wide text-[#114A4E] shadow-sm hover:bg-cyan-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        onClick={(e) => reset(e)}
      >
        Reset Tip
      </button>
    </div>
  );
};

export default DisplayTipCard;
