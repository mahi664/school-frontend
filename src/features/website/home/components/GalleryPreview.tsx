import gallery1 from "../../../../assets/images/gallery/gallery-1.jpg";
import gallery2 from "../../../../assets/images/gallery/gallery-2.jpg";
import gallery3 from "../../../../assets/images/gallery/gallery-3.jpg";
import gallery4 from "../../../../assets/images/gallery/gallery-4.jpg";
import gallery5 from "../../../../assets/images/gallery/gallery-5.jpg";
import gallery6 from "../../../../assets/images/gallery/gallery-6.jpg";

const galleryImages = [
    {
        image: gallery1,
        title: "Cultural Activities",
        size: "large",
    },
    {
        image: gallery2,
        title: "Student Celebrations",
        size: "small",
    },
    {
        image: gallery3,
        title: "School Events",
        size: "small",
    },
    {
        image: gallery4,
        title: "Republic Day Celebration",
        size: "small",
    },
    {
        image: gallery5,
        title: "Awards & Achievements",
        size: "small",
    },
    {
        image: gallery6,
        title: "Sports & Discipline",
        size: "large",
    },
];

function GalleryPreview() {
    return (
        <section className="py-28 bg-gradient-to-b from-orange-50 to-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                {/* Heading */}
                <div className="text-center mb-16">
                    <span className="text-secondary font-semibold uppercase tracking-wide">
                        School Gallery
                    </span>

                    <h2 className="text-3xl md:text-5xl font-bold text-primary mt-3">
                        A Glimpse Into
                        <span className="text-secondary">
                            {" "}School Life
                        </span>
                    </h2>

                    <p className="text-slate-600 mt-5 max-w-3xl mx-auto text-lg leading-relaxed">
                        Celebrating learning, culture, discipline,
                        achievements, and memorable moments at
                        Nathsagar English Medium School.
                    </p>
                </div>

                {/* Gallery Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 auto-rows-auto md:auto-rows-[200px]">
                {galleryImages.map((item, index) => (
                    <div
                    key={index}
                    className={`group relative overflow-hidden rounded-[2rem] shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 cursor-pointer
                    ${
                        item.size === "large"
                        ? "h-[260px] md:row-span-2 md:h-[420px]"
                        : "h-[220px] md:h-[200px]"
                    }`}
                    >
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                        loading="lazy"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                    {/* Title */}
                    <div className="absolute bottom-5 left-5">
                        <h3 className="text-white text-lg md:text-xl font-semibold">
                        {item.title}
                        </h3>
                    </div>
                    </div>
                ))}

                {/* CTA Card */}
                <div
                    style={{
                    background:
                        "linear-gradient(135deg, #142B6F 0%, #1E3A8A 50%, #0F172A 100%)",
                    }}
                    className="rounded-[2rem] p-7 md:p-10 flex flex-col justify-center text-white shadow-xl min-h-[280px] md:h-[345px]"
                >
                    <span className="text-orange-200 uppercase text-xs md:text-sm tracking-wider font-medium">
                    School Memories
                    </span>

                    <h3 className="text-2xl md:text-4xl font-bold mt-4 leading-tight text-white">
                    Explore More
                    <br />
                    School Moments
                    </h3>

                    <p className="mt-4 text-slate-200 leading-relaxed text-sm md:text-lg">
                    Discover cultural activities,
                    celebrations, sports, achievements
                    and memorable moments from school life.
                    </p>

                    <button className="mt-6 md:mt-8 bg-secondary hover:opacity-90 px-6 py-3 rounded-full font-semibold w-fit transition hover:scale-[1.03] shadow-lg text-black">
                    View Full Gallery →
                    </button>
                </div>
                </div>
            </div>
        </section>
    );
}

export default GalleryPreview;