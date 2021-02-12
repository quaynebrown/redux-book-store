import selassie from './assets/haile_selassie.JPG';
import bigSister from './assets/big_sisters.jpg';
import obama from './assets/A_Promised_Land_Barack_Obama.png';

const books = [
    {
        name: 'A Promised Land',
        price: 23,
        category: 'Autobiography',
        description: 'In the stirring, highly anticipated first volume of his presidential memoirs, Barack Obama tells the story of his improbable odyssey from young man searching for his identity to leader of the free world, describing in strikingly personal detail both his political education and the landmark moments of the first term of his historic presidency—a time of dramatic transformation and turmoil.',
        image: obama
    },
    {
        name: 'Haile Selassie: The Life and Legacy of the Ethiopian Emperor Revered as the Messiah by Rastafarians',
        price: 18.77,
        category: 'History',
        description: 'The Allies’ conquest of Ethiopia formed a cornerstone of the early phases of the North Africa Campaign during World War II, and the dramatic advance of Allied forces on Addis Ababa in the spring of 1941 placed Ethiopia very much at the forefront of Western affairs. In May of that year, Emperor Haile Selassie returned in triumph to the capital of his kingdom, the fanfare and hubris of which tended to project his personality to the forefront of the global political stage.',
        image: selassie
    },
    {
        name: 'Big Sisters Are the Best',
        price: 13.50,
        category: 'Kids',
        description: `Becoming a big sister is an exciting time full of smiles, smells, hugs, and kisses. This is the perfect book for transitioning a toddler into siblinghood. It helps young ones prepare for a new baby and also focuses on all of the things a big sister can do that a baby can't do.`,
        image: bigSister
    }
] 

export default books;
