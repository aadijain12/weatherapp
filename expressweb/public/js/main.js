const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');

const getInfo = async(event)=>{
    event.preventDefault();
   let cityVal = cityName.value;
if(cityVal === ""){
city_name.innerText = `Plz write name before search`;
}else{ 
    try{
        console.log("calling api with city:- ", cityVal);
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&id=524901&appid=2edbe818b4a1bd5ba824b8c02340d67a`;
        
        const response = await fetch(url);
        console.log("response", response);
        const data = await response.json();
       const arrData = [data];
       city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
       temp_real_val.innerText = arrData[0].main.temp;
    //    temp_status.innerText = arrData[0].weather[0].main;
       const tempMood =  arrData[0].weather[0].main;
       if (tempMood == "Clear") {
        temp_status.innerHTML =
            "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
        } else if (tempMood == "Clouds") {
        temp_status.innerHTML =
            "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
        } else if (tempMood == "Rain") {
        temp_status.innerHTML =
            "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
        } else {
        temp_status.innerHTML =
            "<i class='fas  fa-sun' style='color:#eccc68;'></i>";

        }
    }catch(error){
            console.log("error:- ", error);
            city_name.innerText =  `please enter1 the proper city name`;
    }
    
}


}



submitBtn.addEventListener('click', getInfo);



