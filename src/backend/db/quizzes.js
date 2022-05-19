import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const quizzes = [
  {
    _id: "2c13a95b-5463-49a5-8ff9-465247c5351e",
    title: "Suits",
    subtitle: "I dont play the odd's , I play the man.",
    categoryName: "TV Shows",
    category: "tvshows",
    trending: true,
    image:
      "https://res.cloudinary.com/ms-inc/image/upload/v1652916702/tv-3_zyz6vk.webp",
    totalScore: 10,
    mcqs: [
      {
        _id: "f71714d3-7441-4ec8-ba2f-9395d04f888e",
        question: "Suits is set in a fictional law firm in ________?",
        options: ["Atlanta", "New York City", "Austin", "Chicago"],
        answer: "New York City",
      },
      {
        _id: "a84e10d8-25f6-428e-8519-3b1e2b37aeba",
        question: "What network airs 'Suits?'",
        options: ["USA", "NBC", "CBS", "TNT"],
        answer: "USA",
      },
      {
        _id: "456d0467-8926-4d39-b208-6cad4e1cce1f",
        question: "Harvey had what kind of emotional problems",
        options: ["Attachment Issues", "Panic Attack", "Trauma", "Stress"],
        answer: "Attachment Issues",
      },
      {
        _id: "638fa988-9b26-4665-81cc-380edaa642cc",
        question: "Who is the female shark in charge of the 'Suits' law firm?",
        options: [
          "Rachel Zane",
          "Donna Paulsen",
          "Dana Scott",
          "Jessica Pearson",
        ],
        answer: "Jessica Pearson",
      },
      {
        _id: "99b045f1-e87c-4d81-900d-be8c76640de5",
        question: "_____ is the firm's expert on all financial matters?",
        options: [
          "Charles Forstman",
          "Robert Zane",
          "Jeff Malone",
          "Louis Litt",
        ],
        answer: "Louis Litt",
      },
    ],
  },
  {
    _id: "980783a0-81f7-4626-957e-ff6699a26d56",
    title: "Breaking Bad",
    subtitle: "Say My Name!!",
    categoryName: "TV Shows",
    category: "tvshows",
    trending: false,
    image:
      "https://res.cloudinary.com/ms-inc/image/upload/v1652916647/tv-2_kssx3s.webp",
    totalScore: 10,
    mcqs: [
      {
        _id: "675b1bc2-b9dc-42a6-9963-6062a7257028",
        question:
          "After Walt receives his cancer diagnosis, what does he nonchalantly tell the doctor is on his lapel?",
        options: ["Mustard", "Ketchup", "Coffee", "Blood"],
        answer: "Mustard",
      },
      {
        _id: "e43b8e86-b990-4b0f-9f45-7da77103ce36",
        question: "What's Saul Goodman's real name?",
        options: [
          "Bob Odenkirk",
          "James Goodman",
          "Jimmy Wexler",
          "James McGill",
        ],
        answer: "James McGill",
      },
      {
        _id: "f094b736-17d6-450b-a626-4aa7fe9f8742",
        question: "Where's Gus Fring from?",
        options: ["Mexico", "Guatemala", "Argentina", "Chile"],
        answer: "Chile",
      },
      {
        _id: "0dc8265f-92cb-43d1-9b62-e3626432f3df",
        question: "Who hooks Jesse up with Tuco Salamanca?",
        options: ["Badger", "Skinny Pete", "Krazy-8", "Combo"],
        answer: "Skinny Pete",
      },
      {
        _id: "da18ab0b-ce35-425c-b93c-0b1e57fbcdd2",
        question:
          "Saul's contact, who specializes in acquiring new identities for people, repairs what as a front?",
        options: [
          "Hot Water Heaters",
          "Vacuum Cleaners",
          "Washing Machines",
          "Stereos",
        ],
        answer: "Vacuum Cleaners",
      },
    ],
  },
  {
    _id: "9e0a274d-7fc4-4f4e-81b8-468cec18d893",
    title: "Avengers",
    subtitle: "I love you 3000!",
    categoryName: "Movies",
    category: "movies",
    trending: true,
    image:
      "https://res.cloudinary.com/ms-inc/image/upload/v1652917922/m-1_y1dpnh.webp",
    totalScore: 10,
    mcqs: [
      {
        _id: "f05f6506-6242-48c8-9958-2a814bd9d5ce",
        question:
          "What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe?",
        options: ["2007", "2008", "2009", "2010"],
        answer: "2008",
      },
      {
        _id: "4d030ad3-ced0-4fad-a10c-98d52c142c09",
        question: "What is the name of Thor's Hammer?",
        options: ["Aesir", "Fâner", "Mjolnir", "Rêquaer"],
        answer: "Mjolnir",
      },
      {
        _id: "eba3e8f7-b73c-48e5-b1bb-36261fd036a4",
        question: "What is Captain America’s shield made of?",
        options: ["Vibranium", "Titanium", "Promethium", "Adamantium"],
        answer: "Vibranium",
      },
      {
        _id: "aa85b210-ae80-4e01-91c1-303dff2a5634",
        question: "How many Infinity Stones are there?",
        options: ["4", "7", "5", "6"],
        answer: "6",
      },
      {
        _id: "3e2b45c6-253a-444f-b5be-eb0f72981d92",
        question:
          "What do the Avengers get at the final post-credit scene in the first film?",
        options: ["Burgers", "Falafel", "Fro-yos", "Shawarma"],
        answer: "Shawarma",
      },
    ],
  },
  {
    _id: "35ce347c-4319-4268-9dae-c9f81ddbf90a",
    title: "Batman",
    subtitle: "You Think Darkness Is Your Ally.",
    categoryName: "Movies",
    category: "movies",
    trending: false,
    image:
      "https://res.cloudinary.com/ms-inc/image/upload/v1652919062/m-4_knfrt8.webp",
    totalScore: 10,
    mcqs: [
      {
        _id: "5c77a528-337f-4a71-b96c-2a90a036b5b7",
        question: "What is The Dark Knight trilogy's Batmobile called?",
        options: ["Roller", "Toppler", "Spinner", "Tumbler"],
        answer: "Tumbler",
      },
      {
        _id: "518f3e73-d924-42ac-947e-f721ded38481",
        question: "What is the name of Gotham's football team?",
        options: [
          "Gotham Crusaders",
          "Gotham Rogues",
          "Gotham Bats",
          "Gotham Knights",
        ],
        answer: "Gotham Rogues",
      },
      {
        _id: "a11d037b-4aa7-4047-ba63-b2d36c6c95cb",
        question: "What is the Scarecrow's real name?",
        options: [
          "Dr. Douglas Ross",
          "Dr. Douglas Green",
          "Dr. Jonathan Crane",
          "Dr. Drake Ramoray",
        ],
        answer: "Dr. Jonathan Crane",
      },
      {
        _id: "d78f8c2c-441b-41b1-aaa5-75b34939d689",
        question: "Which group does Bruce train with in Bhutan?",
        options: [
          "Justice League Dark",
          "Deadly Viper Assassination Squad",
          "League of Shadows",
          "Suicide Squad",
        ],
        answer: "League of Shadows",
      },
      {
        _id: "b816b777-fd0e-4045-b43a-ef962ee16693",
        question: "What is The Dark Knight trilogy's Batcycle called?",
        options: ["Batbike", "Batwheels", "Batpod", "Batblade"],
        answer: "Batpod",
      },
    ],
  },
  {
    _id: "13b7c8f5-96a5-4bd7-8b54-2551479e6332",
    title: "Badminton",
    subtitle: "Keep calm and play badminton.",
    categoryName: "Sports",
    category: "sports",
    trending: true,
    image:
      "https://res.cloudinary.com/ms-inc/image/upload/v1652981702/s-1_savr5h.webp",
    totalScore: 10,
    mcqs: [
      {
        _id: "138388f4-e809-42f2-92b4-d32b57f3c92e",
        question: "A ________ is an exchange of consecutive shots.",
        options: ["Alley", "Shots", "Rally", "Match"],
        answer: "Rally",
      },
      {
        _id: "ee840233-ff24-4eb2-9b44-972c1959771e",
        question:
          "The space between the singles and doubles line is know as the ________.",
        options: ["Alley", "Space", "Shuttle", "Line"],
        answer: "Alley",
      },
      {
        _id: "3b57f5be-3dcc-4a1e-8205-c6d23e918f41",
        question:
          "What was the game of badminton called before its current name?",
        options: ["Hitting", "Puma", "Poona", "Oomah"],
        answer: "Poona",
      },
      {
        _id: "77a42882-f4c1-4fa7-a949-eb84b3adcfdb",
        question: "What year was badminton accepted into the Olympics? ",
        options: ["1994", "1996", "1991", "1992"],
        answer: "1992",
      },
      {
        _id: "f41c4ea1-8e3a-4a74-89ed-6c4b8c9a1514",
        question: "What is it called when you make a mistake?",
        options: ["Wrong", "Fault", "Out", "Strike"],
        answer: "Fault",
      },
    ],
  },
  {
    _id: "b19592e6-5d83-40bb-bc3f-1061c6f65dd1",
    title: "Cricket",
    subtitle: "Enjoy the game.",
    categoryName: "Sports",
    category: "sports",
    trending: false,
    image:
      "https://res.cloudinary.com/ms-inc/image/upload/v1652982788/s-2_sq4dxl.webp",
    totalScore: 10,
    mcqs: [
      {
        _id: "a391736b-eaae-40f9-95c5-fc8b56a46d01",
        question:
          "How many individual centuries have been scored in World Cup finals so far?",
        options: ["5", "4", "6", "7"],
        answer: "6",
      },
      {
        _id: "94afbe29-6ae9-404d-be4b-f531d85c58ad",
        question:
          "Who remains the only captain to have not gotten a chance to bat in a World Cup final so far?",
        options: ["Steve Waugh", "Ian Chappell", "Wasim Akram", "Graham Gooch"],
        answer: "Steve Waugh",
      },
      {
        _id: "53e526f4-de33-4574-8398-2bf6c6a25732",
        question:
          "Which edition holds the record for the most maidens in a World Cup final?",
        options: ["1975", "1979", "1983", "1987"],
        answer: "1983",
      },
      {
        _id: "762a2e54-cd56-453d-8031-9ad5349cda38",
        question:
          "Who among these pair did not bowl their full quota of overs in the 2011 World Cup final?",
        options: [
          "Munaf Patel-Harbhajan Singh",
          "Sreesanth-Yuvraj Singh",
          "Munaf Patel-Sreesanth",
          "Harbhajan Singh-Yuvraj Singh",
        ],
        answer: "Munaf Patel-Sreesanth",
      },
      {
        _id: "170661dc-63f7-46f7-856d-1018dbfbb3c9",
        question:
          "Which bowler holds the unwanted record for the most expensive figures in a World Cup final?",
        options: [
          "Dilhara Fernando",
          "Trent Boult",
          "Nuwan Kulasekara",
          "Javagal Srinath",
        ],
        answer: "Javagal Srinath",
      },
    ],
  },
  {
    _id: "b6f61c08-72a7-496a-bdf3-2aec71d4ced3",
    title: "Javascript",
    subtitle: "Language of the Web",
    category: "tech",
    categoryName: "Tech",
    trending: false,
    image:
      "https://res.cloudinary.com/ms-inc/image/upload/v1652984615/t-4_eyvleh.webp",
    totalScore: 10,
    mcqs: [
      {
        _id: "e3ae2adc-ebbe-46c1-a55c-e4ad91fcb46b",
        question: "JavaScript is a ___ -side programming language.",
        options: ["Client", "Server", "Both", "None"],
        answer: "Both",
      },
      {
        _id: "f2d42c4a-4e27-4e4c-bd5f-256494585f84",
        question: "How do you find the minimum of x and y using JavaScript?",
        options: ["min(x,y)", "Math.min(x,y)", "Math.min(xy)", "min(xy)"],
        answer: "Math.min(x,y)",
      },
      {
        _id: "27655e1f-29eb-4209-b52f-40a03c36861e",
        question:
          "Which of the following statements will show a message as well as ask for user input in a popup?",
        options: ["alert()", "prompt()", "confirm()", "message()"],
        answer: "prompt()",
      },
      {
        _id: "95c9b068-de67-4472-b42e-b5d2e171cc82",
        question:
          "Which JavaScript label catches all the values, except for the ones specified?",
        options: ["catch", "label", "try", "default"],
        answer: "default",
      },
      {
        _id: "82a5aace-f53e-491f-9a3a-b31bcd0a77c3",
        question: "What will the code return? Boolean(3 < 7)",
        options: ["true", "false", "NaN", "SyntaxError"],
        answer: "true",
      },
    ],
  },
  {
    _id: "fc4f8165-8b58-4b52-9c6d-01cefb881187",
    title: "ReactJS",
    subtitle: "Create interactive UIs.",
    category: "tech",
    categoryName: "Tech",
    trending: true,
    image:
      "https://res.cloudinary.com/ms-inc/image/upload/v1652984625/t-3_ubmooi.webp",
    totalScore: 10,
    mcqs: [
      {
        _id: "93362def-e967-4f81-ac84-a003c6699412",
        question: "What is the correct command to create a new React project?",
        options: [
          "npm create-react-app myReactApp",
          "npx create-react-app myReactApp",
          "npx create-react-app",
          "npm create-react-app",
        ],
        answer: "npx create-react-app myReactApp",
      },
      {
        _id: "1d26642d-6db3-4b49-8f38-07ac87050277",
        question: "What is the children prop?",
        options: [
          "A property that lets you set an object as a property",
          "A property that lets you nest components in other components",
          "A property that adds child values to state",
          "A property that lets you pass data to child components",
        ],
        answer: "A property that lets you nest components in other components",
      },
      {
        _id: "401d3f3f-181d-4bd4-b0b7-5205269f9ca6",
        question:
          "Which operator can be used to conditionally render a React component?",
        options: ["&&", "||", "??", "::"],
        answer: "&&",
      },
      {
        _id: "54a3ad3d-27d3-46d9-bc0b-1b26b6307b28",
        question:
          "When rendering a list using the JavaScript map() method, what is required for each element rendered?",
        options: ["key", "data", "id", "index"],
        answer: "key",
      },
      {
        _id: "c49eef27-f2ab-4620-96d8-0b8ae1e8d3d1",
        question: "What tool does React use to compile JSX?",
        options: ["React Router", "JSX Compiler", "Babel", "React DOM"],
        answer: "Babel",
      },
    ],
  },
];
