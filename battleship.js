let count1=0;
let count=0;
let c1=document.querySelectorAll('#c');
let imgs=document.querySelectorAll('img');
let a1=document.querySelectorAll('#a');
let ele=document.getElementById('win');
let el=document.getElementById('loss'); 

c1.forEach(k =>{
    k.onclick=()=>{
        count1++;
        console.log(count1);
        if(count1===3){
            if(count===6){
                count1++;
            }
        }
    }
}
);
imgs.forEach(i =>{
    i.onclick=()=>{
    
        count++;
        console.log(count); 
        i.style.contentVisibility="visible";  
        if(count>6){ 
            if(count1>3){   

            ele.open=true;  
        }   
        else{ 
            el.open=true; 
        }
    }
}
});
let res=document.querySelector('input'); 
res.onclick=()=>{
    imgs.forEach(j=>{
    j.style.contentVisibility="hidden";
    count1=0;
    count=0;
    ele.close();
    el.close();
}
);
}

    
