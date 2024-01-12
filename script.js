import { data } from "./data.js";
console.log(data);
const itemsContainer = document.querySelector(".items");

data?.forEach((res)=>{
    console.log(res);
    const node = document.createElement("div");
    node.setAttribute("class","product");
    node.innerHTML = `<div class="image">
                    <img src="${res?.image}" />
                    <div class="like">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-heart" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                          </svg>
                     </div>
                </div>
                <div class="description">
                    <div class="label">
                        <h3>${ res?.place?.charAt(0)?.toUpperCase() + res?.place?.substring(1)?.toLowerCase()}</h3>
                        <p>${res?.ratings}</p>
                    </div>
                    <div class="stay-desc light">
                        <p>${res?.distance}</p>
                        <p>${res?.date}</p>
                    </div>
                </div>`;
    itemsContainer.appendChild(node);
})