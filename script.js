//your JS code here. If required.
function manipulateArray(array){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			//Odd Array
			const filterArray = array.filter((num) => num%2 === 0)
			setTimeout(()=>{
			document.getElementById("output").innerText = filterArray.join(",");
			//multiply num by 2
			const multiplyArray = filterArray.map((num)=> num*2)
			setTimeout(()=>{
			document.getElementById("output").innerText = multiplyArray.join(",");
			resolve(multiplyArray)
			},2000)
			},1000)
		},3000)
	})
}


manipulateArray([1,2,3,4]).then((result)=>{
	console.log(result)
})