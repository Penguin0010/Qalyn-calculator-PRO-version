let button = document.querySelector('#button');

button.addEventListener('click', function() {
	
    if (document.getElementById("name").value=="" || document.getElementById("start").value=="" ){
        alert("The name or starting bid fields are blank. Please fill them in!");
    }
    else{
       let navyk=0;
        const skills = document.getElementsByClassName("skills"); 
          
    for (let i=0; i < skills.length; i++) {  
       if (skills[i].checked) {
            navyk = navyk + Number(skills[i].value);
                }
            }
        
        const age = document.getElementsByName("age"); 
        var vozr=1;
            age.forEach(item => {
                if (item.checked) {
                   vozr = Number(item.value)
            }
                 })
         
        let gos=1;
        const goss = document.getElementsByClassName("gossips"); 
          
        for (let i=0; i < goss.length; i++) {  
                if (goss[i].checked) {
                    gos = gos * Number(goss[i].value);
                }
            }
        
        var gos_per=0;
        var pers=document.getElementById("gos_per");
        if (pers.checked){
            gos_per = Number(document.getElementById("gos_per").value);
        }
        
         var start = Number(document.getElementById("start").value);
         var educ = Number(document.getElementById("educ").value);
         var name = document.getElementById("name").value;
         var net = document.getElementById("net").value;
        
         var price=((((start*educ)*net+navyk)*vozr)*gos)+gos_per;
        
         var lletter = document.getElementById("letter").value;
        
        let person = {
        bride_name: name,
        bride_price: price,
        letter_to_bride: lletter
        }
        
         document.getElementById("finalresult1").innerHTML =  
             "Name: " + person.bride_name;
         document.getElementById("finalresult2").innerHTML =  
             "Price: " +  person.bride_price;
        document.getElementById("finalresult3").innerHTML =  
             "Letter: " + person.letter_to_bride;
                  }});
                
  
        