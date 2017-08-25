import React, {Component} from 'react'

//引入样式表
import '../../css/cinema.css'  

//引入cinemaService的数据请求
import cinemaService from '../../serveices/cinemaService.js'

export default class Cinema extends Component{
	constructor () { 
		super();
		this.state = {      
			areaObj:[],
			showIndex:0,
		}
	}       
	
	
	render () {              
		return (           
			<div class="page cinemaPage"> 
					{
						this.state.areaObj.map( (item,index) => {  
							return( 
								<div key={index} class="area">   
									<div class="areaList" onClick={this.eareShow.bind(this,index)}>{item.area}</div>       
									<ul class={"addressList " + (this.state.showIndex===index  ? "showActive" : "")}> 
										{  
											item.value.map( (val,i) => {       
												return (   
													<li key={i} class="address one-border-bottom">  
														<p> 
															{val.address}     
														</p>
													</li>
												)
											})
										}
									</ul> 
								</div>
							)
						})           
					}
			</div>     
		)
	}
	
	//在将要挂载的是进行数据预加载
	componentWillMount () {
		cinemaService.getCinemaAddress()
		.then( (data) => {
			console.log(data)
			this.setState({areaObj:data}) 
		})
	}
	
	//通过点击改变为当前下标的值
	eareShow (index) { 
		console.log(index) 
		this.setState({showIndex:index})  
	}
}
