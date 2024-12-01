function clickTab(evt, name) {
    var i, tabContent, tabLinks;

    tabContent = document.getElementsByClassName("tabContent");

    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }

    tabLinks = document.getElementsByClassName("tabLinks");

    for (i = 0; i < tabLinks.length; i++) {
      tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    document.getElementById(name).style.display = "block";
    evt.currentTarget.className += " active";
  }

  var users = new Map();
  users.set('Adam', '123456')
  users.set('Bob', '123456')

  function loginOrSignup(evt, name) {
      
      if (name == 'Login') {
          name = document.getElementById('login_name').value
          psw = document.getElementById('login_psw').value

          if (users.get(name) == psw) {
              window.alert('login success')
              window.location.href = "index.html?username=" + name
          } else {
              window.alert('login failed')
          }
      }

      if (name == 'Signup') {
          name = document.getElementById('signup_name').value
          psw = document.getElementById('signup_psw').value

          if (name != '' && psw != '') {
              users.set(name, psw)
              window.alert('singn success')
              window.location.href = "index.html?username=" + name
          } else {
              window.alert('please input username and password')
          }
      }
  }