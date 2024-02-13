"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
} from "react-share";
import { ClipLoader } from "react-spinners";
import { format } from 'date-fns'

const page = ({ params }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [newsItem, setNewsItem] = useState({});
  const [recentNewsList, setRecentNewsList] = useState([]);
  const tag = params.slug;
  const shareUrl = `https://www.rashtriyatv.com/newsArticle/${tag}`;
  const title = "RashtriyaTV";

  const fetchNews = async () => {
    try {
      const res = await fetch(
        "https://api.rashtriyatv.com/api/blogs/getBlogById/" + tag,
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
      <div className="w-full md:w-[60%] flex flex-col gap-5">
        <div className="w-full bg-[#fff] px-4 lg:px-8 py-4 lg:py-6 shadow-sm rounded-xl flex gap-4 min-[450px]:gap-0 items-start min-[450px]:items-center justify-between flex-col min-[450px]:flex-row">
          <div className="font-normal text-base lg:text-xl">Share this news :</div>
          <div className="flex gap-3 lg:gap-4">
            <div className="cursor-pointer">
              <FacebookShareButton url={shareUrl}>
                <FacebookIcon round className="h-10 lg:h-12 w-10 lg:w-12" />
              </FacebookShareButton>
            </div>
            <div className="cursor-pointer">
              <TwitterShareButton url={shareUrl} title={title}>
                <XIcon className="h-10 lg:h-12 w-10 lg:w-12" round />
              </TwitterShareButton>
            </div>
            <div className="cursor-pointer">
              <TelegramShareButton url={shareUrl} title={title}>
                <TelegramIcon className="h-10 lg:h-12 w-10 lg:w-12" round />
              </TelegramShareButton>
            </div>
            <div className="cursor-pointer">
              <WhatsappShareButton url={shareUrl} title={title} separator=":: ">
                <WhatsappIcon className="h-10 lg:h-12 w-10 lg:w-12" round />
              </WhatsappShareButton>
            </div>
            <div className="cursor-pointer">
              <LinkedinShareButton
                url={shareUrl}
              >
                <LinkedinIcon className="h-10 lg:h-12 w-10 lg:w-12" round />
              </LinkedinShareButton>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 bg-[#fff] px-8 py-8 rounded-xl shadow-sm w-full">
          <div className="font-light mb-3">{format(new Date(newsItem?.createdAt), "MMM. d, yyyy, h:m a")}</div>
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
