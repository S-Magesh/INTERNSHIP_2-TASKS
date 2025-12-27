const fetchBtn = document.getElementById("fetchBtn");
const postContainer = document.getElementById("postContainer");

console.log("JS Loaded ✅");

fetchBtn.addEventListener("click", () => {
  console.log("Button clicked!");

  fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
    .then(response => response.json())
    .then(data => {
      console.log("Data received:", data);
      postContainer.innerHTML = ""; 
      data.forEach(post => {
        const postDiv = document.createElement("div");
        postDiv.classList.add("post");
        postDiv.innerHTML = `
          <h2>${post.title}</h2>
          <p>${post.body}</p>
        `;
        postContainer.appendChild(postDiv);
      });
    })
    .catch(error => {
      console.error("Error:", error);
      postContainer.innerHTML = `<p style="color:red;">Error fetching posts: ${error}</p>`;
    });
});
