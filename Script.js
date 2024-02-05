var resume = {
    "basics": {
      "name": "Gnana Jebamani S",
      "email": "jebamani435@gmail.com",
      "phone": "7397651756",
      "dateOfBirth": "09/05/1995",
      "maritalStatus": "Single",
      "degree": "B.E - CIVIL",
      "summary": "Technically proficient and analytical problem solver with calm and focused demeanor",
      "location": {
        "address": "No.17, Vellaisamy Street, Fathima Nagar, Kamarajapuram, Pammal",
        "postalCode": "600075",
        "city": "Chennai",
        "State": "Tamilnadu",
        "country": "India"
      }
    },
    "work": [
      {
        "company": "Renaatus Projects Private Limited",
        "position": "Senior Executive Engineer",
        "startDate": "May 2021",
        "endDate": "December 2023"
      }
    ],
    "education": [
      {
        "institution": "Sri lakshmi Ammal Engineering College",
        "courses" : "B.E,Civil Engineering",
        "startDate": "2012",
        "endDate": "2016",
        "gpa": "7.3",
      }
    ],
    "skills": "Javascript,HTML, CSS,Ms Office, Autocad, Revit architecture, Staad pro, Primavera ",

    "languages": [
      {
        "language1": "Tamil",
        "language2": "English",
        "language3": "Hindi"
      }
    ],
    "interests": "Reading Books, News paper,Playing Chess,Carrom,Badminton",
    
  }


// JSON Object iterate for loop
  var a = Object.keys(resume);

for (var i=0;i<a.length;i++){
    console.log(a[i],resume[a[i]])
}


// for in loop
for(var i in resume){
  console.log(i, resume[i])
}



// for of loop
for(var key of Object.keys(resume)){
  console.log(key,resume[key])
}



// for-each loop
var a = Object.keys(resume);
a.forEach((ele)=>console.log(ele,resume[ele]))
