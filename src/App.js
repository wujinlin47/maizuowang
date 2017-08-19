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

          
export default class App extends Component{       
	 
	render () {
		 return (
		 	<BrowserRouter> 
		 		<div id="router">
		 			<AppHeader /> 
		 			<SilderBar />
		 			<Route path="/" exact component={Home}/>
		 		</div>   
		 	</BrowserRouter>                   	
		 )       
		
	}
}

