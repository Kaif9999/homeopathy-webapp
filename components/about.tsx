import React from "react";

export const About = () => {
  return (
    <div>
      {/* About Section */}
      <section className="py-20 bg-gradient-to-b border radius-xl from-emerald-950 to-muted">
        <div className="container">
          <div className="flex items-center justify-center gap-2 mb-6 text-gray/90 bg-emerald-950">
            <svg
              width="20"
              height="20"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="animate-bounce text-emerald-300"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 0L9.79611 6.20389L16 8L9.79611 9.79611L8 16L6.20389 9.79611L0 8L6.20389 6.20389L8 0Z" />
            </svg>
            <span className="text-lg font-medium animate-pulse bg-gradient-to-r from-blue-500 to-emerald-300 bg-clip-text text-transparent transition-colors duration-10000 hover:from-blue-500 hover:to-white">
              Lab Tests Available
            </span>
          </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="w-auto h-auto p-4 shadow-lg rounded-2xl bg-emerald-900/50 backdrop-blur-sm">
              <img
              src="about_image.jpeg"
              alt="About"
              className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="w-auto h-auto p-6 shadow-lg rounded-2xl bg-blue-900/50 backdrop-blur-sm">
              <h2 className="text-3xl font-semibold text-white mb-4 text-center">
              About Us
              </h2>
              <p className="text-lg text-gray-200 mb-4 leading-relaxed">
              Publichomepathy clinic is your place to be if you want to gain a
              new perspective on your life and introspect to find the real
              you. Our team of board-certified and experienced professionals,
              comprising homeopathic doctors and practitioners, naturopathy
              experts, and lifestyle transformation professionals, will assist
              in diagnosing all the medical ailments, ranging from mental and
              physical to social, and assist you in alleviating and resolving
              them from the roots.
              </p>
              <p className="text-lg text-gray-200 leading-relaxed">
              Serving society for generations, we are known to deliver
              compassionate and personalised care to our patients to overcome
              all the hurdles holding them to live their lives to the fullest.
              Cure Wellness Centre, a homeopathy and naturopathy centre, has
              access to all the latest advancements in the field and
              evidence-based practices to deliver the best possible patient
              outcomes.
              </p>
            </div>
            </div>
        </div>
      </section>
    </div>
  );
};
