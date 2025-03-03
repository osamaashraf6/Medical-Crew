import hero_img from "../../assets/img_doctors/hero_doctors.png";
import Hero_about from "../../Components/About_com/Hero_about";
import { useState } from "react";
import { Link } from "react-router-dom";

// Import the tracksData from the separate file
import tracksData from "./tracksData";

function Doctors() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 8;

  const filteredTracks =
    selectedCategory === "All"
      ? tracksData
      : tracksData.filter((track) => track.category === selectedCategory);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentTracks = filteredTracks.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(filteredTracks.length / cardsPerPage);

  return (
    <div>
      <Hero_about
        title="Meet Our Experts and Learn from Their Expertise"
        description="The list of certified doctors with years of professional experiences"
        img={hero_img}
        reverseLayout={true}
      />

      <div className="container">
        {/* Categories Buttons */}
        <div className="flex flex-wrap justify-center gap-2 my-6 space-x-4">
          {[
            "All",
            "Emergency",
            "Dermatology",
            "Pediatric",
            "Orthopedic",
            "Neurology",
          ].map((category) => (
            <button
              key={category}
              className={`px-4 py-1 rounded-[20px] border-2 border-secondary ${
                selectedCategory === category
                  ? "bg-secondary text-white"
                  : "hover:bg-[#3c89cd3e] transition-all"
              }  py-2 px-2`}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentPage(1);
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Cards Section */}
        <div className="grid gap-10 text-center md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4">
          {currentTracks.length >= 1 ? (
            currentTracks.map((track) => (
              <Link to={`/doctor/${track.id}`} key={track.id} className="card">
                <div className="bg-[#75a7cf36] rounded-t-md relative">
                  <img src={track.image} alt="" className="w-full h-auto" />
                  {/* Department Name */}
                  <h2 className="p-2 mx-auto w-[70%] rounded-t-[10px] bg-secondary text-white absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center">
                    {track.Department}
                  </h2>
                </div>
                <div className="p-4 shadow rounded-b-md">
                  <h1 className="text-xl font-bold text-text_color">
                    {track.title}
                  </h1>
                  <h4 className="font-semibold text-text_color">{track.Job}</h4>
                  <p className="my-4 text-Paragraph line-clamp-3">
                    {track.description}
                  </p>
                  <div className="flex justify-center mt-4 space-x-4">
                    {track.icon.map((icon, i) => (
                      <a
                        key={i}
                        href="#"
                        aria-label={`Visit ${track.title}'s ${icon.iconClass
                          .split(" ")
                          .pop()} profile`}
                        className={`${icon.iconClass} bg-[#7fb8f4] text-xl text-white rounded-full px-2 py-1 transition-transform duration-300 hover:scale-110 `}
                      ></a>
                    ))}
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <h1 className="font-bold text-center text-secondary">
              No tracks found
            </h1>
          )}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6 mb-20">
          <button
            className="px-4 py-2 mx-1 bg-gray-200 rounded-lg hover:bg-gray-300"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            <i className="fa-solid fa-angles-left"></i>
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`px-4 py-2 mx-1 rounded-lg ${
                currentPage === index + 1
                  ? "bg-secondary text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="px-4 py-2 mx-1 bg-gray-200 rounded-lg hover:bg-gray-300"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            <i className="fa-solid fa-angles-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Doctors;
