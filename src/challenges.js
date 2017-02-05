const EASY_DIFFICULTY   = "EASY"
const MEDIUM_DIFFICULTY = "MEDIUM"
const HARD_DIFFICULTY   = "HARD"

module.exports = {
  "FOOD": {
    categoryName: "Food and Dining",
    difficulty: EASY_DIFFICULTY,
    iconClass: "cutlery",
    description: "",
    challenges: [
      {
        content: "바나나",
        english: "banana"
      },
      {
        content: "식당",
        english: "restaurant"
      },
      {
        content: "젓가락",
        english: "chopsticks"
      }
    ]
  },
  "SCHOOL": {
    categoryName: "School",
    difficulty: EASY_DIFFICULTY,
    iconClass: "graduation-cap",
    challenges: [
      {
        content: "책상",
        english: "desk"
      },
      {
        content: "연필",
        english: "pencil"
      },
      {
        content: "선생님",
        english: "teacher"
      }
    ]
  },
  "TRAVEL": {
    categoryName: "Travel",
    difficulty: MEDIUM_DIFFICULTY,
    iconClass: "suitcase",
    challenges: [
      {
        content: "비행기",
        english: "airplane"
      },
      {
        content: "지하철",
        english: "subway"
      },
      {
        content: "호텔",
        english: "hotel"
      },
      {
        content: "택시",
        english: "taxi"
      },
    ]
  },
  "COUNTRIES": {
    categoryName: "Countries",
    difficulty: EASY_DIFFICULTY,
    iconClass: "globe",
    challenges: [
      {
        content: "",
        english: ""
      },
      {
        content: "",
        english: ""
      },
      {
        content: "",
        english: ""
      },
      {
        content: "",
        english: ""
      },
      {
        content: "",
        english: ""
      },
    ]
  },
  "BODY": {
    categoryName: "Body Parts",
    difficulty: MEDIUM_DIFFICULTY,
    iconClass: "male",
    challenges: [
      {
        content: "",
        english: "eyes"
      },
      {
        content: "",
        english: "eyebrows"
      },
      {
        content: "",
        english: "head"
      },
      {
        content: "",
        english: "nose"
      },
      {
        content: "",
        english: "cheeks"
      },
      {
        content: "",
        english: "lips"
      },
      {
        content: "",
        english: "ears"
      },
      {
        content: "",
        english: "chin"
      },
      {
        content: "",
        english: "neck"
      },
    ]
  },
  "PLACES": {
    categoryName: "Places",
    difficulty: HARD_DIFFICULTY,
    iconClass: "map-marker",
    challenges: [
      {
        content: "",
        english: "bank"
      },
      {
        content: "",
        english: "convenience store"
      },
      {
        content: "",
        english: "hospital"
      },
      {
        content: "",
        english: "department store"
      },
      {
        content: "",
        english: "embassy"
      },
    ]
  },
  "COMPUTERS": {
    categoryName: "Computers",
    difficulty: HARD_DIFFICULTY,
    iconClass: "desktop",
    challenges: [
      {
        content: "",
        english: "computer"
      },
      {
        content: "",
        english: "login"
      },
      {
        content: "",
        english: "password"
      },
      {
        content: "",
        english: "email"
      },
      {
        content: "",
        english: "account"
      },
      {
        content: "",
        english: "leet hacker"
      },
    ]
  }
}
