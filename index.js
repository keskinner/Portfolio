function showBanner() {
    //makes the landing page for page
    event.preventDefault();
    $('.aboutInfo').hide();
    $('.projectsInfo').hide();
    $('.contactInfo').hide();
    console.log('banner ran');
  }
  
  function showAbout() {
      //shows about info when About Kevin is clicked 
    $('button.navbar.about').on('click', function (event) {
      event.preventDefault();
      $('.banner').hide();
      $('.contactInfo').hide();
      $('projectsInfo').hide();
      $('.aboutInfo').show();
      console.log('about ran');
    })
  }
  
  function showProjects() {
      //shows projects info when Projects is clicked
    $('button.navbar.projects').on('click', function (event) {
      event.preventDefault();
      $('.banner').hide();
      $('.aboutInfo').hide();
      $('.contactInfo').hide();
      $('.projectsInfo').show();
      console.log('projects ran');
    })
  }
  
  function showContact () {
      //shows contact info when contact kevin is clicked
    $('button.navbar.contact').on('click', function (event) {
      event.preventDefault();
      $('.banner').hide();
      $('.aboutInfo').hide();
      $('.projectsInfo').hide();
      $('.contactInfo').show();
      console.log('contact ran');
    })
  }
  
  function makePort() {
      //makes the portfolio
    showBanner();
    showAbout();
    showProjects();
    showContact();
  }
  
  $(makePort);