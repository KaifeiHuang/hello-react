import './style/App.css';
import StarRegisterForm from './view/component/startmangement/StarRegisterForm';
import StarInfoTable from './view/component/startmangement/StarInfoTable';
import React , {useState} from 'react';


const App = ()=>  {

   const [starInfosData, setstarInfosData] = useState([])

 
  return (
    <div className="App">
      
      <h>Welcome to star center</h>

      {/* table area */}
      <StarInfoTable 
        className= "StarInfoTable"
        starInfosData={starInfosData}
        setstarInfosData={setstarInfosData}
      />
      <div id="middleDiv">

      </div>
      {/* form area */}
      <StarRegisterForm
        className= "StarRegisterForm"
        starInfosData={starInfosData}
        setstarInfosData={setstarInfosData}
      />
    </div>
  );
}

export default App;
