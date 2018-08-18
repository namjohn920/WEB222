var filterType = ""; // sets the filter type to "" (will later be dog, cat or bird)
var filterAgeMin = 0; // sets the filter age min to 0 (for no minimum age filter)
var filterAgeMax = Number.MAX_VALUE; // sets the filter age max to the largest number possible (for no maximum age filter)



window.onload = function() {
   loadTableWithFilters(filterType,filterAgeMin,filterAgeMax);
}


    function loadTableWithFilters(a,b,c) {

        filterType =a;
        filterAgeMin = b;
        filterAgeMax = c;

        var tbl = document.querySelector("#main-table-body");
        var data = "";

        for(var i=0; i < petData.length ; i++){

            if(filterType== "" ){
                if(petData[i].age < filterAgeMax && petData[i].age >=filterAgeMin){
                    data += "<tr><td><figure>";
                    data += "<img src='" + petData[i].image.src + "' alt='" + petData[i].image.alt + 
                            "' height='" + petData[i].image.height + "' width='" + petData[i].image.width +"'/>";
                    data += "</figure></td><td><figure>";
                    data += "<h4>" + petData[i].name + "</h4>";
                    data += "<p>" + petData[i].description + "</p>";
                    data += "<p><span>Age: " + petData[i].age + " years old. </span></p>";
                    data += "</figure></td></tr>";
                }
            }else{
                if(petData[i].type==filterType &&petData[i].age < filterAgeMax && petData[i].age >=filterAgeMin){
                    data += "<tr><td><figure>";
                    data += "<img src='" + petData[i].image.src + "' alt='" + petData[i].image.alt + 
                            "' height='" + petData[i].image.height + "' width='" + petData[i].image.width +"'/>";
                    data += "</figure></td><td><figure>";
                    data += "<h4>" + petData[i].name + "</h4>";
                    data += "<p>" + petData[i].description + "</p>";
                    data += "<p><span>Age: " + petData[i].age + " years old. </span></p>";
                    data += "</figure></td></tr>";
            }
        }

            tbl.innerHTML = "";
            tbl.innerHTML = data;

        }

    }    

   

function filterDog(){
    loadTableWithFilters("dog", 0, Number.MAX_VALUE);
}

function filterCat(){
    loadTableWithFilters("cat", 0, Number.MAX_VALUE);
}

function filterBird(){
    loadTableWithFilters("bird", 0, Number.MAX_VALUE);
}

function filter_zero_1(){
    loadTableWithFilters("", 0, Number.MAX_VALUE);
}

function filter_1_3(){
    loadTableWithFilters("", 1, 3.1);
}

function filter_4_plus(){
    loadTableWithFilters("", 3.1, Number.MAX_VALUE);
}

function filterAllPets(){
    loadTableWithFilters("", 0, Number.MAX_VALUE);
}