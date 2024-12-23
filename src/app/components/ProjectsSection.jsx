"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 9,
    title: "E-Commerce Application",
    description: "",
    image: "/images/projects/9.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://sneaker-head-95ft.vercel.app/",
    previewUrl: "/",
  },
  {
    id: 1,
    title: "Data Storage Website",
    description: "Email Authentication for User Login, a place where you can store and manage all your files from images to videos and many more, having a robust search engine and also you can keep a tab of acquired space",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://ipsum-storage-qec71c3n7-surajsics-projects.vercel.app/sign-in",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Real Time Message Web Application",
    description: "Real-time, two-way communication between users with no noticeable delays. 32 Themes to Choose from making it an unique experience .Online Status: User can whether others are online or offline at the current moment. Real Time Files Sharing Features",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://chatter-box-mekf.onrender.com",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Ipsum Movies Application",
    description: "App where all kinds of Movies / Tv Shows can be viewed, has a section where you can select movies based on genres, list of trending movies and Tv shows space and also playback options",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/surajsic/Ipsum-Movies",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Booking Hotels Application",
    description: "Authentication and CRUD operations, Search and Filters: Users can search for hotels by destination, check-in/check-out dates, and number of guests. Advanced filters allow users to refine their search by location, hotel type, price range, amenities (e.g., free Wi-Fi, pool, pet-friendly), and guest ratings. Star Ratings options and Phone Pe Payment Gateway to make payments",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://wanderphilia.onrender.com",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "React Portfolio Website",
    description: "",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Quiz Game",
    description: "Quiz Game based on various sections like General Knowledge, Sports, Music and more",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://quiz-iota-murex.vercel.app/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Pitch Your Startups",
    description: "A place where anyone in the world can pitch their startups displaying information about the same and also can view if any of the startups does have an editor's pick vote",
    image: "/images/projects/7.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/surajsic/Pitch-your-startups",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Memory Game",
    description: "",
    image: "/images/projects/8.png",
    tag: ["All", "Web"],
    gitUrl: "https://memory-testing-game.vercel.app/",
    previewUrl: "/",
  },

];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-emerald-800 mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;