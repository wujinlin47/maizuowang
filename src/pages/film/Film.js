import React,{Component} from 'react'  

//引入film样式
import '../../css/film.css' 

//引入影片页面的动态数据请求
import filmSercive from '../../serveices/filmService.js'  

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
//  	console.log(history)  
		this.state = {       
			//当该值为0时默认热映电影组件显示 
			selectAction:0,
			hotMoviesArr:[],
			arr:[],
			history,   
			location,
			count:1
		}
	}
	
	render () {
		{/*通过变量控制组件的显示*/}
		 let element = this.state.selectAction === 0 ? <FilmHotMovies history={this.state.history} hotMoviesArr={this.state.hotMoviesArr}/> : <FilmComingMovies history={this.state.history}/>     
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
	
	//数据请求的函数  
	scroll (val) {  
		//刚进页面是初始加载数据
		filmSercive.getHotMoviesData(val)   
		.then( (data) => {
			//将每一次请求回来的数据福放入到数组中                    
			this.state.hotMoviesArr.push(...data)  
			this.setState({hotMoviesArr:this.state.hotMoviesArr}) 
//			console.log(data) 
		}) 
	}
	 
	componentWillMount () {         
//		console.log(this.state.history)    
		//接受从Home页面传递过来的参数，改变selectAction的值从而控制两个组件的显示   
		this.setState({selectAction:this.state.history.location.state.selectAction})
//		console.log(this.state.selectAction)//0 
		//页面挂载时加载的数据 ，调用数据请求的函数，请求第一页数据 
		this.scroll(1) 
	}
	
	
	componentDidMount () {
		//挂载之后创建IScroll实例 
		filmScroll = new IScroll(this.refs.filmPage,{
			probetype:3
		})        
		 
		//监听滚动时时更新数据
		filmScroll.on('scrollEnd', () => {
//			console.log(filmScroll);//滚动实例
//			console.log(filmScroll.y);//当前滚动的距离
//			console.log(filmScroll.maxScrollY);//随大滚动距离   
			//获取滚动容器的高度
			var contentHeight = this.refs.filmPage.offsetHeight
		 	console.log(contentHeight)
		 	//每次更新上拉刷新之后的最大滚动值
		 	var maxScroll = this.state.count*7*120+30 - contentHeight
		 	//console.log(1111,b)
		 	//每次上拉的距离 
		 	var scrollDistance = Number(filmScroll.y) 
		 	//console.log(2222,c)
		 //判断加载的条件
		 	if ( -maxScroll == scrollDistance ) {       
		 		//没满足加载条件加载之后count加1(从第2页开始加载)        
		 		this.setState({count:this.state.count+1},()=>{
		 			//每次符合条件之后将页数+1，直至最后一页
		 			//console.log(this.state.count) 
		 		})
		 		
//		 		filmSercive.getHotMoviesData()   
//				.then( (data) => {
//					this.setState({hotMoviesArr:data})
//		//			console.log(data)
					//每次符合条件调用数据请求函数，从第二条开始
					this.scroll(this.state.count); 
//				})
				  
		 	}
			filmScroll.refresh();   
		})
	}
	
	//通过该点击事件改变变量的值，从而控制组件的显示和销毁
	ShowAction (index) { 
		this.setState({selectAction:index})      
	} 	
}
