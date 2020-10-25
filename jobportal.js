window.onload = function () {
	var template = '<div class="card" style="width:400px; height:300px"><h3>$name$ ($company$)</h3><h4><p>Salary: $currency$ $salary$</p></h4><h5><p>$desc$</p></h5></div>';
	var jobsDiv = document.getElementById('jobsDiv');

	const settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://rapidapi.p.rapidapi.com/api/job/listing/?url=https%3A%2F%2Fwww.indeed.com%2Fq-data-scientist-l-silicon-valley-jobs.html",
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "job-listings.p.rapidapi.com",
			"x-rapidapi-key": "33179136b2mshc66e07cecd059ddp130dbbjsn54a479c20abd"
		}
	};
	var response = [{title: "Software Engineer", company: "Google", salary: {base_salary: null, currency: null}, small_description: "This is a software engineering position"}, {title: "Data Analyst", company: "Microsoft", salary: {base_salary: 90000, currency: "$"}, small_description: "This is a data analysis position"}];
	//$.ajax(settings).done(function (response) {
		for (var job in response){
			console.log(response[job]);
			var jobDetails = template.replace('$name$', response[job].title);
			jobDetails = jobDetails.replace('$company$', response[job].company);

			if (response[job].salary.base_salary !== null && response[job].salary.currency !== null){
				jobDetails = jobDetails.replace('$salary$', response[job].salary.base_salary);
				jobDetails = jobDetails.replace('$currency$', response[job].salary.currency);
			} else {
				jobDetails = jobDetails.replace('$salary$', "");
				jobDetails = jobDetails.replace('$currency$', "incomplete salary information");
			}
			jobDetails = jobDetails.replace('$desc$', response[job].small_description);

			jobsDiv.innerHTML += jobDetails;
		}
	//});	
}