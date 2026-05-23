import { useEffect, useState } from "react";
import AdmissionCTA from "../components/AdmissionsCTA";
import { galleryItems } from "../data/galleryData";
import { getGallery } from "../services/galleryService";

const filters = [
  "all",
  "cultural",
  "sports",
  "celebrations",
  "achievements",
  "campus",
];

const youtubeVideos = [
  {
    title: "Anual Day Function 2026",
    url: "https://www.youtube.com/live/rh4ivR3lpyY?si=00At62IKyy5cXWhe",
    thumbnail:
      "https://img.youtube.com/vi/rh4ivR3lpyY/hqdefault.jpg",
  },

  {
    title: "Anual Day Function 2025",
    url: "https://www.youtube.com/live/FWtDKkj1jHY?si=iAiOJ7dR_jRLw3eY",
    thumbnail:
      "https://img.youtube.com/vi/FWtDKkj1jHY/hqdefault.jpg",
  },

  {
    title: "Ram Navami Special 2025",
    url: "https://youtu.be/pL20ubrmmtY?si=RqkMyFppNVCXsJh-",
    thumbnail:
      "https://img.youtube.com/vi/pL20ubrmmtY/hqdefault.jpg",
  }
];

function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [galleryItems, setGalleryItems] = useState<any[]>([]);

  useEffect(() => {
    document.title = "Gallery | Nathsagar English Medium School, Ghotan";
  }, []);

  useEffect(() => {
    // Fetch gallery items from backend
    const fetchGallery = async () => {
      try {
        const response = await getGallery();
        console.log("Gallery items:", response.data);
        setGalleryItems(response.data);
      } catch (error) {
        console.error("Failed to load gallery items", error);
      }
    };

    fetchGallery();
  }, []);


  const filteredImages =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter(
          (item) =>
            item.category.toLowerCase() === activeFilter.toLocaleLowerCase()
        );

  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="pt-32 pb-20 md:pb-14 px-6 bg-gradient-to-b from-orange-50 to-white">

        <div className="max-w-7xl mx-auto text-center">

          <span className="text-secondary uppercase tracking-wide font-semibold">
            Gallery
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-primary mt-4">
            School Moments &
            <span className="text-secondary">
              {" "}Memories
            </span>
          </h1>

          <p className="text-slate-600 max-w-3xl mx-auto mt-6 text-lg leading-8">
            Explore moments of learning,
            celebrations, sports and
            achievements at Nathsagar
            English Medium School.
          </p>

        </div>
      </section>

      {/* Filter Tabs */}
      <section className="px-6 pb-10">
        <div className="max-w-7xl mx-auto flex gap-3 overflow-x-auto pb-4 no-scrollbar px-1">

          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() =>
                setActiveFilter(filter)
              }
              className={`px-6 py-3 min-w-fit rounded-full whitespace-nowrap shrink-0 font-medium transition-all duration-300 cursor-pointer ${
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

      {/* Hybrid Gallery */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredImages.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item.imageUrl)}
              className={`group overflow-hidden rounded-[2rem] shadow-lg border border-orange-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer ${
                item.featured
                  ? "lg:col-span-2"
                  : ""
              }`}
            >
              <div className="overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className={`w-full 
                    ${
                        item.featured
                        ? "h-[220px] md:h-[420px]"
                        : "h-[200px] md:h-[320px]"
                    }
                    object-contain md:object-cover bg-white group-hover:scale-105 transition duration-500`}
                />
              </div>

              <div className="p-5 bg-white">
                <h3 className="font-bold text-primary text-lg">
                  {item.title}
                </h3>

                <p className="text-slate-500 text-sm mt-1 capitalize">
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Image Preview Modal */}
    {selectedImage && (
        <div
            className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
        >

            {/* Close Button */}
            <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 transition text-2xl"
            onClick={() =>
                setSelectedImage(null)
            }
            >
            ×
            </button>

            {/* Image */}
            <img
            src={selectedImage}
            alt="Gallery Preview"
            className="max-h-[90vh] max-w-[95vw] rounded-[2rem] shadow-2xl object-contain"
            onClick={(e) =>
                e.stopPropagation()
            }
            />

        </div>
    )}

      {/* YouTube Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">

            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl relative"
                style={{ background: "linear-gradient(to right, #0B1F6D, #12349B)" }}>

            {/* Decorative Glow */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-orange-400/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-400/5 rounded-full blur-3xl"></div>

            <div className="relative z-10 p-8 md:p-16">

                <div className="grid lg:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <div>

                    <span className="text-orange-400 uppercase tracking-[3px] font-semibold">
                    Stay Connected
                    </span>

                    <h2 className="text-3xl md:text-5xl font-bold text-white mt-5 leading-tight drop-shadow-lg">
                    Watch School
                    <span className="text-orange-400">
                        {" "}Moments On YouTube
                    </span>
                    </h2>

                    <p className="text-slate-400 text-lg leading-8 mt-6">
                    Explore celebrations, sports, cultural
                    activities, student achievements and
                    memorable moments from Nathsagar
                    English Medium School.
                    </p>

                    {/* School Moments Preview */}
                    <div className="grid sm:grid-cols-3 gap-5 mt-8">
                    {youtubeVideos.map((video) => (
                        <a
                        key={video.title}
                        href={video.url}
                        target="_blank"
                        rel="noreferrer"
                        className="group overflow-hidden rounded-[2rem] bg-white/10 border border-white/10 hover:bg-white/15 transition duration-300 no-underline"
                        >

                        <div className="relative overflow-hidden">

                            <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-full h-40 object-cover group-hover:scale-105 transition duration-500"
                            />

                            <div className="absolute inset-0 flex items-center justify-center">

                            <div className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white text-2xl">
                                ▶
                            </div>

                            </div>
                        </div>

                        <div className="p-5">

                            <h3 className="text-white font-semibold text-lg">
                            {video.title}
                            </h3>

                            <p className="text-slate-300 text-sm mt-2">
                            Watch on YouTube
                            </p>

                        </div>
                        </a>
                    ))}
                    </div>

                    <div className="flex flex-wrap gap-4 mt-8">

                        <a
                            href="https://youtube.com/@nathsagarenglishmediumschoolgh?si=tCirWCUUUa8R7Vgn"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-secondary hover:scale-105 hover:shadow-orange-500/30 hover:shadow-xl transition duration-300 text-white px-8 py-4 rounded-full font-semibold shadow-lg no-underline"
                        >
                            ▶ Visit YouTube Channel
                        </a>

                        <a
                            href="/contact"
                            className="bg-white text-primary hover:bg-orange-50 transition duration-300 px-8 py-4 rounded-full font-semibold shadow-lg no-underline"
                        >
                            Contact School
                        </a>

                    </div>
                </div>

                {/* Right Stats */}
                <div className="grid grid-cols-2 gap-5">

                    <div className="bg-white/15 shadow-lg backdrop-blur-md rounded-[2rem] p-8 border border-white/10">
                        <h3 className="text-4xl font-bold text-secondary">
                            450+
                        </h3>
                        <p className="text-slate-400 mt-2">
                            YouTube Subscribers
                        </p>
                    </div>

                    <div className="bg-white/15 shadow-lg backdrop-blur-md rounded-[2rem] p-8 border border-white/10">
                        <h3 className="text-4xl font-bold text-secondary">
                            15+
                        </h3>
                        <p className="text-slate-400 mt-2">
                            Years Excellence
                        </p>
                    </div>

                    <div className="bg-white/15 shadow-lg backdrop-blur-md rounded-[2rem] p-8 border border-white/10 col-span-2">
                        <h3 className="text-4xl font-bold text-secondary">
                            200+
                        </h3>
                        <p className="text-slate-400 mt-2">
                            Students Learning
                        </p>
                    </div>

                </div>
                </div>

            </div>
            </div>
        </div>
      </section>

      <AdmissionCTA />
    </div>
  );
}

export default Gallery;