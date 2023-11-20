import React from 'react';

export const Comments = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.33333 8H5.334M8 8H8.00067M10.6667 8H10.6673M14 8C14 11.3137 11.3137 14 8 14C7.71221 14 7.42916 13.9797 7.15219 13.9406C6.34973 13.8271 5.94848 13.7703 5.84286 13.7622C5.67127 13.7489 5.73279 13.7511 5.5607 13.7524C5.45478 13.7532 5.33404 13.7619 5.09287 13.7791L3.65732 13.8816C3.08571 13.9225 2.79988 13.9429 2.58614 13.8415C2.39852 13.7526 2.24742 13.6015 2.15847 13.4139C2.05713 13.2001 2.07755 12.9143 2.11838 12.3427L2.22092 10.9071C2.23815 10.6659 2.24677 10.5452 2.24759 10.4393C2.24893 10.2672 2.25106 10.3287 2.23783 10.1571C2.22968 10.0515 2.17293 9.65028 2.05943 8.84781C2.02026 8.57084 2 8.28779 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="text-lg font-semibold text-white"> Comments</div>
        </div>
      </div>
    </>
  );
};
