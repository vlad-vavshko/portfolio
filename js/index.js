    document.addEventListener('DOMContentLoaded', function() {
        // open modal
        var file = document.getElementById( 'folder-inside' );
        var closeBtn = document.getElementById( 'close' );
        var modal = document.getElementsByClassName( 'modal-container' )[0];
        var pos = document.documentElement;
        var lightBox = document.getElementsByClassName( 'light' )[0];

        //open modal
        file.addEventListener( "click", function () {
            modal.style.display = 'flex'
            lightBox.style.display = 'none'
        } );
        //close modal
        closeBtn.addEventListener( "click", function () {
            modal.style.display = 'none'
            lightBox.style.display = 'block'

        } );

        // Light
        pos.addEventListener( 'mousemove', e => {
            pos.style.setProperty( '--x', e.clientX + 'px' )
            pos.style.setProperty( '--y', e.clientY + 'px')
            
        })
    });