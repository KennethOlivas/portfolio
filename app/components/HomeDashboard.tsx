import React from "react";
import Card from "./UI/Card";
import resumeSite from "../constants/resumeSite";

const HomeDashboard = () => {
  return (
    <div className="grid grid-cols-12 gap-4 transition-all duration-300 px-2 md:px-8 lg:px-16 xl:px-28">
      <div className="col-span-12 md:col-span-8 xl:col-span-6">
        <Card imgImg="/images/profile.jpg" title="Hey, I'm Kenneth">
          <h1 className="font-semibold text-xl text-pink-200 mt-1">
            Full Stack Developer
          </h1>
        </Card>
      </div>
      <div className="col-span-12 md:col-span-4 xl:col-span-3">
        <Card
          isTargetBlank
          hrf={resumeSite}
          titleSize="small"
          title="See my Resume"
          subTitle="Lear more about me"
        />
      </div>
      <div className="col-span-12 md:col-span-4 xl:col-span-3">
        <Card titleSize="small" title="App" />
      </div>
    </div>
  );
};

export default HomeDashboard;
