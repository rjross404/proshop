import React from 'react'

const Rating = ({ value, text, color = '#f8e825' }) => {
	const stars = [1, 2, 3, 4, 5].map((star) => (
		<span>
			<i
				style={{ color }}
				className={
					value >= star
						? 'fas fa-star'
						: value >= star - 0.5
						? 'fas fa-star-half-alt'
						: 'far fa-star'
				}
			></i>
		</span>
	))
	return (
		<div className='rating'>
			{stars}
			<span>{text && text}</span>
		</div>
	)
}

export default Rating
