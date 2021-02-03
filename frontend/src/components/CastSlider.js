import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

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
	}

	return (
		<Slider {...settings}>
			{cast.map((cast) => {
				return (
					<span className='movie__cast--span' key={cast.id}>
						<img
							key={cast.id}
							className='movie__cast--img'
							src={`https://image.tmdb.org/t/p/w185/${cast.profile_path}`}
							alt={cast.name}
							title={cast.name}
						></img>
					</span>
				)
			})}
		</Slider>
	)
}

export default CastSlider
