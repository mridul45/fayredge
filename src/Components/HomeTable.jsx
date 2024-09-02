import { data } from "../dummyData.js";
import "../Css/Components/HomeTable.css";

const HomeTable = () => {
  return (
    <>
      <div className="ht-out">
        <div className="ht-inn">
          <table className="ht-t">
            <thead className="ht-head">
              <tr>
                <th scope="col" className="ht-th-1">
                  {/* Checkbox column */}
                  <div className="ht-th-outer">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="ht-th-s-i"
                    />
                    <label
                      htmlFor="checkbox-all-search"
                      className="ht-th-label-1"
                    >
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope="col" className="h-t">
                  Client
                </th>
                <th scope="col" className="h-t">
                  Product
                </th>
                <th scope="col" className="h-t-1">
                  PO Number
                </th>
                <th scope="col" className="h-t-1">
                  Total Stakeholders
                </th>
                <th scope="col" className="h-t-1">
                  Client User License
                </th>
                <th scope="col" className="h-t-2">
                  Validity
                </th>
                <th scope="col" className="h-t-2">
                  Stakeholders in-scope
                </th>
                <th scope="col" className="h-t-2">
                  Cgannels in-scope
                </th>
                <th scope="col" className="h-t-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="t-b-outer">
              <tr className="tb-tr">
                <td className="ht-th-1">
                  {/* Checkbox column */}
                  <div className="ht-th-outer">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="ht-th-s-i"
                    />
                    <label
                      htmlFor="checkbox-table-search-1"
                      className="ht-th-label-1"
                    >
                      checkbox
                    </label>
                  </div>
                </td>
                <th scope="row" className="tb-th-1">
                  Google
                </th>
                <td className="t-d-1">-</td>
                <td className="t-d-1">-</td>
                <td className="t-d-1">-</td>
                <td className="t-d-1">-</td>
                <td className="t-d-1">-</td>
                <td className="t-d-1">-</td>
                <td className="t-d-1">-</td>
                <td className="t-d-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="t-d-svg"
                    viewBox="0 0 32 32"
                    id="edit"
                  >
                    <path d="M12.82373,12.95898l-1.86279,6.21191c-0.1582,0.52832-0.01367,1.10156,0.37646,1.49121c0.28516,0.28516,0.66846,0.43945,1.06055,0.43945c0.14404,0,0.28906-0.02051,0.43066-0.06348l6.2124-1.8623c0.23779-0.07129,0.45459-0.2002,0.62988-0.37598L31.06055,7.41016C31.3418,7.12891,31.5,6.74707,31.5,6.34961s-0.1582-0.7793-0.43945-1.06055l-4.3501-4.34961c-0.58594-0.58594-1.53516-0.58594-2.12109,0L13.2002,12.3291C13.02441,12.50488,12.89551,12.7207,12.82373,12.95898z M15.58887,14.18262L25.6499,4.12109l2.22852,2.22852L17.81738,16.41113l-3.18262,0.9541L15.58887,14.18262z"></path>
                    <path d="M30,14.5c-0.82861,0-1.5,0.67188-1.5,1.5v10c0,1.37891-1.12158,2.5-2.5,2.5H6c-1.37842,0-2.5-1.12109-2.5-2.5V6c0-1.37891,1.12158-2.5,2.5-2.5h10c0.82861,0,1.5-0.67188,1.5-1.5S16.82861,0.5,16,0.5H6C2.96729,0.5,0.5,2.96777,0.5,6v20c0,3.03223,2.46729,5.5,5.5,5.5h20c3.03271,0,5.5-2.46777,5.5-5.5V16C31.5,15.17188,30.82861,14.5,30,14.5z"></path>
                  </svg>
                </td>
              </tr>
              <tr className="tb-tr ">
                <td className="ht-th-1">
                  {/* Checkbox column */}
                  <div className="ht-th-outer">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="ht-th-s-i"
                    />
                    <label
                      htmlFor="checkbox-table-search-1"
                      className="ht-th-label-1"
                    >
                      checkbox
                    </label>
                  </div>
                </td>
                <th scope="row" className="tb-th-1">
                  Pranaya
                </th>
                <td className="h-t-2 ">EXP 360 Now</td>
                <td className="t-d-1">AR_4466</td>
                <td className="t-d-1">07</td>
                <td className="t-d-1">2102</td>
                <td className="t-d-1">Jan 01,23-Dec 31,23</td>
                <td className="t-d-1">
                  <div className="td-2-last">
                    {data.map((item, index) => (
                      <h3 className="td-2-last-h3" key={index}>
                        {item}
                      </h3>
                    ))}
                  </div>
                </td>
                <td className="t-d-1">
                  <div className="td-2-last">
                    {data.map((item, index) => (
                      <h3 className="td-last-h3" key={index}>
                        {item}
                      </h3>
                    ))}
                  </div>
                </td>
                <td className="t-d-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="t-d-svg"
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
