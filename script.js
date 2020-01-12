var url = "https://simpsonitos.com/episodes/los-simpson-";
            var x   = "x";
            
            var temp = 1;
            var cap = 1;



function miFuncion()
{
    for(i=0;i<23;i++)
        {
            
            
            
                


          

                asdf="VER CAPITULO ACTUAL "  + "  TEMPORADA     "+ temp + "  CAPITULO     " + cap;
      
        return   document.getElementById("prueba").innerHTML += "<a class='link' href='"+ url + temp + x + cap +"' target='_blank'>"+asdf+"</a><br>";
  
    
        }
    }

        
      //  + temp + 6 + cap + 20+

    function miFuncion1()
    {
        if(cap<23)
        {
            cap++
        }
         if(cap>=23)
         {
             cap=1
             temp++
         }
         
         asdf="SIGUIENTE CAPITULO" + " TEMPORADA  " + temp +"  CAPITULO  "+ cap;
      
         return   document.getElementById("prueba").innerHTML += "<a class='link' href='"+ url + temp + x + cap +"' target='_blank'>"+asdf+"</a><br>";
    }





document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById('form').addEventListener('submit', (e) => {
        e.preventDefault();
         temp = document.getElementById('temp').value;
        cap = document.getElementById('cap').value;

        
    miFuncion();

    document.getElementById('prueba').addEventListener('click', miFuncion1)


    })
});
