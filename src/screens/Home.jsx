import React from "react";
import Navbar from "../components/Navbar";
import pizza from "../constants/pizza";
import Pizza from "../components/Pizza";
function Home() {
	return (
		<div>
			<Navbar />
			<div className="row">
				{pizza.map((piz) => {
					return (
						<div className="col-md-4">
							<Pizza pizza={piz} />
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Home;
