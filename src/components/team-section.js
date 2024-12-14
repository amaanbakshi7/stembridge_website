import React from "react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Amaan Bakshi",
      role: "Corporate Development & Sales",
      image: "/amaan_bakshi.png",
    },
    {
      name: "Jack Hu",
      role: "Curriculum Developer & Social Media Coordinator",
      image: "/jack_hu.png",
    },
    {
      name: "Saket Reddy",
      role: "Learning Experience & Data Analysis",
      image: "/saket_reddy.jpg",
    },
    {
      name: "Pavithra Y.",
      role: "Community Manager",
      image: "/pavithra_y.png",
    },
  ];

  return (
    <section id="team" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-700">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-48 h-48 object-cover rounded-full shadow-lg mx-auto "
              />
              <h3 className="text-2xl font-bold text-white mt-4">{member.name}</h3>
              <p className="text-purple-700 font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
