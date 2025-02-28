var shop = [
    {
      title: 'Adult Cat Food',
      image: './img/fooda.jpeg',
      price: '$50-100',
      description: 'Adult Cat Food'
    },
    {
        title: 'Kitten Food',
        image: './img/FoodKitten.jpeg',
        price: '$50-100',
        description: 'Kitten Food'
      },
      {
        title: 'Shelter',
        image: './img/shelter2.jpeg',
        price: '$100-500',
        description: 'Outside shelter'
      },
      {
        title: 'Collar',
        image: './img/catCollarAT.png',
        price: '$5-15',
        description: 'Holding place for collars'
      },
      {
          title: 'Flea and Tick',
          image: './img/FleaTick.png',
          price: '$50-100',
          description: 'Flea and Tick Treatment'
        },
        {
          title: 'Other Health',
          image: './img/catshelter.jpg',
          price: '$30',
          description: 'Plans for buildable Cat Shelter (not the shelter just the plans)'
        },
        // {
        //   title: 'Water Bowl',
        //   image: './img/catimage1a.jpg',
        //   price: '$7,500-15,000',
        //   description: 'Holding place for Water Bowl'
        // },
        {
            title: 'Heatable Water Bowl',
            image: './img/bowl1.jpeg',
            price: '$20-50',
            description: 'Heatable Water Bowl made to prevent ice in freezing temperatures'
          },
          {
            title: 'Cat Catcher',
            image: './img/catch.jpeg',
            price: '$50-150',
            description: 'Cat Catching Device made to catch ferel cats'
          },
         
    
    ]
    
    var postHTML = " "
  
  
  
  

  
  
  
  
  
  
  
  
  
  
  
    
  
  
  
    for (var i=0; i < shop.length; i++){
        var heading = '<div class="product"' + '"><span><h5>' + shop[i].title + '</h5>'
        var image = '<img class="img-fluid" src="' + shop[i].image + '"/>'
        var price = '<p> $' + shop[i].price + '</p></span>'
        var description = '<div class=""><p>'+ shop[i].description + '</p><button type="button" class="btn btn-warning"> add to cart</button></div></div>'
        var concatThis = heading + image + price + description;
        postHTML = postHTML + concatThis
    }
    document.getElementById('market').innerHTML = postHTML

