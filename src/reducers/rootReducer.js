const initState = {
  day1: {
    dayName: "",
    threeHourTemps: [],
    maxTemp: null,
    minTemp: null,
    avgHumidity: null,
    weatherDescription: "",
    wind: null
  },
  day2: {
    dayName: "",
    threeHourTemps: [],
    maxTemp: null,
    minTemp: null,
    avgHumidity: null,
    weatherDescription: "",
    wind: null
  },
  day3: {
    dayName: "",
    threeHourTemps: [],
    maxTemp: null,
    minTemp: null,
    avgHumidity: null,
    weatherDescription: "",
    wind: null
  },
  day4: {
    dayName: "",
    threeHourTemps: [],
    maxTemp: null,
    minTemp: null,
    avgHumidity: null,
    weatherDescription: "",
    wind: null
  },
  day5: {
    dayName: "",
    threeHourTemps: [],
    maxTemp: null,
    minTemp: null,
    avgHumidity: null,
    weatherDescription: "",
    wind: null
  },
  country: null,
  cityName: null,
  citySunrise: null,
  citySunset: null
};

let day1Info = {};
let day2Info = {};
let day3Info = {};
let day4Info = {};
let day5Info = {};
let cityName = "";
let country = "";
let citySunrise = null;
let citySunset = null;

const rootReducer = (state = initState, action) => {
  if (action.type === "GET_WEATHER") {
    getWeatherInfo(action.data);

    return {
      day1: day1Info,
      day2: day2Info,
      day3: day3Info,
      day4: day4Info,
      day5: day5Info,
      country: country,
      cityName: cityName,
      citySunrise: citySunrise,
      citySunset: citySunset
    };
  }

  // console.log(state);
  return state;
};

function getWeatherInfo(data) {
  country = setCountry(data);
  cityName = setCityName(data);
  citySunrise = setSunrise(data);
  citySunset = setSunset(data);
  day1Info = setDayOneInfo(data);
  day2Info = setDayTwoInfo(data);
  day3Info = setDayThreeInfo(data);
  day4Info = setDayFourInfo(data);
  day5Info = setDayFiveInfo(data);
}

function setCountry(data) {
  return data.city.country;
}

function setCityName(data) {
  return data.city.name;
}

function setSunrise(data) {
  return data.city.sunrise;
}

function setSunset(data) {
  return data.city.sunset;
}

function setDayOneInfo(data) {
  //Variable Declaration
  let temps = [];
  let maxTemp = 0;
  let minTemp = 99999;
  let avgHumidity = 0;

  const part1 = [...data.list.slice(0, 8)];
  let day1 = {
    dayName: "",
    threeHourTemps: [],
    maxTemp: null,
    minTemp: null,
    avgHumidity: null,
    weatherDescription: "",
    wind: null
  };

  //Setting the current day name
  let allDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  var d1 = new Date(data.list[0].dt * 1000);
  day1.dayName = allDays[d1.getDay()];

  //Set Maximum Temperature
  for (let i = 0; i < part1.length; i++) {
    let value = part1[i].main.temp_max;
    if (value > maxTemp) maxTemp = value;
  }
  maxTemp = Math.floor(maxTemp - 273);
  maxTemp = maxTemp + "℃";
  day1.maxTemp = maxTemp;
  maxTemp = 0;

  //Set Minimum Tempterature
  for (let i = 0; i < part1.length; i++) {
    let value = part1[i].main.temp_min;
    if (value < minTemp) minTemp = value;
  }
  minTemp = Math.floor(minTemp - 273);
  minTemp = minTemp + "℃";
  day1.minTemp = minTemp;
  minTemp = 99999;

  //Set the three hour temperature
  for (let i = 0; i < part1.length; i++) {
    temps.push(part1[i].main.temp);
    temps[i] = Math.floor(temps[i] - 273);
  }
  day1.threeHourTemps = [...temps];

  //Set the average daily humidity
  for (let i = 0; i < part1.length; i++) {
    avgHumidity += part1[i].main.humidity;
  }
  avgHumidity = avgHumidity / 8;
  avgHumidity = avgHumidity + "%";
  day1.avgHumidity = avgHumidity;

  //Set weather description
  day1.weatherDescription = data.list[0].weather[0].description;

  //Set window speed
  day1.wind = `${data.list[0].wind.speed}km/h`;

  return day1;
}

