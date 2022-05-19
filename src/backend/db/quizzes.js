import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const quizzes = [
  {
    _id: uuid(),
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
        _id: uuid(),
        question: "Suits is set in a fictional law firm in ________?",
        options: ["Atlanta", "New York City", "Austin", "Chicago"],
        answer: "New York City",
      },
      {
        _id: uuid(),
        question: "What network airs 'Suits?'",
        options: ["USA", "NBC", "CBS", "TNT"],
        answer: "USA",
      },
      {
        _id: uuid(),
        question: "Harvey had what kind of emotional problems",
        options: ["Attachment Issues", "Panic Attack", "Trauma", "Stress"],
        answer: "Attachment Issues",
      },
      {
        _id: uuid(),
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
        _id: uuid(),
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
    _id: uuid(),
    title: "Breaking Bad",
    subtitle: "Say My Name!!",
    categoryName: "TV Shows",
    category: "tvshows",
    trending: true,
    image:
      "https://res.cloudinary.com/ms-inc/image/upload/v1652916647/tv-2_kssx3s.webp",
    totalScore: 10,
    mcqs: [
      {
        _id: uuid(),
        question:
          "After Walt receives his cancer diagnosis, what does he nonchalantly tell the doctor is on his lapel?",
        options: ["Mustard", "Ketchup", "Coffee", "Blood"],
        answer: "Mustard",
      },
      {
        _id: uuid(),
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
        _id: uuid(),
        question: "Where's Gus Fring from?",
        options: ["Mexico", "Guatemala", "Argentina", "Chile"],
        answer: "Chile",
      },
      {
        _id: uuid(),
        question: "Who hooks Jesse up with Tuco Salamanca?",
        options: ["Badger", "Skinny Pete", "Krazy-8", "Combo"],
        answer: "Skinny Pete",
      },
      {
        _id: uuid(),
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
    _id: uuid(),
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
        _id: uuid(),
        question:
          "What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe?",
        options: ["2007", "2008", "2009", "2010"],
        answer: "2008",
      },
      {
        _id: uuid(),
        question: "What is the name of Thor's Hammer?",
        options: ["Aesir", "Fâner", "Mjolnir", "Rêquaer"],
        answer: "Mjolnir",
      },
      {
        _id: uuid(),
        question: "What is Captain America’s shield made of?",
        options: ["Vibranium", "Titanium", "Promethium", "Adamantium"],
        answer: "Vibranium",
      },
      {
        _id: uuid(),
        question: "How many Infinity Stones are there?",
        options: ["4", "7", "5", "6"],
        answer: "6",
      },
      {
        _id: uuid(),
        question:
          "What do the Avengers get at the final post-credit scene in the first film?",
        options: ["Burgers", "Falafel", "Fro-yos", "Shawarma"],
        answer: "Shawarma",
      },
    ],
  },
  {
    _id: uuid(),
    title: "Batman",
    subtitle: "You Think Darkness Is Your Ally.",
    categoryName: "Movies",
    category: "movies",
    trending: true,
    image:
      "https://res.cloudinary.com/ms-inc/image/upload/v1652919062/m-4_knfrt8.webp",
    totalScore: 10,
    mcqs: [
      {
        _id: uuid(),
        question: "What is The Dark Knight trilogy's Batmobile called?",
        options: ["Roller", "Toppler", "Spinner", "Tumbler"],
        answer: "Tumbler",
      },
      {
        _id: uuid(),
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
        _id: uuid(),
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
        _id: uuid(),
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
        _id: uuid(),
        question: "What is The Dark Knight trilogy's Batcycle called?",
        options: ["Batbike", "Batwheels", "Batpod", "Batblade"],
        answer: "Batpod",
      },
    ],
  },
  {
    _id: uuid(),
    title: "Batman",
    subtitle: "You Think Darkness Is Your Ally.",
    categoryName: "Sports",
    category: "sports",
    trending: false,
    image:
      "https://res.cloudinary.com/ms-inc/image/upload/v1652919062/m-4_knfrt8.webp",
    totalScore: 10,
    mcqs: [
      {
        _id: uuid(),
        question: "What is The Dark Knight trilogy's Batmobile called?",
        options: ["Roller", "Toppler", "Spinner", "Tumbler"],
        answer: "Tumbler",
      },
      {
        _id: uuid(),
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
        _id: uuid(),
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
        _id: uuid(),
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
        _id: uuid(),
        question: "What is The Dark Knight trilogy's Batcycle called?",
        options: ["Batbike", "Batwheels", "Batpod", "Batblade"],
        answer: "Batpod",
      },
    ],
  },
  {
    _id: uuid(),
    title: "Batman",
    subtitle: "You Think Darkness Is Your Ally.",
    categoryName: "Tech",
    category: "tech",
    trending: false,
    image:
      "https://res.cloudinary.com/ms-inc/image/upload/v1652919062/m-4_knfrt8.webp",
    totalScore: 10,
    mcqs: [
      {
        _id: uuid(),
        question: "What is The Dark Knight trilogy's Batmobile called?",
        options: ["Roller", "Toppler", "Spinner", "Tumbler"],
        answer: "Tumbler",
      },
      {
        _id: uuid(),
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
        _id: uuid(),
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
        _id: uuid(),
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
        _id: uuid(),
        question: "What is The Dark Knight trilogy's Batcycle called?",
        options: ["Batbike", "Batwheels", "Batpod", "Batblade"],
        answer: "Batpod",
      },
    ],
  },
];
