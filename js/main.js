// Sticky menu background
window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
      document.querySelector('#navbar').style.opacity = 0.9;
    } else {
      document.querySelector('#navbar').style.opacity = 1;
    }
  });
  
  
  // Smooth Scrolling
  $('#navbar a, .btn').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
  
      const hash = this.hash;
  
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 100
        },
        800
      );
    }
  });

  const url = 'https://www.googleapis.com/blogger/v3/blogs/8857434284299255372/posts?key=AIzaSyC0nZ_oR1VYYYdrOkZbyqTwYhKicSEqIgE'
  fetch(url)
    .then( (response) => response.json() )
    .then((data) => {
      console.log(data.items);
      const posts = data.items;
      return posts.slice(0,3).map(items => {
        const blogPosts = document.getElementById('blogPosts')
        const article = document.createElement('article'),
              title = document.createElement('h2'),
              content = document.createElement('p')

              title.innerHTML = items.title
              content.innerHTML = items.content

              article.appendChild(title)
              article.appendChild(content)    
              blogPosts.appendChild(article)
      })
    })