import './App.scss'
import video from './img/video (2).mp4'
import React, { useState, useEffect } from 'react'
import pictureMI from './img/cute-new-born-lamb-bob-van-den-berg-photography.jpg'
import pictureMF from './img/1550944291_dobryy-volk-art.jpg'
import pictureK from './img/sher.jpg'
import pictureD from './img/image_562609151347263189912.png'
import Helper from './Helper'

function App() {
	const [counterUser, setCounterUser] = useState('10')

	useEffect(() => {
		if (counterUser > 30) {
			alert('Не вводите так много!')
			setCounterUser(10)
		} else {
			if (counterUser == '' || counterUser == undefined) {
				alert('Введите какое либо значение')
			} else {
				buttonClick()
			}
		}
	}, [counterUser])

	const buttonClick = () => {
		let buttonEl = document.querySelector('.action')
		if (buttonEl) {
			buttonEl.addEventListener('click', filterHandler)
		}
	}

	const filterHandler = () => {
		let counterUser_massiv = []
		let area_rand = []
		let masCopy = []
		let picture
		let rand
		let copyText = ''
		let i = 1
		let i_new = 1
		let roles_massiv = ['Мафия', 'Комиссар', /* 'Доктор', */ 'Дон']
		let mafia = Math.floor(counterUser / 4)

		document.querySelector('.card__bodya').innerHTML = ''
		while (roles_massiv.length != mafia + 2) {
			roles_massiv.push('Мафия')
		}
		while (roles_massiv.length != counterUser) {
			roles_massiv.push('Мирный')
		}
		while (counterUser_massiv.length != counterUser) {
			counterUser_massiv.push(i)
			i = i + 1
		}
		for (
			let counter = 0;
			counter < counterUser_massiv.length;
			counter = counter + 1
		) {
			rand = Math.floor(Math.random() * counterUser_massiv.length)
			while (area_rand.indexOf(rand) != -1) {
				rand = Math.floor(Math.random() * counterUser_massiv.length)
			}
			if (area_rand.indexOf(rand) == -1) {
				area_rand.push(rand)
			}
			if (roles_massiv[rand] == 'Мирный') {
				picture = pictureMI
			}
			if (roles_massiv[rand] == 'Мафия') {
				picture = pictureMF
			}
			if (roles_massiv[rand] == 'Дон') {
				picture = pictureD
			}
			/* 			if (roles_massiv[rand] == 'Доктор') {
				picture = pictureM
			} */
			if (roles_massiv[rand] == 'Комиссар') {
				picture = pictureK
			}
			/* 				console.log(i_new + '   ' + roles_massiv[rand]) */
			masCopy = [...masCopy, roles_massiv[rand]]
			let mapnumber = 1
			let newmassrand = masCopy.map(function (num) {
				return ' ' + mapnumber++ + '.' + ' ' + num
			})

			document.querySelector('.card__bodya').classList.add('run-animation')
			document.querySelector('.card__bodya').innerHTML += `
										<div class="card__item">
											<div class="card__picture">
												<img src="${picture}" alt="">
											</div>
											<div class="card__info">
												<div class="card__number">${i_new}</div>
												<div class="card__name">${roles_massiv[rand]} </div>
											</div>
										</div >`

			document.querySelector('.card__end').innerHTML = 'Веселой вам игры!'
			/* 	толтип */

			document.querySelector('.button-copy').onclick = function () {
				copyText = newmassrand

				var clipboard = navigator.clipboard
				if (clipboard == undefined) {
					console.log('clipboard is undefined')
				} else {
					clipboard
						.writeText(copyText)
						.then(() => {
							// Получилось!
							alert('Скопировано')
						})
						.catch(err => {
							alert('Ошыбка')
						})
				}
			}
			let tooltip = document.getElementById('myTooltip')
			tooltip.innerHTML = '' + newmassrand

			function outFunc() {
				let tooltip = document.getElementById('myTooltip')
				tooltip.innerHTML = 'Скопировать роли'
			}
			function outFuncin() {
				let tooltip = document.getElementById('myTooltipin')
				tooltip.innerHTML = 'Скопировать роли'
			}
			i_new = i_new + 1
			/* 	толтип */
		}
	}

	return (
		<div className='App'>
			<main className='page'>
				<video autoPlay muted loop id='myVideo'>
					<source src={video} type='video/mp4' />
				</video>
				<marquee
					className='text__balance-test '
					direction='down'
					behavior='alternate'
				>
					<marquee behavior='alternate'>{/*  Баланс! */} Б А Л А Н С !</marquee>
				</marquee>

				<section className='page__main main'>
					<ol className='rootpage__list'>
						{/* 	<li><a target="_blank" href="helper.html">Калькулятор</a></li>  */}
					</ol>
					<div className='main__container _container'>
						<div className='main__body'>
							<div className='main__content content-main'>
								<div className='mafia'>
									<div className='form-row'>
										<div className=''>
											<p className='card__end'>Количество игроков </p>
											<input
												type='number'
												className='form-control user-form form-number'
												id='user-form'
												placeholder='Количество игроков'
												min='0'
												required
												value={counterUser}
												onChange={event => setCounterUser(event.target.value)}
											/>
										</div>
									</div>
									<a type='button' className='main-button action'>
										<span>Получить роли</span>{' '}
									</a>
									<div className='tooltip'>
										<a
											type='button'
											/* 											onMouseOut='outFunc()' */
											className='main-button button-copy'
										>
											<span className='tooltiptext' id='myTooltip'>
												Скопировать в буфер обмена
											</span>
											<span>Скопировать роли</span>{' '}
										</a>
									</div>
									<div className='card__container'>
										<div className='card__bodya card__main-text'>
											<span>
												Выберите количество игроков. Потом нажмите "Получить
												роли".{' '}
											</span>
										</div>
									</div>

									<div className='helper__body'>
										<p className='card__end helper'>Помошник ведущему</p>

										<a type='button' className='main-button action-helper'>
											<span>Helper</span>{' '}
										</a>
										<Helper />
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>{' '}
		</div>
	)
}

export default App
