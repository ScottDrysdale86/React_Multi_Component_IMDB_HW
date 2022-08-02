import React, { useState } from "react";

const MovieForm = ({ onMovieSubmit }) => {
	const [name, setName] = useState("");
	const [url, setUrl] = useState("");

	const handleNameChange = (event) => {
		setName(event.target.value);
	};

	const handleUrlChange = (event) => {
		setUrl(event.target.value);
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();
		const nameToSubmit = name.trim();
		const urlToSubmit = url.trim();

		if (!nameToSubmit || !urlToSubmit) {
			return;
		}

		onMovieSubmit({
			name: nameToSubmit,
			url: urlToSubmit,
		});

		setName("");
		setUrl("");
	};

	return (
		<form className="form" onSubmit={handleFormSubmit}>
			<label> Enter Movie Name: </label>
			<input
				type="text"
				placeholder="Enter Movie Name:"
				value={name}
				onChange={handleNameChange}
			/>
			<label> Enter a URL: Must start with http://URL </label>
			<input
				type="url"
				placeholder="Enter a URL: "
				value={url}
				onChange={handleUrlChange}
			/>
			<input className="button" type="submit" value="Add" />
		</form>
	);
};

export default MovieForm;
