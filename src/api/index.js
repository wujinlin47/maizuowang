//首页轮播图url
const homeBannerData = '/v4/api/billboard/home?__t='

//首页热映电影
const homeHotMovies1 = '/v4/api/film/now-playing?__t='       
const homeHotMovies2 = '&page=1&count=5'         

//首页即将上映的电影
const homeComingMoving1 = '/v4/api/film/coming-soon?__t='  
const homeComingMoving2 = '&page=1&count=3'

//首页详情页
const homeDetialData1 = '/v4/api/film/'
const homeDetialData2 = '?__t=' 


//影片页面正在热映url
const filmHotMovies = '/v4/api/film/now-playing?count=7&page='

//影片页面即将上映
const filmComingMovies = '/v4/api/film/coming-soon?count=7&page=1' 

//影院地址请求url
const cinemaAddress = '/v4/api/cinema?__t='    

//将数据请求url暴露给services
export default {      
	homeBannerData,     
	homeHotMovies1, 
	homeHotMovies2, 
	homeComingMoving1,
	homeComingMoving2,
	homeDetialData1,
	homeDetialData2,
	filmHotMovies,
	filmComingMovies,
	cinemaAddress   
}
