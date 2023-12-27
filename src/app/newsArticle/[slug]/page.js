"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
import { ClipLoader } from "react-spinners";

const page = ({ params }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [newsItem, setNewsItem] = useState({});
  const [recentNewsList, setRecentNewsList] = useState([]);
  const tag = params.slug;

  const fetchNews = async () => {
    try {
      const res = await fetch(
        "https://api.rashtriyatv.com/api/blogs/getBlogById/" +
          tag,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const rRes = await fetch(
        "https://api.rashtriyatv.com/api/blogs/getRecent",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      const rData = await rRes.json();
      if (res.status === 200) {
        setNewsItem(data.blog);
      }
      if (rRes.status === 200) {
        setRecentNewsList(rData.result);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <ClipLoader
          color={"#000"}
          loading={loading}
          size={60}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  if (!newsItem || recentNewsList.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen text-xl">
        News article does not exist
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center gap-5 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col gap-5 bg-[#fff] px-8 py-8 rounded-xl shadow-sm w-full md:w-[60%]">
      <div className="font-semibold text-3xl">{newsItem?.heading}</div>
      <div className="font-extralight text-xl">{newsItem?.subHeading}</div>
      <div className="my-2">
        <img
          src={newsItem?.image_section_1?.src}
          alt="Image does not exist."
          className="h-full w-full object-cover"
        />
      </div>
      <div className="font-base text-xl">
        <div
          dangerouslySetInnerHTML={{ __html: newsItem?.text_section_1 }}
          className="flex flex-col"
        />
      </div>
      <div className="flex items-center justify-center my-2">
        {newsItem?.image_section_2?.type === "image" && (
          <img
            src={newsItem?.image_section_2?.src}
            alt="Image does not exist."
            className="h-full w-full object-cover"
          />
        )}
        {newsItem?.image_section_2?.type === "yt_video" && (
          <ReactPlayer
            url={newsItem?.image_section_2?.src}
            className="h-full w-full"
          />
        )}
        {newsItem?.image_section_2?.type === "image_cloud" && (
          <img
            src={newsItem?.image_section_2?.src}
            alt="Image does not exist."
            className="h-full w-full object-cover"
          />
        )}
      </div>
      <div className="font-base text-xl">
        <div
          dangerouslySetInnerHTML={{ __html: newsItem?.text_section_2 }}
          className="flex flex-col"
        />
      </div>
    </div>
    <div className="max-w-[300px] w-full bg-[#fff] px-5 py-5 flex flex-col gap-4 rounded-md shadow-sm">
      <div className="font-semibold text-xl">ताज़ा ख़बर</div>
      <hr />
      <div className="flex flex-col gap-3">
        {recentNewsList?.map((item) => (
          <div
            key={item.heading}
            className="flex flex-col gap-1 items-center justify-center cursor-pointer"
            onClick={() => router.push("/newsArticle/" + item?._id)}
          >
            <img className="rounded-md" src={item.image_section_1.src} />
            <div className="">{item.heading}</div>
          </div>
        ))}
      </div>
    </div>

  </div>
  
  );
};

export default page;
