import React, {Component} from 'react'

//引入home样式
import '../css/home.css'                         

//引入homeService中暴露的请求函数
import homeService from '../serveices/homeService.js' 

//定义滚动实例
let homeScroll = null;
//定义轮播实例
let homeSwiper = null; 

export default class Home extends Component{    
	 constructor ({history}) {
	 	super();
//	 	console.log(history);      
	 	this.state ={
	 		history,       
	 		bannerData:[],         
	 		hotMovies:[],
	 		comingMovies:[]
	 	}
	 }

	render () {
		return (
			<div ref="homePage" class="page main homePage">  
				<div class="wrap">
					<div ref="homeBanner" class="swiper-container home-banner">                           
					    <ul class="swiper-wrapper">   
					        {
					        	this.state.bannerData.map( (item,index) => { 
					        		return (
					        			<li key={index} class="swiper-slide">                 
							        		<img src={item.imageUrl} />     
							        	</li>
							        )
					        	}) 
					        }
					    </ul>
					</div>
					
					<div class="hot-movies"> 
						{
							this.state.hotMovies.map( (item,index) => {
								return (
									<div key={index} class="filmIfo" 
													 onClick={this.tohomeDetailPage.bind(this,item.id)}>
										<img src={item.img}/>
										<div class="textIfo">
											<p>
												<span>{item.name}</span><br/>
												<span>{item.cinemaCount}家影院上映{item.watchCount}人购票</span>
											</p>
											<p>
												{item.grade}   
											</p>
										</div>
									</div>
								)
							})
						}
					</div>
					
					<div class="hotMore">
						更多热映电影 
					</div>
					
					<div class="line-title">
						<div class="line"></div>
						<div class="font">即将上映</div>       
					</div>
					
					<div class="coming-movies"> 
						{
							this.state.comingMovies.map( (item,index) => {
								return (
									<div key={index} class="filmIfo"
													 onClick={this.tohomeDetailPage.bind(this,item.id)}> 
										<img src={item.img}/>
										<div class="textIfo">
											<p>
												{item.name}     	
											</p>  
											<p>
												{item.grade}    
											</p>
										</div>
									</div>
								)
							})
						}
					</div>
					
					<div class="comingMore">                    
						更多即将上映电影          
					</div>
					
					<div class="empty"></div>
				</div>
			</div>  
		)
	}
	
	 
	//在将要挂载之前请求数据
	componentWillMount () {
		//首页轮播图
		homeService.getHomeBanner() 
		.then( (data) => {
			//因为设置了循环所以要添加第一张到最后一张
			data.splice(0,0,data[data.length-1])  
			//讲最后一张添加到第一张，注意上述添加完成之后数组已经改变，第一张已经变成第二种张
			data.push(data[1]) 
			//console.log(data);  
			this.setState({bannerData:data})
			//刷新数据,使轮播图滑动                                                          
			homeSwiper.update()                
			//将图片滚动到新数组的第二张   
			homeSwiper.slideTo(1,0)            
			
//			console.log(data);     
			
		})
		
		//首页热映电影
		homeService.getHomeHotMovie()
		.then( (data) => {
//			console.log(data)
			this.setState({hotMovies:data}) 
		})
		
		
		//首页即将上映
		homeService.getHomeComingMovie()
		.then( (data) => {
//			console.log(data)      
			this.setState({comingMovies:data})  
		})
		
		
	}
	
	componentDidMount () {
		//挂载之后创建IScroll实例 
		homeScroll = new IScroll(this.refs.homePage,{              
			probetype:3
		})
		//监听滚动发生即刷新滚动实例
		homeScroll.on('scrollStart',() => {          
			homeScroll.refresh();  
		})
		
		//挂载之后创建swiper实例
		homeSwiper = new Swiper(this.refs.homeBanner,{     
			loop:true
		}) 
		            
	}
	
	//通过点击事件跳转首页详情页
	tohomeDetailPage (id) {
		this.state.history.push('/home-detail',id)                       
	}
	
}
