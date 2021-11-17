(async()=>{
    const response = await fetch('teste.json');
    const data = await response.json;

    const lista = data.map( bod =>`<ul>
    <li>${bod.title}</li>
    <li>${bod.avatar}</li>
    <li>${bod.link}</li>
    </ul> `).join('');

    document.querySelector('.container').innerHTML = lista
    
})();