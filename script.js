//your JS code here. If required.
function processArray(array){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(array)
		},3000)
	})
	.then((array)=>{
		const filterArray = array.filter((num)=> num%2===0)
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				resolve(filterArray)
			},1000)
		})
	})

	.then((filterArray)=>{
		const multiplyArray = filterArray.map((num)=>{
			if(num%2===0){
				return num*2;
			}
			else{
				return num;
			}
		})
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				resolve(multiplyArray)
			},2000)
		})
	})

	.then((finalArray)=>{
		const outputElement = document.getElementById("output")
		outputElement.innerText = finalArray.join(",")
	})
}

processArray([1,2,3,4])