import strawberry from '../images/fruit-01.jpg';
import apple from '../images/fruit-02.jpg';
import mango from '../images/fruit-03.jpg';
import pineapple from '../images/fruit-04.jpg';
import litchi from '../images/fruit-05.jpg';
import orange from '../images/fruit-06.jpg';
import banana from '../images/fruit-07.jpg';
import watermelon from "../images/fruit-08.jpg";
import papaya from "../images/fruit-09.jpg";
import beans from "../images/vegetable-01.jpg";
import carrot from "../images/vegetable-02.jpg";
import cauliflower from "../images/vegetable-03.jpg";
import corn from "../images/vegetable-04.jpg";
import peas from "../images/vegetable-05.jpg";
import chilli from "../images/vegetable-06.jpg";
import cucumber from "../images/vegetable-07.jpg";
import tomatoes from "../images/vegetable-08.jpg";
import potato from "../images/vegetable-09.jpg";
import onion from "../images/vegetable-10.jpg";
import basmati from "../images/rice-01.jpg";
import sonamasuri from "../images/rice-02.jpg";
import ponni from "../images/rice-03.jpg";
import patanjali from "../images/wheat-01.jpg";
import golden_grain from "../images/wheat-02.jpg";
import aashirvaad from "../images/wheat-03.jpg";
import fortune from "../images/wheat-01.jpg";
import henko from "../images/detergents-01.jpg";
import sunlight from "../images/detergents-02.jpg";
import nirma from "../images/detergents-03.jpg";
import surf from "../images/detergents-04.jpg";
import tide from "../images/detergents-05.jpg";
import loreal from "../images/shampoo-01.jpg";
import wow from "../images/shampoo-02.jpg";
import indulekha from "../images/shampoo-03.jpg";
import pantene from "../images/shampoo-04.jpg";
import head_and_shoulder from "../images/shampoo-05.jpg";

