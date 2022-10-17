//Helpers

function closeMobileMenu (){

    burgerMenu.classList.remove('box-transition');
    stick1.classList.toggle('animation1');
    stick3.classList.toggle('animation2');
    stick2.classList.toggle('inactive');
    burgerMenu.classList.add('reverse');
    mobileMenu.classList.toggle('inactive');
    blur.classList.toggle('inactive');
    body.classList.remove('no-scroll')
}

//Events
burgerMenu.addEventListener('click', () => {

    if(!burgerMenu.classList.contains('box-transition')){


        stick1.classList.toggle('animation1');
        stick3.classList.toggle('animation2');
        stick2.classList.toggle('inactive');
        burgerMenu.classList.add('box-transition');
        mobileMenu.classList.toggle('inactive');
        blur.classList.toggle('inactive');
        body.classList.add('no-scroll')


    }else{

        closeMobileMenu();

    }

    
});

navbarLink.forEach(item =>{
        
    item.addEventListener('click', ()=>{

        if (body.classList.contains('no-scroll')) {

            closeMobileMenu();
        }
    })
})

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
    
    
            window.location.href=`mailto:fernandoym75@gmail.com?subject=Envío%20desde%20formulario&body=Nombre%3A%20${name}%0AEmail%3A%20${email}%0AMensaje%3A%20${message}`;
            
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


let cards = [];
cards.push({

    'iconClass1': 'fa-square-github',
    'iconClass2': 'fa-git-alt',
    'skillName': 'Git y GitHub',
    'text': 'Tengo conocimientos en Git y GitHub para el desarrollo en equipo manejando este sistema de control de versiones, puedes ir a mi perfil en LinkedIn para ver mis certificados',
    'id': 1,
    'categoryBlock': 'first-tech-block',
})

cards.push({

    'iconClass1': 'fa-html5',
    'iconClass2': '.',
    'skillName': 'HTML',
    'text': '',
    'id': 2,
    'categoryBlock': 'second-tech-block',

})

cards.push({
    'iconClass1': 'fa-css3-alt',
    'iconClass2': '.',
    'skillName': 'CSS',
    'text': '',
    'id': 3,
    'categoryBlock': 'third-tech-block',

})

cards.push({
    'iconClass1': 'fa-square-js',
    'iconClass2': '.',
    'skillName': 'JavaScript',
    'text': '',
    'id': 4,
    'categoryBlock': 'fourth-tech-block',
})

cards.push({

    'iconClass1': 'fa-square-js',
    'iconClass2': '.',
    'skillName': 'TypeScript',
    'text': '',
    'id': 5,
    'categoryBlock': 'fifth-tech-block',
})

function cardSkillRender(skillsArray){

    skillsArray.forEach(skill => {
        
        const card = document.createElement('div');
        card.classList.add(`${skill.categoryBlock}`, 'skills-block');

        if (skill.categoryBlock != 'fifth-tech-block') {
            
        
            const icon1 = document.createElement('i');
            icon1.classList.add('fa-brands', `${skill.iconClass1}`, 'skills-icons');
        
            const techName = document.createElement('p');
            techName.textContent = `${skill.skillName}`;
        
            const icon2 = document.createElement('i');
            icon2.classList.add('fa-brands', `${skill.iconClass2}`, 'skills-icons');

            card.addEventListener('click', ()=>{
    
                renderingDetailSkill(skill)
                window.scrollTo({top:250})
                cardContainer.classList.remove('inactive');
                body.classList.add('no-scroll');
            })
        
            card.append(icon1, techName, icon2)
            skillTechContianer.append(card)

        }else{
        
            const icon1 = document.createElement('img');
            icon1.classList.add('type-icon');
            icon1.setAttribute('alt', 'TypeScriptIcon');
            icon1.src = './assets/icons/typescript.png';
        
            const techName = document.createElement('p');
            techName.textContent = `${skill.skillName}`;

            card.addEventListener('click', () => {
    
                renderingDetailSkill(skill)
                window.scrollTo({top:250})
                cardContainer.classList.remove('inactive');
                body.classList.add('no-scroll');

            })
        
            card.append(icon1, techName)
            skillTechContianer.append(card)
        }

    })
}

cardSkillRender(cards)

function renderingDetailSkill(element){

    const cardDetail = document.createElement('div');
    cardDetail.classList.add('skill-detail');

    if (element.categoryBlock != 'fifth-tech-block') {
    
        const icon1 = document.createElement('i');
        icon1.classList.add('fa-brands', `${element.iconClass1}`, 'skills-icons');
            
        const techName = document.createElement('p');
        techName.textContent = `${element.skillName}`;
    
        const icon2 = document.createElement('i');
        icon2.classList.add('fa-brands', `${element.iconClass2}`, 'skills-icons');
    
        const cardDetailTextContainer = document.createElement('div');
        cardDetailTextContainer.classList.add('card-detail-text-container');
    
        const techText = document.createElement('p');
        techText.textContent = `${element.text}`;

        const iconClose = document.createElement('i');
        iconClose.classList.add('fa-solid', 'fa-xmark', 'skills-icons');
        iconClose.addEventListener('click', () => {

            cardContainer.classList.add('inactive');
            body.classList.remove('no-scroll');
            cardDetail.remove();

        })

        const link = document.createElement('a');
        link.setAttribute('href', 'www.linkedin.com/in/fernando-yepes');
        link.setAttribute('target', '_blank');
        link.classList.add('linkedin-icon', 'deatilLinkIcon');

        const linkedInIcon = document.createElement('i');
        linkedInIcon.classList.add('fa-brands', 'fa-linkedin');
        
        link.append(linkedInIcon);
        cardDetailTextContainer.append(techText);
        cardDetail.append(icon1, techName, icon2, cardDetailTextContainer, iconClose, link);
        cardContainer.append(cardDetail);
        

    }else{
        
        const icon1 = document.createElement('img');
        icon1.classList.add('type-icon');
        icon1.setAttribute('alt', 'TypeScriptIcon');
        icon1.src = './assets/icons/typescript.png';
            
        const techName = document.createElement('p');
        techName.textContent = `${element.skillName}`;
    
        const cardDetailTextContainer = document.createElement('div');
        cardDetailTextContainer.classList.add('card-detail-text-container');
    
        const techText = document.createElement('p');
        techText.textContent = `${element.text}`;

        const iconClose = document.createElement('i');
        iconClose.classList.add('fa-solid', 'fa-xmark', 'skills-icons');
        iconClose.addEventListener('click', () => {

            cardContainer.classList.add('inactive');
            body.classList.remove('no-scroll');
            cardDetail.remove();

        })

        cardDetailTextContainer.append(techText);
        cardDetail.append(icon1, techName, cardDetailTextContainer, iconClose);
        cardContainer.append(cardDetail);

    }

}


