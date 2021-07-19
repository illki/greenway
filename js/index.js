// siema image carousel
const mySiema = new Siema({
    perPage: {
      800: 2, // 2 items for viewport wider than 800px
      1240: 3 // 3 items for viewport wider than 1240px
    }
  });
  document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
  document.querySelector('.next').addEventListener('click', () => mySiema.next());