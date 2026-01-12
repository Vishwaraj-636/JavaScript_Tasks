const users = [
  {
    fullName: "Aarav Mehta",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    profession: "Full Stack Developer",
    description:
      "Specializes in building scalable web applications using the MERN stack with a strong focus on clean UI and API performance.",
    tags: ["MERN", "JavaScript", "React", "Node.js"]
  },
  {
    fullName: "Priya Sharma",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    profession: "UI/UX Designer",
    description:
      "Designs intuitive and visually engaging digital experiences backed by user research and usability testing.",
    tags: ["Figma", "UX Research", "Wireframing", "Prototyping"]
  },
  {
    fullName: "Rohan Verma",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    profession: "Data Scientist",
    description:
      "Works with large datasets to build predictive models and extract business insights using machine learning techniques.",
    tags: ["Python", "Machine Learning", "Pandas", "Data Analysis"]
  },
  {
    fullName: "Neha Kapoor",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    profession: "Digital Marketer",
    description:
      "Drives online growth through SEO, content marketing, and performance advertising strategies.",
    tags: ["SEO", "Google Ads", "Content Marketing", "Analytics"]
  },
  {
    fullName: "Aditya Malhotra",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    profession: "Cybersecurity Analyst",
    description:
      "Protects systems and networks by identifying vulnerabilities and implementing security best practices.",
    tags: ["Ethical Hacking", "Network Security", "Risk Assessment", "Penetration Testing"]
  }
];


let body = document.querySelector("body")
users.forEach(user =>{
    let c= document.createElement("div")
    c.classList.add('card')
    
    let img = document.createElement("img")
    img.src = user.image
    let h1 = document.createElement("h1")
    h1.textContent = user.fullName
    let h3 = document.createElement("h3")
    h3.textContent = user.profession
    let p = document.createElement("p")
    p.textContent = user.description

    c.appendChild(img)
    c.appendChild(h1)
    c.appendChild(h3)
    c.appendChild(p)
    body.appendChild(c)
})