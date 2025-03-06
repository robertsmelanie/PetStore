

  function includeHTML() {
    var elements = document.querySelectorAll('[w3-include-html]');
    elements.forEach(function(el) {
      var file = el.getAttribute('w3-include-html');
      if (file) {
        fetch(file)
          .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.text();
          })
          .then(data => {
            el.innerHTML = data;
            el.removeAttribute('w3-include-html');
            includeHTML(); // Recursive call to handle nested includes
          })
          .catch(error => {
            el.innerHTML = 'Content not found.';
            console.error('There was a problem with the fetch operation:', error);
          });
      }
    });
  }
  includeHTML();
