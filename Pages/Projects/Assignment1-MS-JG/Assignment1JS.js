var oddCount = 0;
var evenCount = 0;
var oddSum = 0;
var evenSum = 0;

function NumDivider(){
	tempValue = document.getElementById("userIn").value;
	tempNum = parseInt(tempValue);
	
	if(isNaN(tempNum)){
		alert('Please enter a number.');
	}
	else{
		if(tempNum == 0){
			alert('Do not try to input 0, thank you.');
		}
		else{
			if(tempNum % 2 == 0){
				evenCount = evenCount + 1;
				evenSum = evenSum + tempNum;
				document.getElementById("evenSum").innerHTML = evenSum;
				tempNum = evenSum / evenCount;
				document.getElementById("evenAvg").innerHTML = tempNum;
			}
			else{
				oddCount = oddCount + 1;
				oddSum = oddSum + tempNum;
				document.getElementById("oddSum").innerHTML = oddSum;
				tempNum = oddSum / oddCount;
				document.getElementById("oddAvg").innerHTML = tempNum;
			}
			
		}
	}
	
}