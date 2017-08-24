import React, {Component} from 'react' 

import {Link} from 'react-router-dom'      
 
//引入侧边栏数据信息       
import menu from '../../serveices/sliderBarIfo.js'       

export default class SliderBar extends Component{ 
	
	render () {
		//侧边栏滑进滑出控制
		let sliderBarStyle = {  
			transform: this.props.show ? 'none' : 'translateX(-100%)'  
		}
		//遮罩层显示与隐藏
		let coverOpacityStyle = {
			background: this.props.show ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0)',
			display: this.props.show ? 'block' : 'none' 
		} 
		//判断路由路径,如果为'/shop'则换为商城的侧边栏数据
		let data = this.props.pathName === '/shop' ? menu.shopSliderBarIfo : menu.homeSliderBarIfo             
		//console.log(data);  
		
		//div.cover为遮罩层       
		//nav.slider-bar为侧边栏                         
		return (   
			<div> 
			
				<div class="cover" style={coverOpacityStyle} 
								   onClick={this.hide.bind(this)}></div>     
				
				<nav class="slider-bar" style={sliderBarStyle}> 
					{
						data.map( (item,index) => {      
							return  <a key={index} onClick={this.toPage.bind(this,item.path,item.headerTitle)} 
												   class='one-border-bottom'>{item.title}</a>       
						})    
					}
				</nav>      
			</div> 
		)
	}
	
	//调用父组件App中的hideHandle方法隐藏侧边栏和遮罩层
	hide () {                                        
		this.props.coverHideHandle();                                
	}      
	//点击侧边栏进行页面跳转
	//用history传参传的一个对象就是location中的pathname和state,所以跳转页面用location去接收数据
	toPage (pathName,headerTitle) { 
		this.props.history.push({
			pathname:pathName, 
			state:{
				selectAction:0
			}
		});
		this.props.coverHideHandle(headerTitle);       
	} 
	
}