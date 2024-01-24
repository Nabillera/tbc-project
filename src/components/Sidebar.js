import React from 'react'
import { RxCross1 } from "react-icons/rx";
import '../styles/Sidebar.css'

const Sidebar = ({ onClose }) => {
	return (
		<div id='sidebar-container'>
			<RxCross1 onClick={onClose} size={28} style={{ alignSelf: 'end', margin: '5px' }} />
			<ul id='sidebar-list'>
				<li><a>მთავარი</a></li>
				<li><a>TBC IT</a></li>
				<li><a style={{ color: '#00A3E0' }}>TBC x USAID</a></li>
				<li><a>რისკები</a></li>
			</ul>
		</div>
	)
}

export default Sidebar