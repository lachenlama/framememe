document.getElementById('generateMeme').addEventListener('click', function() {
    fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(data => {
            const memes = data.data.memes;
            const randomMeme = memes[Math.floor(Math.random() * memes.length)];
            document.getElementById('memeImage').src = randomMeme.url;
        })
        .catch(error => {
            console.error('Error fetching meme:', error);
        });
});
