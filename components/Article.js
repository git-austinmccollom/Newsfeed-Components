// This is the data we will be using to create our articles. Look at it, then proceed to line 93.
// OPTIONAL: if you're feeling adventurous, try to make this data an export from a different module, and import it here.
// You can read about ES6 modules here: https://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: 'Nov 5th, 2018',
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: 'Javascript and You, ES6',
    date: 'May 7th, 2019',
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: 'React vs Angular vs Vue',
    date: 'June 7th, 2019',
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: 'Professional Software Development in 2019',
    date: 'Jan 1st, 2019',
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  },
  {
    title: 'Corporate Anouncement',
    date: 'Oct 1st, 2020',
    firstParagraph: `Sorry i was triple muted regroup so mumbo jumbo teams were able to drive adoption and awareness so moving the goalposts. I'll book a meeting so we can solution this before the sprint is over. Ultimate measure of success cross functional teams enable out of the box brainstorming for we want to see more charts you must be muted forcing function for pixel pushing. Social currency. Per my previous email product launch proceduralize. Pig in a python five-year strategic plan so this is our north star design, please submit the sop and uat files by next monday. Gain alignment moving the goalposts, or hammer out on-brand but completeley fresh so this is our north star design, future-proof. Baseline we are running out of runway tbrand terrorists, or big picture it is all exactly as i said, but i don't like it and all hands on deck nor let's put a pin in that. 60% to 30% is a lot of persent. On this journey accountable talk for good optics, so the horse is out of the barn face time, or single wringable neck c-suite. Pulling teeth. When does this sunset? to be inspired is to become creative, innovative and energized we want this philosophy to trickle down to all our stakeholders 4-blocker nor crank this out. UI shelfware, yet conversational content nor 360 degree content marketing pool into the weeds. Can you send me an invite? mumbo jumbo, cannibalize. Take five, punch the tree, and come back in here with a clear head circle back cloud strategy yet onward and upward, productize the deliverables and focus on the bottom line get six alpha pups in here for a focus group turn the ship. Manage expectations are we in agreeance, so increase the resolution, scale it up we need a larger print. On-brand but completeley fresh. Prioritize these line items on this journey and single wringable neck we need this overall to be busier and more active pushback. Bleeding edge who's the goto on this job with the way forward for put it on the parking lot.`,

    secondParagraph: `Wiggle room. Low hanging fruit horsehead offer, nor pipeline low-hanging fruit, and window-licker. Build on a culture of contribution and inclusion horsehead offer, face time circle back yet take five, punch the tree, and come back in here with a clear head. Throughput my grasp on reality right now is tenuous we're ahead of the curve on that one, and value-added. This is our north star design back of the net. Please submit the sop and uat files by next monday win-win, or social currency can you champion this i'm sorry i replied to your emails after only three weeks, but can the site go live tomorrow anyway?.`,

    thirdParagraph: `Loop back innovation is hot right now. Going forward close the loop. Pixel pushing 360 degree content marketing pool gain alignment. On this journey prioritize these line items player-coach on-brand but completeley fresh agile please use "solutionise" instead of solution ideas! :) or we need this overall to be busier and more active. Shotgun approach close the loop that is a good problem to have. I’ve been doing some research this morning and we need to better hit the ground running.`
  },
  {
    title: 'Scope Creep, please complete by tomorrow morning, 8am sharp!',
    date: 'Nov 18st, 2020',
    firstParagraph: `Theres all this spanish text on my site mmm, exactly like that, but different, so something summery; colourful, for that sandwich needs to be more playful, or this looks perfect. Just Photoshop out the dog, add a baby, and make the curtains blue, for can you make the blue bluer? nor could you move it a tad to the left. Can you make the font bigger? I really like the colour but can you change it make it original, but can the black be darker make it pop but i know you've made thirty iterations but can we go back to the first one that was the best version or give us a complimentary logo along with the website. Can you turn it around in photoshop so we can see more of the front i know you've made thirty iterations but can we go back to the first one that was the best version or you can get my logo from facebook nor can you punch up the fun level on these icons could you move it a tad to the left that sandwich needs to be more playful. I want you to take it to the next level it's great, can you add a beard though . We are your relatives just do what you think. I trust you could you solutionize that for me, or the flier should feel like a warm handshake, could you do an actual logo instead of a font. Doing some work for us "pro bono" will really add to your portfolio i promise could you do an actual logo instead of a font, but I have printed it out, but the animated gif is not moving, yet we have big contacts we will promote you we are your relatives, or can you make pink a little more pinkish can you punch up the fun level on these icons. Can you make the blue bluer?. Use a kpop logo that's not a kpop logo! ugh the website doesn't have the theme i was going for theres all this spanish text on my site make it sexy can it be more retro needs to be sleeker.`,

    secondParagraph: `Needs to be sleeker that's great, but can you make it work for ie 2 please but could you solutionize that for me, for i cant pay you . I was wondering if my cat could be placed over the logo in the flyer can you rework to make the pizza look more delicious, and this looks perfect. Just Photoshop out the dog, add a baby, and make the curtains blue, and can you punch up the fun level on these icons or theres all this spanish text on my site, do less with more or can you make it look more designed . It needs to be the same, but totally different . We are a big name to have in your portfolio we are a startup, but this is just a 5 minutes job, for can you lower the price for the website? make it high quality and please use html can you make the font a bit bigger and change it to times new roman? jazz it up a little bit make the picture of the cupcake look delicious make the purple more well, purple-er it looks so empty add some more hearts can you add a bit of pastel pink and baby blue because the purple alone looks too fancy okay can you put a cute quote on the right side of the site? oh no it looks messed up! i think we need to start from scratch but can you make the blue bluer? in an ideal world, can we barter services?. We don't need a backup, it never goes down! can you make it look like this clipart i found. Can we try some other colours maybe this was not according to brief, nor are you busy this weekend? I have a new project with a tight deadline can you make the blue bluer?. Could you solutionize that for me can you help me out? you will get a lot of free exposure doing this. That sandwich needs to be more playful i'll know it when i see it yet that sandwich needs to be more playful it looks a bit empty, try to make everything bigger, nor that will be a conversation piece i was wondering if my cat could be placed over the logo in the flyer we have big contacts we will promote you. I think we need to start from scratch the flier should feel like a warm handshake, so we need to make the new version clean and sexy. I like it, but can the snow look a little warmer can we try some other colours maybe, and can you rework to make the pizza look more delicious, nor make it sexy. You can get my logo from facebook could you move it a tad to the left use a kpop logo that's not a kpop logo! ugh this turned out different that i decscribed so the hair is just too polarising, or we need to make the new version clean and sexy I have printed it out, but the animated gif is not moving. The hair is just too polarising can you punch up the fun level on these icons so is there a way we can make the page feel more introductory without being cheesy you can get my logo from facebook i was wondering if my cat could be placed over the logo in the flyer make it pop. I know you've made thirty iterations but can we go back to the first one that was the best version I really like the colour but can you change it, but it needs to be the same, but totally different . Other agencies charge much lesser make the font bigger nor we exceed the clients' expectations.`,

    thirdParagraph: `Make the font bigger can't you just take a picture from the internet?. Can you make pink a little more pinkish we try your eye, but can you change everything? can you rework to make the pizza look more delicious, nor I know somebody who can do this for a reasonable cost. Can you make it look like this clipart i found. Jazz it up a little. Make it original we try your eye, but can you change everything? I really think this could go viral can you turn it around in photoshop so we can see more of the front, so could you rotate the picture to show the other side of the room? other agencies charge much lesser can you make it more infographic-y.`
  }
];

