import React, {Component} from 'react'  
 

export default class AppHeader extends Component{ 
	
	
	render () {
		return (  
				
			<div class="header-bar one-border-bottom" onClick={this.headerBarControlHide.bind(this)}>                      
				<div class="top-left">      
					<span class="iconfont icon-menu" onClick={this.sliderBarShow.bind(this)}></span>     
					
					<span>{this.props.title}</span>              
				</div>
				<div class="top-right"> 
					<p>
						<span>深圳</span>
						<span class="iconfont icon-arrow-down"></span>  
					</p>
					<em class="iconfont icon-person"></em>         
				</div> 			
			</div> 
				
		)
	}
	
	sliderBarShow () {
		//调用App.js中AppHeader组件中的menuHandle方法   
		this.props.menuHandle();                   
	}
	
	headerBarControlHide () {
		//调用App.js中AppHeader组件中的menuHandle方法                 
		this.props.menuHandle(); 
	}
	
}