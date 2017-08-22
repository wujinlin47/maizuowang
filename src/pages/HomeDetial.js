import React,{Component} from 'react' 

//引入homeServices中请求数据的函数
import homeService from '../serveices/homeService.js' 

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
		return (
			<div class="page"> 
				<img src={this.state.DetailIfo.img} />           
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
