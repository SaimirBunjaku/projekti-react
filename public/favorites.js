document.addEventListener("DOMContentLoaded", function () {
    const favoritesList = document.getElementById("favorites-list");
    const favoritesData = JSON.parse(localStorage.getItem('favorites')) || [];
  
    
    const userImageMapping = {
      1: 'html.png',
      2: 'css.png',
      3: 'js.png',
      4: 'mysql.png',
      5: 'node.png',
      6: 'php.png',
      7: 'python.png',
      8: 'react.png',
      9: 'ruby.png',
      10: 'cplus.png',

    };
  
    favoritesData.forEach((user) => {
      const favoriteItem = document.createElement("div");
      favoriteItem.classList.add("favorite-item");
  
      const imageContainer = document.createElement("div");
      imageContainer.classList.add("image-container");
      const image = document.createElement("img");
  
      // merre path t'img me id tveten qysh i kom bo ma nalt 
      const imagePath = userImageMapping[user.id];
  
      if (imagePath) {
        image.src = imagePath;
      } else {
        // nese ska id me qat foto me na qit ni foto tjeter ose kurgjo hic
        image.src = ''; 
      }
  
      const nickname = document.createElement("p");
      nickname.textContent = user.username;
  
      const name = document.createElement("h3");
      name.textContent = user.name;
  
      const email = document.createElement("p");
      email.textContent = user.email;
  
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove from favorites";
      removeButton.classList.add("remove-button");
  
      // me hek prej local storage
      removeButton.addEventListener("click", () => {
        // filter ncilin item id osht edhe me hek
        const updatedFavorites = favoritesData.filter((item) => item.id !== user.id);
        favoritesData.splice(0, favoritesData.length, ...updatedFavorites);
  
        // e hekmi prej DOM-i
        favoriteItem.remove();
  
        // edhe e bojm update localstorage (me rifresku)
        localStorage.setItem('favorites', JSON.stringify(favoritesData));
      });
      
      favoriteItem.appendChild(nickname);
      imageContainer.appendChild(image);
      favoriteItem.appendChild(imageContainer);
      favoriteItem.appendChild(name);
      favoriteItem.appendChild(email);
      favoriteItem.appendChild(removeButton);
  
      favoritesList.appendChild(favoriteItem);
    });
  });
  