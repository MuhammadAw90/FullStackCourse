const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '6d43607b12msh7c5078343c3692ap1be589jsna29598180705',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
};

fetch('https://spotify23.p.rapidapi.com/search/?q=adele&type=multi&offset=0&limit=10&numberOfTopResults=5', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));