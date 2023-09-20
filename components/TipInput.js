import React, { useState } from 'react';

const TipInput = ({ setTip }) => {
  const [customSelected, setCustomSelected] = useState(false);
  const [activeTip, setActiveTip] = useState(null);
  const [customTip, setCustomTip] = useState(0);

  const tips = [
    { tip: 5, isCustom: false },
    { tip: 10, isCustom: false },
    { tip: 15, isCustom: false },
    { tip: 20, isCustom: false },
    { tip: 30, isCustom: false },
    { tip: 0, isCustom: true },
  ];

  const inputClasses = "block h-full w-full rounded-md border-0 px-2 py-1.5 text-gray-900 outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6";
  const buttonClasses = "w-full rounded-md px-3.5 py-2.5 font-medium shadow-sm file:font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600";

  const handleTipClick = (index) => {
    setCustomSelected(false);

    if (activeTip === index) {
      setActiveTip(null);
      return;
    }

    setActiveTip(index);
    setTip(tips[index].tip / 100);
  };

  const handleCustomTip = () => {
    setActiveTip(null);
    setCustomSelected(true);
    setTip(customTip / 100);
  };

  const handleCustomTipBlur = () => {
    setTip(customTip / 100);
    if (customTip > 0) return;
    setCustomSelected(false);
  };

  const dynamicButtonClasses = (index) => {
    return `${buttonClasses} ${
      index === activeTip
        ? 'bg-[#26C2AD] text-black font-semibold hover:bg-blue-300 hover:text-cyan-900'
        : 'bg-[#114A4E] text-white font-semibold hover:bg-[#C5E4E7] hover:text-black'
    }`;
  };

  return (
    <div>
      <label
        htmlFor="tip"
        className="block font-serif text-sm font-semibold leading-6 text-gray-600"
      >
        Select Tip in %
      </label>

      <div className="mt-2 grid grid-cols-3 gap-3">
        {tips.map((tip, index) => (
          <div key={index}>
            {tip.isCustom ? (
              customSelected ? (
                <input
                  type="number"
                  name="tip"
                  id="tip"
                  className="block h-full text-right  w-full rounded-md border-0 px-2 py-1.5 text-gray-900 outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6"
                  placeholder="0.00"
                  aria-describedby="tip-amount"
                  value={customTip}
                  onChange={(e) => setCustomTip(e.target.value)}
                  onBlur={handleCustomTipBlur}
                />
              ) : (
                <button
                  type="button"
                  className="bg-[#C5E4E7] h-full w-full rounded-md text-[#114A4E] font-semibold hover:bg-[#C5E4E7] hover:text-black"
                  onClick={handleCustomTip}
                  
                >
                  Custom
                </button>
              )
            ) : (
              <button
                type="button"
                className={`${dynamicButtonClasses(index)}`}
                onClick={() => handleTipClick(index)}
              >
                {tip.tip}%
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TipInput;
