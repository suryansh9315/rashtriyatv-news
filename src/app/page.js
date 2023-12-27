"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Poppins } from "next/font/google";
import ClipLoader from "react-spinners/ClipLoader";
import NewsSection from "@/components/NewsSection";
import NewsCarousel from "@/components/NewsCarousel";
import YoutubeSlider from "@/components/YoutubeSlider";
import { useRouter } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  style: ["normal"],
  weight: "700",
});

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [ytList, setYtList] = useState([]);
  const [viral, setViral] = useState([]);
  const [national, setNational] = useState([]);
  const [state, setState] = useState([]);
  const [crime, setCrime] = useState([]);
  const [politics, setPolitics] = useState([]);
  const [sports, setSports] = useState([]);
  const [business, setBusiness] = useState([]);
  const [employment, setEmployment] = useState([]);
  const [entertainment, setEntertainment] = useState([]);
  const [health, setHealth] = useState([]);
  const [spiritual, setSpiritual] = useState([]);
  const [media, setMedia] = useState([]);
  const [author, setAuthor] = useState([]);
  const [podcast, setPodcast] = useState([]);
  const [videos, setVideos] = useState([]);

  const fetchNewsCategory = async (tag, setList) => {
    try {
      const res = await fetch(
        "https://api.rashtriyatv.com/api/blogs/getBlogsByTag/" +
          tag,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      if (res.status === 200) {
        setList(data.result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchYtCarousel = async () => {
    try {
      const res = await fetch(
        "https://api.rashtriyatv.com/api/blogs/getYtList",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      if (res.status === 200) {
        setYtList(data.list);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAllNews = async () => {
    await fetchYtCarousel()
    await fetchNewsCategory("viral", setViral);
    await fetchNewsCategory("national", setNational);
    setLoading(false);
    await fetchNewsCategory("state", setState);
    await fetchNewsCategory("crime", setCrime);
    await fetchNewsCategory("politics", setPolitics);
    await fetchNewsCategory("sports", setSports);
    await fetchNewsCategory("business", setBusiness);
    await fetchNewsCategory("employment", setEmployment);
    await fetchNewsCategory("entertainment", setEntertainment);
    await fetchNewsCategory("health", setHealth);
    await fetchNewsCategory("spiritual", setSpiritual);
    await fetchNewsCategory("media", setMedia);
    await fetchNewsCategory("author", setAuthor);
    await fetchNewsCategory("podcast", setPodcast);
  };

  useEffect(() => {
    fetchAllNews();
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

  return (
    <div className="max-w-7xl mx-auto my-10 gap-10 flex flex-col">
      <div className="flex gap-5 items-center justify-around">
        <YoutubeSlider list={ytList} />
        <div className="bg-[#fff] w-full gap-3 hidden xl:flex flex-col max-h-[450px] h-full pl-4 pt-4 pb-5 pr-2 rounded-md shadow-sm overflow-scroll">
          <Link
            href={"/news/viral"}
            className="text-3xl text-[#F97316] font-semibold px-4 py-1 rounded-md cursor-pointer"
          >
            खबर वायरल है
          </Link>
          <hr />
          {viral.length === 0 && (
            <div className="flex items-center justify-center my-28 text-xl">
              Not enough news articles to show.
            </div>
          )}
          {viral?.map((newsItem) => (
            <div
              className="flex gap-3 cursor-pointer py-1"
              key={newsItem._id}
              onClick={() => router.push("/newsArticle/" + newsItem._id)}
            >
              <img
                src={newsItem?.image_section_1.src}
                className="w-48 object-contain rounded-md"
              />
              <div className="text-base">
                {newsItem?.subHeading.substring(0, 120)}...
              </div>
            </div>
          ))}
        </div>
      </div>
      <NewsCarousel
        title={"राष्ट्रीय समाचार"}
        list={national}
        customStyles={"text-[#22C55E]"}
        link={"/news/national"}
      />
      <NewsCarousel
        title={"राज्य खबर"}
        list={state}
        customStyles={"text-[#EF4444]"}
        link={"/news/state"}
      />
      <NewsCarousel
        title={"अपराध"}
        list={crime}
        customStyles={"text-[#3B82F6]"}
        link={"/news/crime"}
      />
      <NewsCarousel
        title={"राजनीति"}
        list={politics}
        customStyles={"text-[#EC4899]"}
        link={"/news/politics"}
      />
      <NewsCarousel
        title={"खेल"}
        list={sports}
        customStyles={"text-[#71717A]"}
        link={"/news/sports"}
      />
      <NewsCarousel
        title={"व्यापार"}
        list={business}
        customStyles={"text-[#22C55E]"}
        link={"/news/business"}
      />
      <NewsCarousel
        title={"रोजगार"}
        list={employment}
        customStyles={"text-[#EAB308]"}
        link={"/news/employment"}
      />
      <NewsCarousel
        title={"मनोरंजन"}
        list={entertainment}
        customStyles={"text-[#14B8A6]"}
        link={"/news/entertainment"}
      />
      <NewsCarousel
        title={"हेल्थ"}
        list={health}
        customStyles={"text-[#8B5CF6]"}
        link={"/news/health"}
      />
      <NewsCarousel
        title={"अध्यात्"}
        list={spiritual}
        customStyles={"text-[#F43F5E]"}
        link={"/news/spiritual"}
      />
      <NewsCarousel
        title={"मीडिया"}
        list={media}
        customStyles={"text-[#000]"}
        link={"/news/media"}
      />
      <NewsCarousel
        title={"लेखक की कलम से"}
        list={author}
        customStyles={"text-[#F97316]"}
        link={"/news/author"}
      />
      <NewsCarousel
        title={"पॉडकास्ट"}
        list={podcast}
        customStyles={"text-[#10B981]"}
        link={"/news/podcast"}
      />
    </div>
  );
}
