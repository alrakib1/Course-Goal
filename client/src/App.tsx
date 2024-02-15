import CourseGoal from "./components/CourseGoal";
import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header";
// import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";
// import useAxiosPublic from "./api/useAxiosPublic";
import AllGoalsData from "./api/AllGoalsData.jsx";
import { useEffect, useState } from "react";

export type CourseGoal = {
  title: string;
  description: string;
  _id: number;
};

export default function App() {
  const { allGoals, refetch } = AllGoalsData();

  const [theme, settheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // return cleanUp = () => {

    // }
  }, [theme]);

  const handleSwitch = () => {
    settheme(theme == "dark" ? "light" : "dark");
  };

  return (
    <main className="bg-white dark:bg-red-500">
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal refetch={refetch} />
      <CourseGoalList goals={allGoals} refetch={refetch} />

      <button
        onClick={handleSwitch}
        className="bg-blue-400 px-2 py-1 mt-5 rounded-md"
      >
        Theme changer
      </button>
    </main>
  );
}
