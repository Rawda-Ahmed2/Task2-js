var Quote = [
    {
        quote: "Be yourself; everyone else is already taken.",
        Author: "Oscar Wilde"
    },
    {
        quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        Author: "Marilyn Monroe"
    },
    {
        quote: "So many books, so little time.",
        Author: "Albert Einstein"
    },
    {
        quote: "A room without books is like a body without a soul.",
        Author: "Marcus Tullius Cicero"
    },
    {
        quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        Author: "Bernard M. Baruch"
    },
    {
        quote: "You've gotta dance like there's nobody watching, love like you'll never be hurt, sing like there's nobody listening, and live like it's heaven on earth.",
        Author: "William W. Purkey"
    }
];

let num2 = -1;

function returnQuote() {
    let num;
    do {
        num = Math.floor(Math.random() * Quote.length);
    } while (num2 === num);
    document.getElementById('Quote').innerHTML = Quote[num].quote;
    document.getElementById('Author').innerHTML = Quote[num].Author;
    num2 = num;
}

document.getElementById('btn').onclick = returnQuote;
