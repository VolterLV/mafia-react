import React from 'react'

export default function Helper() {
	return (
		<div className='helper__form'>
			<div className='player__body'>
				<div className='player__number'>Игрок: 1</div>
				<div className='player__role'>мафия</div>
				<div id='timer' className='player__counter '>
					<p id='secundomer' className='card__main-text'></p>
					<a id='start' className='main-button' type='button'>
						старт
					</a>
					<a id='stop' className='main-button' type='button'>
						стоп
					</a>
					<a id='cancel' className='main-button' type='button'>
						ресет
					</a>
				</div>
				<div className='player__fals'>фолы: 2</div>
			</div>
		</div>
	)
}
