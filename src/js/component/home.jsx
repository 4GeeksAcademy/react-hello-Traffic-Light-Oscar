import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor] = useState("red")
	const [light, setLight] = useState(["red", "yellow", "green"])
	return (

		<div className="contenedor">
			<div className="contenedor-rectangulo">

				<div className="contenedor-semaforo">

					<div id="trafficTop">
						<div id="container">
							<div className="traffic-light-container-first">
								<div className="traffic-light-container-rectangle">
									<div className="traffic-light-container-second">
										{light.map((colorLight, index) => <button
											key={index}
											onClick={() => setColor(colorLight)}
											className={`lights ${colorLight == color ? "active" : "none"}`}
											style={{ backgroundColor: colorLight }}
										>
										</button>)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
							

);
};

export default Home;
