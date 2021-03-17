import React from 'react'
import PropTypes from 'prop-types'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// TODO: Icon when there isnt a profile_path available?
const CastSlider = ({ cast }) => {
	const settings = {
		dots: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		swipeToSlide: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 5,
				},
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 4,
				},
			},
		],
	}

	return (
		<Slider {...settings}>
			{cast.map((cast) => {
				return (
					<span className='movie__cast--span' key={cast.id}>
						{cast.profile_path ? (
							<img
								key={cast.id}
								className='movie__cast--img'
								src={
									cast.profile_path &&
									`https://image.tmdb.org/t/p/w185/${cast.profile_path}`
								}
								alt={cast.name}
								title={cast.name}
							></img>
						) : (
							<img
								key={cast.id}
								className='movie__cast--img'
								alt={cast.name}
								title={cast.name}
							></img>
						)}
					</span>
				)
			})}
		</Slider>
	)
}

CastSlider.propTypes = {
	cast: PropTypes.array.isRequired,
}

export default CastSlider
