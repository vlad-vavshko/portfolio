    document.addEventListener('DOMContentLoaded', function() {
        // open modal
        var file = document.getElementById( 'folder-inside' );
        var closeBtn = document.getElementById( 'close' );
        var modal = document.getElementsByClassName( 'modal-container' )[0];
        var pos = document.documentElement;
        var lightBox = document.getElementsByClassName( 'light' )[0];

        //open modal
        file.addEventListener( "click", function () {
            modal.classList.add( 'open' )
            lightBox.style.display = 'none'
            
        } );

        // file.addEventListener( "click", function () {
        //     file.classList.add('open')

        // } );
        //close modal
        closeBtn.addEventListener( "click", function () {
            modal.classList.remove( 'open' )
            lightBox.style.display = 'block'

        } );

        // Light
        pos.addEventListener( 'mousemove', e => {
            pos.style.setProperty( '--x', e.clientX + 'px' )
            pos.style.setProperty( '--y', e.clientY + 'px')
            
        })
    });