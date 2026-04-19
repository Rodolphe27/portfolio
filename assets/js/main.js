document.addEventListener("alpine:init", () => {
  Alpine.data("site", () => ({
    openedPage: "about-me",
    navigationOpened: false,
    startPage: "about-me",
    menus: [
      {
        id: "about-me",
        label: "About me",
        page: "about-me",
      },
      {
        id: "projects",
        label: "Projects",
        page: "projects",
      },
      {
        id: "competences",
        label: "Competences",
        page: "competences",
      },
      {
        id: "contact-me",
        label: "Contact me",
        page: "contact-me",
      },
      {
        id: "attributions",
        label: "Attributions",
        page: "attributions",
      },
    ],
    pages: [
      {
        id: "about-me",
        title: "About me",
        content: ``,
      },
      {
        id: "projects",
        title: "Projects",
        content: [
          
         
          
          {
            id: "2D Game",
            title: "2D Game",
            github: "https://github.com/Rodolphe27/Game-dev-refactor",
            image:
              "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            description: `
            A MonoGame-based 2D desktop game built with .NET 8 and C#. This started as a school project that I continued developing independently—adding new features and improving the codebase along the way. A great hands-on experience with game state management and the MonoGame framework!
            `,
          },
          {
            id: "Kids App",
            title: "Kids App",
            github: "https://github.com/Rodolphe27/KIDS_APP_",
            image:
              "https://plus.unsplash.com/premium_photo-1678566111481-8e275550b700?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29kZXxlbnwwfHwwfHx8MA%3D%3D",
            description: `
            A community platform designed for kids and teenagers to discover local events, connect with friends, and share feedback. Built as a team project using a microservices architecture—Angular frontend, NestJS BFF, Spring Boot backend, RabbitMQ for messaging, and CouchDB for storage. A solid dive into real-world software engineering!
            `,
          },
       

          
        ],
      },
      {
        id: "competences",
        title: "Competences",
        content: {
          languages: [
            {
              icon: "./assets/img/flag-cam.png",
              title: "Yemba",
              xp: "pro",
            },
            {
              icon: "./assets/img/lang-french.png",
              title: "French",
              xp: "pro",
            },
            {
              icon: "./assets/img/flag-german.png",
              title: "German",
              xp: "int",
            },
            {
              icon: "./assets/img/flag-uk.png",
              title: "English",
              xp: "int",
            },
          ],
          programming: [
            
            {
              icon: "./assets/img/prog-js.png",
              title: "Javascript",
              xp: "new",
            },
            {
              icon: "./assets/img/prog-sql.png",
              title: "SQL",
              xp: "mid",
            },
            
            {
              icon: "./assets/img/prog-c.png",
              title: "C",
              xp: "mid",
            },
            {
              icon: "./assets/img/prog-java.png",
              title: "Java",
              xp: "mid",
            },
            {
              icon: "./assets/img/prog-python.png",
              title: "Python",
              xp: "mid",
            },
          ],
          tools: [
            {
              icon: "./assets/img/tool-linux.png",
              title: "Linux",
              xp: "mid",
            },
            {
              icon: "./assets/img/tool-win.png",
              title: "Windows",
              xp: "int",
            },
            
            
            {
              icon: "./assets/img/tool-365.png",
              title: "MS Suite",
              xp: "mid",
            },
          ],
        },
      },
      {
        id: "contact-me",
        title: "Contact me",
        content: "contact me",
      },
      {
        id: "attributions",
        title: "Attributions",
        content: [
          {
            url: "https://unsplash.com/photos/",
            label: "Unsplash",
          },
          {
            url: "https://material.io/resources/icons/?style=baseline",
            label: "Material io icons",
          },
          {
            url: "https://www.iconfinder.com/",
            label: "Iconfinder",
          },
        ],
      },
    ],
  }));
});
