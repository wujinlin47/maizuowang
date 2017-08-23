import React, {Component} from 'react'

//引入电影页面数据信息 
import FilmIfo from '../serveices/filmIfo.js'

//引进电影页面的样式
import '../css/film.css' 

//定义影片滚动实例
let filmIScroll = null

export default class Film extends Component{
	constructor () { 
		super();
		this.state = {
//			 selectNav:0  
		}
	}

	render () {
//		let element = this.state.selectNav === 0 ? (<div class="hotMovies">1</div>) : (<div class="comingMovies">2</div>) 
		return (
			<div ref="filmPage" class="page main filmPage">   
//				<div class="tab one-border-bottom"> 
//					{
//						FilmIfo.filmIfo.map( (item,index) => { 
//							return (
//								<span key={index} class={index === this.state.selectNav ? 'active' : ''}
//								      onClick={this.selectNav.bind(this,index)}>
//									{item.title}
//								</span>       
//							)       
//						})             
//					}
//				</div>
//				{element}
			</div>  
		)
	}
	
	
	componentDidMount () {
		//挂载完成之后创建IScroll实例
		filmIScroll = new IScroll (this.refs.filmPage,{ 
			probetype:3
		})
		//监听滚动进行实时刷新
		filmIScroll.on('scrollStart',() => {
			filmIScroll.refresh();  
		})
	}
	
//	selectNav (index) {
//		this.setState({selectNav:index}) 
//	}
}
