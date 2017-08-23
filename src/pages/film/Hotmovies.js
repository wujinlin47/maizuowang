import React,{Component} from 'react'

//初始化滚动实例
let filmHotScroll = null;

export default class FilmHotMovies extends Component{ 
	
	render () { 
		return (
			<div ref="hotPage" class="page hotPage main">  
			 	<div class="wrap">       
			 		
			 	</div> 
			</div>
		)
	}
	
	componentDidMount () {
		//挂载之后创建滚动实例
		filmHotScroll = new IScroll(this.refs.hotPage,{
			probetype:3
		})
		filmHotScroll.on('scrollStart',() => {           
			filmHotScroll.refresh()                  
		})
	}
}