import React from "react";
import { Link } from "react-router-dom";
import Nate from "../../images/nate.jpg";

const LandingGraphic = () => {
  return (
    <div className="mb-32 lg:mb-10 mt-20 md:mt-32 lg:mt-64 flex flex-col-reverse lg:flex-row-reverse gap-8 lg:gap-16">
      <div className="lg:mr-20 flex flex-col justify-center items-center">
        <h1 className="text-center text-4xl md:text-5xl text-gradient font-bold">
          How do I see my photos?
        </h1>

        <div className="max-w-xs md:max-w-2xl mt-4">
          <p className="text-center mx-auto mt-2 md:mt-6 md:text-xl">
            On this site, you'll find a gallery of albums, each named by the
            date of the photoshoot. These albums are organized so you can easily
            browse through them, and each image is a reflection of the emotions
            and memories from that particular day. To make accessing your photos
            as seamless as possible, you can choose between Google Drive or
            Lightroom as your preferred download platform. Simply select a date,
            explore the gallery, and when you're ready, click on the album to be
            taken to your chosen platform.
          </p>

          <p className="text-center mx-auto mt-2 md:mt-6 md:text-xl">
            This approach allows me to focus on what I love most—capturing your
            moments—while ensuring you have an easy and organized way to access
            your memories, without the hassle of managing large files on the
            site itself.
          </p>

          <p className="text-center mx-auto mt-2 md:mt-6 md:text-xl">
            Thank you for visiting, and I hope you find something that resonates
            with your own life's story.
          </p>
        </div>

        <Link
          to="/photos"
          className="text-center btn w-72 font-bold bg-primary rounded-lg shadow-lg text-white glow-on-hover mt-10 text-2xl mx-auto"
        >
          view photos
        </Link>
      </div>

      <img
        className="mx-auto w-4/5 rounded-lg drop-shadow-xl md:ml-6 lg:ml-12 md:w-2/5 max-w-4xl lg:mt-20 lg:mb-40 flex"
        src={Nate}
      />
    </div>
  );
};

export default LandingGraphic;
