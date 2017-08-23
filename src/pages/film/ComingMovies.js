import React,{Component} from 'react'

//初始化滚动实例
let filmComingScroll = null;   

export default class FilmComingMovies extends Component{ 
	
	render () { 
		return (
			<div ref="comingPage" class="page comingPage main">      
			 	<div class="wrap">       
			 		
			 	</div> 
			</div>
		)
	}
	
	componentDidMount () {
		//挂载之后创建滚动实例
		filmComingScroll = new IScroll(this.refs.comingPage,{       
			probetype:3
		})
		filmComingScroll.on('scrollStart',() => {          
			filmComingScroll.refresh()                                                 
		})
	}
}