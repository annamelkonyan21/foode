interface FirstSlider {
    img: string;
    day: string;
    title: string;
}

export const SLIDER: FirstSlider[] = [
    {
        img: 'assets/img/6.jpg',
        day: 'MAY 8, 2018 / Foody',
        title: 'Quick Vegan Enchiladas with Sweet Potato Sauce'
    },
    {
        img: 'assets/img/2.jpg',
        day: 'MAY 8, 2018 / 35 Comments',
        title: 'Quick Vegan Enchiladas with Sweet Potato Sauce'
    },
    {
        img: 'assets/img/3.jpg',
        day: 'MAY 8, 2018 / drinks',
        title: 'Homemade Strawberry Almond Milk'
    },
    {
        img: 'assets/img/4.jpg',
        day: 'aug 8, 2018 / health',
        title: 'Eleven Slushie Cocktails I Bookmarked'
    },
    {
        img: 'assets/img/5.jpg',
        day: 'MAY 8, 2018 / Foody',
        title: 'Eleven Slushie Cocktails I Bookmarked'
    }
];

interface Posts {
    img: string;
    title: string;
    day: string;
    after: string;
    views: number;
    comments: number;
    paragraph: string;
}

export const POSTS: Posts[] = [
    {
        img: 'assets/img/8.jpg',
        title: 'Vegetarian Spring Pho with Sweet Potato Noodles and Heirloom Beans',
        day: 'MAY 8, 2018 / foody',
        after: 'Sarah Jenks',
        views: 192,
        comments: 80,
        paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.'
    },
    {
        img: 'assets/img/9.jpg',
        title: 'Grain-Free Sweet & Savory Activated Walnut Granola',
        day: 'MAY 12, 2018 / drinks',
        after: 'Sarah Jenks',
        views: 190,
        comments: 75,
        paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.'
    },
    {
        img: 'assets/img/5.jpg',
        title: 'Self-Care Interview Series: Gabrielle Russomagno',
        day: 'MAY 15, 2018 / coffee',
        after: 'Sarah Jenks',
        views: 165,
        comments: 50,
        paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.'
    },
    {
        img: 'assets/img/10.jpg',
        title: 'Green Skillet Pizza with Asparagus and Pesto',
        day: 'MAY 20, 2018 / foody',
        after: 'Sarah Jenks',
        views: 190,
        comments: 73,
        paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.'
    },
    {
        img: 'assets/img/11.jpg',
        title: 'Green Skillet Pizza with Asparagus and Pesto',
        day: 'MAY 28, 2018 / health',
        after: 'Sarah Jenks',
        views: 192,
        comments: 80,
        paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.'
    },
    {
        img: 'assets/img/12.jpg',
        title: 'Green Skillet Pizza with Asparagus and Pesto',
        day: 'MAY 8, 2018 / foody',
        after: 'Sarah Jenks',
        views: 136,
        comments: 25,
        paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.'
    }
]

interface LatestPost {
  img: string;
  title: string;
  by: string;
}

export const LATEST_POST: LatestPost[]  = [
  {
    img: 'assets/img/lp1.jpg',
    title: 'Weeknight Ponzu Pasta',
    by: 'Erin Alderson'
  },
  {
    img: 'assets/img/lp2.jpg',
    title: 'The Most Popular Recipe Last Month',
    by: 'Erin Alderson'
  },
  {
    img: 'assets/img/lp3.jpg',
    title: 'A Really Good Chana Masala',
    by: 'Erin Alderson'
  },
  {
    img: 'assets/img/lp4.jpg',
    title: 'Spicy Instant Pot Taco Soup',
    by: 'Erin Alderson'
  },
  {
    img: 'assets/img/lp5.jpg',
    title: 'Lime Leaf Miso Soup',
    by: 'Erin Alderson'
  },

]

export const POPULAR_TAGS: string[] = ['Creative', 'Unique', 'Template', 'Photography', 'travel', 'lifestyle', 'Wordpress Template', 'food', 'idea'];
