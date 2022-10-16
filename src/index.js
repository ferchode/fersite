burgerMenu.addEventListener('click', () => {

    if(!burgerMenu.classList.contains('box-transition')){


        stick1.classList.toggle('animation1');
        stick3.classList.toggle('animation2');
        stick2.classList.toggle('inactive');
        burgerMenu.classList.toggle('box-transition');
        mobileMenu.classList.toggle('inactive');
        blur.classList.toggle('inactive');
        body.classList.add('no-scroll')

    }else{

        burgerMenu.classList.remove('box-transition');
        stick1.classList.toggle('animation1');
        stick3.classList.toggle('animation2');
        stick2.classList.toggle('inactive');
        burgerMenu.classList.add('reverse');
        mobileMenu.classList.toggle('inactive');
        blur.classList.toggle('inactive');
        body.classList.remove('no-scroll')

    }

    
});

sendBtn.addEventListener('click', (e)=>{

    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;


        e.preventDefault();

        if (name == ''|| email == ''|| message == '') {
            
            const alertContainer = document.createElement('div');
            alertContainer.classList.add('alert-container');
            alertContainer.textContent = 'Debes llenar todos los campos para poder enviar este formulario.';
            
            const btnClose = document.createElement('button');
            btnClose.classList.add('btn-close');
            btnClose.textContent= 'Cerrar';

            alertContainer.append(btnClose);
            contactBlur.append(alertContainer);

            contactBlur.classList.remove('inactive');
            body.classList.add('no-scroll')

            btnClose.addEventListener('click', () =>{

                alertContainer.remove();
                contactBlur.classList.add('inactive');
                body.classList.remove('no-scroll')

            })
        }
        else{

            sendBtn.classList.toggle('plane');
    
            setTimeout(()=>{
    
    
            window.location.href=`mailto:yepesjuanfer7532@gmail.com?subject=Envío%20desde%20formulario&body=Nombre%3A%20${name}%0AEmail%3A%20${email}%0AMensaje%3A%20${message}`;
            
            sendBtn.classList.toggle('plane');
    
            }, 2200)
        }

        })

moreContentBtn.addEventListener('click', ()=>{

    
    const project1 = document.querySelector('.optional-projects');

    if (project1.classList.contains('inactive')) {
        
        optionalProjects.forEach(project => {
            
            project.classList.remove('reverse');
            project.classList.remove('inactive');
            moreContentBtn.textContent = 'Ver menos';
                    
                }
            
            )

    }else if (!project1.classList.contains('inactive')) {

        optionalProjects.forEach(project => {

            project.classList.add('reverse');

            setTimeout(()=>{

                project.classList.add('inactive');
                moreContentBtn.textContent = 'Ver más';

            }, 500)

        })
        
    }


    
})

upBtn.addEventListener('click', () => window.scrollTo({top:0}));