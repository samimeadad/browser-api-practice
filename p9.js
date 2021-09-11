const getData = ( inputId ) => {
    const inputValue = document.getElementById( inputId ).value;
    return inputValue;
}

const clearInput = ( inputId ) => {
    document.getElementById( inputId ).value = '';
}

const displayData = ( product, price ) => {
    const itemContainer = document.getElementById( 'container' );
    const li = document.createElement( 'li' );
    li.innerHTML = `${ product } - ${ price }`;
    itemContainer.appendChild( li );
}

const addToLocalStorage = ( product, price ) => {
    window.localStorage.setItem( product, price );
}

const addButtonClicked = () => {
    const productName = getData( 'product-input' );
    const productPriceText = getData( 'price-input' );
    const productPrice = +productPriceText;
    if ( !productName || !productPrice ) {
        alert( "Please fill up the input field" );
        return;
    }
    else {
        displayData( productName, productPrice );
        addToLocalStorage( productName, productPrice );
    }
    clearInput( 'product-input' );
    clearInput( 'price-input' );
}

const displayLocalStorageData = () => {
    let storageLength = window.localStorage.length;
    for ( let i = 0; i < storageLength; i++ ) {
        displayData( localStorage.key( i ), localStorage.getItem( localStorage.key( i ) ) );
    }
}

displayLocalStorageData();