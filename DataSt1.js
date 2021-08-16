// Starting with a 1-indexed array of zeros and a list of operations, for each operation add a value to 
// each the array element between two given indices, inclusive. 
// Once all operations have been performed, return the maximum value in the array.

// example: n = 10
// queries = [[1,2,3], [4,5,6], [7,8,9]]


function arrayManipulation(n, queries) {
    
    let max = 0;
    const params = [];
    
    for(let q=0; q<queries.length; q++){
        
        const query = queries[q];
        const qstart = query[0];
        const qend = query[1];
        const qval = query[2];
        
        params.push({
        	key: qstart,
        	val: qval
        });
        
        params.push({
        	key: qend,
        	val: -qval
        });
    }
    
    //sort the parameters by key
    params.sort((item1, item2) => {
    	if(item1.key === item2. key){
    		return item2.val - item1.val;
    	}
    	
    	return item1.key - item2.key;
    });
    
    let sum = 0;
    
    for(let i=0; i<params.length; i++){
    	const param = params[i];
    	sum += param.val;
    	
    	if(sum > max){
    		max = sum;
    	}
    }

    return max;
}


// yeah i understand