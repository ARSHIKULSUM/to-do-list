var add= document.querySelector(".add-btn");
var remove= document.querySelector(".remove-btn");
var items= document.querySelector(".item");
var list= document.querySelector(".box");



add.addEventListener('click', function(e){
  var para= document.createElement("p");  
  list.appendChild(para);
  var val = items.value;
    if(val==''){
        
      list.innerHTML += "please enter something";
      items.value = ' ';  
      
      

    }else{
        
    para.innerHTML += items.value;

    items.value=" ";
    para.addEventListener('click', function(){
      para.style.textDecoration= "line-through";
    });

    remove.addEventListener('click', function(){
      list.removeChild(para);
    
    });
    }
});





