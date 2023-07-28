import React from "react";

const SocialMediaIcons = () => {
  return (
    <div className={`flex justify-center md:justify-start mb-2 mt-4 gap-7`}>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/matheos-belay-02426b258/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linked in " src="../assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://twitter.com/matheos84984"

        target="_blank"
        rel="noreferrer"
      >
        <img alt="linked in " src="../assets/twitter.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500 w-5 h-5"
        target="_blank"
        rel="noreferrer"
        href="https://github.com/matheosbel"
      >
        <img alt="github" src="../assets/gitlogo.png" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
