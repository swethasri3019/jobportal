let jobs = [
  {id:1,title:"Frontend Developer",company:"TCS",salary:"₹30,000",location:"Chennai",role:"Developer",logo:"T"},
  {id:2,title:"Backend Developer",company:"Infosys",salary:"₹40,000",location:"Bangalore",role:"Developer",logo:"I"},
  {id:3,title:"UI Designer",company:"Wipro",salary:"₹35,000",location:"Chennai",role:"Designer",logo:"W"},
  {id:4,title:"Software Tester",company:"HCL",salary:"₹28,000",location:"Hyderabad",role:"Tester",logo:"H"},
  {id:5,title:"Full Stack Developer",company:"Zoho",salary:"₹50,000",location:"Chennai",role:"Developer",logo:"Z"},
  {id:6,title:"React Developer",company:"Capgemini",salary:"₹45,000",location:"Pune",role:"Developer",logo:"C"},
  {id:7,title:"Angular Developer",company:"Cognizant",salary:"₹47,000",location:"Chennai",role:"Developer",logo:"C"},
  {id:8,title:"Cloud Engineer",company:"Google",salary:"₹1,20,000",location:"Hyderabad",role:"Engineer",logo:"G"},
  {id:9,title:"Java Developer",company:"Oracle",salary:"₹80,000",location:"Bangalore",role:"Developer",logo:"O"},
  {id:10,title:"System Analyst",company:"IBM",salary:"₹78,000",location:"Pune",role:"Analyst",logo:"I"},
  {id:11,title:"DevOps Engineer",company:"Tech Mahindra",salary:"₹82,000",location:"Noida",role:"Engineer",logo:"T"},
  {id:12,title:"Product Designer",company:"Freshworks",salary:"₹71,000",location:"Chennai",role:"Designer",logo:"F"},
  {id:13,title:"Manual Tester",company:"Mindtree",salary:"₹47,000",location:"Mysore",role:"Tester",logo:"M"},
  {id:14,title:"Business Analyst",company:"Deloitte",salary:"₹90,000",location:"Hyderabad",role:"Analyst",logo:"D"},
  {id:15,title:"Web Developer",company:"CTS",salary:"₹66,000",location:"Chennai",role:"Developer",logo:"C"},
  {id:16,title:"UI Developer",company:"Paytm",salary:"₹50,000",location:"Delhi",role:"Developer",logo:"P"},
  {id:17,title:"Web Designer",company:"Amazon",salary:"₹75,000",location:"Delhi",role:"Designer",logo:"A"},
  {id:18,title:"QA Tester",company:"Accenture",salary:"₹49,000",location:"Bangalore",role:"Tester",logo:"A"},
  {id:19,title:"Backend Engineer",company:"Flipkart",salary:"₹85,000",location:"Bangalore",role:"Engineer",logo:"F"},
  {id:20,title:"Data Scientist",company:"Microsoft",salary:"₹1,50,000",location:"Hyderabad",role:"Analyst",logo:"M"},
  {id:21,title:"AI Engineer",company:"Nvidia",salary:"₹1,80,000",location:"Pune",role:"Engineer",logo:"N"},
  {id:22,title:"ML Engineer",company:"Tesla",salary:"₹2,00,000",location:"Remote",role:"Engineer",logo:"T"},
  {id:23,title:"Support Engineer",company:"HP",salary:"₹45,000",location:"Chennai",role:"Engineer",logo:"H"},
  {id:24,title:"Security Analyst",company:"Cisco",salary:"₹95,000",location:"Bangalore",role:"Analyst",logo:"C"},
  {id:25,title:"Network Engineer",company:"Dell",salary:"₹70,000",location:"Hyderabad",role:"Engineer",logo:"D"},
  {id:26,title:"UI/UX Designer",company:"Adobe",salary:"₹60,000",location:"Mumbai",role:"Designer",logo:"A"},
  {id:27,title:"Game Developer",company:"Ubisoft",salary:"₹90,000",location:"Pune",role:"Developer",logo:"U"},
  {id:28,title:"Mobile Developer",company:"Samsung",salary:"₹80,000",location:"Noida",role:"Developer",logo:"S"},
  {id:29,title:"Cloud Architect",company:"AWS",salary:"₹2,20,000",location:"Remote",role:"Engineer",logo:"A"},
  {id:30,title:"Blockchain Developer",company:"Polygon",salary:"₹1,70,000",location:"Remote",role:"Developer",logo:"P"}
];

let saved = JSON.parse(localStorage.getItem("saved")) || [];

let jobDiv = document.getElementById("jobs");
let savedDiv = document.getElementById("saved");
let search = document.getElementById("search");
let company = document.getElementById("company");
let role = document.getElementById("role");

[...new Set(jobs.map(j => j.company))].forEach(c => {
  let o = document.createElement("option");
  o.value = c;
  o.textContent = c;
  company.appendChild(o);
});

[...new Set(jobs.map(j => j.role))].forEach(r => {
  let o = document.createElement("option");
  o.value = r;
  o.textContent = r;
  role.appendChild(o);
});

function showJobs(data) {
  jobDiv.innerHTML = "";
  if (data.length === 0) {
    jobDiv.innerHTML = '<div class="empty">No jobs found</div>';
    return;
  }

  data.forEach(j => {
    let div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <div class="logo">${j.logo}</div>
      <div class="title">${j.title}</div>
      <div class="company">${j.company}</div>
      <div class="detail"><span class="label">Salary:</span> ${j.salary}</div>
      <div class="detail"><span class="label">Location:</span> ${j.location}</div>
      <div class="detail"><span class="label">Role:</span> ${j.role}</div>
      <button class="save">Save</button>
      <button class="apply">Apply</button>
    `;

    div.querySelector(".save").onclick = () => saveJob(j.id);
    div.querySelector(".apply").onclick = () => alert("Applied for " + j.title);

    jobDiv.appendChild(div);
  });
}

function showSaved() {
  savedDiv.innerHTML = "";
  if (saved.length === 0) {
    savedDiv.innerHTML = '<div class="empty">No saved jobs</div>';
    return;
  }

  saved.forEach(j => {
    let div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <div class="logo">${j.logo}</div>
      <div class="title">${j.title}</div>
      <div class="company">${j.company}</div>
      <div class="detail"><span class="label">Salary:</span> ${j.salary}</div>
      <div class="detail"><span class="label">Location:</span> ${j.location}</div>
      <div class="detail"><span class="label">Role:</span> ${j.role}</div>
      <button class="remove">Remove</button>
    `;

    div.querySelector(".remove").onclick = () => removeJob(j.id);
    savedDiv.appendChild(div);
  });
}

function saveJob(id) {
  let job = jobs.find(j => j.id === id);
  if (!saved.some(j => j.id === id)) {
    saved.push(job);
    localStorage.setItem("saved", JSON.stringify(saved));
    showSaved();
  } else {
    alert("Already Saved");
  }
}

function removeJob(id) {
  saved = saved.filter(j => j.id !== id);
  localStorage.setItem("saved", JSON.stringify(saved));
  showSaved();
}

function filterJobs() {
  let txt = search.value.toLowerCase();
  let comp = company.value;
  let rl = role.value;

  let filtered = jobs.filter(j =>
    j.title.toLowerCase().includes(txt) &&
    (comp === "all" || j.company === comp) &&
    (rl === "all" || j.role === rl)
  );

  showJobs(filtered);
}

search.oninput = filterJobs;
company.onchange = filterJobs;
role.onchange = filterJobs;

showJobs(jobs);
showSaved();