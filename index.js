const loadAllPost = async () => {
    const respons = await fetch("https://openapi.programming-hero.com/api/retro-forum/posts")
    const data = await respons.json();
    const AllData = data.posts;
    const postData = postdataall(data.posts);

    function postdataall (item){
        for(const postdata of item){
        //    console.log( postdata)
        // console.log(item)
        const container = document.getElementById("post-container");
        //  console.log(AllData)
        let count = 0;
         item.forEach(element => {
            const div = document.createElement("div");
            div.innerHTML = `
                 <div class="hero h-72 bg-base-200 mt-6">
                        <div class="hero-content flex-col lg:flex-row">
                        <div class="avatar indicator">
                        <span class="indicator-item badge badge-secondary"></span> 
                        <div class="w-20 h-20 rounded-lg">
                        <img alt="Tailwind CSS examples" src=${item[count].image} />
                        </div>
                        </div>
                            <div>
                                <div class="flex gap-5">
                                    <p># ${item[count].category}</p>
                                    <p>Author : ${item[count].author.name}</p>
                                </div>
                                <h1 class="text-xl font-bold">${item[count].title}</h1>
                                <p class="text-base">${item[count].description}</p>
                                <hr>
                                <div class="flex gap-6 pt-11 justify-between">
                                <div class="flex gap-7">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                    </svg>
                                    <p>${item[count].comment_count}</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                        <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                        <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clip-rule="evenodd" />
                                    </svg>
                                    <p>${item[count].view_count}</p>
    
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clip-rule="evenodd" />
                                    </svg>
                                    
                                    <p>${item[count].posted_time}<p>Min</p></p>
                                </div>
                                    <div class="end-10">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                        </svg>
                                        
                                    </div>
                                </div>
                            
                            </div>
                            </div>
                </div>
            
            `
             container.appendChild(div);
             count++;
        });

        
        }
    }


  };


  loadAllPost();

