const projects: Project[] = [
  {
    title: "mmrn.dev",
    description: `This website was a lot of fun to build. 
    I got to try out some crazy ideas and it endedup being my favorite project so far.`,
    url: "https://mmrn.dev",
    techs: ["NextJS", "Sass", "Typescript", "Vercel", "React"],
    logo: "/images/projects/mmrndev.svg",
    type: "personal",
    screenshot: "/images/screenshots/mmrndev.png",
  },
  {
    title: "mooviz",
    description: `I built this website in order to learn the fundamental concepts of Redux. It was fun, but it's unfinished.`,
    url: "#",
    techs: ["React", "Javascript", "Redux", "styled-components"],
    logo: "/images/projects/mooviz.svg",
    type: "personal",
    screenshot: "/images/screenshots/mooviz.png",
  },
  {
    title: "github filtering",
    description: `I remember liking this project so much! 
    It was my first project consuming an API and also using a third-party chart lib. 
    I used it to consume the github API and show some user and repo stats.`,
    url: "#",
    techs: ["Javascript", "React", "styled-components"],
    logo: "/images/projects/github-filtering.svg",
    type: "personal",
    screenshot: "/images/screenshots/github-filtering.png",
  },
  {
    title: "socket",
    description: `I built this project in order to get more familiar with Typescript and Websockets. 
      It's a browser multiplayer ping-pong game.
       It's not really performatic, since my goal was to learn some concepts and not to make game.`,
    url: "https://github.com/melosomelo/socket-game",
    techs: ["Typescript", "React", "styled-components"],
    logo: "/images/projects/socket.svg",
    type: "personal",
    screenshot: "/images/screenshots/socket.png",
  },
  {
    title: "pokemon api",
    description: `A pretty simple project. I made it when applying for a position at local company. 
      It consumes the Pokemonn API and shows some infos on the screen.`,
    url: "https://github.com/melosomelo/pokeapi",
    techs: ["React", "Javascript", "styled-components"],
    logo: "/images/projects/pokemon.png",
    type: "personal",
    screenshot: "/images/screenshots/pokemon-api.png",
  },
  {
    title: "mindfit",
    description: `My first freelance gig. It's a website for a local fitness program. 
    Looking back, there are A LOT of thing that I could have done better - 
    especially not using only React for a landing page.`,
    url: "https://somosmindfit.com.br/",
    techs: ["Javascript", "React", "styled-components", "Netlify"],
    logo: "/images/projects/mindfit.png",
    type: "commercial",
    screenshot: "/images/screenshots/mindfit.png",
  },
  {
    title: "arts",
    description: `My most recent freelance project. I'm pretty proud of it but I could've handled the images 
    a bit better.
    It's for a local event organizer, with a landing page and also a blog. 
    I designed and coded the whole thing.`,
    url: "https://arts.melosomelo.vercel.app/",
    techs: ["Typescript", "NextJS", "Vercel", "styled-components", "Prismic"],
    logo: "/images/projects/arts.png",
    type: "commercial",
    screenshot: "/images/screenshots/arts.png",
  },
  {
    title: "misslight",
    description: `I built this website for a local bakery. I'm not really proud of it.
    Looking back, I don't like the design and I didn't handle the image loading very well. 
    And again, using only React for landing pages.`,
    url: "https://misslight.com.br/",
    techs: ["React", "Javascript", "styled-components", "Netlify"],
    logo: "/images/projects/misslight.png",
    type: "commercial",
    screenshot: "/images/screenshots/misslight.png",
  },
  {
    title: "doscars",
    description: `I just finished this project. It was made for a college course that I took. In it, we had to build
      a Dapp using the Ethereum blockchain and Solidity. It was great. I really tried to create a good layout with awesome animations.
      I think that I did that.
    `,
    url: "https://github.com/melosomelo/doscars",
    techs: ["React", "Typescript", "Ethereum", "Solidity"],
    logo: "/images/projects/doscars.svg",
    type: "personal",
    screenshot: "/images/screenshots/doscars.png",
  },
];

export default projects;
