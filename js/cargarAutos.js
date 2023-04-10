/*------------
fetch("../BD/Autos.json")
.then(response => {
   return response.json();
})
.then(data => console.log(data));
*/

const CatalogoContainer=document.getElementById("CatalogoContainer");

fetch("../BD/Autos.json")
.then(response => {return response.json();})
.then(data =>{
   console.log(data)
   CatalogoContainer.innerHTML=`<br>`
      for( const auto of data.Autos){
      CatalogoContainer.innerHTML+=`
      <div class="card">
         <img class="imgcard" src="${auto.URL}">
         <div class="cardescripcion">
            <h4><b>${auto.Marca} ${auto.Modelo}</b></h4>
            <p>${auto.Descripcion}</p>
         </div>
      </div>`
   }
})