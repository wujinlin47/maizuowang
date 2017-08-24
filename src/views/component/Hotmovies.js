import React,{Component} from 'react'

//引入影片页面的动态数据请求
import filmSercive from '../../serveices/filmService.js'   


export default class FilmHotMovies extends Component{  
	constructor () {
		super();
		this.state ={ 
			hotMoviesArr:[]
		}
	}
	
	render () {
		let element = this.state.hotMoviesArr ? (this.state.hotMoviesArr.map( (item,index) => {
			return (
				<li key={index} class="dashed-border-bottom hotList"
					onClick={this.toDetailPage.bind(this,item.id)}>
					<img src={item.img}/>
					<div class="textIfo">
						<p>
							<span>{item.name}</span>
							<span>{item.grade}<em>></em></span> 
						</p>
						<p>{item.intro}</p>
						<p>
							<span>{item.cinemaCount}</span>家影院上映
							<span>{item.watchCount}</span>人购票
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
		filmSercive.getHotMoviesData()   
		.then( (data) => {
			this.setState({hotMoviesArr:data})
//			console.log(data)
		})
	}
	
	//点击进入影片详情页
	toDetailPage (id) { 
		this.props.history.push('/home-detail',id)                  
	}
}