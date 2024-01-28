import React, { useEffect, useState } from 'react'
import '../styles/ProjectPartners.css'
import NavArrow from '../images/arrow-down.svg'

const ProjectPartners = () => {

	const [selectedSlide, setSelectedSlide] = useState('first')

	useEffect(() => {
		const interval = setInterval(() => {
		
			if (selectedSlide === 'first') {
				setSelectedSlide('second')
			} else if (selectedSlide === 'second') {
				setSelectedSlide('third')
			} else {
				setSelectedSlide('first')
			}
		}, 5000)
		return () => clearInterval(interval)
	}, [selectedSlide])

	return (
		<div id='project-partners-container'>
			<span id='project-partners-title'>პროექტის პარტნიორები</span>

			<img id='nav-arrow-left' src={NavArrow} />
			<img id='nav-arrow-right' src={NavArrow} />

			<div id='slider-container'>

				<div style={{ opacity: selectedSlide === 'first' ? '100%' : '0', transition: 'opacity 1s ease-out' }} id='partners-slide-1'>
					<img style={{ width: '219px' }} src='https://static.wixstatic.com/media/93e8a3_a356bb7d201f4f47870683655e9e4120~mv2.png/v1/fill/w_438,h_132,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%204_2x_edited.png' />
					<img style={{ width: '200px' }} src='https://static.wixstatic.com/media/93e8a3_eaf33552ffd5463e96a5f776dda00111~mv2.png/v1/fill/w_400,h_132,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/White%20horiz.png' />
					<img style={{ width: '250px' }} src='https://static.wixstatic.com/media/93e8a3_ae4ade72135b4c7eaa531290232fe5aa~mv2.png/v1/fill/w_500,h_90,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/93e8a3_ae4ade72135b4c7eaa531290232fe5aa~mv2.png' />
				</div>

				<div style={{ opacity: selectedSlide === 'second' ? '100%' : '0', transition: 'opacity 1s ease-out' }} id='partners-slide-2'>
					<img style={{ width: '180px' }} src='https://static.wixstatic.com/media/93e8a3_b595f31239344928802dd7135813e17c~mv2.png/v1/fill/w_248,h_71,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Tegeta%20logo%20geo.png'></img>
					<img style={{ width: '131px' }} src='https://static.wixstatic.com/media/93e8a3_aca86c1c067d4f8585c3c2cb1b0a0178~mv2.png/v1/fill/w_187,h_64,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/93e8a3_aca86c1c067d4f8585c3c2cb1b0a0178~mv2.png'></img>
					<img style={{ width: '220px' }} src='https://static.wixstatic.com/media/93e8a3_b6ed8fb2602e4670bc83d1fd4a7d9283~mv2.png/v1/fill/w_312,h_95,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/MicrosoftTeams-image%20(9).png'></img>
				</div>

				<div style={{ opacity: selectedSlide === 'third' ? '100%' : '0', transition: 'opacity 1s ease-out' }} id='partners-slide-3'>
					<img style={{ width: '232px' }} src='https://static.wixstatic.com/media/93e8a3_ef7860c1a2854f1c8fc20f867ffa30ab~mv2.png/v1/fill/w_227,h_64,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/UFC%20GEO%20PNG_edited.png'></img>
				</div>
			</div>

			<nav>
				<span onClick={() => setSelectedSlide('first')} className='nav-bullets'></span>
				<span onClick={() => setSelectedSlide('second')} className='nav-bullets'></span>
				<span onClick={() => setSelectedSlide('third')} className='nav-bullets'></span>
			</nav>
		</div>
	)
}

export default ProjectPartners