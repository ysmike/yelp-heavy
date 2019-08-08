# 🚀 Yelp Heavy

Coined after Falcon Heavy, <a href="http://yelp-heavy.herokuapp.com/" target="_blank">**Yelp Heavy**</a> is a dynamic table that provides rankings of the restaurants in New York City, taking both positive and negative reviews into account.

## 🔨 Usage

<img src="https://raw.githubusercontent.com/ysmike/yelp-heavy/master/client/src/images/readme_img.png" style="max-width:100%"/>
1. Approval rating

    > A score that represents the percentage of positive reviews subtracted by the percentage of negative reviews, ranging from -100 to 100. A restaurant with the approval rating of 100 means that all of its reviews are positive (4 or 5 stars), whereas a restaurant with -100 approval rating has only negative reviews (1 or 2 stars).

2. Search box

   > A responsive search box that can be used to find a restaurant or list of restaurants under a specific cuisine. e.g. Burgers, Italian, Sandwiches, Tapas Bars, Thai, etc.

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
- Links to Yelp and Google Maps
- Minimum setting for approval ratio, review count, and price range

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
