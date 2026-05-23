import { useEffect, useState } from "react";
import { getNotices } from "../services/noticeService";
import type { Notice } from "../types/notice";

const filters = [
  "all",
  "academic",
  "events",
  "holiday",
  "admissions",
];

function Notices() {
  const [activeFilter, setActiveFilter] =
    useState("all");

  const [notices, setNotices] = useState<Notice[]>([]);

  const filteredNotices =
    activeFilter === "all"
      ? notices
      : notices.filter(
          (item) =>
            item.category === activeFilter
        );

  const pinnedNotice = notices.find(
    (notice) => notice.isPinned
  );

  useEffect(() => {
    document.title =
      "Notices & Announcements | Nathsagar English Medium School, Ghotan";
  }, []); 

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await getNotices();
        setNotices(response.data);
      } catch (error) {
        console.error("Error fetching notices:", error);
      }
    };

    fetchNotices();
  }, []);


  return (
    <div className="bg-white min-h-screen">

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-orange-50 to-white">

        <div className="max-w-5xl mx-auto text-center">

          <span className="text-secondary uppercase tracking-wide font-semibold">
            School Updates
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-primary mt-4">
            Notices &
            <span className="text-secondary">
              {" "}Announcements
            </span>
          </h1>

          <p className="text-slate-600 text-lg leading-8 max-w-3xl mx-auto mt-6">
            Stay updated with school notices,
            admissions, holidays, exams and
            important announcements.
          </p>

        </div>
      </section>

      {/* Pinned Notice */}
      {pinnedNotice && (
        <section className="px-6 pb-10">
          <div className="max-w-6xl mx-auto">

            <div className="rounded-[2rem] p-8 md:p-10 shadow-2xl border border-white/10 text-white shadow-xl"
                style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E3A8A 50%, #142B6F 100%)" }}>

              {/* <div className="absolute -right-16 -top-16 w-72 h-72 bg-orange-400/10 rounded-full blur-3xl"></div> */}
              <span className="bg-orange-400 text-white px-4 py-2 rounded-full text-sm font-semibold">
                📌 Important Notice
              </span>

              <h2 className="text-3xl font-bold mt-5 text-white">
                {pinnedNotice.title}
              </h2>

              <p className="text-white/80 mt-4 text-lg leading-8">
                {pinnedNotice.description}
              </p>

              <p className="text-white/60 mt-4 text-sm">
                Published on{" "}
                {pinnedNotice.publishDate}
              </p>

            </div>
          </div>
        </section>
      )}

      {/* Filter Tabs */}
      <section className="px-6 pb-8">
        <div className="max-w-6xl mx-auto flex gap-3 overflow-x-auto no-scrollbar pb-2">

          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() =>
                setActiveFilter(filter)
              }
              className={`px-6 py-3 rounded-full whitespace-nowrap shrink-0 transition duration-300 font-medium ${
                activeFilter === filter
                  ? "bg-secondary text-white"
                  : "bg-orange-50 text-primary hover:bg-orange-100"
              }`}
            >
              {filter.charAt(0).toUpperCase() +
                filter.slice(1)}
            </button>
          ))}

        </div>
      </section>

      {/* Notices Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">

            {filteredNotices.map((notice) => (
            <div
                key={notice.id}
                className="bg-white rounded-[2rem] border border-orange-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-7"
            >

                {/* Top Row */}
                <div className="flex items-center justify-between mb-5">

                <span className="bg-orange-50 text-secondary px-4 py-2 rounded-full text-sm font-semibold capitalize">
                    {notice.category}
                </span>

                {notice.isNew && (
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                    NEW
                    </span>
                )}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-primary leading-snug">
                {notice.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 mt-4 leading-7">
                {notice.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between mt-6 pt-5 border-t border-slate-100">

                <p className="text-sm text-slate-500">
                    {notice.publishDate}
                </p>

                <button className="text-secondary font-semibold hover:bg-orange-50 px-4 py-2 rounded-full transition duration-300 hover:scale-105">
                    Read More →
                </button>

                </div>
            </div>
            ))}

        </div>
      </section>

    </div>
  );
}

export default Notices;