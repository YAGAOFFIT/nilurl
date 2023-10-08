import "./Links.css";

function Link() {
  return (
<div className="item">
		<div className="object">
			<div className="data">
				<img alt="github.com" src="https://dub.sh/_next/image?url=https%3A%2F%2Fwww.google.com%2Fs2%2Ffavicons%3Fsz%3D64%26domain_url%3Dgithub.com&amp;w=48&amp;q=75&amp;dpl=dpl_7f8T3xE81dcV2n5pwdakmbxaEFhr" id="img" width="20" height="20"/>
				<div className="content">
					<a href="" className="sh-link" name="sh_link">dub.sh/github</a>
					<button svg="" className="copi"> <svg fill="none" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="14" height="14" class="text-gray-700 transition-all group-hover:text-blue-800"><path d="M8 17.929H6c-1.105 0-2-.912-2-2.036V5.036C4 3.91 4.895 3 6 3h8c1.105 0 2 .911 2 2.036v1.866m-6 .17h8c1.105 0 2 .91 2 2.035v10.857C20 21.09 19.105 22 18 22h-8c-1.105 0-2-.911-2-2.036V9.107c0-1.124.895-2.036 2-2.036z"></path></svg>
					</button>
					<p className="lon-link" name="lon-link">https://github.com/steven-tey/dub</p>
				</div>
				
			</div>
			<div className="click"> 
				<svg fill="none" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="14" height="14">
					<path d="M12 20V10"></path>
					<path d="M18 20V4"></path>
					<path d="M6 20v-4"></path>
				</svg>
				<p className="text" name="val-click">104<span>clicks</span></p>
				<button type="button" class="function" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:ri:" data-state="closed">
					<svg fill="none" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="14" height="14">
						<circle cx="12" cy="12" r="1"></circle>
						<circle cx="12" cy="5" r="1"></circle>
						<circle cx="12" cy="19" r="1"></circle>
					</svg>
				</button>
			</div>
		</div>
			
			{/* опции ссылки */}
			<div className="close" id="edit" data-radix-popper-content-wrapper="" style={{display:"none"}}>
				<div data-side="bottom" data-align="end" data-state="open" role="dialog" id="radix-:ri:" class="edit-cont" tabindex="-1" >
					<div className="edit-item">
						<button className="edit-btn">
							<div className="edit-btn_iner">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
									<path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
								</svg>
								<p className="text-sm">Edit</p>
							</div>
						</button>
						<button className="edit-btn">
							<div className="edit-btn_iner">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<rect width="5" height="5" x="3" y="3" rx="1"></rect>
									<rect width="5" height="5" x="16" y="3" rx="1"></rect>
									<rect width="5" height="5" x="3" y="16" rx="1"></rect>
									<path d="M21 16h-3a2 2 0 0 0-2 2v3"></path>
									<path d="M21 21v.01"></path>
									<path d="M12 7v3a2 2 0 0 1-2 2H7"></path>
									<path d="M3 12h.01"></path>
									<path d="M12 3h.01"></path>
									<path d="M12 16v.01"></path>
									<path d="M16 12h1"></path>
									<path d="M21 12v.01"></path>
									<path d="M12 21v-1"></path>
								</svg>
								<p className="text-sm">QR Code</p>
							</div>
						</button>
						<button className="edit-btn">
							<div className="edit-btn_iner">
								<svg style={{}} fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24" >
									<path d="M3 6h18"></path>
									<path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"></path>
									<path d="M10 11v6"></path>
									<path d="M14 11v6"></path>
								</svg>
								<p className="text-sm" >Delete</p>
							</div>
						</button>
					</div>
				</div>
			</div>
	</div>

		)
	}
	
	export default Link;