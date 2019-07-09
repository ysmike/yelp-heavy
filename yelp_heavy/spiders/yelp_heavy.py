#!/usr/bin/env python3

import scrapy
from scrapy.linkextractors import LinkExtractor
from scrapy.spiders import CrawlSpider, Rule

# Cannot import helper_func directly due to Scrapy framework
from yelp_heavy.spiders import helper_func as hf


class PleySpider(CrawlSpider):
    name = "pley"
    start_urls = [
        "https://www.yelp.com/search?find_desc=restaurants&start=0&l=g:-73.95131989913568,40.8042612146712,-73.97827073531732,40.78801691833214",
        "https://www.yelp.com/search?find_desc=restaurants&start=0&l=g:-73.93348657937895,40.79850557548142,-73.96043741556059,40.78225987069604",
        "https://www.yelp.com/search?find_desc=restaurants&start=0&l=g:-73.96113389452898,40.792297243914476,-73.98808473071063,40.77605002008952",
        "https://www.yelp.com/search?find_desc=restaurants&start=0&l=g:-73.94239990724373,40.78561852924349,-73.96935074342537,40.76936967149986",
        "https://www.yelp.com/search?find_desc=restaurants&start=0&l=g:-73.9694118062896,40.7781260176433,-73.99636264247124,40.76187532715193",
        "https://www.yelp.com/search?find_desc=restaurants&start=0&l=g:-73.94969625911415,40.77259573404155,-73.97664709529579,40.7563436909625",
        "https://www.yelp.com/search?find_desc=restaurants&start=0&l=g:-73.98512568729535,40.767363118242805,-73.99860110538617,40.759236953640915",
        "https://www.yelp.com/search?find_desc=restaurants&start=0&l=g:-73.97314459847013,40.76209443365504,-73.98662001656095,40.7539676248751",
        "https://www.yelp.com/search?find_desc=restaurants&start=0&l=g:-73.9621078290088,40.75852104406395,-73.97558324709962,40.750393798421115",
        "https://www.yelp.com/search?find_desc=restaurants&start=0&l=g:-73.99459261002153,40.76278122259185,-74.00806802811235,40.754654497778574",
        "https://www.yelp.com/search?find_desc=restaurants&start=0&l=g:-73.98759740891069,40.762455055083485,-74.01454824509233,40.7462005322074",
        "https://www.yelp.com/search?find_desc=restaurants&start=0&l=g:-73.97585790904162,40.75480420160594,-73.98933332713244,40.74667650159596",
        "https://www.yelp.com/search?find_desc=restaurants&start=0&l=g:-73.96636750449181,40.75090237793085,-73.97984292258263,40.74277420097743",
        "https://www.yelp.com/search?find_desc=restaurants&start=0&l=g:-73.98243814047567,40.75109360659412,-73.99591355856649,40.742965453014854",
        "https://www.yelp.com/search?find_desc=restaurants&start=0&l=g:-73.97128984614369,40.74673216833209,-73.98476526423451,40.73860348167046",
        "https://www.yelp.com/search?find_desc=restaurants&start=0&l=g:-73.9841246963856,40.74878095932717,-73.99760011447643,40.74065252307577",
        "https://www.yelp.com/search?find_desc=restaurants&start=0&l=g:-73.97203697277388,40.743335734142214,-73.9855123908647,40.73520663237972",
        "https://www.yelp.com/search?find_desc=restaurants&start=0&l=g:-73.99930897851505,40.74835966439386,-74.01278439660587,40.740231176649516",
        "https://www.yelp.com/search?find_desc=restaurants&start=0&l=g:-73.9897906234271,40.74440752583911,-74.00326604151792,40.736278555064345",
        "https://www.yelp.com/search?find_desc=restaurants&start=0&l=g:-73.97873901576912,40.74055935475778,-73.99221443385994,40.73242991369672",
        "https://www.yelp.com/search?find_desc=restaurants&start=0&l=g:-73.97135757656014,40.736023124973826,-73.98483299465096,40.727893129585624",
        "https://www.yelp.com/search?find_desc=restaurants&start=0&l=g:-73.99985915106316,40.741268223435,-74.01333456915398,40.73313886900225",
        "https://www.yelp.com/search?find_desc=restaurants&start=0&l=g:-73.9891152965696,40.736952512062146,-74.00259071466041,40.72882263024086",
        "https://www.yelp.com/search?find_desc=restaurants&start=0&l=g:-73.97871670059737,40.732243523730794,-73.9921921186882,40.7241130665144",
        "https://www.yelp.com/search?find_desc=restaurants&start=0&l=g:-73.96324949653507,40.72917376406437,-73.99020033271671,40.712911106175895",
        "https://www.yelp.com/search?find_desc=restaurants&start=0&l=g:-73.99504736494828,40.72808992363261,-74.02199820112992,40.71182700091112",
        "https://www.yelp.com/search?find_desc=restaurants&start=0&l=g:-73.97482453800609,40.724391899356284,-74.00177537418773,40.708128073078015",
        "https://www.yelp.com/search?find_desc=restaurants&start=0&l=g:-73.99800677305564,40.71542486304266,-74.02495760923728,40.69915884608494",
        "https://www.yelp.com/search?find_desc=restaurants&start=0&l=g:-73.97212882047995,40.70380736036237,-73.99907965666159,40.68753850579934",
        "https://www.yelp.com/search?find_desc=restaurants&start=0&l=g:-73.95118895282076,40.71140158457305,-73.9781397890024,40.69513458484336",
        "https://www.yelp.com/search?find_desc=restaurants&start=0&l=g:-73.94552253165199,40.72027971204304,-73.97247336783363,40.704014881093045",
        "https://www.yelp.com/search?find_desc=restaurants&start=0&l=g:-73.93655130571193,40.73490819892217,-73.96350214189357,40.71864694232171",
        "https://www.yelp.com/search?find_desc=restaurants&start=0&l=g:-73.93330696668869,40.74828429971376,-73.96025780287033,40.73202631238078",
        "https://www.yelp.com/search?find_desc=restaurants&start=0&l=g:-73.92841461744553,40.758872625231,-73.95536545362717,40.742617226430866",
        "https://www.yelp.com/search?find_desc=restaurants&start=0&l=g:-73.92066227816343,40.771476539452856,-73.94761311434507,40.75522422266145",
        "https://www.yelp.com/search?find_desc=restaurants&start=0&l=g:-73.90999082281434,40.78238404983916,-73.93694165899598,40.76613440087346"
        # "https://www.yelp.com/search?find_desc=restaurants&find_loc=Theater%20District%2C%20Manhattan%2C%20NY&l=g%3A-73.97987510892449%2C40.76133781027203%2C-73.98626949521599%2C40.75646178872317&start=150"
    ]

    # xpaths for vertical & horizontal crawls
    # note: xpaths should point to elements containing links, but not the href attributes
    # note: xpaths are subject to change based on the updates on the website
    vertical_crawl = "//h3[@class='lemon--h3__373c0__sQmiG heading--h3__373c0__1n4Of alternate__373c0__1uacp']/a"
    horizontal_crawl = "//a[@class='lemon--a__373c0__IEZFH link__373c0__29943 next-link navigation-button__373c0__1D3Ug link-color--blue-dark__373c0__1mhJo link-size--default__373c0__1skgq']"

    rules = (
        # vertical crawl
        Rule(
            LinkExtractor(restrict_xpaths=vertical_crawl, deny=("adredir")),
            callback="parse_content",
        ),
        # horizontal crawl
        Rule(
            LinkExtractor(restrict_xpaths=horizontal_crawl, canonicalize=False),
            follow=True,
        ),
    )

    # name of this function CANNOT be 'parse' as it'd collide with another 'parse' in the CrawlSpider class above
    def parse_content(self, response):
        # json to be dissected
        json = hf.decode_json(
            response.xpath("//script[@type='application/ld+json'][last()]/text()").get()
        )

        # basic data extracted from json
        name = json["name"]
        phone = hf.phone_number_clean_up(json["telephone"])
        price_range = hf.determine_price_range(json["priceRange"])
        num_of_reviews = int(json["aggregateRating"]["reviewCount"])
        rating = float(json["aggregateRating"]["ratingValue"])
        recent_rating = hf.avg_last_20_reviews(json["review"])
        city = json["address"]["addressLocality"]
        state = json["address"]["addressRegion"]
        street_address = json["address"]["streetAddress"]
        postalcode = (
            int(json["address"]["postalCode"])
            if json["address"]["postalCode"]
            else None
        )
        address = f"{street_address}, {city}, {state} {postalcode}"

        # rest of the data
        category = list(
            set(
                response.xpath(
                    "//span[contains(@class,'category-str-list')]//a//text()"
                ).getall()
            )
        )

        link = response.urljoin(
            response.xpath("//a[@data-analytics-label='biz-name']//@href").get()
        )

        map_info = response.xpath(
            "//div[@class='lightbox-map hidden']/@data-map-state"
        ).get()

        # potential areas of error due to certain businesses not having histogram or coordinates
        try:
            longitude = hf.decode_json(map_info)["center"]["longitude"]
            latitude = hf.decode_json(map_info)["center"]["latitude"]
        except:
            longitude, latitude = None, None

        coordinates = [longitude, latitude]
        geo_json = {"type": "Point", "coordinates": coordinates}
        raw_histogram = response.xpath(
            "//td[contains(@class,'histogram')]/text()"
        ).getall()
        histogram = [int(x) for x in raw_histogram]

        try:
            num_of_5_stars = histogram[0]
            num_of_4_stars = histogram[1]
            num_of_3_stars = histogram[2]
            num_of_2_stars = histogram[3]
            num_of_1_stars = histogram[4]
            percent_of_5 = hf.percent_calc(num_of_5_stars / num_of_reviews)
            percent_of_4 = hf.percent_calc(num_of_4_stars / num_of_reviews)
            percent_of_3 = hf.percent_calc(num_of_3_stars / num_of_reviews)
            percent_of_2 = hf.percent_calc(num_of_2_stars / num_of_reviews)
            percent_of_1 = hf.percent_calc(num_of_1_stars / num_of_reviews)
            percent_high = hf.turn_to_float(percent_of_5 + percent_of_4)
            percent_low = hf.turn_to_float(percent_of_2 + percent_of_1)
        except IndexError or TypeError:
            num_of_5_stars = None
            num_of_4_stars = None
            num_of_3_stars = None
            num_of_2_stars = None
            num_of_1_stars = None
            percent_of_5 = None
            percent_of_4 = None
            percent_of_3 = None
            percent_of_2 = None
            percent_of_1 = None
            percent_high = None
            percent_low = None

        # structure of the final output
        data = {
            "name": name,
            "reviewCount": num_of_reviews,
            "percent_high": percent_high,
            "percent_low": percent_low,
            "aggregateRating": rating,
            "recentRating": recent_rating,
            "cuisine": category,
            "telephone": phone,
            "link": link,
            "address": address,
            "longitude": longitude,
            "latitude": latitude,
            "GeoJSON": geo_json,
        }

        yield data
