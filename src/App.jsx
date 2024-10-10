import React, { useState } from "react";

const App = () => {
  const [value, setValue] = useState("");

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-emerald-600 to-black">
      <div className="p-6 bg-white rounded-[10px] shadow-lg">
        <form>
          {/* Input Field */}
          <div className="mb-4">
            <input
              type="text"
              className="w-full h-12 px-4 text-xl border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="0"
              readOnly
              value={value}
            />
          </div>

          {/* Button Grid */}
          <div className="grid grid-cols-4 gap-2">
            <button
              type="button"
              className="btn col-span-1"
              onClick={() => setValue("")} // AC button
            >
              AC
            </button>
            <button
              type="button"
              className="btn col-span-1"
              onClick={() => setValue(value.slice(0, -1))} // DE button
            >
              DE
            </button>
            <button
              type="button"
              className="btn col-span-1"
              onClick={(e) => setValue(value + e.target.innerText)} // Decimal button
            >
              .
            </button>
            <button
              type="button"
              className="btn col-span-1"
              onClick={(e) => setValue(value + e.target.innerText)} // Division button
            >
              /
            </button>

            <button
              type="button"
              className="btn col-span-1"
              onClick={(e) => setValue(value + e.target.innerText)} // 7 button
            >
              7
            </button>
            <button
              type="button"
              className="btn col-span-1"
              onClick={(e) => setValue(value + e.target.innerText)} // 8 button
            >
              8
            </button>
            <button
              type="button"
              className="btn col-span-1"
              onClick={(e) => setValue(value + e.target.innerText)} // 9 button
            >
              9
            </button>
            <button
              type="button"
              className="btn col-span-1"
              onClick={(e) => setValue(value + e.target.innerText)} // Multiplication button
            >
              *
            </button>

            <button
              type="button"
              className="btn col-span-1"
              onClick={(e) => setValue(value + e.target.innerText)} // 4 button
            >
              4
            </button>
            <button
              type="button"
              className="btn col-span-1"
              onClick={(e) => setValue(value + e.target.innerText)} // 5 button
            >
              5
            </button>
            <button
              type="button"
              className="btn col-span-1"
              onClick={(e) => setValue(value + e.target.innerText)} // 6 button
            >
              6
            </button>
            <button
              type="button"
              className="btn col-span-1"
              onClick={(e) => setValue(value + e.target.innerText)} // Addition button
            >
              +
            </button>

            <button
              type="button"
              className="btn col-span-1"
              onClick={(e) => setValue(value + e.target.innerText)} // 1 button
            >
              1
            </button>
            <button
              type="button"
              className="btn col-span-1"
              onClick={(e) => setValue(value + e.target.innerText)} // 2 button
            >
              2
            </button>
            <button
              type="button"
              className="btn col-span-1"
              onClick={(e) => setValue(value + e.target.innerText)} // 3 button
            >
              3
            </button>
            <button
              type="button"
              className="btn col-span-1"
              onClick={(e) => setValue(value + e.target.innerText)} // Subtraction button
            >
              -
            </button>

            <button
              type="button"
              className="btn col-span-2"
              onClick={(e) => setValue(value + e.target.innerText)} // 00 button
            >
              00
            </button>
            <button
              type="button"
              className="btn col-span-1"
              onClick={(e) => setValue(value + e.target.innerText)} // 0 button
            >
              0
            </button>
            <button
              type="button"
              className="btn col-span-1"
              onClick={() => {
                try {
                  const result = eval(value); // Evaluate expression
                  setValue(String(result));
                } catch {
                  setValue("Error");
                }
              }} // Equals button
            >
              =
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
