import React, {Component} from 'react' 

import {Link} from 'react-router-dom'      
 
//引入侧边栏数据信息       
import menu from '../../serveices/sliderBarIfo.js'      

export default class SliderBar extends Component{ 
	
	render () {
		let sliderBarStyle = {
			transform: this.props.show ? 'none' : 'translateX(-100%)'  
		}
		let coverOpacityStyle = {
			background: this.props.show ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0)',
			display: this.props.show ? 'block' : 'none' 
		} 
		 
		
		//div.cover为遮罩层 
		//nav.slider-bar为侧边栏                
		return (   
			<div> 
			
				<div class="cover" style={coverOpacityStyle} 
								   onClick={this.hide.bind(this)}></div>    
				
				<nav class="slider-bar" style={sliderBarStyle}> 
					{
						menu.homeSliderBarIfo.map( (item,index) => {
							return 
								<Link>{item.title}</Link>
							
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
	
	
}