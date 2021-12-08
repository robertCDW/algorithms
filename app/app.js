// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
const bubbleEvents = require('./bubblesort/events')

$(() => {

  // simple ui
  $('#profile').on('click', () => {
    $('#drop-profile').toggle()
  })
  $('#new-sort').on('click', event => {
    let str = `<form><button class="btn btn-primary create">Create</button><button class="btn btn-danger cancel-create">Cancel</button>`
    let rand = null

    sessionStorage.setItem('count', 5)
    
    for (let i = 0; i < Number(sessionStorage.getItem('count')); i++) {
      rand = Math.floor(Math.random() * 100)
      str += `<input class="sort-new col-1" placeholder="${rand}">`
    }
    str += `</form><br>`

    $('#visualize').html("")
    $('#create-drop').html(str)
  })
  $(document).on('click', '.cancel-create', () => {
    $('#create-drop').html("")
  })

  
  // login and logout
  $('#signup-submit').on('click', authEvents.onSignUp)
  $('#signin-submit').on('click', authEvents.onSignIn)
  $('#change-password').on('click', authEvents.onChangePassword)
  $('#logout').on('click', authEvents.signOut)

  // bubblesort
  $('#index').on('click', bubbleEvents.onIndex)
  $(document).on('click', '.create', bubbleEvents.onCreate)
  $(document).on('click', '.sort-step', bubbleEvents.onStep)
  $(document).on('click', '.sort-show', bubbleEvents.onShow)
  $(document).on('click', '.sort-delete', bubbleEvents.onDelete)
})
