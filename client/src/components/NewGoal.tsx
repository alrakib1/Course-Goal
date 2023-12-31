import { useRef, type FormEvent } from "react";
import useAxiosPublic from '../api/useAxiosPublic.tsx'

const NewGoal = () => {


  const axiosPublic= useAxiosPublic();


  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  
  const handleSubmit = async(event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;
    // console.log(enteredGoal,enteredSummary);
    const data = {enteredGoal,enteredSummary}

    const response = await axiosPublic.post('/all',data );
    console.log(response.data)


  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input type="text" id="goal" ref={goal} />
      </p>
      <p>
        <label htmlFor="summery">Short summary</label>
        <input type="text" id="summary" ref={summary} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
};

export default NewGoal;
