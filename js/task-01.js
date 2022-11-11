const categorieAll = document.querySelectorAll("#categories li.item");
console.log("Number of categories: "+ categorieAll.length)

categorieAll.forEach(element=>{
  const categorieName = element.firstElementChild.textContent;
  console.log("Category: " + categorieName);

  const categorieElem = element.lastElementChild.children.length;
  console.log("Elements: "+categorieElem)
})
