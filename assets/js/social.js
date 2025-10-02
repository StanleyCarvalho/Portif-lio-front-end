const social = [...document.querySelectorAll(".social")];
const sociais = [
    'https://www.linkedin.com/in/stanley-carvalho-a1740829b/',
    'https://github.com/StanleyCarvalho',
    'https://instagram.com/stanleycarvalho8',
    ];

const sociais_name = ["linkedin-in","github","instagram"];

social.map((element)=>{

    sociais.map((elemento, indice)=>{
        const link = document.createElement("a");
              link.setAttribute("href",elemento);
              link.setAttribute("target","_blank");
              link.setAttribute("aria-label",sociais_name[indice])
        
        const icons = document.createElement("i");
              icons.setAttribute("class","fa-brands fa-"+sociais_name[indice])

        
        link.appendChild(icons);
        element.appendChild(link);
    })
    
})