import Education from "../Components/Education";
import Footer from "../Components/Footer";
import ProjectCard from "../Components/ProjectCard";
import Work from "../Components/Work";

export default function Body() {

    return (
        <div className="w-full bg-black p-4">
                <Work/>
                <ProjectCard/>
                <Education/>
                <Footer/>
        </div>
    )
}