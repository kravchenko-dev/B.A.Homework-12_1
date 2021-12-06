document.querySelector('button').addEventListener('click', function () {
  var elementOne = document.getElementById('myNav')

  if (elementOne.classList.contains('is-active')) {
    elementOne.classList.remove('is-active')
  } else {
    elementOne.classList.add('is-active')
  }
})

document.querySelector('button').addEventListener('click', function () {
  var elementOne = document.getElementById('hover__menu')

  if (elementOne.classList.contains('header__menu__hover')) {
    elementOne.classList.remove('header__menu__hover')
  } else {
    elementOne.classList.add('header__menu__hover')
  }
})
