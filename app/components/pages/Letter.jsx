import React from "react";
import Button from "../Button";

const Letter = () => {
	return (
		<div className="h-screen w-full overflow-hidden overflow-y-hidden">
			<img src="/imgs/bg.jpg" className="w-full h-screen object-cover z-[-1]" />
			<h1 className="absolute top-[6vh] left-[50%] translate-x-[-50%] sugar text-[10vh] font-extralight mx-auto text-center w-fit">
				You got a letter...
			</h1>

			<a
				href="/page1"
				className="absolute bottom-[22.5vh] left-[50vw] translate-x-[-50%] z-99"
			>
				<Button text={"Continue"} />
			</a>

			<div className="absolute bottom-0 z-0 left-[50%] translate-x-[-50%] w-[70vw] h-[80vh]">
				<p className="absolute top-[25vh] z-99 sugar text-[2.8vh] font-extralight left-[50%] translate-x-[-50%] w-[50vw] bg-blue-300/0 leading-[5vh]">
					I was really looking forward to spending this Valentine's Day with
					you, but it can't happen. So I made a website for you, to show you how
					valuable you've been to me, in my life. This is all of my feelings and
					emotions, put together. Which I've really wanted to share with you.
				</p>
				<img
					src="/imgs/envelope-hearts-nobg.png"
					className="  w-[70vw] h-[80vh] drop-shadow-2xl"
				/>
			</div>
		</div>
	);
};

export default Letter;
