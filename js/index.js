    document.addEventListener('DOMContentLoaded', function() {
        
        var file = document.getElementById( 'folder-inside' );
        var closeBtn = document.getElementById( 'close' );
        var modal = document.getElementsByClassName( 'modal-container' )[0];
        var pos = document.documentElement;
        var lightBox = document.getElementsByClassName( 'light' )[0];
        
        var imgModalClose = document.getElementById('close-img');
        var modalImg = document.getElementsByClassName('modal-img')[0];
        var certificates = document.getElementsByClassName('for-modal-img');

        //open modal
        file.addEventListener( "click", function () {
            modal.classList.add( 'open' )
            lightBox.style.display = 'none'
            
        } );

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


        // image modal
        

        Array.from(certificates).forEach(function(certificate) {
            certificate.addEventListener( "click", function (event) {
                // modalImg.classList.add( 'open' )
                console.log(event.target)
                var imageSrc = event.target.getAttribute('data-img-src');
                var imageTitle = event.target.getAttribute('title');
                modalImg.classList.add('open')

                var popupImg = document.querySelector('.modal-img-content > img');
                var popupTitle = document.getElementsByClassName('image-description')[0];
                console.log(popupTitle)
                popupImg.setAttribute('src', imageSrc )
                popupTitle.innerHTML = imageTitle;
            } );
        });

        imgModalClose.addEventListener( "click", function () {
            modalImg.classList.remove( 'open' )
            console.log(0)
        } );

        //add scroll clas to modal-content
        
        var modalContent = document.querySelector('.modal-content');
        if (window.innerWidth < 1561) {
            modalContent.classList.add('scroll-container');
            console.log(true)
        } else {
            modalContent.classList.remove('scroll-container');
        }
        window.addEventListener("resize", function() {
            if (window.innerWidth < 1561) {
                modalContent.classList.add('scroll-container');
                console.log(true)
            } else {
                modalContent.classList.remove('scroll-container');
            }
        }, true);
    });