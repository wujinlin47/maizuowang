import React, {Component} from 'react'

//引入cinemaService的数据请求
import cinemaService from '../../serveices/cinemaService.js'

export default class Cinema extends Component{
	
	
	render () {
		return (
			<div class="page">
				影院
			</div>
		)
	}
	
	//在将要挂载的是进行数据预加载
	componentWillMount () {
		cinemaService.getCinemaAddress()
		.then( () => {
			
		})
	}
}
