'use strict'

$(document).ready(() => {
  console.log('OK TO CODE')
  if (window.location.href.indexOf('index') > -1) {
    // GALLERY
    $('.galeria').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 1200,
      resposive: true,
    })
  }

  // POSTS
  if (window.location.href.indexOf('index') > -1) {
    const posts = [
      {
        title: 'Prueba de titulo 1',
        date: `Published on ${moment().day()} of ${moment().format(
          'MMMM'
        )} in ${moment().format('YYYY')}`,
        content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
    accusantium voluptate minima ad excepturi laboriosam quas optio
    sapiente fugiat, debitis, aliquam in tempora reiciendis voluptas
    deserunt quasi modi natus soluta. Lorem ipsum dolor sit amet
    consectetur adipisicing elit. Sapiente quos aut facere iure
    placeat harum. Temporibus adipisci quos accusantium! Maxime eum
    nemo quibusdam nisi quaerat dolore dolorum deleniti error et.`,
      },
      {
        title: 'Prueba de titulo 2',
        date: `Published on ${moment().day()} of ${moment().format(
          'MMMM'
        )} in ${moment().format('YYYY')}`,
        content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
      accusantium voluptate minima ad excepturi laboriosam quas optio
      sapiente fugiat, debitis, aliquam in tempora reiciendis voluptas
      deserunt quasi modi natus soluta. Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Sapiente quos aut facere iure
      placeat harum. Temporibus adipisci quos accusantium! Maxime eum
      nemo quibusdam nisi quaerat dolore dolorum deleniti error et.`,
      },
      {
        title: 'Prueba de titulo 3',
        date: `Published on ${moment().day()} of ${moment().format(
          'MMMM'
        )} in ${moment().format('YYYY')}`,
        content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
      accusantium voluptate minima ad excepturi laboriosam quas optio
      sapiente fugiat, debitis, aliquam in tempora reiciendis voluptas
      deserunt quasi modi natus soluta. Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Sapiente quos aut facere iure
      placeat harum. Temporibus adipisci quos accusantium! Maxime eum
      nemo quibusdam nisi quaerat dolore dolorum deleniti error et.`,
      },
      {
        title: 'Prueba de titulo 4',
        date: `Published on ${moment().day()} of ${moment().format(
          'MMMM'
        )} in ${moment().format('YYYY')}`,
        content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
      accusantium voluptate minima ad excepturi laboriosam quas optio
      sapiente fugiat, debitis, aliquam in tempora reiciendis voluptas
      deserunt quasi modi natus soluta. Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Sapiente quos aut facere iure
      placeat harum. Temporibus adipisci quos accusantium! Maxime eum
      nemo quibusdam nisi quaerat dolore dolorum deleniti error et.`,
      },
      {
        title: 'Prueba de titulo 5',
        date: `Published on ${moment().day()} of ${moment().format(
          'MMMM'
        )} in ${moment().format('YYYY')}`,
        content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
      accusantium voluptate minima ad excepturi laboriosam quas optio
      sapiente fugiat, debitis, aliquam in tempora reiciendis voluptas
      deserunt quasi modi natus soluta. Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Sapiente quos aut facere iure
      placeat harum. Temporibus adipisci quos accusantium! Maxime eum
      nemo quibusdam nisi quaerat dolore dolorum deleniti error et.`,
      },
    ]

    posts.forEach((userPost) => {
      const post = `<article class='post'>
    <h2>${userPost.title}</h2>
    <span class='date'>${userPost.date}</span>
    <p>${userPost.content}</p>
    <a href='#' class='button-more'>
      Read more
    </a>
  </article>`

      $('#posts').append(post)
    })
  }

  // CHANGE THEME
  const theme = $('#theme')
  $('#to-green').click(() => {
    theme.attr('href', 'css/green.css')
  })
  $('#to-red').click(() => {
    theme.attr('href', 'css/red.css')
  })
  $('#to-blue').click(() => {
    theme.attr('href', 'css/blue.css')
  })

  // SCROLL TO TOP
  $('.go-up').click((event) => {
    event.preventDefault()
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      500
    )
    return false
  })

  // LOGIN
  $('#login form').submit(() => {
    const formName = $('#name').val()
    localStorage.setItem('formName', formName)
  })

  const formName = localStorage.getItem('formName')
  if (formName !== null && formName !== undefined) {
    const aboutParagraph = $('#about p')
    aboutParagraph.html(`<br /><strong>Welcome ${formName}</strong>`)
    aboutParagraph.append(`<a href="#" id="logout">Log out</a>`)

    $('#login').hide()

    $('#logout').click(() => {
      localStorage.clear()
      location.reload()
    })
  }
  // ACCORDION IN ABOUT
  if (window.location.href.indexOf('about') > -1) {
    $('#accordion').accordion()
  }

  // CLOCK

  if (window.location.href.indexOf('clock') > -1) {
    setInterval(() => {
      let clock = moment().format('hh:mm:ss')
      $('#clock').html(clock)
    }, 1000)
  }
})
