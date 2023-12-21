"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

const tags = [
  "national",
  "state",
  "crime",
  "politics",
  "sports",
  "business",
  "employment",
  "entertainment",
  "health",
  "spiritual",
  "media",
  "author",
  "viral",
  "podcast",
];

const tempBlogs = [
  {
    heading: "3 ways to implement infinite scroll in React",
    subHeading:
      "In today’s fast-paced digital landscape, providing a seamless and engaging user experience is more important than ever before.",
    image_section_1: {
      src: "https://blog.logrocket.com/wp-content/uploads/2018/02/react-infinite-scroll-implement.png",
      type: "",
    },
    text_1:
      "The primary benefit of the generateStaticParams function is its smart retrieval of data. If content is fetched within the generateStaticParams function using a fetch request, the requests are automatically memoized. This means a fetch request with the same arguments across multiple generateStaticParams, Layouts, and Pages will only be made once, which decreases build times.",
  },
  {
    heading: "3 ways to implement infinite scroll in React",
    subHeading:
      "In today’s fast-paced digital landscape, providing a seamless and engaging user experience is more important than ever before.",
    image_section_1: {
      src: "https://blog.logrocket.com/wp-content/uploads/2018/02/react-infinite-scroll-implement.png",
      type: "",
    },
    text_1:
      "The primary benefit of the generateStaticParams function is its smart retrieval of data. If content is fetched within the generateStaticParams function using a fetch request, the requests are automatically memoized. This means a fetch request with the same arguments across multiple generateStaticParams, Layouts, and Pages will only be made once, which decreases build times.",
  },
  {
    heading: "3 ways to implement infinite scroll in React",
    subHeading:
      "In today’s fast-paced digital landscape, providing a seamless and engaging user experience is more important than ever before.",
    image_section_1: {
      src: "https://blog.logrocket.com/wp-content/uploads/2018/02/react-infinite-scroll-implement.png",
      type: "",
    },
    text_1:
      "The primary benefit of the generateStaticParams function is its smart retrieval of data. If content is fetched within the generateStaticParams function using a fetch request, the requests are automatically memoized. This means a fetch request with the same arguments across multiple generateStaticParams, Layouts, and Pages will only be made once, which decreases build times.",
  },
  {
    heading: "3 ways to implement infinite scroll in React",
    subHeading:
      "In today’s fast-paced digital landscape, providing a seamless and engaging user experience is more important than ever before.",
    image_section_1: {
      src: "https://blog.logrocket.com/wp-content/uploads/2018/02/react-infinite-scroll-implement.png",
      type: "",
    },
    text_1:
      "The primary benefit of the generateStaticParams function is its smart retrieval of data. If content is fetched within the generateStaticParams function using a fetch request, the requests are automatically memoized. This means a fetch request with the same arguments across multiple generateStaticParams, Layouts, and Pages will only be made once, which decreases build times.",
  },
];

const page = ({ params }) => {
  const router = useRouter()
  const [loading, setLoading] = useState(true);
  const [newsList, setNewsList] = useState([]);
  const [recentNewsList, setRecentNewsList] = useState([]);
  const tag = params.slug;

  const engToHindi = (slug) => {
    if (slug === "national") {
      return "राष्ट्रीय समाचार";
    }
    if (slug === "state") {
      return "राज्य खबर";
    }
    if (slug === "crime") {
      return "अपराध";
    }
    if (slug === "politics") {
      return "राजनीति";
    }
    if (slug === "sports") {
      return "खेल";
    }
    if (slug === "business") {
      return "व्यापार";
    }
    if (slug === "employment") {
      return "रोजगार";
    }
    if (slug === "entertainment") {
      return "मनोरंजन";
    }
    if (slug === "health") {
      return "हेल्थ";
    }
    if (slug === "spiritual") {
      return "अध्यात्";
    }
    if (slug === "media") {
      return "मीडिया";
    }
    if (slug === "author") {
      return "लेखक की कलम से";
    }
    if (slug === "viral") {
      return "खबर वायरल है";
    }
    if (slug === "podcast") {
      return "पॉडकास्ट";
    }
    return "Category D.N.E";
  };

  const fetchNews = async () => {
    if (!tags.includes(tag)) {
      setLoading(false);
      return;
    }
    try {
      const res = await fetch(
        "http://rashtriya-tv-nodejs-env.eba-4gfrfqri.us-east-1.elasticbeanstalk.com/api/blogs/getBlogsByTag/" +
          tag,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const rRes = await fetch(
        "http://rashtriya-tv-nodejs-env.eba-4gfrfqri.us-east-1.elasticbeanstalk.com/api/blogs/getRecent",
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
        setNewsList(data.result);
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

  if (newsList.length === 0 || recentNewsList.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen text-xl">
        Not enough articles news to show
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto flex justify-center gap-10 min-h-screen py-10">
      <div className="flex flex-col gap-4 bg-[#fff] px-4 py-4 rounded-md shadow-sm w-full">
        <div className="text-3xl font-bold px-4 py-1 rounded-md">
          {engToHindi(params.slug)}
        </div>
        <hr />
        <div className="flex flex-col gap-5 my-2">
          {newsList?.map((item, index) => (
            <>
              <div
                key={item?.heading}
                className="flex justify-center cursor-pointer h-[250px]"
                onClick={() => router.push("/newsArticle/" + item?._id)}
              >
                <img
                  className="rounded-md h-[250px] object-contain"
                  src={item?.image_section_1?.src}
                />
                <div className="flex flex-col px-5 gap-2">
                  <div className="text-2xl font-semibold">{item?.heading?.substring(0,70)}</div>
                  {/* <div className="text-base font-normal">
                    {item?.subHeading?.substring(0, 100)}...
                  </div> */}
                  <div className="text-lg font-light">
                    {item?.text_section_1?.substring(3, 300)}...
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="max-w-[300px] bg-[#fff] px-5 py-5 flex flex-col gap-4 rounded-md shadow-sm h-full">
        <div className="font-semibold text-xl">ताज़ा ख़बर</div>
        <hr />
        <div className="flex flex-col gap-3">
          {recentNewsList?.map((item) => (
            <div
              key={item?.heading}
              className="flex flex-col gap-1 items-center justify-center cursor-pointer"
              onClick={() => router.push("/newsArticle/" + item?._id)}
            >
              <img className="rounded-md" src={item?.image_section_1?.src} />
              <div className="">{item?.heading}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
