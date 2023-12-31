import CourseGoal from "./CourseGoal";

import {type CourseGoal as CGoal} from '../App.tsx'

type CurseGoalListProps = {
  goals: CGoal[];
};

const CourseGoalList = ({goals}: CurseGoalListProps) => {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal title={goal.title}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
};

export default CourseGoalList;
