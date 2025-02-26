var shop = [
    {
      title: 'Adult Cat Food',
      image: './img/fooda.jpeg',
      price: '$7,500-15,000',
      description: 'Holding place Adult Cat Food'
    },
    {
        title: 'Kitten Food',
        image: './img/catfood.jpeg',
        price: '$7,500-15,000',
        description: 'Holding place for Kitten Food'
      },
      {
        title: 'Shelter',
        image: './img/shelter2.jpeg',
        price: '$7,500-15,000',
        description: 'Holding place for Food'
      },
      {
        title: 'Collar',
        image: './img/catimage1a.jpg',
        price: '$7,500-15,000',
        description: 'Holding place for collars'
      },
      {
          title: 'Flea and Tick',
          image: './img/catfood.jpeg',
          price: '$7,500-15,000',
          description: 'Holding place for Flea and Tick Treatment'
        },
        {
          title: 'Other Health',
          image: './img/catshelter.jpg',
          price: '$7,500-15,000',
          description: 'Holding place for Other Health Treatments'
        },
        {
          title: 'Water Bowl',
          image: './img/catimage1a.jpg',
          price: '$7,500-15,000',
          description: 'Holding place for Water Bowl'
        },
        {
            title: 'Heatable Water Bowl',
            image: './img/bowl1.jpeg',
            price: '$7,500-15,000',
            description: 'Holding place for Heatable Water Bowl'
          },
          {
            title: 'Cat Catcher',
            image: './img/catch.jpeg',
            price: '$7,500-15,000',
            description: 'Holding place for Cat Catching Device'
          },
         
    
    ]
    
    var postHTML = " "
  
  
  
  

  
  
  
  
  
  
  
  
  
  
  
    
  
  
  
    for (var i=0; i < shop.length; i++){
        var heading = '<div class="product ' + '"><span><h5>' + shop[i].title + '</h5>'
        var image = '<img src="' + shop[i].image + '"/>'
        var price = '<p> $' + shop[i].price + '</p></span>'
        var description = '<div class=""><p>'+ shop[i].description + '</p><button type="button" class="btn btn-warning"> add to cart</button></div></div>'
        var concatThis = heading + image + price + description;
        postHTML = postHTML + concatThis
    }
    document.getElementById('market').innerHTML = postHTML

