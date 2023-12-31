import { type PropsWithChildren } from "react";
type CourseGoalProps = PropsWithChildren<{
  id: number;
  title: string;
  onDelete: (_id: number) => void;
  refetch: ()=> void;
}>;

// import {type ReactNode } from "react";
// interface CourseGoalProps {title: string, description: string, children:ReactNode}

// we can import children two ways here. using generic or the other one

const CourseGoal = ({ title,id, children, onDelete, refetch }: CourseGoalProps) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
};

// import {type FC, type PropsWithChildren } from "react";
//  another alternative is using FC generic type. Here the connected type is props type.

// const CourseGoal:FC<CourseGoalProps> = ({title, children}) => {
//     return (
//         <article>
//             <div>
//                 <h2>{title}</h2>
//                 {children}
//             </div>
//             <button>Delete</button>
//         </article>
//     );
// };

export default CourseGoal;
