import React from 'react';
import './App.css';
import axios from 'axios';

function Upload() {

	const [state, setState] = React.useState({
		slectedFile:null
	});

	const fileSelectChange =(e)=> {
		setState({slectedFile: e.target.files[0]});
	}

	const uploadFile =()=> {
		const fd = new FormData();
		fd.append('image', state.slectedFile, state.slectedFile.name);
		axios.post('gs://imghost-ea97c.appspot.com', fd, {
			onUploadProgress: progressEvent => {
				console.log("Upload Progress: "+ progressEvent.loaded / progressEvent.total * 100 +"%")
			}
		})
			.then(res=> {
				console.log(res)
			});
	}

  return (
    <div className="App">
      <input type="file" onChange={fileSelectChange} />
      <button type="button" onClick={uploadFile}>Upload</button>
    </div>
  );
}

export default Upload;
