//引入请求城市数据的api
import API from '../api'

//引入axios请求
import axios from 'axios'  

function getCityData () {
	return new Promise ( (resolve,reject) => {
		axios.get(`${API.cityData}`)                  
		.then( (response) => {
//			console.log(response.data.data.cities)
			if (response.data.data.cities) {
				//定义一个空对象将成城市首字母相同的城市取出组成对象
				let cityObj = {}
				//定义一个空数组将上面的对象转换成数组
				let cityArr = []
				//处理数据
				response.data.data.cities.map( (item,index) => {
					//取出每个城市的首字母
					let firstLetter = item.pinyin.substring(0,1)  
					
					if (cityObj[firstLetter] == null) {
						cityObj[firstLetter] = []        
					}
					
					cityObj[firstLetter].push(item.name)
				})
				
				//将cityObj转换成数组
				for (let firstLetter in cityObj) {
					//定义一个空对象，将cityObj的属性个属性值分别转换成另一个对像的属性
					let obj = {}
					obj.firstLetter = firstLetter  
					obj.cities = cityObj[firstLetter] 
					
					cityArr.push(obj)
				}
				
				//根据字母的排序重组数组（冒泡排序）
				for (let i=0; i<cityArr.length-1; i++) {
					for (let j=0; j<cityArr.length-1-i; j++) {
						if (cityArr[j].firstLetter > cityArr[j+1].firstLetter) {
							let tmp = cityArr[j];
							cityArr[j] = cityArr[j+1];
							cityArr[j+1] = tmp;           
						}
					}
				}
				
				resolve(cityArr) 
			}
		})
		.catch( (error) => {
			console.log(error) 
		})
	})
}


export default {
	getCityData
}
