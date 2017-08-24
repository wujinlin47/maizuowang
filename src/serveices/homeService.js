//引入api暴露出来的数据请求路径
import API from '../api'          

//引入axios请求
import axios from 'axios'


//请求home页面轮播图数据
function getHomeBanner () {              
	return new Promise ( (resolve,reject) => {      
		axios.get(`${API.homeBannerData}${new Date().getTime()}`)  
		.then( (response) => {
//			console.log(response) 
			resolve(response.data.data.billboards)
		})
		.catch( (error) => {
			console.log(error)  
		}) 
	})
}

//请求home页面热映电影数据
function getHomeHotMovie () { 
	return new Promise ( (resolve,reject) => {
		axios.get(`${API.homeHotMovies1}${new Date().getTime()}${API.homeHotMovies2}`)         
		.then( (response) => {
//			console.log(response)
			var hotArr = response.data.data.films.map( (item,index) => {
				var hotObj = {}
				hotObj.img = item.cover.origin;//图片
				hotObj.name = item.name;//片名
				hotObj.cinemaCount = item.cinemaCount;//影院数量
				hotObj.watchCount = item.watchCount;//票数
				hotObj.grade = item.grade;//评分
				hotObj.id = item.id;//id 
				
				return hotObj;  
			})
			resolve(hotArr)        
		})
		.catch( (error) => {  
			console.log(error)  
		}) 
	})
}


//请求home页面即将上映的电影数据
function getHomeComingMovie () { 
	return new Promise ( (resolve,reject) => {
		axios.get(`${API.homeComingMoving1}${new Date().getTime()}${API.homeComingMoving2}`)
		.then( (response) => {
//			console.log(response)
			var comingArr = response.data.data.films.map( (item,index) => {
				var comingObj = {}
				comingObj.img = item.cover.origin;//图片
				comingObj.name = item.name;//片名
				comingObj.grade = item.grade;//评分
				comingObj.id = item.id;//id 
				
				return comingObj;          
			})
			resolve(comingArr)         
		})
		.catch( (error) => { 
			console.log(error)    
		})
	})
}

//请求homeDetail页面的详情数据
function getHomeDetailData (id) {
	return new Promise ( (resolve,reject) => {
		axios.get(`${API.homeDetialData1}${id}${API.homeDetialData2}${new Date().getTime()}`)
		.then( (response) => {
			console.log(response) 
			//定义一个对象接受过滤后的数据
			var detailObj = {}
			detailObj.img = response.data.data.film.cover.origin;//图片
			detailObj.director = response.data.data.film.director;//导演
			detailObj.actors = response.data.data.film.actors;//演员
			detailObj.nation = response.data.data.film.nation;//地区
			detailObj.language = response.data.data.film.language;//语言
			detailObj.name = response.data.data.film.name;//影片名
			detailObj.synopsis = response.data.data.film.synopsis;//影片简介
			detailObj.category = response.data.data.film.category;//影片类型  
			detailObj.id = response.data.data.film.id;//影片简介
				
			resolve(detailObj)                          
		})
		.catch( (error) => {
			console.log(error) 
		})
	})
}


//将请求数据的函数暴露出去
export default {
	getHomeBanner,   
	getHomeHotMovie,   
	getHomeComingMovie,        
	getHomeDetailData          
}
