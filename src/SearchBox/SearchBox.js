import React, { useState, useEffect } from "react";
import Table from "../Table/Table";
import axios from "axios";

function SearchBox() {
  const initialState = {
    inputState: "",
    data: {
      formats:[]
    },
  };

  const spinner = (
    <div className="mt-20 sm:mt-40">
      <img src="/spinner.svg" />
    </div>
  );

  const [state, setstate] = useState(initialState);
  const [isInit, setisInit] = useState(true);

  const handleQuerySearch = () => {
    setstate({ ...state, data: {formats:[]} });
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

      {/* <main className="font-sans p-8 bg-grey-light">
        <div className="bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">
          <div className="sm:flex sm:items-center px-6 py-4">
            <img
              className="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0"
              src="https://avatars2.githubusercontent.com/u/4323180?s=400&u=4962a4441fae9fba5f0f86456c6c506a21ffca4f&v=4"
              alt=""
            />
            <div className="text-center sm:text-left sm:flex-grow">
              <div className="mb-4">
                <p className="text-xl leading-tight">Adam Wathan</p>
                <p className="text-sm leading-tight text-grey-dark">
                  Developer at NothingWorks Inc.
                </p>
              </div>
              <div>
                <button className="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple hover:bg-purple hover:text-white">
                  Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </main> */}
    </>
  );
}

export default SearchBox;
