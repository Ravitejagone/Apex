const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");
burger.addEventListener("click", () => {
    ul.classList.toggle("show");
  });
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// todo list

// document.addEventListener("DOMContentLoaded", loadTasks);

// function addTask() {
//     let taskInput = document.getElementById("taskInput").value;
//     if (!taskInput) return;

//     let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
//     tasks.push(taskInput);
//     localStorage.setItem("tasks", JSON.stringify(tasks));

//     displayTasks();
//     document.getElementById("taskInput").value = "";
// }

// function loadTasks() {
//     displayTasks();
// }

// function displayTasks() {
//     let taskList = document.getElementById("taskList");
//     taskList.innerHTML = "";
//     let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    
//     tasks.forEach((task, index) => {
//         let li = document.createElement("li");
//         li.innerHTML = `${task} <button onclick="deleteTask(${index})">❌</button>`;
//         taskList.appendChild(li);
//     });
// }

// function deleteTask(index) {
//     let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
//     tasks.splice(index, 1);
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//     displayTasks();
// }
// shopping
// const products = [
//   { name: "Laptop", category: "electronics", price: 1000, rating: 4.5 },
//   { name: "Phone", category: "electronics", price: 600, rating: 4.2 },
//   { name: "T-shirt", category: "clothing", price: 20, rating: 4.8 },
//   { name: "Jeans", category: "clothing", price: 40, rating: 4.6 },
// ];

// function displayProducts(filteredProducts) {
//   const container = document.getElementById("productContainer");
//   container.innerHTML = "";
//   filteredProducts.forEach((product) => {
//       container.innerHTML += `
//           <div class="product">
//               <h3>${product.name}</h3>
//               <p>Category: ${product.category}</p>
//               <p>Price: $${product.price}</p>
//               <p>Rating: ⭐${product.rating}</p>
//           </div>
//       `;
//   });
// }

// document.getElementById("categoryFilter").addEventListener("change", function () {
//   let category = this.value;
//   let filtered = category === "all" ? products : products.filter(p => p.category === category);
//   displayProducts(filtered);
// });

// document.getElementById("sortOption").addEventListener("change", function () {
//   let option = this.value;
//   let sortedProducts = [...products];

//   if (option === "price-low") sortedProducts.sort((a, b) => a.price - b.price);
//   if (option === "price-high") sortedProducts.sort((a, b) => b.price - a.price);
//   if (option === "rating-high") sortedProducts.sort((a, b) => b.rating - a.rating);

//   displayProducts(sortedProducts);
// });

// // Initial Display
// displayProducts(products);
