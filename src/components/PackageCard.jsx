import React from "react";
import Check from "../../images/checkmark.svg";
import { Link } from "react-router-dom";

const PackageCard = ({ packageType }) => {
  if (packageType === "basic") {
    return (
      <div className="shadow-lg flex flex-col p-6 w-80 mx-auto rounded-lg">
        <h4 className="text-xl text-primary">Basic</h4>
        <h2 className="mt-2 text-sm text-slate-600">
          <span className="text-primary font-bold text-4xl">$120</span> / month
        </h2>

        <p className="mt-2 text-slate-600">For most average homeowners</p>

        <div className="flex flex-col gap-3 mt-4 text-lg text-slate-600">
          <div className="flex">
            <img className="w-8 mr-2 opacity-80" src={Check} />
            <p>Regular Lawn Mowing</p>
          </div>

          <div className="flex">
            <img className="w-8 mr-2 opacity-80" src={Check} />
            <p>Simple Edging</p>
          </div>

          <div className="flex">
            <img className="w-8 mr-2 opacity-80" src={Check} />
            <p>Basic Weed Control</p>
          </div>

          <div className="flex">
            <img className="w-8 mr-2 opacity-80" src={Check} />
            <p>Seasonal Fertilization</p>
          </div>

          <div className="flex">
            <img className="w-8 mr-2 opacity-80" src={Check} />
            <p>Leaf Raking</p>
          </div>

          <div className="flex">
            <img className="w-8 mr-2 opacity-80" src={Check} />
            <p>Lawn Health Check</p>
          </div>
        </div>

        <Link
          to="/getstarted"
          className="bg-primary btn text-center text-white font-bold rounded-lg shadow-lg py-3 mt-8 glow-on-hover"
        >
          Get Started
        </Link>
      </div>
    );
  }

  if (packageType === "standard") {
    return (
      <div className="shadow-lg flex flex-col p-6 w-80 mx-auto rounded-lg">
        <h4 className="text-xl text-primary">Standard</h4>
        <h2 className="mt-2 text-sm text-slate-600">
          <span className="text-primary font-bold text-4xl">$220</span> / month
        </h2>

        <p className="mt-2 text-slate-600">For porchstanding lawn-enjoyers</p>

        <div className="flex flex-col gap-3 mt-4 text-lg text-slate-600">
          <div className="flex">
            <img className="w-8 mr-2 opacity-80" src={Check} />
            <p>Everything in Basic</p>
          </div>

          <div className="flex">
            <img className="w-8 mr-2 opacity-80" src={Check} />
            <p>Weed & Pest Control</p>
          </div>

          <div className="flex">
            <img className="w-8 mr-2 opacity-80" src={Check} />
            <p>Regular Aeration</p>
          </div>

          <div className="flex">
            <img className="w-8 mr-2 opacity-80" src={Check} />
            <p>Yard Debris Cleanup</p>
          </div>

          <div className="flex">
            <img className="w-8 mr-2 opacity-80" src={Check} />
            <p>Over-Seeding</p>
          </div>

          <div className="flex">
            <img className="w-8 mr-2 opacity-80" src={Check} />
            <p>Shrub Trimming</p>
          </div>
        </div>

        <Link
          to="/getstarted"
          className="bg-primary btn text-center text-white font-bold rounded-lg shadow-lg py-3 mt-8 glow-on-hover"
        >
          Get Started
        </Link>
      </div>
    );
  }

  if (packageType === "premium") {
    return (
      <div className="shadow-lg flex flex-col p-6 w-80 mx-auto rounded-lg">
        <h4 className="text-xl text-primary">Premium</h4>
        <h2 className="mt-2 text-sm text-slate-600">
          <span className="text-primary font-bold text-4xl">$350</span> / month
        </h2>

        <p className="mt-2 text-slate-600">For the lawncare enthusiast</p>

        <div className="flex flex-col gap-3 mt-4 text-lg text-slate-600">
          <div className="flex">
            <img className="w-8 mr-2 opacity-80" src={Check} />
            <p>Everything in Standard</p>
          </div>

          <div className="flex">
            <img className="w-8 mr-2 opacity-80" src={Check} />
            <p>Complete Lawn Renovation</p>
          </div>

          <div className="flex">
            <img className="w-8 mr-2 opacity-80" src={Check} />
            <p>Landscape Maintenance</p>
          </div>

          <div className="flex">
            <img className="w-8 mr-2 opacity-80" src={Check} />
            <p>Tree Trimming</p>
          </div>

          <div className="flex">
            <img className="w-8 mr-2 opacity-80" src={Check} />
            <p>Mulch and Soil Amendments</p>
          </div>

          <div className="flex">
            <img className="w-8 mr-2 opacity-80" src={Check} />
            <p>Priority Booking and Service</p>
          </div>
        </div>

        <Link
          to="/getstarted"
          className="bg-primary btn text-center text-white font-bold rounded-lg shadow-lg py-3 mt-8 glow-on-hover"
        >
          Get Started
        </Link>
      </div>
    );
  }
};

export default PackageCard;
