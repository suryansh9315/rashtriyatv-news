import Link from "next/link";
import React from "react";

const NewsSection = ({title, list, link, customStyles}) => {
  return (
    <div className="bg-[#fff] gap-3 flex flex-col px-4 py-4 rounded-md shadow-sm">
      <Link href={link} className={`text-3xl mb-1 px-4 py-1 font-bold rounded-md cursor-pointer ${customStyles}`}>
        {title}
      </Link>
      <hr />
      {list.length < 3 && (
        <div className="flex items-center justify-center my-28 text-xl">
          Not enough news articles to show.
        </div>
      )}
      <div className="flex gap-3 items-center justify-around py-1">
        {list.length >= 3 && (
          <div className="flex flex-col gap-3 w-[400px]">
            <div className="cursor-pointer">
              <img
                src={list[0].image_section_1.src}
                className="w-full object-contain rounded-md"
              />
              <div className="font-medium text-lg">
                {list[0].subHeading}
              </div>
            </div>
            <hr />
            <div className="flex flex-col gap-3">
              <div className="flex gap-3 cursor-pointer">
                <img
                  src={list[1].image_section_1.src}
                  className="w-48 object-contain rounded-md"
                />
                <div className="font-medium text-base">
                  {list[1].subHeading}
                </div>
              </div>
              <div className="flex gap-3 cursor-pointer">
                <img
                  src={list[2].image_section_1.src}
                  className="w-48 object-contain rounded-md"
                />
                <div className="font-medium text-base">
                  {list[2].subHeading}
                </div>
              </div>
            </div>
          </div>
        )}
        {list.length >= 6 && (
          <div className="hidden md:flex flex-col gap-3 w-[400px]">
            <div className="cursor-pointer">
              <img
                src={list[3].image_section_1.src}
                className="w-full object-contain rounded-md"
              />
              <div className="font-medium text-lg">
                {list[3].subHeading}
              </div>
            </div>
            <hr />
            <div className="flex flex-col gap-3">
              <div className="flex gap-3 cursor-pointer">
                <img
                  src={list[4].image_section_1.src}
                  className="w-48 object-contain rounded-md"
                />
                <div className="font-medium text-base">
                  {list[4].subHeading}
                </div>
              </div>
              <div className="flex gap-3 cursor-pointer">
                <img
                  src={list[5].image_section_1.src}
                  className="w-48 object-contain rounded-md"
                />
                <div className="font-medium text-base">
                  {list[5].subHeading}
                </div>
              </div>
            </div>
          </div>
        )}
        {list.length >= 9 && (
          <div className="hidden flex-col gap-3 w-[400px] xl:flex">
            <div className="cursor-pointer">
              <img
                src={list[6].image_section_1.src}
                className="w-full object-contain rounded-md"
              />
              <div className="font-medium text-lg">
                {list[6].subHeading}
              </div>
            </div>
            <hr />
            <div className="flex flex-col gap-3">
              <div className="flex gap-3 cursor-pointer">
                <img
                  src={list[7].image_section_1.src}
                  className="w-48 object-contain rounded-md"
                />
                <div className="font-medium text-base">
                  {list[7].subHeading}
                </div>
              </div>
              <div className="flex gap-3 cursor-pointer">
                <img
                  src={list[8].image_section_1.src}
                  className="w-48 object-contain rounded-md"
                />
                <div className="font-medium text-base">
                  {list[8].subHeading}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsSection;
