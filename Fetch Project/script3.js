 const urlParams = new URLSearchParams(window.location.search);
    const itemId = urlParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/photos/${itemId}`)
        .then(response => response.json())
        .then(item => {
            const itemDetailsContainer = document.getElementById('item-details-container');
            const itemDetailsElement = document.createElement('div');
            itemDetailsElement.classList.add('item-details');
            itemDetailsElement.innerHTML = `
                <h2 class="item-title">${item.title}</h2>
                <img src="${item.url}" alt="${item.title}">
                <p>ID: ${item.id}</p>
                <p>Album ID: ${item.albumId}</p>
                <p>Thumbnail URL: ${item.thumbnailUrl}</p>
            `;
            itemDetailsContainer.appendChild(itemDetailsElement);
        })

const returnButton = document.getElementById('return');
returnButton.addEventListener('click', () => {
    window.location.href = 'index2.html';
});