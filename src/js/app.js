window.addEventListener('load', function () {
    const tablink = document.querySelectorAll('.tab .tablink');
    const courseContent = document.querySelectorAll('.courses .course-content');
    const dropdownButton = document.querySelector('.dropdown .dropdown-button');
    const dropdownMenu = document.querySelector('.dropdown .dropdown-menu');
    const menuButton = document.querySelector('.menuButton');
    const leftSide = document.querySelector('.left');

    const profileButton = document.querySelector('.profileButton');
    const rightSide = document.querySelector('.right');
    fixed - right

    function removeClassList(params, clasName) {
        params.forEach(param => {
            param.classList.remove(clasName);
            console.log(param.classList)
        });
    }

    tablink.forEach(element => {
        element.addEventListener('click', function () {
            removeClassList(tablink, 'active')
            this.classList.add('active')
            const getID = this.getAttribute('id');
            courseContent.forEach(element => {
                if (getID == element.getAttribute('target-tab')) {
                    removeClassList(courseContent, 'active-tab');
                    element.classList.add('active-tab')
                }
            });
        });
    });

    dropdownButton.addEventListener('click', function () {
        if (dropdownMenu.classList.contains('hide')) {
            dropdownMenu.classList.remove('hide');
        } else {
            dropdownMenu.classList.remove('show');
            dropdownMenu.classList.add('hide');

        }

    })
    menuButton.addEventListener('click', function () {
        if (leftSide.style.marginLeft == "0px") {
            leftSide.style.marginLeft = "-280px";
         
        } else {
            leftSide.style.marginLeft = "0px"
            if (rightSide.style.marginRight != "-420px") {
                rightSide.style.marginRight = "-420px"
            }
        }
    })

    profileButton.addEventListener('click', function () {
        if (rightSide.style.marginRight == "0px") {
            rightSide.style.marginRight = "-420px";
        
        } else {
            rightSide.style.marginRight = "0px"
            if (leftSide.style.marginLeft != "-280px") {
                
                leftSide.style.marginLeft = "-280px"
            }
          
           
            
        }
    })


    mediaFunction = () => {
        if (this.outerWidth >= 1200) {
            leftSide.classList.remove('fixed-left')
            rightSide.classList.remove('fixed-right')
            menuButton.style.display = "none";
            profileButton.style.display = "none";
            leftSide.style.marginLeft = 0;
            rightSide.style.marginRight = 0;
        } else {
            leftSide.classList.add('fixed-left')
            rightSide.classList.add('fixed-right')
            menuButton.style.display = "block";
            profileButton.style.display = "block";
            leftSide.style.marginLeft = "-280px";
            rightSide.style.marginRight = "-420px";
        }
    }
    if (window.outerWidth < 1200) {
        mediaFunction()
    }
    window.addEventListener('resize', mediaFunction);
})