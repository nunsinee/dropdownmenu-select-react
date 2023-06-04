import "./App.css";
import styled from "styled-components";
import Select from "react-select";
//import AsyncSelect from "react-select/async";

const App = () => {
	const options = [
		{ value: "nunsinee", label: "Nunsinee", color: "#FF8B00" },
		{ value: "torgrim", label: "Torgrim", color: "#000000" },
		{ value: "tim", label: "Tim", color: "#36B37E" },
		{ value: "emmalee", label: "Emmalee", color: "#0052CC" },
	];

	const SelectContainer = styled.div`
		display: block;
		position: relative;
		width: 200px;
		margin: 3rem auto;
	`;

	const colorStyles = {
		control: (styles) => ({
			...styles,
			borderRadius: "50px",
		}),
		// multiValue: (styles) => ({
		// 	...styles,
		// 	borderRadius: "50%",
		// }),

		option: (styles, { data, isDisabled, isSelected, isFocused }) => {
			console.log("option", data, isDisabled, isSelected, isFocused);
			return { ...styles, color: data.color };
		},
	};
	const handleChange = (selectedOption, actionMeta) => {
		console.log("handleChange", selectedOption);
	};

	const handleInputChange = (inputValue, actionMeta) => {
		console.log("handleInputChange", inputValue, actionMeta);
	};

	// const loadOptions = (searchValue, callback) => {
	// 	setTimeout(() => {
	// 		const filteredOptions = options.filter((option) =>
	// 			option.label.toLowerCase().includes(searchValue.toLowerCase())
	// 		);
	// 		console.log("loadOptions", searchValue, filteredOptions);
	// 		callback(filteredOptions);
	// 	}, 2000);
	// };

	return (
		<SelectContainer>
			<Select
				defaultOptions
				options={options}
				onChange={handleChange}
				onInputChange={handleInputChange}
				styles={colorStyles}
				components={{ IndicatorSeparator: () => null }}
				isMulti
			/>
		</SelectContainer>
	);
};

export default App;
