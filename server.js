import { RandomQuoteGenerator } from 'quote-guru'
import express from 'express';
import path from 'path'
const quoteGenerator = new RandomQuoteGenerator();

const app = express();
const PORT = process.env.PORT || 1700;

app.set('view engine', 'ejs');
app.set('views',path.resolve('./view'))
app.use(express.json());

app.get('/quote', async(req,res)=>{
    const randomQuote = await quoteGenerator.getRandomQuote();
    console.log(randomQuote);
  /*  const html = `
    <ul> 
    ${`<li>QUOTE: ${randomQuote.quote}</br>AUTHOR: ${randomQuote.author}</li>`} 
    </ul>
    `*/
  return res.render('index',{ randomQuote });
   
})

app.listen(PORT,()=>console.log("server started"))