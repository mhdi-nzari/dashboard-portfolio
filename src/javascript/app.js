const sideMenu = document.querySelector("aside"),
  menuBtn = document.querySelector("#menu-btn"),
  closeBtn = document.querySelector("#close-btn"),
  themeToggler = document.querySelector(".theme-toggler");

menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

//    change Theme

themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});


// toggle active sidebar item menu

const itemSideBarMenu = document.querySelectorAll(".sidebar  a");
itemSideBarMenu.forEach((item)=>{
     item.addEventListener('click' , function (){
          itemSideBarMenu.forEach((item)=>{
               item.classList.remove('active')
          })
          item.classList.add('active')

     })
})

console.log(itemSideBarMenu);

//  fetch product data 
async function logJSONData() {
  const response = await fetch("http://fakestoreapi.com/products");
  const jsonData = await response.json();

  const clearItem = jsonData.slice(0, 10);
  clearItem.map((item) => {
    const tr = document.createElement("tr");
    const trContent = `
    <td>${item.title} </td>
     <td>${item.price}</td>
     <td>${item.rating.count}</td>
     <td>${item.category} </td>
`;

    tr.innerHTML = trContent;
    document.querySelector("table tbody").appendChild(tr);
  });
}

logJSONData();
