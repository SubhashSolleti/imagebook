import React from "react";
import {useState} from "react";
import ProgressBar from "./ProgressBar";
import { Icon } from '@iconify/react';

function UploadForm() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg", "image/jpg"];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      console.log(selected);
      setError(null);
    } else {
      setFile(null);
      setError("Please select an image file (png or jpeg or jpg)");
    }
  };

  return (
    <form>
      <label>
        <input type="file" onChange={handleChange} />
        <span><Icon icon="bi:upload"/>{"  "} Upload</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
}

export default UploadForm;
