import {type FormEvent } from "react";


const NewGoal = () => {


const handleSubmit = (event: FormEvent)=>{
        event.preventDefault()
}

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="goal">Your Goal</label>
                <input type="text" id="goal"/>
            </p>
            <p>
                <label htmlFor="summery">Short summary</label>
                <input type="text" id="summary"/>
            </p>
            <p>
                <button>Add Goal</button>
            </p>
        </form>
    );
};

export default NewGoal;