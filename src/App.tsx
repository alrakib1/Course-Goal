import CourseGoal from "./components/CourseGoal";
import goalsImg from './assets/goals.jpg'
import Header from "./components/Header";


export default function App() {
  return (<main>
  

  <Header image={{src:goalsImg, alt: "A list of goals"}}>
<h1>Your Course Goals</h1>
</Header>

      <h1>Your Course Goals</h1>
      

    <CourseGoal title="Learn React + Ts" >
      <p>Learn it from the ground</p>
    </CourseGoal>
  </main>)
}
