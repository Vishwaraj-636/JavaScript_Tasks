let h= document.querySelector('h1');
let btn= document.querySelector('button');
let main = document.querySelector('main');

let ipl=[
    {
        team:'CSK',
        primary:'yellow',
        sec:'blue',
        fullName:'Chennai Super Kings',
        trophies:5,
        captain:'MSD'
    },
    {
        team:'DC',
        primary:'blue',
        sec:'red',
        fullName:'Delhi Capitals',
        trophies:0,
        captain:'Rishabh Pant'
    },
    {
        team:'GT',
        primary:'darkblue',
        sec:'white',
        fullName:'Gujrat Titans',
        trophies:1,
        captain:'MSD'
    },
    {
        team:'SRH',
        primary:'orange',
        sec:'red',
        fullName:'Sunrisers Hydrabad',
        trophies:1,
        captain:'mr a'
    },
    {
        team:'RCB',
        primary:'red',
        sec:'gold',
        fullName:'Royal Challengers Bangalore',
        trophies:1,
        captain:'Virat Kohli'
    },
    {
        team:'KKR',
        primary:'purple',
        sec:'gold',
        fullName:'Kolkata Knight Riders',
        trophies:3,
        captain:'mr b'
    },
    {
        team:'MI',
        primary:'blue',
        sec:'white',
        fullName:'Mumbai Indians',
        trophies:5,
        captain:'Hardik Pandya'
    },
    {
        team:'PKBS',
        primary:'red',
        sec:'silver',
        fullName:'Punjab Kings',
        trophies:0,
        captain:'mr c'
    },
    {
        team:'RR',
        primary:'pink',
        sec:'white',
        fullName:'Rajasthan Royals',
        trophies:0,
        captain:'Sanju Sampson'
    }
]
btn.addEventListener('click',function (){
    let a = Math.floor(Math.random()*ipl.length);
    let team= ipl[a].team;
    let primary=ipl[a].primary;
    let sec=ipl[a].sec;
    let fullName=ipl[a].fullName;
    let trophies=ipl[a].trophies;
    let captain =ipl[a].captain;
    h.innerHTML=`${team}`+"</br>"+`${captain}`+"</br>"+`${fullName}`+"</br>"+`${trophies}`
    main.style.backgroundColor=`${primary}`
    h.style.backgroundColor = `${sec}`
})
