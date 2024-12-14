import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const FeaturesCarousel = () => {
  const features = [
    {
      title: "Inclusive Community",
      description:
        "Join a welcoming and supportive community where everyone is encouraged to explore and grow in STEM, no matter their background or experience.",
      image: "https://blog.gale.com/wp-content/uploads/2023/08/iStock-888791812-1.jpg",
    },
    {
      title: "Learn How to Code",
      description:
        "Master programming skills in Python, JavaScript, and more through hands-on projects.",
      image: "https://woz-u.com/wp-content/uploads/2022/06/Evolution-of-Coding-scaled.jpg",
    },
    {
      title: "Personal One-on-One Helper",
      description:
        "Receive personalized support from dedicated our instructors. Never be afraid to ask questions again!",
      image: "https://www.tutordoctor.com/wp-content/uploads/2023/09/Power-of-One-on-One-Tutoring.jpg",
    },
    {
      title: "Professional Development",
      description:
        "Gain valuable skills and insights to prepare for future careers in STEM fields, and build a strong professional network.",
      image: "https://www.theforage.com/blog/wp-content/uploads/2022/07/ProfessionalServicesCareer.jpg",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const dotStyles = `
    .custom-dot-list-style {
      text-align: center;
      margin-top: 20px;
    }

    .custom-dot-list-style li {
      display: inline-block;
      margin: 0 5px;
    }

    .custom-dot-list-style li button {
      background-color: rgba(255, 255, 255, 0.5); /* Inactive dots - semi-transparent white */
      border-radius: 50%;
      width: 12px;
      height: 12px;
      border: none;
      transition: background-color 0.3s ease;
      cursor: pointer;
    }

    .custom-dot-list-style li.react-multi-carousel-dot--active button {
      background-color: #ffffff !important; /* Active dots - solid white */
    }
  `;

  return (
    <div className="bg-gray-950 py-20">
      <style>{dotStyles}</style>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-700">What We Offer</h2>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          showDots={true}
          arrows={false} // Disable arrows
          dotListClass="custom-dot-list-style"
        >
          {features.map((feature, index) => (
            <div key={index} className="bg-black rounded-lg shadow-lg p-6 text-center">
              <div className="relative pb-[56.25%] w-full h-0 mb-4 rounded-lg overflow-hidden"> {/* Aspect ratio container */}
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="absolute inset-0 w-full h-full object-cover" // Ensures proper scaling
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-purple-700">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default FeaturesCarousel;
