import React from "react";
import { useState, useEffect } from "react";
import "../../styles/traffic.css";

function Traffic() {
	const [color, setColor] = useState("red");
	function handleClick(event) {
		event.target.classList.add("selected");
	}
	return (
		<div>
			<div id="traffic-black">
				<div
					className="base-state"
					onClick={event => {
						handleClick(event);
					}}
				/>
				;
				<div className="semaforo">
					<div
						className="light-red"
						onClick={event => {
							handleClick(event);
						}}
					/>
					<div
						className="light-yellow"
						onClick={event => {
							handleClick(event);
						}}
					/>
					<div
						className="light-green"
						onClick={event => {
							handleClick(event);
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default Traffic;
