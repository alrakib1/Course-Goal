import CourseGoal from "./components/CourseGoal";
import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";
import useAxiosPublic from "./api/useAxiosPublic";


export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);


  const axiosPublic = useAxiosPublic();

  

  const handleAddGoal = () => {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: "Learn React + TS",
        description: "Learn it in depth",
      };
      return [...prevGoals, newGoal];
    });
  };

  const handleDeleteGoal = (id:number)=>{
    setGoals(prevGoals=>prevGoals.filter((goal)=>goal.id !== id))
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
     <NewGoal />
      <CourseGoalList  onDeleteGoal={ handleDeleteGoal} goals={goals}/>
    </main>
  );
}
