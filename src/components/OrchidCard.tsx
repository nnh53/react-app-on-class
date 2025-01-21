import { Card } from "flowbite-react";
import { Orchid } from "../types/Orchid";

const OrchidCard = (propOrchid: Orchid) => {
  return (
    <Card
      className="m-1 max-w-sm bg-pink-50"
      imgSrc={propOrchid.image}
      imgAlt={propOrchid.name}
    >
      {/* name */}
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {propOrchid.name}
        </h5>
      </a>
      {/* rating and people */}
      <div className="mb-1 mt-2.5 flex items-center">
        <svg
          className="h-5 w-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
          {propOrchid.rating}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="#ff73cd"
            d="M12.001 4.529a6 6 0 0 1 8.242.228a6 6 0 0 1 .236 8.236l-8.48 8.492l-8.478-8.492a6 6 0 0 1 8.48-8.464"
          />
        </svg>
        <span className="ml-3 mr-2">{propOrchid.numberOfLike}</span>
      </div>
      {/* info */}
      <div className="mb-1 mt-1 flex items-center">
        <span className="text-sm font-medium text-gray-900 dark:text-white">
          Giống: {propOrchid.isSpecial ? "đặc biệt" : "thông thường"}
        </span>
      </div>

      <div className="mb-1 mt-1 flex items-center">
        <span className="text-sm font-medium text-gray-900 dark:text-white">
          Cách trồng: {propOrchid.isNatural ? "Thiên nhiên" : "Nhân tạo"}
        </span>
      </div>
      <div className="mb-1 mt-1 flex items-center">
        <span className="text-sm font-medium text-gray-900 dark:text-white">
          Loại cây: {propOrchid.category}
        </span>
      </div>

      <div className="mb-1 mt-1 flex items-center">
        <span className="text-sm font-medium text-gray-900 dark:text-white">
          Màu sắc: {propOrchid.color}
        </span>
      </div>
      <div className="mb-1 mt-1 flex items-center">
        <span className="text-sm font-medium text-gray-900 dark:text-white">
          Nguồn gốc: {propOrchid.origin}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-1xl pr-4 font-bold text-gray-900 dark:text-white">
          100.000vnđ
        </span>
        <a
          href="#"
          className="rounded-lg bg-cyan-700 px-2 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Thêm vào giỏ hàng
        </a>
      </div>
    </Card>
  );
};
export default OrchidCard;
