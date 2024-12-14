const allfood=document.getElementById("allfood")
const srcsec = document.getElementById("srcfood");
const nodata = document.getElementById("nodata");
const detaili = document.getElementById("detail");


fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
    .then((res)=>res.json())
    .then((data)=>{
        mealFrnt(data.meals)
               
    })



const mealFrnt=(x)=>{
   
  allfood.innerHTML=""
  srcsec.innerHTML=""
  detaili.innerHTML=""

   x.forEach(data => {
    
        allfood.innerHTML+=`
   
        <div class="col-md-4 mb-4">
                   <div class="card" style="width: 18rem;">
                       <img src=${data.strMealThumb} class="card-img-top" alt="...">
                       <div class="card-body">
                           <h5 class="card-title">${data.strMeal}</h5>
                           <p class="card-text">${data.strInstructions.slice(0,100)}</p>
                           <a href="#" class="btn btn-primary"
                             onclick="detailfunc(${data.idMeal})" >Details</a>
                       </div>
                   </div>
               </div>

   `
 
});    
   

}



const searchfunc=(e)=>{
    

    
    const hdesec = document.getElementById("hid");
    hdesec.style.display = "none";

    const inputval=document.getElementById("val").value
    

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputval}`)
    .then((res)=>res.json())
    .then((data)=>{

        searchres(data)
        console.log(data)
       
    })
            

}


const searchres=(e)=>{

      if(e.meals == null){

         allfood.innerHTML=""
        srcsec.innerHTML=""
        detaili.innerHTML=""

        srcsec.innerHTML+=
        
        ` <h1 class="fw-bold text-center text-danger">No Food find !</h1>
        `
      }
         
      else{

        
        allfood.innerHTML=""
          srcsec.innerHTML=""
          detaili.innerHTML=""
        const dta=e.meals
      
        dta.forEach(data => {
          srcsec.innerHTML+=`
            <div class="col-md-4 mb-4">
                       <div class="card" style="width: 18rem;">
                           <img src=${data.strMealThumb} class="card-img-top" alt="...">
                           <div class="card-body">
                               <h5 class="card-title">${data.strMeal}</h5>
                               <p class="card-text">${data.strInstructions.slice(0,100)}</p>
                               <a href="#" class="btn btn-primary " 
                               onclick="detailfunc(${data.idMeal})"
                               >Details</a>
                           </div>
                       </div>
                   </div>
    
       `
     
    });


     

    } 

    

}




const detailfunc=(d)=>{

  allfood.innerHTML=""
  srcsec.innerHTML=""
  detaili.innerHTML=""

    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${d}`)
    .then((res)=>res.json())
    .then((data)=>{
         const res =data.meals
        detaili.innerHTML+=       
        `
        <div class="card mb-5 mx-auto" style="max-width: 1200px; height: 600px;">
  <div class="row g-0 h-100">
 

    <div class="col-md-5">
      <img src="${res[0].strMealThumb}" class="img-fluid rounded-start h-100" style="object-fit: cover;">
    </div>
    
    <div class="col-md-7">
      <div class="card-body d-flex flex-column justify-content-center">
        <h1 class="card-title fw-bold">${res[0].strMeal}</h1>
        <p class="card-text fs-5 text-secondary m-3">
        ${res[0].strInstructions.slice(0,600)}
          
        </p>
        <p class="card-text fs-6 text-muted">
          <strong>Category:   ${res[0].strCategory}</strong> 
        </p>

        <p>Tags :   ${res[0]?.strTags} </p>
        
      </div>
    </div>
  </div>
</div>


        `    
               
    })

   

    

   
}




