//引入数据请求api
import API from '../api'

//引入axios
import axios from 'axios'

function getCinemaAddress () {
	return new Promise ( (resolve,reject) => {
		axios.get(`${API.cinemaAddress}`) 
		.then( (response) => {
//			console.log(response)
			//定义一个最终传出去的值，要定义在if外面，不然取在if外面取不到改值
			let arr = []
			if ( response.data.data.cinemas ) {
				
				//处理返回回来的数据
				var cinemaArr = response.data.data.cinemas.map( (item,index) => {
					//定义一个空对象过滤数据
					var cinemaObj = {}  
					cinemaObj.address = item.address;//地址
					cinemaObj.areaName = item.district.name;//区名
					cinemaObj.id = item.id;//id               
					cinemaObj.labels = item.labels;//活动
					cinemaObj.name = item.name;//影院名称  
					
					return cinemaObj                            
				})
//				console.log(cinemaArr)       
				
				//定义一个空对像
				var areaObj = {} 
				cinemaArr.map( (item) => {
					var  name = item.areaName;
					
					if (areaObj[name] == null) {  
						areaObj[name] = []; 
					}
					
					
					areaObj[name].push(item)
					
				})
				
				for (let area in areaObj) {
					//定义一个空对象将areaObj转化为数组形式，obj要定义在循环之内           
					let obj = {}
					obj.area = area;
					obj.value = areaObj[area]; 
					
					arr.push(obj)
				}
//				console.log(arr)
//				console.log(areaObj) 
			}  
			
			resolve(arr) 
		})
		.catch( (error) => {       
			console.log(error)          
		})        
	})
}

//暴露地址请求
export default {
	getCinemaAddress   
}

// arr = [300];

// var obj = {};
// arr.map((item)=>{
//     var name = item.district.name;
//     if(obj[name]==null){
//         obj[name] = [];
//     }
//     obj[name].push(item);

// })



// obj = {
//     "宝安区": [item1, item2.....],
//     "南山区": [item1, item2.....],
//     "福田区": [item1, item2.....],
//     "罗湖区": [item1, item2.....],

// }


//筛选出地区（数组去重）
//areaArr = []
//if ( areaArr.indexOf(cinemaObj.areaName) == -1 ) {
//	areaArr.push(cinemaObj.areaName) 
//}  
//console.log(areaArr)   