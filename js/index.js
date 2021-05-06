const button = document.getElementById('submit');
const info = document.getElementById('ip');
const ip = document.getElementById('ip-address');
const clientLocation = document.getElementById('location');
const timezone = document.getElementById('timezone');
const isp = document.getElementById('isp');
const map = document.getElementById('map');
const form = document.getElementById('form');

button.addEventListener('click', async (e) => {
    e.preventDefault();

    let res = await fetch(`https://ipwhois.app/json/${info.value}`);
    let data = await res.json();

    console.log(data);
    
    map.src = `https://www.google.com/maps/embed/v1/view?key=AIzaSyBFlSslG0FRkCEJigtpJl3qdhjSuYGz6rE&center=${data.latitude},${data.longitude}&zoom=17`;
    ip.innerText = data.ip;
    clientLocation.innerText = `${data.city}, ${data.region}`;
    timezone.innerText = `${data.timezone_gmt.replace('GMT', 'UTC')}`;
    isp.innerText = data.isp;

    form.reset();
});

document.addEventListener('DOMContentLoaded', async () => {
    let res = await fetch(`https://ipwhois.app/json/`);
    let data = await res.json();

    console.log(data);

    map.src = `https://www.google.com/maps/embed/v1/view?key=AIzaSyBFlSslG0FRkCEJigtpJl3qdhjSuYGz6rE&center=${data.latitude},${data.longitude}&zoom=17`;
    ip.innerText = data.ip;
    clientLocation.innerText = `${data.city}, ${data.region}`;
    timezone.innerText = `${data.timezone_gmt.replace('GMT', 'UTC')}`;
    isp.innerText = data.isp;
});