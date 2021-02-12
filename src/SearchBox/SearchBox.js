import React, { useState, useEffect } from "react";
import Table from "../Table/Table";
import axios from "axios";

function SearchBox() {
  const initialState = {
    inputState: "",
    data: {
      formats: [],
    },
  };

  const spinner = (
    <div className="mt-20 sm:mt-40">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="200px"
        height="200px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <g transform="rotate(0 50 50)">
          <rect x="47" y="18" rx="3" ry="3" width="6" height="6" fill="#e63946">
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.9230769230769231s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(27.692307692307693 50 50)">
          <rect x="47" y="18" rx="3" ry="3" width="6" height="6" fill="#e63946">
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.8461538461538461s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(55.38461538461539 50 50)">
          <rect x="47" y="18" rx="3" ry="3" width="6" height="6" fill="#e63946">
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.7692307692307693s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(83.07692307692308 50 50)">
          <rect x="47" y="18" rx="3" ry="3" width="6" height="6" fill="#e63946">
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.6923076923076923s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(110.76923076923077 50 50)">
          <rect x="47" y="18" rx="3" ry="3" width="6" height="6" fill="#e63946">
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.6153846153846154s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(138.46153846153845 50 50)">
          <rect x="47" y="18" rx="3" ry="3" width="6" height="6" fill="#e63946">
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.5384615384615384s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(166.15384615384616 50 50)">
          <rect x="47" y="18" rx="3" ry="3" width="6" height="6" fill="#e63946">
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.46153846153846156s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(193.84615384615384 50 50)">
          <rect x="47" y="18" rx="3" ry="3" width="6" height="6" fill="#e63946">
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.38461538461538464s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(221.53846153846155 50 50)">
          <rect x="47" y="18" rx="3" ry="3" width="6" height="6" fill="#e63946">
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.3076923076923077s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(249.23076923076923 50 50)">
          <rect x="47" y="18" rx="3" ry="3" width="6" height="6" fill="#e63946">
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.23076923076923078s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(276.9230769230769 50 50)">
          <rect x="47" y="18" rx="3" ry="3" width="6" height="6" fill="#e63946">
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.15384615384615385s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(304.61538461538464 50 50)">
          <rect x="47" y="18" rx="3" ry="3" width="6" height="6" fill="#e63946">
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.07692307692307693s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(332.3076923076923 50 50)">
          <rect x="47" y="18" rx="3" ry="3" width="6" height="6" fill="#e63946">
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="0s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
      </svg>
    </div>
  );

  const [state, setstate] = useState(initialState);
  const [isInit, setisInit] = useState(true);

  const handleQuerySearch = () => {
    setstate({ ...state, data: { formats: [] } });
    setisInit(false);
    axios
      .post("https://node-ytdl-gui.herokuapp.com/", { url: state.inputState })
      .then((res) => {
        // console.log(res.data, 'info')
        setstate({ ...state, data: res.data });
      });
  };

  const handleInputChange = (e) => {
    setstate({ ...state, inputState: e.target.value });
  };

  return (
    <>
      <div className="font-sans text-black min-h-screen bg-white flex flex-col items-center items-start pt-52 justify-start bg-midnisghtBlue mx-5 md:mx-52 xl:mx-96">
        <div className="border mb-4 rounded overflow-hidden flex w-full rounded-full border-imperialRed lg:mx-5">
          <input
            type="text"
            value={state.inputState}
            onChange={handleInputChange}
            onKeyUp={(e) => {
              e.key == "Enter" && handleQuerySearch();
            }}
            className="w-full focus:outline-none px-6 py-3 text-xl border-r bg-primaryBlack text-imperialRed placeholder-imperialRed placeholder-opacity-40"
            placeholder="youtube url..."
          />
          <button
            className="flex items-center justify-center px-4 border-l focus:outline-none"
            onClick={handleQuerySearch}
          >
            <svg
              className="h-6 w-6 text-grey-dark focus:outline-none border-imperialRed"
              fill="#e63946"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
            </svg>
          </button>
        </div>
        {state.data && state.data.formats.length > 0 ? (
          <Table {...state.data} />
        ) : !isInit ? (
          spinner
        ) : null}
      </div>
    </>
  );
}

export default SearchBox;
