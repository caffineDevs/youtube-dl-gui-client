import React from "react";


function Table(props) {
  const responseData = props.formats;
  const downloadFile = async (url, filename, ext, mimeType) => {
    // let a = document.createElement("a");
    // a.href = url;
    // a.setAttribute("download", "filename");
    // document.body.appendChild(a);
    // a.click();
    // document.body.removeChild(a);


  };
  return (
    <div className="bg-gray-100 py-6 w-full">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 bg-secondaryBlack text-secondaryRed">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className=" text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Type
                      </th>
                      <th
                        scope="col"
                        className=" text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Format
                      </th>
                      <th
                        scope="col"
                        className=" text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Size
                      </th>
                      <th
                        scope="col"
                        className=" text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        i-tag
                      </th>
                      <th
                        scope="col"
                        className=" text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Download
                      </th>
                    </tr>
                  </thead>
                  <tbody className=" text-center bg-white divide-y divide-gray-200 text-4xl ">
                    {responseData.map((video, index) => {
                      return (
                        <tr
                          key={index}
                          className="hover:bg-imperialRed hover:text-primaryBlack main-table transition duration-200 ease-in-out"
                        >
                          <td className="px-6 py-4 whitespace-nowrap ">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10"></div>
                              <div className="ml-4">
                                <div className="text-sm md:text-lg font-mono font-medium text-gray-900 ">
                                  {video.videoCodec && !video.audioCodec && (
                                    <span>video only</span>
                                  )}
                                  {!video.videoCodec && video.audioCodec && (
                                    <span>audio only</span>
                                  )}
                                  {video.videoCodec && video.audioCodec && (
                                    <span>video + audio</span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap ">
                            <div className="text-sm md:text-lg font-mono text-gray-900">
                              {video.container}{" "}
                              {video.height ? (
                                <span>
                                  ({video.width}x{video.height})
                                </span>
                              ) : null}
                            </div>
                            {/* <div className="text-sm md:text-lg font-mono text-gray-500">
                              {Optimization}
                            </div> */}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap ">
                            <span className="px-2 inline-flex text-sm md:text-lg font-mono leading-5 rounded-full bg-green-100 text-green-800">
                              {video.contentLength
                                ? Math.round(
                                    video.contentLength / 1024 / 1024
                                  ) + " Mb"
                                : "-"}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm md:text-lg font-mono text-gray-500 ">
                            {video.itag}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm md:text-lg font-mono font-medium ">
                            <div className="flex justify-center">
                              <a
                              href={video.url}
                              target="_blank"
                                onClick={() => {
                                  downloadFile(
                                    video.url,
                                    props.videoDetails.title +
                                      " " +
                                      video.quality,
                                      video.container,
                                      video.mimeType
                                  );
                                }}

                                download="filename.mp4"
                                className="text-indigo-600 hover:text-indigo-900 px-4 y-2 "
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  version="1.1"
                                  id="Capa_1"
                                  x="0px"
                                  y="0px"
                                  viewBox="0 0 449.306 449.306"
                                  height="30px"
                                  fill="green"
                                  className="downloadBtn"
                                >
                                  <g>
                                    <g>
                                      <g>
                                        <path d="M447.739,251.298l-59.037-126.433c-1.731-3.54-5.484-5.625-9.404-5.224h-50.155c-5.771,0-10.449,4.678-10.449,10.449     c0,5.771,4.678,10.449,10.449,10.449h43.363l48.588,104.49h-59.559c-27.004-0.133-51.563,15.625-62.694,40.229     c-8.062,16.923-25.141,27.698-43.886,27.69h-60.604c-18.745,0.008-35.823-10.767-43.886-27.69     c-11.131-24.604-35.69-40.362-62.694-40.229H29.257l57.469-104.49h33.437c5.771,0,10.449-4.678,10.449-10.449     c0-5.771-4.678-10.449-10.449-10.449H80.457c-3.776-0.358-7.425,1.467-9.404,4.702L2.09,250.776     c-1.209,1.072-1.958,2.569-2.09,4.18v130.09c0.832,29.282,24.524,52.744,53.812,53.29h341.682     c29.289-0.546,52.98-24.008,53.812-53.29v-130.09C449.107,253.622,448.567,252.362,447.739,251.298z M428.408,385.045     c-0.812,17.743-15.16,31.864-32.914,32.392H53.812c-17.754-0.528-32.102-14.648-32.914-32.392V265.927h66.873     c18.745-0.008,35.823,10.767,43.886,27.69c11.131,24.604,35.69,40.362,62.694,40.229h60.604     c27.004,0.133,51.563-15.625,62.694-40.229c8.062-16.923,25.141-27.698,43.886-27.69h66.873V385.045z" />
                                        <path d="M217.339,252.865c3.706,4.04,9.986,4.31,14.025,0.603c0.21-0.192,0.411-0.394,0.603-0.603l71.053-71.576     c3.462-4.617,2.527-11.166-2.09-14.629c-3.715-2.786-8.824-2.786-12.539,0l-53.29,53.29V21.42     c0-5.771-4.678-10.449-10.449-10.449s-10.449,4.678-10.449,10.449v198.531l-53.29-53.29c-4.617-3.462-11.166-2.527-14.629,2.09     c-2.786,3.715-2.786,8.824,0,12.539L217.339,252.865z" />
                                      </g>
                                    </g>
                                  </g>
                                  <g></g>
                                  <g></g>
                                  <g></g>
                                  <g></g>
                                  <g></g>
                                  <g></g>
                                  <g></g>
                                  <g></g>
                                  <g></g>
                                  <g></g>
                                  <g></g>
                                  <g></g>
                                  <g></g>
                                  <g></g>
                                  <g></g>
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
