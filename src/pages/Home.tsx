import AdmissionsCTA from "../components/AdmissionsCTA";
import HeroSection from "../components/HeroSection";
import AcademicExcellence from "../features/website/home/components/AcademicExcellence";
import FounderVision from "../features/website/home/components/FounderVision";
import GalleryPreview from "../features/website/home/components/GalleryPreview";
import PrincipalMessage from "../features/website/home/components/PrincipalMessage";
import WhyChooseUs from "../features/website/home/components/WhyChooseUs";

function Home() {
    return (
        <>
            <HeroSection />
            <WhyChooseUs />
            <AcademicExcellence />
            <FounderVision />
            <PrincipalMessage />
            <GalleryPreview />
            <AdmissionsCTA />
        </>
    );
}

export default Home;