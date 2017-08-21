import React,{Component} from 'react'
           
import {BrowserRouter, Route} from 'react-router-dom'
//引入头部组件 
import AppHeader from './views/common/AppHeader.js'
//引入侧边栏组件
import SilderBar from './views/common/SilderBar.js'

       
//引入首页 
import Home from './pages/Home.js'
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
			show:false    
		} 
	}            
	 
	render () {
		 return (
		 	<BrowserRouter>  
		 		<div>           
		 			<AppHeader menuHandle={this.menuHandle.bind(this)}/>                 
		 			
		 			<Route path='/' render={({history,location})=>{  
		 				return <SilderBar show={this.state.show}
		 								  coverHideHandle={this.menuHandle.bind(this)}/>         
		 			}}/> 
		 		</div>   
		 	</BrowserRouter>                     	
		 )       
		
	}
	
	//调用menuHandle方法控制show的值 ，从而改变侧边栏和遮罩层的显示隐藏 
	menuHandle () {       
		this.setState({show:!this.state.show})  
	}           
	
}

