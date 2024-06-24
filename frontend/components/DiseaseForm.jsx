import React from "react";
import { useState } from "react";
import axios from "axios";
import ReactLoading from "react-loading";

const DiseaseForm = () => {

  const [imageSrc, setImageSrc] = useState();
  // const [isLoading, setIsLoading] = useState(false);
  // const [isDisabled, setIsDisabled] = useState(false);

  let file;

  const [output, setOutput] = useState("");
  

  const handleChange = (event) => {
    file = {
        selectedFile: event.target.files[0],
    };
};

  //   setImageSrc(URL.createObjectURL(event.target.files[0]));
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let data = new FormData();
    console.log(file);
    data.append("file", file.selectedFile);

    await axios
    .post("http://127.0.0.1:5000/disease-predict", data)
    .then(function (response) {
        let newData = String(response.data.prediction);
        console.log(newData);
        setOutput(newData);
        console.log(output);
    })
    .catch(function (error) {
        console.log(error);
    });
};

  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
      <form onSubmit={handleSubmit} class="w-full max-w-lg mx-auto py-10">
        <div class="flex w-full items-center justify-center bg-grey-lighter">
          <label class="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-blue-700">
            <svg
              class="w-8 h-8"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
            </svg>
            <span class=" text-base leading-normal">Select a file</span>
            <input
              id="file"
              name="file"
              type="file"
              class="hidden"
              onChange={handleChange}
              required
            />
          </label>
        </div>
        {/* {imageSrc && (
          <div className="flex justify-center mt-6">
            <img src={imageSrc} alt="img" />
          </div>
        )} */}

        <div className="flex justify-center mt-6">
          {/* <button
            className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-48 ease-linear transition-all duration-150"
            type="submit"
          >
            {isLoading ? (
              <ReactLoading
                type="bars"
                color="#ffffff"
                height={25}
                width={25}
              />
            ) : (
              "Submit"
            )}
          </button> */}
          <button
            type="submit"
            className="w-96 h-12 flex justify-center items-center text-md text-white bg-blueGray-800 hover:bg-blueGray-800 transition-all font-medium rounded-lg px-5 py-2.5 text-center"
          >
            SUBMIT
          </button>
        </div>
        {output && (
                    <div
                        class="mt-2 p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
                        role="alert"
                    >
                        <span class="font-medium">Output:</span>
                        {output}
                    </div>
                )}
            </form>
        </div>
    );
};

export default DiseaseForm;
