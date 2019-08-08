# 🚀 Yelp Heavy

Coined after Falcon Heavy, <a href="http://yelp-heavy.herokuapp.com/" target="_blank" >**Yelp Heavy**</a> is a dynamic table that provides rankings of the restaurants in New York City, taking both positive and negative reviews into account.

## 🔨 Usage

<img src="https://raw.githubusercontent.com/ysmike/yelp-heavy/master/client/src/images/readme_img.png" style="max-width:100%"/>

1. Approval rating

   > A score that represents the percentage of positive Yelp reviews subtracted by the percentage of negative Yelp reviews, ranging from -100 to 100. See example in FAQ below!

2. Search box

   > A responsive search box that can be used to find a restaurant or list of restaurants that fall under a specific cuisine. e.g. Burgers, Italian, Sandwiches, Tapas Bars, Thai, etc.

3. Yelp link

   > A button that opens a new tab in Yelp

4. Google Maps link

   > A button that opens a new tab in Google Maps

5. Filters

   > A field that sets a minimum for its corresponding column. Can be applied to approval ratio, review count, and price range. (Default settings represent the average of all NYC restaurants)

6. Pagination
   > A dropdown that can change the rows per page to either 10, 20, 50, or 100.

## 🎨 Features

- Approval ratio that allows a more granular comparison among restaurants
- Dynamic table with instant feedback
- Link to respective location on Google Maps
- Link to respective Yelp page
- Minimum setting for approval ratio, review count, and price range
- Sortable columns

## ❓ FAQ

- Can you give an example of how approval ratio is calculated?

  > The restaurant called Houseman, for example, has a total of 100 reviews at the time of this writing. 68 of them are either 4- or 5-star reviews, and 12 of them are either 1- or 2-star reviews. To get the approval ratio, we need to subtract the number of negative reviews from the number of positive reviews, then divide the result by the total review count. So the approval ratio for Houseman is (68 - 12) / 100 which is 56%.

- Why did you start this project?

  > I love exploring restaurants. But also I'm picky and don't want to go out unless I know that it will be an above par experience. So information is key. Yelp to me is the best source of truth because the reviews are crowd-sourced. But it's sometimes hard to differentiate the two 4.5 starred restaurants. To solve this issue, I present to you one way of distinguishing restaurants on a more granular level, using approval ratio.

- How accurate is the approval ratio?

  > Pretty accurate. I've tried more than a few of the restaurants with high approval ratio for the first time and they've all been well worth the money. But take this with a grain of salt. Peter Lugers, the most famous steakhouse in NYC, has an approval rating of 60. I was shocked but it does have more than 5,000 reviews and is less service-oriented place IMHO.

- When would you suggest that I use this?
  > I use it when I know what type of food I want. Type in the name of the cuisine, sort by approval ratio, and have a detailed look on Yelp to make the final decision. You can use it in any way you'd like, though!

## 💻 Developers

To run this app locally, first install [npm](https://nodejs.org/en/) then clone this repository:

```
git clone https://github.com/ysmike/yelp-heavy.git
```

Then install dependencies and run in development mode:

```
cd yelp-heavy && npm install && npm run client-install && npm run dev
```

The app should open up in a browser automatically. Otherwise, open a browser and enter in the address bar:

```
http://localhost:3000/
```

## 🔩 Built With

- [Express](https://expressjs.com/) - Web app framework
- [Material-table](https://material-table.com/#/) - Custom table component for React
- [MongoDB](https://www.mongodb.com/) - NoSQL database
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [Scrapy](https://scrapy.org/) - Python framework for web crawling

## 📜 License

[MIT License](https://github.com/ysmike/yelp-heavy/blob/master/LICENSE)
