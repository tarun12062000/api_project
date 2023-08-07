let url="https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((v)=>{
    return v.json()
}).then((contest)=>{
    console.log(contest)
    additem=""
    for(tarun in contest){
        console.log(contest[tarun])
        additem +=`<div class="card mx-2 my-2" style="width: 18rem;">
        <img src="https://history-computer.com/wp-content/uploads/2022/11/shutterstock_2111828198-scaled.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${contest[tarun].name}</h5>
          <p>Status is ${contest[tarun].status} and site in ${contest[tarun].site}</p>
          <p>in_24_hours ? ${contest[tarun].in_24_hours}</p>
          <p>Start at: ${contest[tarun].start_time}</p>
          <p>End at: ${contest[tarun].end_time}</p>
          <a href="${contest[tarun].url}" class="btn btn-primary">Visit hear</a>
        </div>
      </div>`
      
    }
    cardcontainer.innerHTML=additem
}) 
// let n = localStorage.getItem('note')
// alert('your note is '+ n)
// let a= prompt('Enter your note')
// if(a){
// localStorage.setItem('note',a)
// }
// let c= confirm('Do you want to delete your note ?')
// if(c){
// localStorage.removeItem('note')
// }