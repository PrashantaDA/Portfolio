/* eslint-disable react/prop-types */

const Cards = ({ img, title, desc }) => (
	<div className="w-[240px] p-2 bg-light dark:bg-dark2 border-none">
		<img
			alt="example"
			src={img}
		/>
		<div className="dark:text-dtext flex flex-col gap-4">
			<h3 className="text-xl text-center">{title}</h3>
			<p className="text-justify line-clamp-4">{desc}</p>
		</div>
	</div>
);
export default Cards;
