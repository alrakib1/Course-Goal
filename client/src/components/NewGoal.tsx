import { useRef, type FormEvent } from "react";
import useAxiosPublic from "../api/useAxiosPublic.tsx";
import toast from "react-hot-toast";
type NewGoalProps = {
  refetch: () => void;
};

const NewGoal = ({ refetch }: NewGoalProps) => {
  const axiosPublic = useAxiosPublic();

  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (goal.current && summary.current) {
      const enteredGoal = goal.current.value;
      const enteredSummary = summary.current.value;
      event.currentTarget.reset();
      
      const data = { enteredGoal, enteredSummary };

      try {
        const response = await axiosPublic.post("/all", data);
        if (response.data.result) {
          toast.success(response.data.message);
          refetch();

        } 
      } catch (error) {
        console.error("Error adding goal:", error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input type="text" id="goal" ref={goal} />
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input type="text" id="summary" ref={summary} />
      </p>
      <p>
        <button className="bg-orange-400 dark:bg-white mb-5" type="submit">Add Goal</button>
      </p>
    </form>
  );
};

export default NewGoal;
