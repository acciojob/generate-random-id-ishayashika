function makeid(l) {
  // write your code here
	let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
	let ans="";
	for(let i=0;i<l;i++){
		let randomIndex=Math.floor(Math.random()*str.length);
		ans+=str[randomIndex];
	}
	return ans;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
