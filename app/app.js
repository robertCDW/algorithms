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
  
  // login and logout
  $('#signup-submit').on('click', authEvents.onSignUp)
  $('#signin-submit').on('click', authEvents.onSignIn)
  $('#change-password').on('click', authEvents.onChangePassword)
  $('#logout').on('click', authEvents.signOut)

  // bubblesort
  $('#create').on('click', bubbleEvents.onCreate)
  $('#index').on('click', bubbleEvents.onIndex)
  $(document).on('click', '.sort-step', bubbleEvents.onStep)
  $(document).on('click', '.sort-show', bubbleEvents.onShow)
  $(document).on('click', '.sort-delete', bubbleEvents.onDelete)
})
