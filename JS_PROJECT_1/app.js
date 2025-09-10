const users = [
    {
        name: "amisha rathore",
        pic: "https://images.unsplash.com/photo-1600357524338-0aa536556606?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybCUyMGltYWdlfGVufDB8fDB8fHww",
        bio: "silent chaos in a loud world | not for everyone",
    },
    {
        name: "isha verma",
        pic: "https://images.unsplash.com/photo-1531764117131-cbd26e7885f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybCUyMGltYWdlfGVufDB8fDB8fHww",
        bio: "dreamer of distant places | heart full of stories",
    },
    {
        name: "sana malik",
        pic: "https://images.unsplash.com/photo-1611417361507-7d77bbc20a73?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2lybCUyMGltYWdlfGVufDB8fDB8fHww",
        bio: "soft smiles & strong mind | finding her way",
    },
    {
        name: "riya kapoor",
        pic: "https://images.unsplash.com/photo-1579865346865-9223701ba92e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdpcmwlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
        bio: "living in moments, not in timelines",
    },
    {
        name: "neha sharma",
        pic: "https://images.unsplash.com/photo-1605643097366-2ebbc7aeb96b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdpcmwlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
        bio: "moonlight soul with a sunshine smile",
    },
    {
        name: "priya sehgal",
        pic: "https://images.unsplash.com/photo-1464863979621-258859e62245?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdpcmwlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
        bio: "quietly powerful | fiercely kind",
    }
]

function showusers(arr){
  arr.forEach(function(user){
    // create outer card div
    const card = document.createElement("div");
    card.classList.add("card");

    // create image
    const img = document.createElement("img");
    img.src = user.pic;
    img.classList.add("bg-img");

    //create blurred-layer div
    const blurredLayer = document.createElement("div");
    blurredLayer.style.backgroundImage = `url(${user.pic})`;
    blurredLayer.classList.add("blurred-layer");

    // create content div
    const content = document.createElement("div");
    content.classList.add("content");

    // create h3 and paragraph
    const heading = document.createElement("h3");
    heading.textContent = user.name;

    const para = document.createElement("p");
    para.textContent = user.bio;

    // append all to card
    card.appendChild(img);
    card.appendChild(blurredLayer);
    card.appendChild(content);

    content.appendChild(heading);
    content.appendChild(para);

    // finally , append card to the body or any container
    document.querySelector(".cards").appendChild(card);
  });
}


showusers(users);

let inp = document.querySelector(".inp");
inp.addEventListener("input",function(){
    let newUsers = users.filter((user)=>{
        return user.name.startsWith(inp.value);
    });

    document.querySelector(".cards").innerHTML = "";
    showusers(newUsers);
});

// sare users show karna hai
// filter karna hai har baar input karne par
// show karna hai hai filtered users 

