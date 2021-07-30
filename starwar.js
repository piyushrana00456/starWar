let list_div=document.getElementById('list')
var timer_id;

async function searchCharchter(){
  
    let query=document.getElementById('query').value
    if(query.length<=1){
        return false;
    }
    let response=await fetch(`https://swapi.dev/api/people/?search=${query}`)
    let data=await response.json();
    // console.log('data:',data);

    return data.results;
   
}

function throttle(){

    if(timer_id){
        return false;
    }
timer_id=setTimeout(() => {
    main();
    timer_id=undefined
},1000);

}

function appendCharacter(el){
    list_div.innerHTML=null;

    el.forEach(({name})=> {
        let p=document.createElement('p')
        p.innerText=name;
        list_div.append(p)
    });
}

async function main(){
    let character=await searchCharchter()
     appendCharacter(character)
    // console.log(character);
}