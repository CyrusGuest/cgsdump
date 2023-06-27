import React from "react";
import Service from "../Service";
import {
  faPenNib,
  faCode,
  faMagnifyingGlass,
  faCopyright,
  faChartSimple,
  faHeadset,
  faCaravan,
  faRuler,
  faBug,
  faTree,
  faSackXmark,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";

const ServicesSection = ({ setSection }) => {
  return (
    <div className="hidden md:flex flex-col">
      <h1 className="text-3xl font-bold text-center mt-20 mb-1">
        We'd love to <span className="text-gradient">collaborate</span>! Let us
        know what you're after.
      </h1>

      <p className="text-center text-gray-500 mb-16">
        Just click any of the services below to select it. Once you're done,
        click continue.
      </p>

      <div className="grid gap-4 grid-rows-3 grid-cols-2 md:grid-rows-2 md:grid-cols-3 mx-auto">
        <Service
          icon={faCaravan}
          title="Lawn Mowing"
          description="I need regular lawn mowing."
        />
        <Service
          icon={faRuler}
          title="Simple Edging"
          description="I need simple lawn edging."
        />
        <Service
          icon={faBug}
          title="Weed & Pest Control"
          description="Help me kill pests."
        />
        <Service
          icon={faTree}
          title="Shrub n' Tree Trim"
          description="I need tree & shrub trimming."
        />
        <Service
          icon={faSackXmark}
          title="Mulch & Soil"
          description="I need mulch & soil amendments."
        />
        <Service
          icon={faSeedling}
          title="Seasonal Fertilization"
          description="Help me grow my lawn."
        />
      </div>

      <button
        onClick={() => setSection(1)}
        className="btn mt-10 mb-32 text-xl w-60 bg-primary text-white mx-auto text-center"
      >
        Continue
      </button>

      <div className="flex mx-auto gap-4">
        <div className="w-16 h-2 bg-accent rounded-lg"></div>
        <div className="w-8 h-2 bg-gray-200 rounded-lg"></div>
      </div>
    </div>
  );
};

export default ServicesSection;
