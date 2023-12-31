import CourseGoal from "./CourseGoal";

import {type CourseGoal as CGoal} from '../App.tsx'

type CurseGoalListProps = {
  goals: CGoal[];

  refetch: ()=> void
};



const CourseGoalList = ({goals, refetch}: CurseGoalListProps) => {

  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal._id}>
          <CourseGoal refetch={refetch} id={goal._id} title={goal.title} >
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
};

export default CourseGoalList;
