
//import { BasicsFunctions } from './TypeScript/BasicFunctions'
//import { BasicTypes } from './TypeScript/BasicsTypes'
//import { ObjectLiterals } from './TypeScript/ObjectsLiterals'

//import { Counter } from "./components/Counter";
import { FormsPage } from "./components/FormsPage";

function App() {
  return(


    
    <div className="flex flex-col justify-center items-center h-svh">
      <h1 className='text-3xl font-bold underline mb-5'>React + TS</h1>
      {/*<BasicTypes/>
      <ObjectLiterals/>
      <BasicsFunctions/>
      <Counter/>
      <LoginPage/>
      <UserPage/>
      */}
      <FormsPage/>
      
    </div>
  );
}

export default App
