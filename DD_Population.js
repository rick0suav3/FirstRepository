let stateCounty = {
    Alabama:["Autauga","Baldwin","Barbour","Bibb","Blount","Bullock","Butler","Calhoun","Chambers","Cherokee","Choctaw"],
    Alaska:["Aleutians","Anchorage","Bristol Bay","Denali","Fairbanks North Star","Haines","Juneau","Kenai Peninsula","Ketchikan Gateway","Kodiak Island","Lake and Peninsula"],
    Arizona:["Apache","Cochise","Coconino","Gila","Graham","Greenlee","La Paz","Maricopa","Mohave","Navajo","Pima"],
    Arkansas:["Arkansas","Ashley","Baxter","Benton","Boone","Bradley","Calhoun","Carroll","Chicot","Clark","Clay"],
    California:["Alameda","Alpine","Amador","Butte","Calaveras","Colusa","Contra Costa","Del Norte","El Dorado","Fresno","Glenn"]
    }

    function getStateKey(){
        let stateDD = document.getElementById("selState");
        let stateLst = Object.keys(stateCounty);
        let stateOpt = "<option value = '0'> --Select- </option>"
        for (let i = 0; i < stateLst.length; i++){
            stateOpt += "<option value = '" + stateLst[i] + "'>" + stateLst[i] + "</option>";
        }
            stateDD.innerHTML = stateOpt;                    
    }

    function getCounties(){                
        let selectedState = document.getElementById("selState").value;
        let countyDD = document.getElementById("selCounty");
        let countyOpt = "<option value = '0'> --Select-- </option>"
        for(let i = 0; i < stateCounty[selectedState].length; i++){
             countyOpt += "<option value = '" + stateCounty[selectedState][i] + "'>" + stateCounty[selectedState][i] + "</option>";
         }
         countyDD.innerHTML = countyOpt;
         countyDD.style.visibility = "visible";
    }

    function openSlideMenu(){
        document.getElementById('side-menu').style.width = '250px';
        document.getElementById('main').style.marginLeft = '0px';
    }

    function closeSlideMenu(){
        document.getElementById('side-menu').style.width = '0px';
        document.getElementById('main').style.marginLeft = '0px';
    }