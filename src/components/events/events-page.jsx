import React from "react";
import Image from "next/image";
import Link from "next/link";

const AllEvents = ({ data }) => {
	return (
		<div className="events_page">
			{data.map((ev) => (
				<Link
					className="card"
					key={ev.id}
					href={`/events/${ev.id}`}
					passHref>
					<Image
						alt={ev.title}
						src={ev.image}
						width={400}
						height={400}
					/>
					<h2>{ev.title}</h2>
				</Link>
			))}
		</div>
	);
};

export default AllEvents;
