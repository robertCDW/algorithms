'use strict'

const signUpSuccess = (responseData) => {

    $('form').trigger('reset')
}

const signUpFailure = (error) => {

    $('form').trigger('reset')
}

const signInSuccess = (responseData) => {
    $('#signin-outer').hide()
    $('#after-signin').show()

    $('form').trigger('reset')
}

const signInFailure = (error) => {

    $('form').trigger('reset')
}

const changePasswordSuccess = () => {

    $('#drop-profile').hide()

    $('form').trigger('reset')
}

const changePasswordFailure = (error) => {
    $('form').trigger('reset')
}

const signOutSuccess = (responseData) => {
    $('#signin-outer').show()
    $('#after-signin').hide()
    $('#drop-profile').hide()
    sessionStorage.removeItem('token')

    $('form').trigger('reset')
}

const signOutFailure = (error) => {

    $('form').trigger('reset')
}


module.exports = {
    signUpSuccess,
    signUpFailure,
    signInSuccess,
    signInFailure,
    changePasswordSuccess,
    changePasswordFailure,
    signOutSuccess,
    signOutFailure,
}