/*
  Step 1: Write a component called 'articleMaker' to create an article.
  Your component is a function that takes an article object as its only argument,
  and returns a DOM node looking like the one below:

  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class="expandButton">+</span>
  </div>
*/

function articleMaker(articleObj){

  //instatiate

  const articleNode = document.createElement('div');
  const titleNode = document.createElement('h2');
  const dateNode = document.createElement('p');
  const firstP = document.createElement('p');
  const secondP = document.createElement('p');
  const thirdP = document.createElement('p');
  const expandButton = document.createElement('span')

  //dynamically insert content

  titleNode.textContent = articleObj.title
  dateNode.textContent = articleObj.date
  firstP.textContent = articleObj.firstParagraph;
  secondP.textContent = articleObj.secondParagraph;
  thirdP.textContent = articleObj.thirdParagraph;
  expandButton.textContent = '+';

  //append and organize

  articleNode.appendChild(titleNode);
  articleNode.appendChild(dateNode);
  articleNode.appendChild(firstP);
  articleNode.appendChild(secondP);
  articleNode.appendChild(thirdP);
  articleNode.appendChild(expandButton);

  //style

  articleNode.classList.add('article');
  dateNode.classList.add('date');
  expandButton.classList.add('expandButton');

  expandButton.addEventListener('click', event => {
    articleNode.classList.toggle('article-open');
  })

  return articleNode
}
const article1 = articleMaker(data[0]);
console.log(article1);

const articleNodeArray = data.map( articleObj => {
  return articleMaker(articleObj);
});


const articlesDiv = document.querySelector('.articles');

articleNodeArray.forEach(articleNode => {
  articlesDiv.appendChild(articleNode);
})

/*
  Step 2: Still inside `articleMaker`, add an event listener to the span.expandButton.
  This listener should toggle the class 'article-open' on div.article.
*/

/*
  Step 3: Don't forget to return something from your function!
*/

/*
  Step 4: Outside your function now, loop over the data. At each iteration you'll use your component
  to create a div.article element and append it to the DOM inside div.articles (see index.html).
*/

/*
  Step 5: Try adding new article object to the data array. Make sure it is in the same format as the others.
  Refresh the page to see the new article.
*/
