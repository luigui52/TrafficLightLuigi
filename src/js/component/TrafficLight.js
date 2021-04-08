import React, { useState } from "react";

export function TrafficLight() {
	const [select, setSelect] = useState("");
	let redExtraClass = "";
	let yellowExtraClass = "";
	let greenExtraClass = "";

	if (select == "red") redExtraClass = "selected";
	if (select == "yellow") yellowExtraClass = "selected";
	if (select == "green") greenExtraClass = "selected";

	return (
		<div>
			<div id="trafficTop"></div>
			<div id="container">
				<div
					className={"red light " + redExtraClass}
					onClick={() => setSelect("red")}></div>
				<div
					className={"yellow light " + yellowExtraClass}
					onClick={() => setSelect("yellow")}></div>
				<div
					className={"green light " + greenExtraClass}
					onClick={() => setSelect("green")}></div>
			</div>
		</div>
	);
}
//create your first component
// export function Home() {
// 	return (
// 		<div className="text-center mt-5">
// 			<p>
// 				Made by{" "}
// 				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
// 				love!
// 			</p>
// 		</div>
// 	);
// }
