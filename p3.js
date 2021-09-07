/*
৩. ব্রাউজারে একটা confirm করে জিজ্ঞেস করো তুমি কি তোমার ওয়েবসাইট এর লোকেশন দেখতে চাও। যদি বলে দেখতে চাই তাহলে সেই ওয়েবসাইট এর লোকেশন এর href জিনিসটা কনসোল লগ করে দেখাও
*/

const confirmMe = () => {
    const response = confirm( 'Do you wanna see the location of your website?' );
    if ( response === true ) {
        console.log( window.location.href );
    }
}