const products = [
  {
    id: "01",
    productName: "Strawberry",
    imgUrl: strawberry,
    category: "fruits",
    price: 199,
    shortDesc:
      "Strawberry is a sweet, red heart-shaped fruit. It is packed with vitamin C, antioxidants, and dietary fiber. It is also cholesterol-free and low in calories.",
    description:
      "Strawberry is a sweet, red heart-shaped fruit. It is packed with vitamin C, antioxidants, and dietary fiber. It is also cholesterol-free and low in calories. Strawberries are bright red, juicy, and sweet. They're an excellent source of vitamin C and manganese and also contain decent amounts of folate (vitamin B9) and potassium. Strawberries are very rich in antioxidants and plant compounds, which may have benefits for heart health and blood sugar control.",
    reviews: [
      {
        rating: 4.7,
        text: "Very good product",
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "02",
    productName: "Apple",
    imgUrl: apple,
    category: "fruits",
    price: 149,
    shortDesc:
      "Apple is a round, juicy fruit with a crisp texture. It is rich in antioxidants, fiber, and various vitamins and minerals.",
    description:
      "Apple is a round, juicy fruit with a crisp texture. It is rich in antioxidants, fiber, and various vitamins and minerals. Apples are a good source of vitamin C and dietary fiber. They also contain small amounts of potassium, vitamin A, and vitamin E. Apples are low in calories and have been associated with various health benefits, including improved heart health and reduced risk of certain diseases.",
    reviews: [
      {
        rating: 4.8,
        text: "Delicious and healthy!",
      },
      {
        rating: 4.5,
        text: "Good quality apples.",
      },
    ],
    avgRating: 4.65,
  },
 
  {
    id: "03",
    productName: "Mango",
    imgUrl: mango,
    category: "fruits",
    price: 249,
    shortDesc:
      "Mango is a tropical fruit known for its sweet and juicy flavor. It is rich in vitamins, minerals, and antioxidants.",
    description:
      "Mango is a tropical fruit known for its sweet and juicy flavor. It is rich in vitamins, minerals, and antioxidants. Mangos are an excellent source of vitamin C and vitamin A. They also contain fiber and have antioxidant properties. Eating mangoes may have benefits for the immune system, digestive health, and skin health. They are a delicious and nutritious fruit enjoyed by many people around the world.",
    reviews: [
      {
        rating: 4.9,
        text: "Best mangoes I've ever tasted!",
      },
      {
        rating: 4.7,
        text: "Great quality and freshness.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "04",
    productName: "Pineapple",
    imgUrl: pineapple,
    category: "fruits",
    price: 199,
    shortDesc:
      "Pineapple is a tropical fruit known for its sweet and tangy flavor. It is rich in vitamins, minerals, and antioxidants.",
    description:
      "Pineapple is a tropical fruit known for its sweet and tangy flavor. It is rich in vitamins, minerals, and antioxidants. Pineapples are a good source of vitamin C and manganese. They also contain bromelain, a mixture of enzymes that may reduce inflammation, improve digestion, and boost immunity. Pineapples are delicious and nutritious. They can be enjoyed fresh, cooked, juiced, or preserved.",
    reviews: [
      { 
        rating: 4.6,
        text: "Very good quality.",
      },
    ],
    avgRating: 4.6,
  },
  {
    id: "05",
    productName: "Litchi",
    imgUrl: litchi,
    category: "fruits",
    price: 299,
    shortDesc:
      "Litchi is a sweet, juicy fruit with a rough, red peel. It is rich in vitamins, minerals, and antioxidants.",
    description:
      "Litchi is a sweet, juicy fruit with a rough, red peel. It is rich in vitamins, minerals, and antioxidants. Litchis are a good source of vitamin C and potassium. They also contain small amounts of copper, phosphorus, and manganese. Litchis are a delicious and nutritious fruit that can be enjoyed fresh or cooked.",
    reviews: [
      {
        rating: 4.7,
        text: "Very good quality.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "06",
    productName: "Banana",
    imgUrl: banana,
    category: "fruits",
    price: 99,
    shortDesc:
      "Banana is a sweet, yellow fruit with a thick peel. It is rich in vitamins, minerals, and antioxidants.",
    description:
      "Banana is a sweet, yellow fruit with a thick peel. It is rich in vitamins, minerals, and antioxidants. Bananas are a good source of potassium, vitamin B6, and manganese. They also contain small amounts of copper, phosphorus, and magnesium. Bananas are a delicious and nutritious fruit that can be enjoyed fresh or cooked.",
    reviews: [
      {
        rating: 4.7,
        text: "Very good quality.", 
      }
    ],
    avgRating: 4.7,
  },
  {
    id: "07",
    productName: "Orange",
    imgUrl: orange,
    category: "fruits",
    price: 149,
    shortDesc:
      "Orange is a round, juicy fruit with a thick peel. It is rich in vitamins, minerals, and antioxidants.",
    description:
      "Orange is a round, juicy fruit with a thick peel. It is rich in vitamins, minerals, and antioxidants. Oranges are a good source of vitamin C and potassium. They also contain small amounts of copper, phosphorus, and magnesium. Oranges are a delicious and nutritious fruit that can be enjoyed fresh or cooked.",
    reviews: [
      {
        rating: 4.0,
        text: "Very good quality.",
      }
    ],
    avgRating: 4.0,
  },
  {
    id: "08",
    productName: "Watermelon",
    imgUrl: watermelon,
    category: "fruits",
    price: 149,
    shortDesc:
      "Watermelon is a large, round fruit with a thick rind. It is rich in vitamins, minerals, and antioxidants.",
    description:
      "Watermelon is a large, round fruit with a thick rind. It is rich in vitamins, minerals, and antioxidants. Watermelons are a good source of vitamin C and potassium. They also contain small amounts of copper, phosphorus, and magnesium. Watermelons are a delicious and nutritious fruit that can be enjoyed fresh or cooked.",
    reviews: [
      {
        rating: 4.7,
        text: "Very good quality.",
      }
    ],
    avgRating: 4.7,
  },
  {
    id: "09",
    productName: "Papaya",
    imgUrl: papaya,
    category: "fruits",
    price: 119,
    shortDesc:
      "Papaya is a large, round fruit with a thick rind. It is rich in vitamins, minerals, and antioxidants.",
    description:
      "Papaya is a large, round fruit with a thick rind. It is rich in vitamins, minerals, and antioxidants. Papayas are a good source of vitamin C and potassium. They also contain small amounts of copper, phosphorus, and magnesium. Papayas are a delicious and nutritious fruit that can be enjoyed fresh or cooked.",
    reviews: [
      {
        rating: 4.2,
        text: "Very good quality.",
      }
    ],
    avgRating: 4.2,
  },
  {
    id: "10",
    productName: "beans",
    imgUrl: beans,
    category: "vegetables",
    price: 99,
    shortDesc:
      "Beans are a type of legume that are rich in protein, fiber, and other nutrients.",
    description:
      "Beans are a type of legume that are rich in protein, fiber, and other nutrients. They are a good source of protein, fiber, and other nutrients. Beans are a delicious and nutritious food that can be enjoyed fresh or cooked.",
    reviews: [
      {
        rating: 4.7,
        text: "Very good quality.",
      }
    ],
    avgRating: 4.0,
  },
  {
    id: "11",
    productName: "carrot",
    imgUrl: carrot,
    category: "vegetables",
    price: 99,
    shortDesc:
      "Carrot is a root vegetable that is rich in vitamins, minerals, and antioxidants.",
    description:
        'Carrot is a root vegetable that is rich in vitamins, minerals, and antioxidants. Carrots are a good source of vitamin A, vitamin C, and potassium. They also contain small amounts of copper, phosphorus, and magnesium. Carrots are a delicious and nutritious vegetable that can be enjoyed fresh or cooked.',
    reviews: [
      {
        rating: 4.3,
        text: "Very good quality.",
      }
    ],
    avgRating: 4.3,
  },
  {
    id: "12",
    productName: "Cauliflower",
    imgUrl: cauliflower,
    category: "vegetables",
    price: 109,
    shortDesc:
      "Cauliflower is a cruciferous vegetable that is rich in vitamins, minerals, and antioxidants.",
    description:
      "Cauliflower is a cruciferous vegetable that is rich in vitamins, minerals, and antioxidants. Cauliflowers are a good source of vitamin C and potassium. They also contain small amounts of copper, phosphorus, and magnesium. Cauliflowers are a delicious and nutritious vegetable that can be enjoyed fresh or cooked.",
    reviews: [
      {
        rating: 4.7,
        text: "Very good quality.",
      }
    ],
    avgRating: 4.7,
  },
  {
    id: "13",
    productName: "Corn",
    imgUrl: corn,
    category: "vegetables",
    price: 99,
    shortDesc:
      "Corn is a cereal grain that is rich in vitamins, minerals, and antioxidants.",  
    description:
          'Corn is a cereal grain that is rich in vitamins, minerals, and antioxidants. Corns are a good source of vitamin C and potassium. They also contain small amounts of copper, phosphorus, and magnesium. Corns are a delicious and nutritious vegetable that can be enjoyed fresh or cooked.',
    reviews: [
      {
        rating: 4.7,
        text: "Very good quality.",
      }
    ],
    avgRating: 4.7,
  },
  {
    id: "14",
    productName: "Peas",
    imgUrl: peas,
    category: "vegetables",
    price: 99,
    shortDesc:
      "Peas are a type of legume that are rich in protein, fiber, and other nutrients.",
    description:
      "Peas are a type of legume that are rich in protein, fiber, and other nutrients. They are a good source of protein, fiber, and other nutrients. Peas are a delicious and nutritious food that can be enjoyed fresh or cooked.",
    reviews: [
      {
        rating: 4.7,
        text: "Very good quality.",
      }
    ],
    avgRating: 4.7,
  },
  {
    id: "15",
    productName: "Chilli",
    imgUrl: chilli,
    category: "vegetables",
    price: 70,
    shortDesc:
      "Chilli is a fruit that is rich in vitamins, minerals, and antioxidants.",
    description:
      "Chilli is a fruit that is rich in vitamins, minerals, and antioxidants. Chillies are a good source of vitamin C and potassium. They also contain small amounts of copper, phosphorus, and magnesium. Chillies are a delicious and nutritious vegetable that can be enjoyed fresh or cooked.",
    reviews: [
      {
        rating: 4.7,
        text: "Very good quality.",
      }
    ],
    avgRating: 4.7,
  },
  {
    id: "16",
    productName: "Potato",
    imgUrl: potato,
    category: "vegetables",
    price: 99,
    shortDesc:
      "Potato is a root vegetable that is rich in vitamins, minerals, and antioxidants.",
    description:
      "Potato is a root vegetable that is rich in vitamins, minerals, and antioxidants. Potatoes are a good source of vitamin C and potassium. They also contain small amounts of copper, phosphorus, and magnesium. Potatoes are a delicious and nutritious vegetable that can be enjoyed fresh or cooked.",
    reviews: [
      {
        rating: 4.7,
        text: "Very good quality.",
      }
    ],
    avgRating: 4.7,
  },
  {
    id: "17",
    productName: "Cumcumber",
    imgUrl:cucumber,
    category: "vegetables",
    price: 99,
    shortDesc:
      "Cucumber is a fruit that is rich in vitamins, minerals, and antioxidants.",
    description:
      "Cucumber is a fruit that is rich in vitamins, minerals, and antioxidants. Cucumbers are a good source of vitamin C and potassium. They also contain small amounts of copper, phosphorus, and magnesium. Cucumbers are a delicious and nutritious vegetable that can be enjoyed fresh or cooked.",
    reviews: [
      {
        rating: 4.7,
        text: "Very good quality.",
      }
    ],
    avgRating: 4.7,
  },
  {
    id: "18",
    productName: "Onion",
    imgUrl: onion,
    category: "vegetables",
    price: 99,
    shortDesc:
      "Onion is a root vegetable that is rich in vitamins, minerals, and antioxidants.",
    description:
      "Onion is a root vegetable that is rich in vitamins, minerals, and antioxidants. Onions are a good source of vitamin C and potassium. They also contain small amounts of copper, phosphorus, and magnesium. Onions are a delicious and nutritious vegetable that can be enjoyed fresh or cooked.",
    reviews: [
      {
        rating: 4.7,
        text: "Very good quality.",
      }
    ],
    avgRating: 4.7,
  },
  {
    id: "19",
    productName: "Tomato",
    imgUrl:tomatoes,
    category: "vegetables",
    price: 99,
    shortDesc:
      "Tomato is a fruit that is rich in vitamins, minerals, and antioxidants.",
    description:
        'Tomato is a fruit that is rich in vitamins, minerals, and antioxidants. Tomatoes are a good source of vitamin C and potassium. They also contain small amounts of copper, phosphorus, and magnesium. Tomatoes are a delicious and nutritious vegetable that can be enjoyed fresh or cooked.',
    reviews: [
      {
        rating: 4.7,
        text: "Very good quality.", 
      }
    ],
    avgRating: 4.7,
  },
  {
    id: "20",
    productName: "Basmati Rice",
    imgUrl: basmati,
    category: "rice",
    price: 129 ,
    shortDesc:
      "Basmati Rice is a cereal grain that is rich in vitamins, minerals, and antioxidants.",
    description:
      'Basmati Rice is a cereal grain that is rich in vitamins, minerals, and antioxidants. Basmati Rice are a good source of vitamin C and potassium. They also contain small amounts of copper, phosphorus, and magnesium. Basmati Rice are a delicious and nutritious vegetable that can be enjoyed fresh or cooked.',
    reviews: [
      {
        rating: 4.7,
        text: "Very good quality.",
      }
    ],
    avgRating: 4.7,
  },
  {
    id: "21",
    productName: "Brown Rice",
    imgUrl: sonamasuri,
    category: "rice",
    price: 99 ,
    shortDesc:
      "Brown Rice is a cereal grain that is rich in vitamins, minerals, and antioxidants.",
    description:
      'Brown Rice is a cereal grain that is rich in vitamins, minerals, and antioxidants. Brown Rice are a good source of vitamin C and potassium. They also contain small amounts of copper, phosphorus, and magnesium. Brown Rice are a delicious and nutritious vegetable that can be enjoyed fresh or cooked.',
    reviews: [
      {
        rating: 4.7,
        text: "Very good quality.",
      }
    ],
    avgRating: 4.7,
  },
  {
    id: "22", 
    productName: "Ponni Rice",
    imgUrl: ponni,
    category: "rice",
    price: 89 ,
    shortDesc:
      "Ponni Rice is a cereal grain that is rich in vitamins, minerals, and antioxidants.",
    description:
      'Ponni Rice is a cereal grain that is rich in vitamins, minerals, and antioxidants. Ponni Rice are a good source of vitamin C and potassium. They also contain small amounts of copper, phosphorus, and magnesium. Ponni Rice are a delicious and nutritious vegetable that can be enjoyed fresh or cooked.', 
    reviews: [
      {
        rating: 4.7,
        text: "Very good quality.",
      }
    ],
    avgRating: 4.7,
  },
  {
    id: "23",
    productName: "Patanjali wheat flour",
    imgUrl: patanjali,
    category: "flour",
    price: 59 ,
    shortDesc:
      "Patanjali wheat flour is a cereal grain that is rich in vitamins, minerals, and antioxidants.",
    description:
      'Patanjali wheat flour is a cereal grain that is rich in vitamins, minerals, and antioxidants. Patanjali wheat flour are a good source of vitamin C and potassium. They also contain small amounts of copper, phosphorus, and magnesium. Patanjali wheat flour are a delicious and nutritious vegetable that can be enjoyed fresh or cooked.',
    reviews: [
      {
        rating: 4.7,
        text: "Very good quality.",
      }
    ],
    avgRating: 4.7,
  },
  {
    id: "24",
    productName: "Golden wheat flour",
    imgUrl: golden_grain,
    category: "flour",
    price: 49 ,
    shortDesc:
      "Golden wheat flour is a cereal grain that is rich in vitamins, minerals, and antioxidants.",
    description:
        'Golden wheat flour is a cereal grain that is rich in vitamins, minerals, and antioxidants. Golden wheat flour are a good source of vitamin C and potassium. They also contain small amounts of copper, phosphorus, and magnesium. Golden wheat flour are a delicious and nutritious vegetable that can be enjoyed fresh or cooked.',
    reviews: [
      {
        rating: 4.7,
        text: "Very good quality.",
      }
    ],
    avgRating: 4.7,
  },
  {
    id: "25",
    productName: "Aashirvaad wheat flour",
    imgUrl: aashirvaad,
    category: "flour",
    price: 69 ,
    shortDesc:
      "Aashirvaad wheat flour is a cereal grain that is rich in vitamins, minerals, and antioxidants.",
    description:
      'Aashirvaad wheat flour is a cereal grain that is rich in vitamins, minerals, and antioxidants. Aashirvaad wheat flour are a good source of vitamin C and potassium. They also contain small amounts of copper, phosphorus, and magnesium. Aashirvaad wheat flour are a delicious and nutritious vegetable that can be enjoyed fresh or cooked.',
    reviews: [
      {
        rating: 4.7,
        text: "Very good quality.",
      }
    ],
    avgRating: 4.7,
  },
  {
    id: "26",
    productName: "Fortune flour",
    imgUrl: fortune,
    category: "flour",
    price: 79 ,
    shortDesc:
      "Fortune flour is a cereal grain that is rich in vitamins, minerals, and antioxidants.",
    description:
      'Fortune flour is a cereal grain that is rich in vitamins, minerals, and antioxidants. Fortune flour are a good source of vitamin C and potassium. They also contain small amounts of copper, phosphorus, and magnesium. Fortune flour are a delicious and nutritious vegetable that can be enjoyed fresh or cooked.',
    reviews: [
      {
        rating: 4.7,
        text: "Very good quality.",
      }
    ],
    avgRating: 4.7,
  },
  {
    id: "27",
    productName: "Henko detergent powder",
    imgUrl: henko,
    category: "detergent",
    price: 99,
    shortDesc:
      "Henko detergent powder makes your clothes look fresh and clean.",
    description:
      'Henko detergent powder makes your clothes look fresh and clean. Henko detergent powder are a good source of vitamin C and potassium. They also contain small amounts of copper, phosphorus, and magnesium. Henko detergent powder are a delicious and nutritious vegetable that can be enjoyed fresh or cooked.',
    reviews: [
      {
        rating: 4.7,
        text: "Very good quality.",
      }
    ],
    avgRating: 4.7,
  },
  {
    id: "28",
    productName: "Sunlight",
    imgUrl: sunlight,
    category: "detergent",
    price: 49,
    shortDesc:
      "Sunlight detergent powder makes your clothes look fresh and clean.",
    description:
      'Sunlight detergent powder makes your clothes look fresh and clean. Sunlight detergent powder are a good source of vitamin C and potassium. They also contain small amounts of copper, phosphorus, and magnesium. Sunlight detergent powder are a delicious and nutritious vegetable that can be enjoyed fresh or cooked.',
    reviews: [
      {
        rating: 4.7,
        text: "Very good quality.",
      }
    ],
    avgRating: 4.7,

  },
  {
    id: "29",
    productName:"Nirma",
    imgUrl: nirma,
    category: "detergent",
    price: 79,
    shortDesc:
      "Nirma detergent powder makes your clothes look fresh and clean.",
    description:
      'Nirma detergent powder makes your clothes look fresh and clean. Nirma detergent powder are a good source of vitamin C and potassium. They also contain small amounts of copper, phosphorus, and magnesium. Nirma detergent powder are a delicious and nutritious vegetable that can be enjoyed fresh or cooked.',
    reviews: [
      {
        rating: 4.7,
        text: "Very good quality.",
      }
    ],
    avgRating: 4.7,
  },
  {
    id: "30",
    productName: "Surf Excel",
    imgUrl: surf,
    category: "detergent",
    price: 99,
    shortDesc:
      "Surf Excel detergent powder makes your clothes look fresh and clean.", 
    description:
      'Surf Excel detergent powder makes your clothes look fresh and clean. Surf Excel detergent powder are a good source of vitamin C and potassium. They also contain small amounts of copper, phosphorus, and magnesium. Surf Excel detergent powder are a delicious and nutritious vegetable that can be enjoyed fresh or cooked.',
    reviews: [
      {
        rating: 4.7,
        text: "Very good quality.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "31",
    productName: "Tide",
    imgUrl: tide,
    category: "detergent",
    price: 99,
    shortDesc:
      "Tide detergent powder makes your clothes look fresh and clean.",
    description:
      'Tide detergent powder makes your clothes look fresh and clean. Tide detergent powder are a good source of vitamin C and potassium. They also contain small amounts of copper, phosphorus, and magnesium. Tide detergent powder are a delicious and nutritious vegetable that can be enjoyed fresh or cooked.',
    reviews: [
      {
        rating: 4.7,
        text: "Very good quality.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "32",
    productName: "Loreal",
    imgUrl: loreal,
    category: "shampoo",
    price: 189,
    shortDesc:
      "Loreal shampoo makes your hair look fresh and clean.",
    description:
      'Loreal shampoo makes your hair look fresh and clean. Loreal shampoo are a good source of vitamin C and potassium. They also contain small amounts of copper, phosphorus, and magnesium. Loreal shampoo are a delicious and nutritious vegetable that can be enjoyed fresh or cooked.',
    reviews: [
      {
        rating: 4.7,
        text: "Very good quality.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "33",
    productName: "Wow Shampoo",
    imgUrl: wow,
    category: "shampoo",
    price: 299,
    shortDesc:
      "Wow shampoo makes your hair look fresh and clean.",
    description:
      'Wow shampoo makes your hair look fresh and clean. Wow shampoo are a good source of vitamin C and potassium. They also contain small amounts of copper, phosphorus, and magnesium. Wow shampoo are a delicious and nutritious vegetable that can be enjoyed fresh or cooked.',
    reviews: [
      {
        rating: 4.7,
        text: "Very good quality.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "34",
    productName: "Pantene",
    imgUrl: pantene,
    category: "shampoo",
    price: 199,
    shortDesc:
      "Pantene shampoo makes your hair look fresh and clean.",
    description:
      'Pantene shampoo makes your hair look fresh and clean. Pantene shampoo are a good source of vitamin C and potassium. They also contain small amounts of copper, phosphorus, and magnesium. Pantene shampoo are a delicious and nutritious vegetable that can be enjoyed fresh or cooked.',  
    reviews: [
      {
        rating: 4.7,
        text: "Very good quality.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "35",
    productName: "Head & Shoulders",
    imgUrl: head_and_shoulder,
    category: "shampoo",
    price: 199,
    shortDesc:
      "Head & Shoulders shampoo makes your hair look fresh and clean.",
    description:
      'Head & Shoulders shampoo makes your hair look fresh and clean. Head & Shoulders shampoo are a good source of vitamin C and potassium. They also contain small amounts of copper, phosphorus, and magnesium. Head & Shoulders shampoo are a delicious and nutritious vegetable that can be enjoyed fresh or cooked.',
    reviews: [
      {
        rating: 4.7,
        text: "Very good quality.",
      },
    ],
    avgRating: 4.7,
  }
];


export default products;
