import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"
import imgNutriarepa from "../img/nutriarepa.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["#014ba0", "#014ba0"];


/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Jaime",
    lastName: "Parra",
    initials: "Japarra", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Software Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '👨‍💻',
            text: 'Love learning new things'
        },
        {
            emoji: '🇨🇴',
            text: 'Based in Colombia'
        },
        {
            emoji: "💼",
            text: "Systems Engineer at Scitech"
        },
        {
            emoji: "📧",
            text: "j.parra.903@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/japarradev",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/japarradev/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://api.whatsapp.com/send?phone=573166977685&text=Hola%F0%9F%91%8B%20%0AEstoy%20interesado%20en%20contactarme%20contigo%20....",
            icon: 'fa fa-whatsapp',
            label: 'whatsapp'
        },
    
       
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Jaime Parra. I'm a systems engineer. I am passionate about technology, I love to create innovative solutions that solve complex problems. I am a lifelong learner, always seeking out new technologies and techniques to improve my skills and stay up-to-date on industry trends.",
    skills:
        {
            proficientWith: ['Genexus', 'WWP', 'K2B', 'javascript', 'react', 'git', 'github', , 'html5', 'css3', ],
            exposedTo: ['SQL', 'GIMP']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'mountain biking',
            emoji: '🚵‍♂️'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'family',
            emoji: '👨‍👩‍👧‍👦'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Nutriarepa",
            live: "https://nutriarepa.co", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/japarradev/nutriarepa", // this should be a link to the **repository** of the project, where the code is hosted.
            image: imgNutriarepa
        },
        {
            title: "Aviento",
            image: mock2
        },
        {
            title: "Parapente chicamocha",
            live: "https://parapentechicamocha.com/",
            image: mock3
        },
        
    ]
}