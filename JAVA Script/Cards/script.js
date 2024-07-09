var mybtn = document.querySelectorAll(".btn");

const hello = () => {
  console.log("hello");
};

// mybtn.addEventListener("click", hello);
// mybtn.item.addEventListener("click", hello);

mybtn.forEach(() => {
  addEventListener("click", hello);
});
