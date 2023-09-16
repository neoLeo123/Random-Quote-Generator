function generate() {
    let quotes = {
        "- Albert Camus": '"The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion."',
        "- Richard Bach": '"If you love someone, set them free. If they come back they are yours; if they do not they never were."',
        "- Johann Wolfgang von Goethe": '"None are more hopelessly enslaved than those who falsely believe they are free."'



    }

    let authors = Object.keys(quotes);

    let author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];

    document.getElementById('quote').innerHTML= quote;
    document.getElementById('author').innerHTML= author;


}