import { mq } from "../../utils/mediaQuery";
const IconLocation = "/images/icons/icon-location.svg";

// const IconLocation = "@/assets/icons/icon-location.svg";
const IconLocationActive = "images/icons/icon-location-Active.svg";

const locationSelectStyles = ({ selectedCountries }) => {
  return {
    container: (provided, state) => {
      const isOpen = state.selectProps.menuIsOpen;
      const inputValue = state.selectProps.inputValue;
      const isState =
        inputValue.length > 0 || selectedCountries?.value?.length === null
          ? `url(${IconLocationActive})`
          : !selectedCountries?.value?.length > 0
          ? `url(${IconLocation})`
          : "";

      return {
        ...provided,
        boxShadow: "none",
        ":before": {
          backgroundImage: isState,
          content: '" "',
          display: "block",
          position: "absolute",
          height: "24px",
          left: "12px",
          width: "24px",
          zIndex: 1,
          top: "50%",
          transform: "translate(0, -50%)",
        },
      };
    },
    valueContainer: (provided, state) => {
      const inputValue = state.selectProps.inputValue;

      const isOpen = state.selectProps.menuIsOpen;
      return {
        ...provided,
        padding: 0,
      };
    },
    input: (provided, state) => {
      return {
        ...provided,
        paddingLeft: "48px",
        margin: "0",
      };
    },
    placeholder: (provided, state) => {
      const isFocused = state.isFocused;
      isFocused;
      return {
        ...provided,
        paddingLeft: "48px",
        color: "#C3C3CD",
        fontSize: "16px",
        margin: "0",
      };
    },
    inputContainer: (provided) => {
      return {
        ...provided,
      };
    },
    control: (provided, state) => {
      const isSelected = state.isSelected;
      const isFocused = state.isFocused;
      const isOpen = state.selectProps.menuIsOpen;
      return {
        ...provided,
        height: "56px",
        borderRadius: "10px",
        borderColor: isFocused ? "#4C70EB" : "#DFE2ED",
        boxShadow: "none",
      };
    },
    dropdownIndicator: (provided, state) => {
      return {
        ...provided,
        display: "none",
      };
    },
    clearIndicator: () => ({ display: "none" }),
    indicatorSeparator: (base) => ({
      ...base,
      display: "none",
    }),
    multiValue: (provided) => {
      return {
        ...provided,
      };
    },
    multiValueRemove: (provided, state) => {
      return {
        ...provided,
      };
    },
    multiValueLabel: (provided) => ({
      ...provided,
    }),
    singleValue: (provided, state) => {
      state.hasValue;
      return {
        ...provided,
        margin: "0",
        paddingLeft: "12px",
        color: "#030303",
      };
    },

    menu: (provided) => {
      return {
        ...provided,
        borderRadius: "10px",
        filter: "drop-shadow(0px 4px 19px rgba(92, 110, 147, 0.13))",
        border: "1px solid #DFE2ED",
        boxShadow: "none",
      };
    },
    menuList: (provided) => {
      return {
        ...provided,
      };
    },
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        padding: "18px 12px",
        color: "#030303",
        "&:active": {
          background: "#4C70EB",
        },
      };
    },
  };
};

export default locationSelectStyles;
