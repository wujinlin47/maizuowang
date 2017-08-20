import React, {Component} from 'react'  


export default class AppHeader extends Component{
	
	
	render () {
		return (
				
			<div class="header-bar">  
				<div class="top-left">
					<span class="iconfont icon-menu"></span>
					<span>卖座电影</span>
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
}