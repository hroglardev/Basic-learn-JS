'use strict'

$(document).ready(() => {
  console.log('OK TO CODE')

  // GALLERY
  $('.galeria').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 1200,
    resposive: true,
  })

  // POSTS

  let posts = [
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
    let post = `<article class='post'>
    <h2>${userPost.title}</h2>
    <span class='date'>${userPost.date}</span>
    <p>${userPost.content}</p>
    <a href='#' class='button-more'>
      Read more
    </a>
  </article>`

    $('#posts').append(post)
  })

  //
  console.log(posts)
})
