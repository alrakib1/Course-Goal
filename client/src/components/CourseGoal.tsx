import { type PropsWithChildren } from "react";
import useAxiosPublic from "../api/useAxiosPublic";
import toast from "react-hot-toast";

type CourseGoalProps = PropsWithChildren<{
  id: number;
  title: string;
  refetch: () => void;
}>;

// import {type ReactNode } from "react";
// interface CourseGoalProps {title: string, description: string, children:ReactNode}

// we can import children two ways here. using generic or the other one

const CourseGoal = ({ title, id, children, refetch }: CourseGoalProps) => {
  const axiosPublic = useAxiosPublic();

  const onDelete = async (id: number) => {
    const res = await axiosPublic.delete(`/all/${id}`);
    if (res.data.result.deletedCount) {
      refetch();
      toast.success(res.data.message,{
        icon: '💀'
      })
    }
  };

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
