    document.addEventListener('DOMContentLoaded', function() {
        // open modal
        var file = document.getElementById( 'folder-inside' );
        var closeBtn = document.getElementById( 'close' );
        var modal = document.getElementsByClassName( 'modal-container' )[0];

        file.addEventListener( "click", function () {
            modal.style.display = 'flex'
        } );
        //close modal
        closeBtn.addEventListener( "click", function () {
            modal.style.display = 'none'
        } );
    });