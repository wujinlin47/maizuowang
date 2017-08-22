import React,{Component} from 'react'
           
import {BrowserRouter, Route} from 'react-router-dom'
//引入头部组件 
import AppHeader from './views/common/AppHeader.js'
//引入侧边栏组件
import SilderBar from './views/common/SilderBar.js'

       
//引入首页 
import Home from './pages/Home.js'
//引入首页详情页
import HomeDetial from './pages/HomeDetial.js'  
//引入影片            
import Film from './pages/Film.js'
//引入影院
import Cinema from './pages/Cinema.js'  
//引入商城
import Store from './pages/Store.js'
//引入我的
import My from './pages/My.js'
//引入卖座卡
import Card from './pages/Card.js'  

//引入app.css样式
import './css/app.css' 

          
export default class App extends Component{       
	constructor () {
		super();
		this.state = {  
			show:false,
			headerTitle:'卖座电影'               
		} 
	}            
	 
	render () {
		 return (
		 	<BrowserRouter>  
		 		<div>           
		 			<AppHeader menuHandle={this.menuHandle.bind(this)}
		 					   title={this.state.headerTitle}/> 
		 			
		 			<Route path='/' render={({history,location,match})=>{
		 				//console.log(location); 
		 				//console.log(history); 
		 				//console.log(match);   
		 				return <SilderBar show={this.state.show}
		 								  coverHideHandle={this.menuHandle.bind(this)}
		 								  history={history} 
		 								  pathName={location.pathname}/>             
		 			}}/> 
		 			<Route path='/' exact component={Home} />
		 			<Route path='/home-detail' component={HomeDetial} />         
		 			<Route path='/film' component={Film} />  
		 			<Route path='/cinema' component={Cinema} />    
		 			<Route path='/shop' component={Store} />      
		 			<Route path='/my' component={My} />    
		 			<Route path='/card' component={Card} />                   
		 		</div>   
		 	</BrowserRouter>                     	
		 )       
		
	}
	
	//调用menuHandle方法控制show的值 ，从而改变侧边栏和遮罩层的显示隐藏 
	menuHandle (headerTitle) {       
		this.setState({show:!this.state.show})       
		//判断headerTitle是否为空，如果为空则给其初始化一个值    
		if (headerTitle) {
			this.setState({headerTitle})
		} 
		  
	}           
	
}

