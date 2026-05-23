import schoolBuilding from "../assets/images/gallery/campus/school-building.jpg";
import republicDay from "../assets/images/gallery/celebrations/republic-day.jpg";
import cultural1 from "../assets/images/gallery/cultural/culture-1.jpg";
import sports1 from "../assets/images/gallery/sports/sports-1.jpg";
import achievement1 from "../assets/images/gallery/achievements/achievement-1.jpg";
import busImage from "../assets/images/gallery/campus/school-bus.jpg";

export const galleryItems = [
  {
    id: 1,
    image: republicDay,
    category: "celebrations",
    title: "Republic Day Celebration",
    featured: true,
  },
  {
    id: 2,
    image: cultural1,
    category: "cultural",
    title: "Cultural Activities",
    featured: false,
  },
  {
    id: 3,
    image: sports1,
    category: "sports",
    title: "Sports Activities",
    featured: false,
  },
  {
    id: 4,
    image: achievement1,
    category: "achievements",
    title: "Student Achievements",
    featured: true,
  },
  {
    id: 5,
    image: schoolBuilding,
    category: "campus",
    title: "School Campus",
    featured: false,
  },
  {
    id: 6,
    image: busImage,
    category: "campus",
    title: "Transport Facility",
    featured: false,
  },
];