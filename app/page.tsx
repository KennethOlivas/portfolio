import type { NextPage } from "next";
import Link from "next/link";
import HomeDashboard from "./components/HomeDashboard";

const Home: NextPage = () => {
  return (
    <div className="mt-14">
      <section>
        <HomeDashboard />
      </section>
    </div>
  );
};

export default Home;
