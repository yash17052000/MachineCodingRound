
import ReactStepper from './Components/ReactStepper.tsx';

function App() {
  const steps=[
    {
      label:"Personal Info",
      content:<div>"Personal Information"</div>
    },
    {
      label:"AccounT Info",
      content:<div>"Acocount Information"</div>
    },
    {
      label:"Review",
      content:<div>"Review Information"</div>
    }
    ,{
      label:"Comment",
      content:<div>"COmments Information"</div>
    },
    {
      label:"Review 1",
      content:<div>"Review 1 yes Information"</div>
    }
  ]
  return (
    <div className="App">
      <ReactStepper steps={steps}/>
    </div>
  );
}

export default App;
