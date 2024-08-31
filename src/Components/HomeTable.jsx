import { data } from "../dummyData.js";
// impo;
const HomeTable = () => {
  return (
    <>
      <div className="w-full  h-4/6 pt-2 pl-4 pr-6 scrollbar-thin scrollbar-webkit">
        <div className=" h-full overflow-x-auto rounded-lg">
          <table className="w-full h-1/6 text-sm text-left rounded-lg shadow-md rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-600 rounded-lg shadow-md bg-gray-200">
              <tr>
                <th scope="col" className="p-4 w-12">
                  {/* Checkbox column */}
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
                    />
                    <label htmlFor="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 min-w-12">
                  Client
                </th>
                <th scope="col" className="px-6 py-3 min-w-12">
                  Product
                </th>
                <th scope="col" className="px-6 py-3 min-w-40">
                  PO Number
                </th>
                <th scope="col" className="px-6 py-3 min-w-40">
                  Total Stakeholders
                </th>
                <th scope="col" className="px-6 py-3 min-w-40">
                  Client User License
                </th>
                <th scope="col" className="px-6 py-3 min-w-56">
                  Validity
                </th>
                <th scope="col" className="px-6 py-3 min-w-56">
                  Stakeholders in-scope
                </th>
                <th scope="col" className="px-6 py-3 min-w-56">
                  Generals in-scope
                </th>
                <th scope="col" className="px-6 py-3 min-w-24">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="rounded-lg shadow-md">
              <tr className="bg-white border-b hover:bg-gray-50">
                <td className="w-12 p-4">
                  {/* Checkbox column */}
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
                    />
                    <label
                      htmlFor="checkbox-table-search-1"
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 w-40 font-medium text-gray-900 whitespace-nowrap"
                >
                  Google
                </th>
                <td className="px-6 py-4 w-40">-</td>
                <td className="px-6 py-4 w-40">-</td>
                <td className="px-6 py-4 w-40">-</td>
                <td className="px-6 py-4 w-40">-</td>
                <td className="px-6 py-4 w-40">-</td>
                <td className="px-6 py-4 w-40">-</td>
                <td className="px-6 py-4 w-40">-</td>
                <td className="px-6 py-4 w-24">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 32 32"
                    id="edit"
                  >
                    <path d="M12.82373,12.95898l-1.86279,6.21191c-0.1582,0.52832-0.01367,1.10156,0.37646,1.49121c0.28516,0.28516,0.66846,0.43945,1.06055,0.43945c0.14404,0,0.28906-0.02051,0.43066-0.06348l6.2124-1.8623c0.23779-0.07129,0.45459-0.2002,0.62988-0.37598L31.06055,7.41016C31.3418,7.12891,31.5,6.74707,31.5,6.34961s-0.1582-0.7793-0.43945-1.06055l-4.3501-4.34961c-0.58594-0.58594-1.53516-0.58594-2.12109,0L13.2002,12.3291C13.02441,12.50488,12.89551,12.7207,12.82373,12.95898z M15.58887,14.18262L25.6499,4.12109l2.22852,2.22852L17.81738,16.41113l-3.18262,0.9541L15.58887,14.18262z"></path>
                    <path d="M30,14.5c-0.82861,0-1.5,0.67188-1.5,1.5v10c0,1.37891-1.12158,2.5-2.5,2.5H6c-1.37842,0-2.5-1.12109-2.5-2.5V6c0-1.37891,1.12158-2.5,2.5-2.5h10c0.82861,0,1.5-0.67188,1.5-1.5S16.82861,0.5,16,0.5H6C2.96729,0.5,0.5,2.96777,0.5,6v20c0,3.03223,2.46729,5.5,5.5,5.5h20c3.03271,0,5.5-2.46777,5.5-5.5V16C31.5,15.17188,30.82861,14.5,30,14.5z"></path>
                  </svg>
                </td>
              </tr>
              <tr className="bg-white border-b hover:bg-gray-50">
                <td className="w-12 p-4">
                  {/* Checkbox column */}
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
                    />
                    <label
                      htmlFor="checkbox-table-search-1"
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 w-40 font-medium text-gray-900 whitespace-nowrap"
                >
                  Pranaya
                </th>
                <td className="px-6 py-4 min-w-40">EXP 360 Now</td>
                <td className="px-6 py-4 min-w-40">AR_4466</td>
                <td className="px-6 py-4 min-w-40">07</td>
                <td className="px-6 py-4 min-w-40">2102</td>
                <td className="px-6 py-4 min-w-40">Jan 01,23-Dec 31,23</td>
                <td className="px-6 py-4 min-w-40">
                  <div className="w-full flex flex-wrap text-gray-600">
                    {data.map((item, index) => (
                      <h3
                        className="bg-blue-200 rounded-lg  px-2 py-1 m-1"
                        key={index}
                      >
                        {item}
                      </h3>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 min-w-40">
                  <div className="w-full flex flex-wrap text-gray-600">
                    {data.map((item, index) => (
                      <h3
                        className="bg-blue-200 rounded-lg  px-2 py-1 m-1"
                        key={index}
                      >
                        {item}
                      </h3>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 min-w-24">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 32 32"
                    id="edit"
                  >
                    <path d="M12.82373,12.95898l-1.86279,6.21191c-0.1582,0.52832-0.01367,1.10156,0.37646,1.49121c0.28516,0.28516,0.66846,0.43945,1.06055,0.43945c0.14404,0,0.28906-0.02051,0.43066-0.06348l6.2124-1.8623c0.23779-0.07129,0.45459-0.2002,0.62988-0.37598L31.06055,7.41016C31.3418,7.12891,31.5,6.74707,31.5,6.34961s-0.1582-0.7793-0.43945-1.06055l-4.3501-4.34961c-0.58594-0.58594-1.53516-0.58594-2.12109,0L13.2002,12.3291C13.02441,12.50488,12.89551,12.7207,12.82373,12.95898z M15.58887,14.18262L25.6499,4.12109l2.22852,2.22852L17.81738,16.41113l-3.18262,0.9541L15.58887,14.18262z"></path>
                    <path d="M30,14.5c-0.82861,0-1.5,0.67188-1.5,1.5v10c0,1.37891-1.12158,2.5-2.5,2.5H6c-1.37842,0-2.5-1.12109-2.5-2.5V6c0-1.37891,1.12158-2.5,2.5-2.5h10c0.82861,0,1.5-0.67188,1.5-1.5S16.82861,0.5,16,0.5H6C2.96729,0.5,0.5,2.96777,0.5,6v20c0,3.03223,2.46729,5.5,5.5,5.5h20c3.03271,0,5.5-2.46777,5.5-5.5V16C31.5,15.17188,30.82861,14.5,30,14.5z"></path>
                  </svg>
                </td>
              </tr>
              {/* Repeat rows as necessary */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default HomeTable;
