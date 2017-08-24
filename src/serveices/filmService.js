//引入api暴露出来的数据请求路径
import API from '../api'          

//引入axios请求
import axios from 'axios' 

//影片页面热映第一页数据请求
function getHotMoviesData () { 
	return new Promise ( (resolve,reject) => {
		axios.get(`${API.filmHotMovies}`)   
		.then( (response) => {
//			console.log(response)
			//判断是否请求成功
			if (response.status === 200) {
				var hotArr = response.data.data.films.map( (item,index) => {
					var hotObj = {}
					hotObj.img = item.cover.origin;//图片地址
					hotObj.grade = item.grade;//评分
					hotObj.intro = item.intro;//简介
					hotObj.name = item.name;//片名
					hotObj.cinemaCount = item.cinemaCount;//影院数量
					hotObj.watchCount = item.watchCount;//购票数
					hotObj.id = item.id;//id
					
					return hotObj
				})
				
				resolve(hotArr)              
			}
		})
		.catch( (error) => {
			console.log(error)
		})
	})
}

//影片页面即将上映第一页数据请求
function getComingMoviesData () { 
	return new Promise ( (resolve,reject) => {
		axios.get(`${API.filmComingMovies}`)    
		.then( (response) => {
//			console.log(response)
			//判断是否请求成功
			if (response.status === 200) {
//				console.log(response)    
				var hotArr = response.data.data.films.map( (item,index) => {
					var hotObj = {}
					hotObj.img = item.cover.origin;//图片地址 
					hotObj.intro = item.intro;//简介 
					hotObj.name = item.name;//片名 
					hotObj.id = item.id;//id 
					
					return hotObj
				})
				
				resolve(hotArr)              
			}
		})
		.catch( (error) => {
			console.log(error)
		})
	})
}


//将请求数据的函数暴露出去
export default {
	getHotMoviesData,
	getComingMoviesData
}
