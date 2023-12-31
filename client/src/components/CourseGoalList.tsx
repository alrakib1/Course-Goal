import CourseGoal from "./CourseGoal";

import {type CourseGoal as CGoal} from '../App.tsx'

type CurseGoalListProps = {
  goals: CGoal[];
  onDeleteGoal : (id: number)=> void;
};

const CourseGoalList = ({goals, onDeleteGoal}: CurseGoalListProps) => {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
};

export default CourseGoalList;
