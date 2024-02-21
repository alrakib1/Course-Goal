import CourseGoal from "./components/CourseGoal";
import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";
import AllGoalsData from "./api/AllGoalsData.jsx";
import { useEffect, useState } from "react";

export type CourseGoal = {
  title: string;
  description: string;
  _id: number;
};

export default function App() {
  const { allGoals, refetch } = AllGoalsData();

  const [theme, setTheme] = useState<React.SetStateAction<string | null>>(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleSwitch = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

  };

  return (
    <main className="bg-white dark:bg-gray-950">
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Goals</h1>
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
