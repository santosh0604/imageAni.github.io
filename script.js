//get the data\

let users = [
  {
    profilePic:
      "/images/sushma9.jpg",
    displayPic:
      "images/Sushma1.jpg",
    pendingMeassage: 4,
    location: "Mumbai, India",
    name: "Penguin",
    age: 20,
    interests: ["music", "Wendering"],
    bio: "Self Love",
    isFriend: null,
  },
  {
    profilePic:
      "/images/sushma9.jpg",
    displayPic:
      "/images/Sushma2.jpg",
    pendingMeassage: 6,
    location: "Mumbai, India",
    name: "Shushu",
    age: 20,
    interests: ["music", "Wendering"],
    bio: "Self Love",
    isFriend: null,
  },
  {
    profilePic:
      "/images/sushma9.jpg",
    displayPic:
      "/images/Sushma3.jpg",
    pendingMeassage: 3,
    location: "Mumbai, India",
    name: "Pyari",
    age: 20,
    interests: ["music", "Wendering"],
    bio: "Self Love",
    isFriend: null,
  },
  {
    profilePic:
      "/images/sushma9.jpg",
    displayPic:
      "/images/Sushma7.jpg",
    pendingMeassage: 14,
    location: "Mumbai, India",
    name: "Kitkat",
    age: 20,
    interests: ["music", "Wendering"],
    bio: "Self Love",
    isFriend: null,
  },
  {
    profilePic:
      "/images/sushma10.jpg",
    displayPic:
      "/images/Sushma5.jpg",
    pendingMeassage: 15,
    location: "Mumbai, India",
    name: "Sona",
    age: 20,
    interests: ["music", "Wendering"],
    bio: "Self Love",
    isFriend: null,
  },
   {
    profilePic:
      "/images/sushma10.jpg",
    displayPic:
      "/images/Sushma6.jpg",
    pendingMeassage: 15,
    location: "Mumbai, India",
    name: "Sonu",
    age: 20,
    interests: ["music", "Wendering"],
    bio: "Self Love",
    isFriend: null,
  },
  {
    profilePic:
      "/images/sushma10.jpg",
    displayPic:
      "/images/Sushma4.jpg",
    pendingMeassage: 15,
    location: "Mumbai, India",
    name: "Bachi....",
    age: 20,
    interests: ["music", "Wendering"],
    bio: "Self Love",
    isFriend: null,
  },
    {
    profilePic:
      "/images/sushma10.jpg",
    displayPic:
      "/images/Sushma8.jpg",
    pendingMeassage: 15,
    location: "Mumbai, India",
    name: "Princess",
    age: 20,
    interests: ["music", "Wendering"],
    bio: "Self Love",
    isFriend: null,
  },
];

function select(elem) {
  return document.querySelector(elem);
}

let curr = 0;
let isAnimating = false;

function setData(index){
    select(".prflimg img").src = users[index].profilePic;
  select(".badge h5").textContent = users[index].pendingMeassage;
  select(".location h3").textContent = users[index].location;
  select(".name h1:nth-child(1)").textContent = users[index].name;
  select(".name h1:nth-child(2)").textContent = users[index].age;

  var clutter = "";
  users[index].interests.forEach(function (interest) {
    clutter += `<div class="tag flex items-center bg-white/30 px-3 py-1 rounded-full gap-3">
                    <i class="text-lg ri-music-2-fill"></i>
                    <h3 class="text-lg tracking-tight capitalize">${interest}</h3>
                </div>`;
  });
  select(".tags").innerHTML = clutter;
  // select(".bio p").textContent = users[index].bio;
}

(function setInitial() {
  select(".maincard img").src = users[curr].displayPic;
  select(".incomingcard img").src = users[curr + 1]?.displayPic;

   setData(curr);
  curr = 2;
})();

function imageChanged() {
  if (!isAnimating) {
    isAnimating=true;
    let t1 = gsap.timeline({
      onComplete: function () {
        isAnimating=false;
        let main = select(".maincard");
        let incoming = select(".incomingcard");

        incoming.classList.remove("z-[2]");
        incoming.classList.add("z-[3]");
        incoming.classList.remove("incomingcard");

        main.classList.remove("z-[3]");
        main.classList.add("z-[2]");
        gsap.set(main, {
          scale: 1,
          opacity: 1,
        });

        if (curr === users.length) curr = 0;
        select(".maincard img").src = users[curr].displayPic;
        curr++;

        main.classList.remove("maincard");
        incoming.classList.add("maincard");
        main.classList.add("incomingcard");
      },
    });
    t1.to(
      ".maincard",
      {
        scale: 1.1,
        opacity: 0,
        ease: Circ,
        duration: 0.9,
      },
      "a"
    );
    t1.from(
      ".incomingcard",
      {
        scale: 0.9,
        opacity: 0,
        ease: Circ,
        duration: 1.1,
      },
      "a"
    );
  }
}

let deny = select(".deny");
let accept = select(".accept");

deny.addEventListener("click", function () {
  imageChanged();
  setData(curr-1);
  gsap.from(".details .element",{
  y:"100",
  stagger:.06,
  ease:Power4.easeInOut,
  duration:1.5
})
});

accept.addEventListener("click", function () {
  imageChanged();
  setData(curr-1);
  gsap.from(".details .element",{
  y:"100",
  stagger:.06,
  ease:Power4.easeInOut,
  duration:1.5
})
});


(function containerCreator(){
    document.querySelectorAll(".element")
    .forEach(function (element){
        let div=document.createElement("div");
        div.classList.add(`${element.classList[1]}container`,`overflow-hidden`)
        div.appendChild(element)
        select(".details").appendChild(div)
    })
})();




















