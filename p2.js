/* 
২. prompt দিয়ে ইউজারের কাছ থেকে একটা সংখ্যা নাও। সেটার সাথে ২০০যোগ করো। যোগ করতে গেলে parse করা লাগলে সেটা করো। তারপর সেই রেজাল্টকে alert দিয়ে আউটপুট দেখাও.
*/

const add = () => {
    const inputNum = prompt( 'Input Your Number' );
    if ( inputNum === null ) {
        alert( 'no empty input' );
    }
    else {
        const num = parseFloat( inputNum );
        const result = num + 200;
        alert( result );
    }
}