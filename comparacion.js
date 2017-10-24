function areArraysSame (array1 , array2){

  var array1Size = array1.length;
  var array2Size = array2.length;

  if (array1Size === array2Size){

    for (var i = 0; i <= array1.length -1; i ++){

      if (array1 [i] !== array2 [i]){

       return false;
        }
     }
  }else {
    return false;

  }
  return true;
}
console.log (areArraysSame (["hi","hola","hello"], ["hi","hola","hello"]));
