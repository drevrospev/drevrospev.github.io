$(() => {
  function setNavMenu() {
    nav = $('<nav class="nav nav-masthead justify-content-center float-md-end"/>');
    nav.html(localStorage['nav']);
    $('header div').append(nav);
  }

  let nav = $('header nav');
  if (nav.length > 0) {
    localStorage['nav'] = nav.html();
  } else {
    if (localStorage['nav'] == undefined) {
      $.get('/index.html', (data) => {
        localStorage['nav'] = data.match(/\<nav.*?\>(.*?)\<\/nav/s)[1];
        setNavMenu();
      });
    } else {
      setNavMenu();
    }
  }
});
