import React,{Component} from 'react' 

//引入homeServices中请求数据的函数
import homeService from '../../serveices/homeService.js'  

export default class HomeDetial extends Component{ 
	constructor ({history,location,match}) {
		//console.log(history)//第一个参数写跳转路径，第二个参数为跳转传的参数
		//console.log(location)//可以取到Home页面history传过来的参数location.state  
		//console.log(match) 
		super();
		this.state = {
			location,
			DetailIfo:{} 
		}
	} 
	
	render () {
		{/*DetailIfo为对象，当为空时map遍历会报错*/}  
		let element = this.state.DetailIfo.actors ? (<p class="actors">
					主&nbsp;&nbsp;演:{   
						this.state.DetailIfo.actors.map( (item,index) => {   
							return (
								<span key={index}>{item.name}<em>|</em></span>        
							)      
						})         
					}  
				</p>) : null           
		return (
			<div class="page homeDetailPage clear">   
				<img src={this.state.DetailIfo.img} /> 
				<div class="title">
					<span></span>
					<span>影片简介</span>
				</div>
				<p class="director">导&nbsp;&nbsp;演：{this.state.DetailIfo.director}</p>
				{element} 
				<p class="nation">
					地区语言:{this.state.DetailIfo.nation}
					({this.state.DetailIfo.language})
				</p>
				<p>类&nbsp;&nbsp;型:{this.state.DetailIfo.category}</p>
				<p>上映时间:2017年8月23日</p>
				
				<p>{this.state.DetailIfo.synopsis}</p> 
				
				<div class="buyTicket">立即购票</div>   
			</div> 
		)
	}
	
	//等挂载之后进行数据请求
	componentDidMount () {       
		homeService.getHomeDetailData(this.state.location.state)                
		.then( (data) => {     
			console.log(data)             
			this.setState({DetailIfo:data})    
		})
	}
}
