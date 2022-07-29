import { useRef, useState } from "react";
import * as React from "react";
import axios, { post } from "axios";

const PostJob = (props) => {
  const [fileUrl, setFileUrl] = useState("");
  const [imgBase64, setImgBase64] = useState([]); // 파일 base64
  const [imgFile, setImgFile] = useState(null);

  const enteredContent = useRef();

  const HandleChangeFile = async (event) => {
    console.log(event.target.files);
    setImgFile(event.target.files);
    //fd.append("file", event.target.files)
    setImgBase64([]);
    for (var i = 0; i < event.target.files.length; i++) {
      if (event.target.files[i]) {
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[i]); // 1. 파일을 읽어 버퍼에 저장합니다.
        // 파일 상태 업데이트
        reader.onloadend = () => {
          // 2. 읽기가 완료되면 아래코드가 실행됩니다.
          const base64 = reader.result;
          console.log(base64);
          if (base64) {
            //  images.push(base64.toString())
            var base64Sub = base64.toString();

            setImgBase64((imgBase64) => [...imgBase64, base64Sub]);
            //  setImgBase64(newObj);
            // 파일 base64 상태 업데이트
            //  console.log(images)
          }
        };
      }
    }
  };

  const onFileUpload = async () => {
    const fd = new FormData();
    Object.values(imgFile).forEach((file) => fd.append("file", file));

    await fetch(
      "https://react-http-fa2fe-default-rtdb.firebaseio.com/upload.json",
      {
        method: "POST",
        body: JSON.stringify({
          file: fileUrl,
        }),
        headers: {
          "Content-Type": { "Content-Type": "application/json" },
        },
      }
    ).then((response) => console.log(response.data));

    await axios
      .post("http://localhost:8888/feed/insert", fd, {
        headers: {
          "Content-Type": `multipart/form-data;`,
        },
      })
      .then((response) => console.log(response.data));
  };

  const preview = async () => {
    // const imgEL = document.querySelector(".postimage");
    // const reader = new FileReader();
    // reader.onload = () =>
    //   (imgEL.style.backgroundImage = `url(${reader.result})`);
    // console.log(reader);
    // reader.readAsDataURL(files[0]);
  };

  return (
    <div
      className={
        props.isJob ? "post-popup job_post active" : "post-popup job_post"
      }
    >
      <div className="post-project">
        <h3>Post a job</h3>
        <div className="post-project-fields">
          <div style={{ margin: "auto" }}>
            <input
              type="file"
              id="file"
              multiple="multiple"
              onChange={HandleChangeFile}
            />
            <div className="img__box"></div>
          </div>
          <form>
            <div className="row">
              <div className="col-lg-12"></div>
              <div className="col-lg-12">
                <div className="inp-field"></div>
              </div>
              <div className="col-lg-6">
                <div className="price-br"></div>
              </div>

              <div className="col-lg-12">
                <textarea
                  className="textarea"
                  name="description"
                  placeholder="Description"
                  defaultValue={""}
                  style={{ resize: "none" }}
                  ref={enteredContent}
                ></textarea>
              </div>
              <div className="col-lg-12">
                <ul>
                  <li>
                    <button
                      className="active"
                      type="button"
                      value="post"
                      onClick={onFileUpload}
                    >
                      Post
                    </button>
                  </li>
                  <li>
                    <a title="" onClick={props.isjobhandler}>
                      Cancel
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <img className="postimage" src={fileUrl}></img>
                <div style={{ width: "30vw", height: "30vh" }}></div>
              </div>
            </div>{" "}
          </form>
        </div>
        {/*post-project-fields end*/}
        <a href="#" title="" onClick={props.isjobhandler}>
          <i className="la la-times-circle-o" />
        </a>
        {/*post-project end*/}
      </div>
    </div>
  );
};

export default PostJob;
