


var weight = 10;  
var height = 5;   
var star = '*';      
var whitespace = ' '; 

for (var i = 0; i < height; ++i) {
    var str = '';

    if (i == 0 || i == height - 1) {    
      for (var j = 0; j < weight; ++j) {
        str += star;
      }    
    
    } else {
      str = star;
      for (var j = 0; j < weight - 2 ; ++j) {
        str += whitespace;
      }    
      str += star;
    }

    
    console.log(str); 
}























