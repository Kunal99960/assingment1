const selectall=document.querySelector('.row.all input');
const allcheckbox=document.querySelectorAll('.row:not(.all) input');
console.log(allcheckbox);
let listboolean=[];

allcheckbox.forEach(item=>{
    item.addEventListener('change',function(){
        allcheckbox.forEach(i=>{
            listboolean.push(i.checked);
        })
        if(listboolean.includes(false)){
            selectall.checked=false;
        }
        else{
            selectall.checked=true;
        }
        listboolean=[]
    })
})
selectall.addEventListener('change',function(){
    if(this.checked){
        allcheckbox.forEach(i=>{
            i.checked=true;
        })
    }
    else{
        allcheckbox.forEach(i=>{
            i.checked=false;
        })
        
    }
})
