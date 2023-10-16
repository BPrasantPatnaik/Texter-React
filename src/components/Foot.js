import React from "react";
export default function Foot(props) {
  return (
    <div>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
        crossOrigin="anonymous"
      ></link>

      <div className="container">
        <div className={`form-check form-switch text-${(props.mode === 'light')?'dark':'light'}`}>
          <input
            className="form-check-input"
            type="checkbox"
            onClick={props.togglemode}
            id="flexSwitchCheckDefault"
          />
          <label
            className="form-check-label"
            htmlFor="flexSwitchCheckDefault"
          >
            {(props.mode === 'light')?'Enable to Dark ':'Disable to Light'} Mode
          </label>
        </div>
      </div>

      <style>
        {`
          .form-switch .form-check-label {
            margin-left: -70vw; /* Adjust margin as needed */
          }
        `}
      </style>
    </div>
  );
}
