import React ,{Component} from 'react'

//引入Citysevice进行数据请求
import Citysevice from '../../serveices/cityService.js'

//引入样式表
import '../../css/city.css'

//初始化IScroll滚动实例
let cityScroll = null;

export default class City extends Component{
	constructor () {
		super();
		this.state = {
			cityArr:[]
		}
	}
	
	render () { 
		return (
			<div ref="cityPage" class="page main cityPage"> 
				<div class="wrap">      
					<div class="yourCity topTitle">
						<p>GPS定位你所在的城市</p>
						<p class="one-border-bottom">
							<span>深圳</span>
						</p>
					</div>
					<div class="hotcities topTitle">   
						<p>热门城市</p>
						<p class="one-border-bottom">
							<span>北京</span>
							<span>上海</span>
							<span>广州</span>
							<span>深圳</span>
						</p>
					</div>
					<div class="letter topTitle"> 
						<p>按字母排序</p>
						<p class="one-border-bottom">
							{
								this.state.cityArr.map( (item,index) => {
									return (
										<span key={index} onClick={this.toTop.bind(this,index)}>   
											{item.firstLetter}
										</span>
									)
								})
							}
						</p>
					</div>
					{
						this.state.cityArr.map( (item,index) => {
							return (
								<div ref="this.state.number" class="cities topTitle" key={index}>   
									<p key={index}>
										{item.firstLetter}
									</p>
									<p class="one-border-bottom">  
										{
											item.cities.map( (val,i) => {  
												return ( 
													<span key={i}>
														{val} 
													</span> 
												) 
											}) 
										}
									</p>
								</div> 
							)
						})
					}
				</div> 
			</div>
		)
	}
	
	//未挂载是进行数据预加载
	componentWillMount () {
		Citysevice.getCityData()
		.then( (data) => {
//			console.log(data)  
			this.setState({cityArr:data}) 
		})
	}
		
	componentDidMount () { 
		//创建滚动实例
		cityScroll = new IScroll(this.refs.cityPage, {          
			probetype:3       
		})
//		console.log("滚动实例",cityScroll)     
		//监听滚动时时刷新 
//		cityScroll.on("srcoll",() => {
//			console.log("监听滚动实例",cityScroll)
//			cityScroll.refresh();                  
//		})             
		
		cityScroll.on("scrollEnd",() => {  
			
//			console.log("监听滚动实例",cityScroll)     
			cityScroll.refresh();                      
		})
	}
	
	//监听点击中所点击的字母，使其对应的scrollTop值为0
	toTop (index) {
//		console.log(index)
		//A的top值
		let AScrollTop = 496;
		
		//相应的字母其所对应的城市的top值组成一个数组
		//定义一个空数组接收每个字母城市的值
		let heightArr = [];
//		console.log(this.state.cityArr)  
		this.state.cityArr.map( (item,index) => { 
			//每一个字母和城市所对应的高度
			let h = Math.ceil(item.cities.length/4)*47 + 40 
//			console.log(h) 
			heightArr.push(h)     
			
		})  
//		console.log(heightArr)
		//点击相应的下标得到该字母之前所有字母的高度之和
		let heightSum = 0;
		
		//截取数据
		let newHeightArr = heightArr.slice(0,index) 
		
		for (var i=0; i<newHeightArr.length; i++) {
			heightSum += newHeightArr[i]  
		}
		
//		console.log(heightSum)

		//点击字母之后相应的滚动距离
		let scrollDistance = AScrollTop + heightSum 
//		console.log(scrollDistance) 
		
		//判断所需要滚动的值与最大的滚动距离对比，如果超过最大滚动距离，则滚动到最大距离
		if (scrollDistance > Math.abs(cityScroll.maxScrollY)) { 
			cityScroll.scrollTo(0, cityScroll.maxScrollY, 500) 
		}
		//如果小于最大距离，则滚动相应的距离
		else{
			cityScroll.scrollTo(0, -scrollDistance, 500) 
		}
		  
	}
}