function setDayTwoInfo(data) {
  //Variable Declaration
  let temps = [];
  let maxTemp = 0;
  let minTemp = 99999;
  let avgHumidity = 0;

  const part2 = [...data.list.slice(8, 16)];

  let day2 = {
    dayName: "",
    threeHourTemps: [],
    maxTemp: null,
    minTemp: null,
    avgHumidity: null,
    weatherDescription: "",
    wind: null
  };

  //Setting the current day name
  let allDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  var d2 = new Date(data.list[8].dt * 1000);
  day2.dayName = allDays[d2.getDay()];

  //Set Maximum Temperature
  for (let i = 0; i < part2.length; i++) {
    let value = part2[i].main.temp_max;
    if (value > maxTemp) maxTemp = value;
  }
  maxTemp = Math.floor(maxTemp - 273);
  maxTemp = maxTemp + "℃";
  day2.maxTemp = maxTemp;
  maxTemp = 0;

  //Set Minimum Tempterature
  for (let i = 0; i < part2.length; i++) {
    let value = part2[i].main.temp_min;
    if (value < minTemp) minTemp = value;
  }
  minTemp = Math.floor(minTemp - 273);
  minTemp = minTemp + "℃";
  day2.minTemp = minTemp;
  minTemp = 99999;

  //Set the three hour temperature
  for (let i = 0; i < part2.length; i++) {
    temps.push(part2[i].main.temp);
    temps[i] = Math.floor(temps[i] - 273);
  }
  day2.threeHourTemps = [...temps];

  //Set the average daily humidity
  for (let i = 0; i < part2.length; i++) {
    avgHumidity += part2[i].main.humidity;
  }
  avgHumidity = avgHumidity / 8;
  avgHumidity = avgHumidity + "%";
  day2.avgHumidity = avgHumidity;

  //Set weather description
  day2.weatherDescription = data.list[8].weather[0].description;

  //Set window speed
  day2.wind = `${data.list[8].wind.speed}km/h`;

  return day2;
}

function setDayThreeInfo(data) {
  //Variable Declaration
  let temps = [];
  let maxTemp = 0;
  let minTemp = 99999;
  let avgHumidity = 0;

  const part3 = [...data.list.slice(16, 24)];

  let day3 = {
    dayName: "",
    threeHourTemps: [],
    maxTemp: null,
    minTemp: null,
    avgHumidity: null,
    weatherDescription: "",
    wind: null
  };

  //Setting the current day name
  let allDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  var d3 = new Date(data.list[16].dt * 1000);
  day3.dayName = allDays[d3.getDay()];

  //Set Maximum Temperature
  for (let i = 0; i < part3.length; i++) {
    let value = part3[i].main.temp_max;
    if (value > maxTemp) maxTemp = value;
  }
  maxTemp = Math.floor(maxTemp - 273);
  maxTemp = maxTemp + "℃";
  day3.maxTemp = maxTemp;
  maxTemp = 0;

  //Set Minimum Tempterature
  for (let i = 0; i < part3.length; i++) {
    let value = part3[i].main.temp_min;
    if (value < minTemp) minTemp = value;
  }
  minTemp = Math.floor(minTemp - 273);
  minTemp = minTemp + "℃";
  day3.minTemp = minTemp;
  minTemp = 99999;

  //Set the three hour temperature
  for (let i = 0; i < part3.length; i++) {
    temps.push(part3[i].main.temp);
    temps[i] = Math.floor(temps[i] - 273);
  }
  day3.threeHourTemps = [...temps];

  //Set the average daily humidity
  for (let i = 0; i < part3.length; i++) {
    avgHumidity += part3[i].main.humidity;
  }
  avgHumidity = avgHumidity / 8;
  avgHumidity = avgHumidity + "%";
  day3.avgHumidity = avgHumidity;

  //Set weather description
  day3.weatherDescription = data.list[16].weather[0].description;

  //Set window speed
  day3.wind = `${data.list[16].wind.speed}km/h`;

  return day3;
}

