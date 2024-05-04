var countries = [
    {
        name: "Pakistan",
        capital: "Islamabad",
        population: 245209815,
        officialLanguage: "Urdu"
    },
    {
        name: "China",
        capital: "Beijing",
        population: 1444216107,
        officialLanguage: "Standard Chinese"
    },
    {
        name: "India",
        capital: "New Delhi",
        population: 1393409038,
        officialLanguage: "Hindi, English"
    },
    {
        name: "Saudi Arabia",
        capital: "Riyadh",
        population: 213993437,
        officialLanguage: "Portuguese"
    }
];
//console.log("Information about different countries:");
countries.forEach(function (country) {
    console.log("\n        Country: ".concat(country.name, "\n        Capital: ").concat(country.capital, "\n        Population: ").concat(country.population, "\n        Official Language: ").concat(country.officialLanguage, "\n    "));
});
//console.log(countries[4].name); 
