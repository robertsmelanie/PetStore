var shop = [
    {
      title: 'Tigers',
      image: './img/catimage1a.jpg',
      price: '$7,500-15,000',
      description: 'Holding place for tigers'
    },
    {
        title: 'Food',
        image: './img/catfood.jpeg',
        price: '$7,500-15,000',
        description: 'Holding place for Food'
      },
      {
        title: 'Shelter',
        image: './img/catshelter.jpg',
        price: '$7,500-15,000',
        description: 'Holding place for Food'
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

