import React,{useState,useEffect} from "react";
import { useDropzone } from "react-dropzone";
import "./admin.css";
import imageStorage from './imageStorage';
function UploadImages({submit}) {
  const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
  };
  
  const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
  };
  
  const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
  };
  
  const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
  };
  const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });

  useEffect(()=>{
    submit&&imageStorage(files,submit);
  },[submit])
  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
        />
      </div>
    </div>
  ));
  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);
  //const [file, setFile] = useState(null);
  // const files = acceptedFiles.map((file) => {
  //   // setFile(file);
  
  //     // <ProgressBar file={file} setFile={setFile} />;
    
  //   // <li key={file.path}>
  //   //   {file.path} - {file.size} bytes
  //   // </li>
  // });

  return (
    <div className="container">
      <section>
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} name="productimages" />
          <p style={{ textAlign: "center" }}>
            Drag 'n' drop Product images here, or click to select files
          </p>
        </div>
        <aside></aside>
        <aside style={thumbsContainer}>
        {thumbs}
      </aside>
      </section>
      <h4 style={{ textAlign: "center" }}>Images</h4>
     
    </div>
  );
}
export default UploadImages;
