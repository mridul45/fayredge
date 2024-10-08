import HomeTable from "./HomeTable";
import AppLogo from "/logo.png";
import "../Css/Components/Home.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Home = () => {

  const [isDropdownOpen,setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  }

  return (
    <div className="h-screen w-full flex bg-[#F8F9FE]">
      {/* side bar */}
      <div className="w-2/12 h-full border-r-2 border-gray-300 p-3 flex flex-col justify-start items-center gap-5">
        <img src={AppLogo} className="px-2 py-4 w-40 h-16" />
        <div className="mt-10 flex flex-col gap-3">
          {/* Home */}
          <div className="w-full p-2 flex flex-col gap-1 justify-center items-center">
            <button className="w-10 h-10 bg-gray-400 rounded-xl hover:bg-[#5A358F] focus:bg-[#5A358F] flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7;"
                viewBox="0 0 24 24"
                id="home"
              >
                <path
                  fill="white"
                  d="M6.63477851,18.7733424 L6.63477851,15.7156161 C6.63477851,14.9350667 7.27217143,14.3023065 8.05843544,14.3023065 L10.9326107,14.3023065 C11.310188,14.3023065 11.6723007,14.4512083 11.9392882,14.7162553 C12.2062757,14.9813022 12.3562677,15.3407831 12.3562677,15.7156161 L12.3562677,18.7733424 C12.3538816,19.0978491 12.4820659,19.4098788 12.7123708,19.6401787 C12.9426757,19.8704786 13.2560494,20 13.5829406,20 L15.5438266,20 C16.4596364,20.0023499 17.3387522,19.6428442 17.9871692,19.0008077 C18.6355861,18.3587712 19,17.4869804 19,16.5778238 L19,7.86685918 C19,7.13246047 18.6720694,6.43584231 18.1046183,5.96466895 L11.4340245,0.675869015 C10.2736604,-0.251438297 8.61111277,-0.221497907 7.48539114,0.74697893 L0.967012253,5.96466895 C0.37274068,6.42195254 0.0175522924,7.12063643 0,7.86685918 L0,16.568935 C0,18.4638535 1.54738155,20 3.45617342,20 L5.37229029,20 C6.05122667,20 6.60299723,19.4562152 6.60791706,18.7822311 L6.63477851,18.7733424 Z"
                  transform="translate(2.5 2)"
                ></path>
              </svg>
            </button>
            <p className="overflow-hidden text-center">Home</p>
          </div>
          {/* Roket */}
          <div className="w-full p-2 flex flex-col gap-1 justify-center items-center">
            <button className="w-10 h-10 bg-gray-400 rounded-xl hover:bg-[#5A358F] focus:bg-[#5A358F] flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                viewBox="0 0 20 20"
                className="w-7 h-7"
                stroke="white"
                id="rocket"
              >
                <path
                  d="M11.933 13.069s7.059-5.094 6.276-10.924a.465.465 0 0 0-.112-.268.436.436 0 0 0-.263-.115C12.137.961 7.16 8.184 7.16 8.184c-4.318-.517-4.004.344-5.974 5.076-.377.902.234 1.213.904.959l2.148-.811 2.59 2.648-.793 2.199c-.248.686.055 1.311.938.926 4.624-2.016 5.466-1.694 4.96-6.112zm1.009-5.916a1.594 1.594 0 0 1 0-2.217 1.509 1.509 0 0 1 2.166 0 1.594 1.594 0 0 1 0 2.217 1.509 1.509 0 0 1-2.166 0z"
                  fill="white"
                ></path>
              </svg>
            </button>
            <p className="overflow-hidden text-center">Onboard</p>
          </div>
          {/* Client */}
          <div className="w-full p-2 flex flex-col gap-1 justify-center items-center">
            <button className="w-10 h-10 bg-gray-400 rounded-xl hover:bg-[#5A358F] focus:bg-[#5A358F] flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-7 h-7"
                id="client"
              >
                <path
                  fill="white"
                  d="M18.66,16.37a6,6,0,1,0-5.32,0A10,10,0,0,0,6,26v1a1,1,0,0,0,1,1H25a1,1,0,0,0,1-1V26A10,10,0,0,0,18.66,16.37Z"
                ></path>
              </svg>
            </button>
            <p className="overflow-hidden text-center">Client Users</p>
          </div>
          {/* Sub */}
          <div className="w-full p-2 flex flex-col gap-1 justify-center items-center">
            <button className="w-10 h-10 bg-gray-400 rounded-xl hover:bg-[#5A358F] focus:bg-[#5A358F] flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-in-sgv"
                fill="none"
                viewBox="0 0 128 128"
                id="menu-open"
              >
                <g clipPath="url(#a)">
                  <path
                    stroke="white"
                    strokeWidth="8"
                    d="M12 96L91 96M12 64L69 64M12 32L91 32M113.522 94L83.0001 63.478 113.522 32.9561"
                  ></path>
                </g>
                <defs>
                  <clipPath id="a">
                    <rect width="128" height="128" fill="#fff"></rect>
                  </clipPath>
                </defs>
              </svg>
            </button>
            <p className="overflow-hidden text-center">Client Subscriptions</p>
          </div>
        </div>
      </div>
      {/* main bar */}
      <main className="w-10/12 h-full">
        {/* Nav Bar */}
        <div className="w-full pl-4 pr-6 h-14 bg-white flex flex-wrap justify-between items-center">
          {/* Home part */}
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `h-full flex justify-center items-center hover:cursor-pointer text-[#6E4D9D] hover:text-blue-500 font-semibold hover:border-b-2 hover:border-blue-500 ${isActive ? "border-b-2 border-[#6E4D9D]" : "border-none"}`
            }
          >
            Home
          </NavLink>
          {/* Profile part */}
          <div className="flex justify-center items-center gap-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              id="bell"
              viewBox="0 0 1792 1792"
            >
              <path
                fill="gray"
                d="M912 1696q0-16-16-16-59 0-101.5-42.5T752 1536q0-16-16-16t-16 16q0 73 51.5 124.5T896 1712q16 0 16-16zm816-288q0 52-38 90t-90 38h-448q0 106-75 181t-181 75-181-75-75-181H192q-52 0-90-38t-38-90q50-42 91-88t85-119.5 74.5-158.5 50-206T384 576q0-152 117-282.5T808 135q-8-19-8-39 0-40 28-68t68-28 68 28 28 68q0 20-8 39 190 28 307 158.5T1408 576q0 139 19.5 260t50 206 74.5 158.5 85 119.5 91 88z"
              ></path>
            </svg>

            <div className="flex h-full text-xs font-medium flex-col justify-end items-end">
              <p className="text-sm">msin</p>
              <p className="text-teal-400">msinghal</p>
              <p className="">mridul@fayredge.com</p>
            </div>
            <div className="flex justify-center items-center gap-6">
            <img
              className="w-10 h-10 rounded-lg"
              src="https://plus.unsplash.com/premium_photo-1675080431524-3e7c85323972?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D"
              onClick={toggleDropdown}
            />

            {isDropdownOpen && (
              <div className="absolute right-0 mt-20 w-48 bg-white border border-gray-300 rounded-lg shadow-lg">
                <ul className="list-none m-0 p-0">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><a href="#profile">Profile</a></li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><a href="#logout">Logout</a></li>
                </ul>
              </div>
            )}
            
            </div>
          </div>
        </div>
        {/* Client div */}
        <div className="w-full pr-6 gap-3">
          <h2 className="pt-3 pl-4 text-[#6E4D9D] font-semibold">Clients</h2>
          <div className="flex gap-3 pl-4 h-14 justify-between bg-white py-1 rounded-r-xl items-center">
            {/* first div */}
            <div className="flex justify-center gap-2 items-start">
              {/* search box */}
              <div className="flex my-1 py-2 bg-[#F1F3FF] gap-1 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  id="search"
                >
                  <g
                    fill="none"
                    fillRule="evenodd"
                    stroke="#200E32"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    transform="translate(2 2)"
                  >
                    <circle cx="9.767" cy="9.767" r="8.989"></circle>
                    <line x1="16.018" x2="19.542" y1="16.485" y2="20"></line>
                  </g>
                </svg>
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-[#F1F3FF] focus:outline-none rounded-lg"
                />
              </div>
              {/* Sort box */}
              <div className="flex my-1 justify-center items-center py-1 gap-1 px-2 border-r-2">
                <h3>Sort</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  id="sort"
                >
                  <path fill="#444" d="M11 7H5l3-4zM5 9h6l-3 4z"></path>
                </svg>
              </div>
              {/* Filter */}
              <div className="flex my-1 justify-center items-center py-1 gap-1 px-2 border-r-2">
                <h3>Filter</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  id="sort"
                >
                  <path
                    fill="black"
                    fillRule="evenodd"
                    d="M19.75 12C19.75 12.4142 19.4142 12.75 19 12.75L5 12.75C4.58579 12.75 4.25 12.4142 4.25 12C4.25 11.5858 4.58579 11.25 5 11.25L19 11.25C19.4142 11.25 19.75 11.5858 19.75 12Z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="black"
                    fillRule="evenodd"
                    d="M22.75 7C22.75 7.41421 22.4142 7.75 22 7.75L2 7.75C1.58579 7.75 1.25 7.41421 1.25 7 1.25 6.58579 1.58579 6.25 2 6.25L22 6.25C22.4142 6.25 22.75 6.58579 22.75 7zM16.75 17C16.75 17.4142 16.4142 17.75 16 17.75H8C7.58579 17.75 7.25 17.4142 7.25 17 7.25 16.5858 7.58579 16.25 8 16.25H16C16.4142 16.25 16.75 16.5858 16.75 17z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              {/* Select All */}
              <div className="flex my-1 justify-center items-center gap-1 py-1 px-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  id="plus"
                >
                  <path
                    fill="#200E32"
                    d="M13.7554969,-4.61852778e-14 C17.5901495,-4.61852778e-14 20,2.39226033 20,6.25329815 L20,6.25329815 L20,8.82145998 C20,9.02359667 19.9191181,9.21732894 19.775362,9.35943259 C19.631606,9.50153624 19.4369515,9.58018684 19.2348285,9.57783641 L19.2348285,9.57783641 L19.2348285,9.56024626 C18.8122359,9.56024626 18.469657,9.21766731 18.469657,8.79507476 L18.469657,8.79507476 L18.469657,6.25329815 C18.469657,3.20140721 16.7985928,1.53034301 13.7554969,1.53034301 L13.7554969,1.53034301 L6.25329815,1.53034301 C3.21020229,1.53034301 1.53034301,3.21020229 1.53034301,6.25329815 L1.53034301,6.25329815 L1.53034301,13.7554969 C1.53034301,16.7897977 3.21020229,18.469657 6.25329815,18.469657 L6.25329815,18.469657 L13.7554969,18.469657 C16.7985928,18.469657 18.469657,16.7897977 18.469657,13.7554969 C18.469657,13.3329044 18.812236,12.9903255 19.2348285,12.9903255 C19.657421,12.9903255 20,13.3329044 20,13.7554969 C20,17.6077397 17.6077397,20 13.7554969,20 L13.7554969,20 L6.25329815,20 C2.39226033,20 -1.77635684e-14,17.6077397 -1.77635684e-14,13.7554969 L-1.77635684e-14,13.7554969 L-1.77635684e-14,6.25329815 C-1.77635684e-14,2.39226033 2.39226033,-4.61852778e-14 6.25329815,-4.61852778e-14 L6.25329815,-4.61852778e-14 Z M10.0703606,11.644679 C10.2741412,11.6491963 10.4674733,11.7357687 10.6065507,11.8847802 C10.7456281,12.0337917 10.8186774,12.232628 10.8091469,12.4362357 L10.8091469,12.4362357 L10.8091469,13.4036939 L10.7955242,13.5238147 C10.7649048,13.6813039 10.685283,13.826302 10.5665048,13.9371617 C10.4180321,14.0757363 10.2205591,14.1496 10.0175901,14.1424802 C9.59703523,14.1234633 9.2688063,13.7717894 9.27880387,13.3509235 L9.27880387,13.3509235 L9.27880387,12.3834653 C9.28568227,12.180488 9.37297317,11.9885721 9.52144592,11.8499975 C9.66991867,11.7114229 9.86739169,11.6375592 10.0703606,11.644679 Z M10.0351803,5.84872469 C10.1203259,5.84870167 10.2039709,5.86303427 10.2828907,5.89036543 C10.5977648,5.98519473 10.826737,6.27720335 10.826737,6.62269129 L10.826,9.014 L13.4300792,9.01495163 C13.5177801,9.01392578 13.6040633,9.02814945 13.685387,9.05617989 C13.8039309,9.09234507 13.9138048,9.15791752 14.0032321,9.24838466 C14.1453357,9.39214068 14.2239863,9.58679518 14.2216871,9.78891821 C14.2216871,10.2047356 13.8897621,10.5445307 13.4740545,10.5540897 L6.65787159,10.5540897 C6.58627001,10.552462 6.5171219,10.5411482 6.45166777,10.5214177 C6.11715106,10.43812 5.87028403,10.1381217 5.86626366,9.78012313 C5.86396444,9.57800011 5.94261504,9.38334561 6.08471869,9.23958959 C6.22682234,9.09583357 6.42055461,9.01493796 6.62269129,9.01495163 L6.62269129,9.01495163 L9.26121372,9.01495163 L9.26121372,6.61389622 C9.27067438,6.19186946 9.61307298,5.85336175 10.0351803,5.84872469 Z"
                    transform="translate(2 2)"
                  ></path>
                </svg>
                <h3>Select All</h3>
              </div>
            </div>
            {/* second div */}
            <div className="flex justify-center items-center pr-1 border-l-2 pl-2">Export</div>
          </div>
        </div>
        {/* Table Start Here */}
        <HomeTable />
        <div className="flex justify-start items-start gap-4 pl-4 pt-3">
          <button className="px-6 py-2 text-center bg-[#5A358F] text-white font-semibold rounded-full">Assgn Client User(s)</button>
          <button className="px-6 py-2 text-center bg-[#5A358F] text-white font-semibold rounded-full">Onboard New Client</button>
        </div>
      </main>
    </div>
  );
};

export default Home;