function setDayFourInfo(data) {
  //Variable Declaration
  let temps = [];
  let maxTemp = 0;
  let minTemp = 99999;
  let avgHumidity = 0;

  const part4 = [...data.list.slice(24, 32)];

  let day4 = {
    dayName: "",
    threeHourTemps: [],
    maxTemp: null,
    minTemp: null,
    avgHumidity: null,
    weatherDescription: "",
    wind: null
  };

  //Setting the current day name
  let allDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  var d4 = new Date(data.list[24].dt * 1000);
  day4.dayName = allDays[d4.getDay()];

  //Set Maximum Temperature
  for (let i = 0; i < part4.length; i++) {
    let value = part4[i].main.temp_max;
    if (value > maxTemp) maxTemp = value;
  }
  maxTemp = Math.floor(maxTemp - 273);
  maxTemp = maxTemp + "℃";
  day4.maxTemp = maxTemp;
  maxTemp = 0;

  //Set Minimum Tempterature
  for (let i = 0; i < part4.length; i++) {
    let value = part4[i].main.temp_min;
    if (value < minTemp) minTemp = value;
  }
  minTemp = Math.floor(minTemp - 273);
  minTemp = minTemp + "℃";
  day4.minTemp = minTemp;
  minTemp = 99999;

  //Set the three hour temperature
  for (let i = 0; i < part4.length; i++) {
    temps.push(part4[i].main.temp);
    temps[i] = Math.floor(temps[i] - 273);
  }
  day4.threeHourTemps = [...temps];

  //Set the average daily humidity
  for (let i = 0; i < part4.length; i++) {
    avgHumidity += part4[i].main.humidity;
  }
  avgHumidity = avgHumidity / 8;
  avgHumidity = avgHumidity + "%";
  day4.avgHumidity = avgHumidity;

  //Set weather description
  day4.weatherDescription = data.list[24].weather[0].description;

  //Set window speed
  day4.wind = `${data.list[24].wind.speed}km/h`;

  return day4;
}

function setDayFiveInfo(data) {
  //Variable Declaration
  let temps = [];
  let maxTemp = 0;
  let minTemp = 99999;
  let avgHumidity = 0;

  const part5 = [...data.list.slice(32, 40)];

  let day5 = {
    dayName: "",
    threeHourTemps: [],
    maxTemp: null,
    minTemp: null,
    avgHumidity: null,
    weatherDescription: "",
    wind: null
  };

  //Setting the current day name
  let allDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  var d5 = new Date(data.list[32].dt * 1000);
  day5.dayName = allDays[d5.getDay()];

  //Set Maximum Temperature
  for (let i = 0; i < part5.length; i++) {
    let value = part5[i].main.temp_max;
    if (value > maxTemp) maxTemp = value;
  }
  maxTemp = Math.floor(maxTemp - 273);
  maxTemp = maxTemp + "℃";
  day5.maxTemp = maxTemp;
  maxTemp = 0;

  //Set Minimum Tempterature
  for (let i = 0; i < part5.length; i++) {
    let value = part5[i].main.temp_min;
    if (value < minTemp) minTemp = value;
  }
  minTemp = Math.floor(minTemp - 273);
  minTemp = minTemp + "℃";
  day5.minTemp = minTemp;
  minTemp = 99999;

  //Set the three hour temperature
  for (let i = 0; i < part5.length; i++) {
    temps.push(part5[i].main.temp);
    temps[i] = Math.floor(temps[i] - 273);
  }
  day5.threeHourTemps = [...temps];

  //Set the average daily humidity
  for (let i = 0; i < part5.length; i++) {
    avgHumidity += part5[i].main.humidity;
  }
  avgHumidity = avgHumidity / 8;
  avgHumidity = avgHumidity + "%";
  day5.avgHumidity = avgHumidity;

  //Set weather description
  day5.weatherDescription = data.list[32].weather[0].description;

  //Set window speed
  day5.wind = `${data.list[32].wind.speed}km/h`;

  return day5;
}

export default rootReducer;
