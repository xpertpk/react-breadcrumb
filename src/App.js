import React, {useState} from 'react';
import './App.css';
import Breadcrumbs from './Components/Breadcrumbs';

function App() {
	var id = 98;
	const [crumbs, setCrumbs] = useState(['Home', 'Category', `${id}`, 'Sub Category']);
	const selected = crumb => {
		if(crumb == "Category") {
			console.log("This is Category Page")
		} else if(crumb == "Home") {
			console.log("This is Home Page")
		} else {
			console.log("Its ID Page")
		}
	}

  return (
    <div className="App">
  		<Breadcrumbs crumbs={crumbs} selected={selected} />
      	<h3>Home Page</h3>
    </div>
  );
}

export default App;
