import CourseGoal from "./CourseGoal";

import {type CourseGoal as CGoal} from '../App.tsx'

type CurseGoalListProps = {
  goals: CGoal[];
  onDeleteGoal : (id: number)=> void;
  refetch: ()=> void
};



const CourseGoalList = ({goals, onDeleteGoal, refetch}: CurseGoalListProps) => {

  console.log(goals);
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal._id}>
          <CourseGoal refetch={refetch} id={goal._id} title={goal.title} onDelete={onDeleteGoal}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
};

export default CourseGoalList;
