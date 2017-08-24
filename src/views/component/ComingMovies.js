import React,{Component} from 'react'  

import filmSercive from '../../serveices/filmService.js' 

export default class FilmComingMovies extends Component{ 
	
	constructor () {    
		super();
		this.state ={   
			comingMoviesArr:[] 
		}
	}
	
	render () {
		let element = this.state.hotMoviesArr ? (this.state.hotMoviesArr.map( (item,index) => {
			return (
				<li key={index} class="dashed-border-bottom comingList"
					onClick={this.toDetailPage.bind(this,item.id)}> 
					<img src={item.img}/> 
					<div class="textIfo"> 
						<p>
							<span>{item.name}</span>   
							<span>></span> 
						</p>
						<p>{item.intro}</p>
						<p>
							<span>8月25日上映</span>
							<span>星期五</span>   
						</p>
					</div>
				</li>
			) 
		})) : null 
		
		return ( 
		 	<ul class="hotPage listPage">        
		 		 {element}     
		 	</ul> 
		)
	}
	
	//挂载前预加载数据
	componentWillMount () {  
		filmSercive.getComingMoviesData()     
		.then( (data) => {
			this.setState({hotMoviesArr:data})
//			console.log(data) 
		})
	}
	
	//点击进入详情页
	toDetailPage (id) {
//		console.log(this.props.history)    
//		console.log(id)          
		this.props.history.push('/home-detail',id)          
	}
}