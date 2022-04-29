import "./contact.scss";
import { httpLinksArray } from "./httplinks";

export default function Contact() {
	return (
		<div className="contact" id="contact">
			<div className="wrapper">
				<div className="left">
					<img src="assets/handshake-blue.svg" alt="" />
				</div>
				<div className="right">
					<h2>Want to say hi?</h2>
					<p>Ping me a message or an email and I'll respond ASAP :)</p>

					<span className="contactSpan">
						{httpLinksArray.map((oneLink) => {
							const { id, link, icon } = oneLink;
							return (
								<a key={id} rel="noreferrer" target="_blank" href={link}>
									<img src={icon} />
								</a>
							);
						})}
					</span>
				</div>
			</div>

			<footer>
				<p>
					Design By :{" "}
					<a
						rel="noreferrer"
						target="_blank"
						href="https://www.youtube.com/channel/UCDaToL45Vl822GCeH2eRMdw"
					>
						Vinayak Patrut
					</a>
				</p>
			</footer>
		</div>
	);
}
