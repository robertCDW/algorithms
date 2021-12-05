// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

//const authEvents = require('./auth/events')
const bubbleEvents = require('./bubblesort/events')

$(() => {
  
  // login and logout
  /*
  $('#sign-in-show').on('click', authEvents.showSignIn)
  $('#sign-up-show').on('click', authEvents.showSignUp)
  $('#change-password-show').on('click', authEvents.showChangePassword)
  $('.cancel-btn').on('click', authEvents.showCancel)
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.signOut)
  */
  // bubblesort
  $('#create').on('click', bubbleEvents.onCreate)
  $('#step').on('click', bubbleEvents.onStep)
  $('#index').on('click', bubbleEvents.onIndex)
  $(document).on('click', '.sort-show', bubbleEvents.onShow)
  $(document).on('click', '.sort-delete', bubbleEvents.onDelete)
})
