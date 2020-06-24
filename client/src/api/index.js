import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';
const maha = 'https://api.covid19india.org/state_district_wise.json';

export const fetchData = async(country) => {
    let changeableUrl = url;

    if(country) {
        changeableUrl = `${url}/countries/${country}`
    }

    try{
       const { data: { confirmed, recovered, deaths, lastUpdate} } = await axios.get(changeableUrl);

        return { confirmed, recovered, deaths, lastUpdate };


    } catch(error){
        console.log(error);
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);

        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }))

        return modifiedData;
    } catch(error) {
        console.log(error);
    }
}

export const fetchcountries = async () => {
    try{
        const { data : { countries }} = await axios.get(`${url}/countries`);

        return countries.map((country) => country.name);
        
    } catch(error) {
        console.log(error);
    }
}

export const fetchMahaData = async () => {
    try{
        const response = await axios.get(maha);

        const fetchedStateData = response.data.Maharashtra.districtData;

        return Object.keys(fetchedStateData);
    } catch (error) {
        console.log(error);
    }
}

export const fetchDistData = async(dist) => {
    try{

        const response = await axios.get(maha);

        const sol = dist;

        const { active, confirmed, deceased, recovered } = response.data.Maharashtra.districtData[sol];

        //return test;
         return { active, confirmed, deceased, recovered };

    } catch (error) {
        console.log(error);
    }
}