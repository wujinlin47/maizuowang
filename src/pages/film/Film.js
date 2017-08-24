import React,{Component} from 'react'  

//引入film样式
import '../../css/film.css'      

//引入热映电影组件
import FilmHotMovies from '../../views/component/Hotmovies.js'         
//引入即将上映组件
import FilmComingMovies from '../../views/component/ComingMovies.js'  

//初始化滚动实例
let filmScroll = null; 

//引入影片页面的数据信息
import FilmIfo from '../../serveices/filmIfo.js'   

export default class Film extends Component{  
	constructor ({history,location}) {     
		super();
//		console.log(location)
    	console.log(history)  
		this.state = {       
			//当该值为0时默认热映电影组件显示 
			selectAction:0,
			history,   
			location    
		}
	}
	
	render () {
		{/*通过变量控制组件的显示*/}
		 let element = this.state.selectAction === 0 ? <FilmHotMovies history={this.state.history}/> : <FilmComingMovies history={this.state.history}/>     
		return ( 
			<div ref="filmPage" class="page main filmPage">   
				<div class="wrap">
				 	<div class="tab one-border-bottom"> 
				 		{
				 			FilmIfo.filmIfo.map( (item,index) => { 
				 				return ( 
				 					<span key={index} onClick={this.ShowAction.bind(this,index)}
				 					  class={this.state.selectAction === index ? 'active' : ''}>                            
				 						{item.tabName}          
				 					</span>               
				 				)
				 			})
				 		}
				 	</div>
				 	{element}  
			 	</div> 
			</div>
		)
	}
	
	componentWillMount () {
//		console.log(this.state.history)    
		//接受从Home页面传递过来的参数，改变selectAction的值从而控制两个组件的显示   
		this.setState({selectAction:this.state.history.location.state.selectAction})  
//		console.log(this.state.selectAction)//0     
	}
	componentDidMount () {
		//挂载之后创建IScroll实例 
		filmScroll = new IScroll(this.refs.filmPage,{
			probetype:3
		})
		//监听滚动时时更新数据
		filmScroll.on('scrollStart', () => { 
			filmScroll.refresh();  
		})
	}
	
	//通过该点击事件改变变量的值，从而控制组件的显示和销毁
	ShowAction (index) {
		this.setState({selectAction:index})    
	}
	
	
}
