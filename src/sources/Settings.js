import Axios from "axios";
import { useEffect, useState, useContext } from "react";

import Navbar from "./Navbar";
import { LoginContext, DetailsContext, ImageContext } from "../App";

function Settings() {
  const { isValid } = useContext(LoginContext);
  const { userDetails } = useContext(DetailsContext);
  const imageError = useContext(ImageContext);
  const [toggle, setToggle] = useState(false);
  const [images, setImages] = useState([]);
  const [file, setFile] = useState();
  const [photo, setPhoto] = useState();
  const [isfile, setIsFile] = useState(false);

  useEffect(() => {
    Axios.get("https://bank-react.herokuapp.com/imageFiles").then((res) => {
      setImages(res.data.resources);
    });
  }, []);

  const changeHandler = (event) => {
    setFile(event.target.files[0]);
    setPhoto(URL.createObjectURL(event.target.files[0]));
    setIsFile(true);
  };

  const fakeInput = () => {
    document.getElementById("file").click();
  };

  const HandleSubmit = () => {
    function base64(file) {
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      }).then((result) => {
        const data = {
          user: userDetails.Username,
          change: "image",
          base: result,
        };
        Axios.post(
          "https://bank-react.herokuapp.com/imageUpdate",
          JSON.stringify(data),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        ).then((res) => {
          if (res.data.success) {
            alert(res.data.success);
            window.location.reload();
          } else {
            alert(res.data.error);
          }
        });
      });
    }
    base64(file);
  };

  const imageChange = (e) => {
    const imageName = e.target.src;
    console.log(imageName);
    const data = {
      user: userDetails.Username,
      change: "image",
      value: imageName,
    };
    Axios.post("https://bank-react.herokuapp.com/setting", data).then(() => {
      window.location.reload();
    });
  };

  return isValid ? (
    <>
      <Navbar userDetails={userDetails} isValid={isValid} />
      <div className="parent" style={{ height: "90vh", overflow: "auto" }}>
        <div className="account">
          <div className="settings-parent">
            <h1 className="my-2">Settings</h1>
            <div className="settings">
              <div className="change-photo setting">
                <h5>Change Profile</h5>
                <div className="change-photo-title">
                  <div style={{ display: "flex" }}>
                    <img
                      className="userdp"
                      src={userDetails.image}
                      onError={imageError}
                    ></img>
                    <div>
                      <div>Change Profile Picture for</div>
                      <div>{userDetails.Username}</div>
                    </div>
                  </div>
                  <i
                    className={toggle ? "fas fa-angle-up" : "fas fa-angle-down"}
                    style={{ marginRight: "15px", cursor: "pointer" }}
                    onClick={() => {
                      setToggle(!toggle);
                    }}
                  ></i>
                  <div
                    className={
                      toggle ? "image-drop-down show-image" : "image-drop-down"
                    }
                  >
                    <h6 className="ms-2">Select from these</h6>
                    <div>
                      {images.map((image, key) => {
                        return (
                          <img
                            key={key}
                            src={image.secure_url}
                            className="user-images"
                            onClick={imageChange}
                          ></img>
                        );
                      })}
                    </div>
                    <div className="file-box">
                      <input
                        type="file"
                        name="File"
                        id="file"
                        accept="image"
                        onChange={changeHandler}
                      />
                      {isfile ? (
                        (() => {
                          if (file.type.includes("image")) {
                            return (
                              <div className="file-name">
                                <h6>{file.name}</h6>
                                <button
                                  className="buttons ms-2"
                                  onClick={HandleSubmit}
                                >
                                  <img
                                    src={photo}
                                    alt=""
                                    style={{ width: "30px" }}
                                  />
                                  Update
                                </button>
                              </div>
                            );
                          } else {
                            return (
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <button
                                  className="buttons me-2"
                                  onClick={fakeInput}
                                >
                                  Browse
                                </button>
                                <h6 style={{ color: "red" }}>
                                  *Select only Image files
                                </h6>
                              </div>
                            );
                          }
                        })()
                      ) : (
                        <button className="buttons" onClick={fakeInput}>
                          Browse
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="change-password setting">
                <h5>Change Password</h5>
                <div>
                  You can change the Password of your account here anytime
                  whenever needed
                </div>
              </div>
              <div className="about-account setting">
                <h5>Change About</h5>
                <div>
                  You can change the about of your account here anytime whenever
                  needed
                </div>
              </div>
              <div className="change-username setting">
                <h5>Change Username</h5>
                <div>
                  You can change the Username of your account here anytime
                  whenever needed
                </div>
              </div>
              <div className="change-password setting">
                <h5>Change Password</h5>
                <div>
                  You can change the Password of your account here anytime
                  whenever needed
                </div>
              </div>
              <div className="about-account setting">
                <h5>Change About</h5>
                <div>
                  You can change the about of your account here anytime whenever
                  needed
                </div>
              </div>
              <div className="change-username setting">
                <h5>Change Username</h5>
                <div>
                  You can change the Username of your account here anytime
                  whenever needed
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <Navbar userDetails={userDetails} isValid={isValid} />
      <h1>You Need to Login First !!!</h1>
    </>
  );
}
export default Settings;
