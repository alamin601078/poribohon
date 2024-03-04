

const latesPost = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/retro-forum/latest-posts")
    const lates = await res.json();
    console.log(lates)
    const latesContainer = document.getElementById("lates-post-container");
    let count = 0
    lates.forEach(element => {
        const latesPostdiv = document.createElement("div");
        
        latesPostdiv.innerHTML=`
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src=${lates[count].cover_image} alt="Shoes" /></figure>
                <div class="card-body">
                <div>

                    <p>${lates[count].author.posted_date}</p>
                </div>
                <h2 class="card-title">${lates[count].title}</h2>
                <p>${lates[count].description} </p>
                <div class="flex gap-4">
                    <div class="avatar">
                    <div class="w-11 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src=${lates[count].profile_image} />
                    </div>
                    </div>
                    <div>
                    <p class="text-lg font-bold">${lates[count].author.name}</p>
                    <p>${lates[count].author.designation}</p>
                    </div>
                </div>
                </div>
            </div>
        
        `
        latesContainer.appendChild(latesPostdiv)
        count++;
    });


};

latesPost();