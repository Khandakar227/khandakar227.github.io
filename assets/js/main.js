var typed = new Typed('.typing', {
  strings: ['web developer', 'robotics enthusiast'],
  smartBackspace: true,
  typeSpeed: 100,
  backDelay: 800,
  backSpeed: 30,
  loop: true
});

            const scriptURL = 'https://script.google.com/macros/s/AKfycby2iXVQUOzW-0AjrVYwT9-bIJteBSHcvm9C-CwDt5vv70sIBJRxkb37/exec'
            const form = document.getElementById('formMsg');
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => {
					$('#formMsg').css('display','none');
					$('#response').css('display','block');
					})
                .catch(error => console.error('Error!', error.message))
            })


$(window).on('scroll', function () {
    scroll_pos = $(window).scrollTop() + $(window).height();
    bar_pos = $('.progress-bar').offset().top + $('.progress-bar').height();
	project_pos = $('.imgdiv').offset().top;
    if (scroll_pos > bar_pos) {
        $('.progress-bar').addClass('animate');
    };
});