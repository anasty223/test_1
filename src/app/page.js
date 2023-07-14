"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/images/header-fixed.png";
import userAgent from "../../public/images/u-user.svg";
import userAgentSecond from "../../public/images/u-users-alt.svg";
import phone from "../../public/images/u-phone-alt.svg";
import password from "../../public/images/u-padlock.svg";
import passwordconfirm from "../../public/images/u-padlock2.svg";
import email from "../../public/images/u-envelope.svg";
import countryImg from "../../public/images/u-map-marker-alt.svg";
import arrowDown from "../../public/images/u-angle-right-b.svg";
import Select, { components } from "react-select";
import classnames from "classnames";

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <Image src={arrowDown} alt="dropdown-icon" />
    </components.DropdownIndicator>
  );
};

const Option = (props) => {
  return (
    <components.Option {...props}>
      <div
        className={classnames("custom-option", {
          "is-selected": props.isSelected,
        })}
      >
        {props.children}
      </div>
    </components.Option>
  );
};

export default function Home() {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsCheckboxChecked(event.target.checked);
  };
  const options = [
    { value: "Afghanistan", label: "Afghanistan" },
    { value: "Albania", label: "Albania" },
    { value: "Algeria", label: "Algeria" },
    { value: "Andorra", label: "Andorra" },
  ];

  const handleInputBlur = (inputId, labelId) => {
    const label = document.getElementById(labelId);
    const input = document.getElementById(inputId);

    if (input.value.trim() !== "") {
      label.style.top = "-23px";
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container">
        <Image src={logo} alt="logo" className="logo" width={190} height={48} />

        <div className="singUp-text">
          <button type="submit" className="singUp-button">
            Sign Up
          </button>{" "}
          and find the best place to rest while traveling
        </div>

        <div className="grid-container">
          <div className="container-input-button">
            <label className="button-list-icon" id="firstName">
              First Name
            </label>
            <Image src={userAgent} alt="userAgent" className="button-icon" />

            <input
              id="firstNameInput"
              type="text"
              className="button-list"
              onBlur={() => handleInputBlur("firstNameInput", "firstName")}
              autoComplete="off"
            />
          </div>

          <div className="container-input-button">
            <label className="button-list-icon" id="secondName">
              Second Name
            </label>
            <Image
              src={userAgentSecond}
              alt="userAgent"
              className="button-icon"
              id="iconSecondName"
            />

            <input
              id="secondNameInput"
              type="text"
              className="button-list"
              onBlur={() => {
                const label = document.getElementById("secondName");
                const input = document.getElementById("secondNameInput");

                if (input.value.trim() !== "") {
                  label.style.top = "-23px";
                }
              }}
              autoComplete="off"
            />
          </div>

          <div className="dropdown">
            <Image src={countryImg} alt="userAgent" className="button-icon" />
            <Select
              options={options}
              components={{ DropdownIndicator, Option }}
              classNamePrefix="custom-select"
              styles={{
                control: (provided) => ({
                  ...provided,
                  paddingLeft: "50px",
                  backgroundColor: "transparent",
                  height: "56px",
                }),
                placeholder: (provided) => ({
                  ...provided,
                  color: "#E0E0E0",
                  fontSize: "19px",
                  fontStyle: "normal",
                  fontWeight: 300,
                  lineHeight: "normal",
                }),
                option: (provided, state) => ({
                  ...provided,
                  color: state.isSelected ? "#E0E0E0" : "#5E5E5E",
                  fontSize: "15px",
                  fontStyle: "normal",
                  fontWeight: 300,
                  lineHeight: "normal",
                  paddingLeft: state.isSelected ? "32px" : "25px",
                  backgroundColor: state.isSelected ? "transparent" : "white",
                  outline: "none",
                }),
                singleValue: (provided) => ({
                  ...provided,
                  color: "#E0E0E0",
                  fontSize: "19px",
                  fontStyle: "normal",
                  fontWeight: 300,
                  lineHeight: "normal",
                }),
              }}
              placeholder="Country"
            />
          </div>

          <div className="container-input-button">
            <label className="button-list-icon" id="phone">
              Phone
            </label>
            <Image src={phone} alt="userAgent" className="button-icon" />

            <input
              id="phoneInput"
              type="tel"
              className="button-list"
              onBlur={() => handleInputBlur("phoneInput", "phone")}
              autoComplete="off"
            />
          </div>
          <div className="container-input-button">
            <label className="button-list-icon" id="password">
              Password
            </label>
            <Image src={password} alt="userAgent" className="button-icon" />

            <input
              id="passwordInput"
              type="password"
              className="button-list"
              onBlur={() => handleInputBlur("passwordInput", "password")}
              autoComplete="off"
            />
          </div>
          <div className="container-input-button">
            <label className="button-list-icon" id="confirmPassword">
              Confirm password
            </label>
            <Image
              src={passwordconfirm}
              alt="userAgent"
              className="button-icon"
            />

            <input
              id="confirmPasswordInput"
              type="password"
              className="button-list"
              onBlur={() => handleInputBlur("confirmPasswordInput", "confirmPassword")}
              autoComplete="off"
            />
          </div>
          <div className="container-input-button">
            <label className="button-list-icon" id="email">
              Email
            </label>
            <Image src={email} alt="userAgent" className="button-icon" />

            <input
              id="emailInput"
              type="email"
              className="button-list"
              onBlur={() => handleInputBlur("emailInput", "email")}
              autoComplete="off"
            />
          </div>
          <div className="container-agree">
        <input
          type="checkbox"
          name="agree"
          id="agree"
          className="checkAgree"
          checked={isCheckboxChecked}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="agree" className="customCheckbox"></label>
        <h3 className="agree">I agree to the</h3>
        <a type="submit" className="term">
          Terms & Conditions
        </a>
      </div>
      
      <button
        className={classnames("button-singUp", {
          "button-singUp-disabled": !isCheckboxChecked,
        })}
        style={{ border: isCheckboxChecked ? "none" : "1px solid #5E5E5E" }}
        disabled={!isCheckboxChecked}
      >
        Sign Up
      </button>
   
        </div>
      </div>
      <div className="flex">
        <h3 className="login">If you have an account, </h3>
        <button className="buttonLogin">Log In</button>
      </div>
    </main>
  );
}
