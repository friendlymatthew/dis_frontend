import React from "react";

export default class Test extends React.Component {
	state = {
		color: "white",
	};

	listenScrollEvent = (e) => {
		if (window.scrollY > 400) {
			this.setState({ color: "black" });
		} else {
			this.setState({ color: "white" });
		}
	};

	componentDidMount() {
		window.addEventListener("scroll", this.listenScrollEvent);
	}

	render() {
		return (
			<div className="">
				<div id="header">
					<h1 style={{ color: this.state.color }}>This is the header</h1>
				</div>
				<div id="section_1" className="h-screen">
					This is section 1
				</div>

				<div id="section_2" className="h-screen">
					This is section 2
				</div>

				<div id="section_3" className="h-screen">
					This is section 3
				</div>

				<div id="section_4" className="h-screen">
					This is section 4
				</div>

				<div id="section_5" className="h-screen">
					This is section 5
				</div>
			</div>
		);
	}
}
