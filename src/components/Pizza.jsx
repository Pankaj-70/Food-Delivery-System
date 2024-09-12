import React from "react";

function Pizza({ pizza }) {
	return (
		<div className="mb-3">
			<h6>{pizza.name}</h6>
			<img
				src={pizza.image}
				alt=""
				className="img-fluid"
				style={{ height: "200px", width: "200px" }}
			/>
		</div>
	);
}

export default Pizza;
