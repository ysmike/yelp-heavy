# Functions to parse raw data
import json


def decode_json(string):
    try:
        return json.loads(string)
    except:
        return None


def phone_number_clean_up(number):
    if number[:2] == "+1" and len(number) == 12:
        return "({}) {}-{}".format(number[2:5], number[5:8], number[8::])
    else:
        return number


def determine_price_range(price_range):
    if price_range == "Under $10":
        return "$"
    elif price_range == "$11-30":
        return "$$"
    elif price_range == "$31-60":
        return "$$$"
    elif price_range == "Above $61":
        return "$$$$"
    else:
        return price_range


def avg_last_20_reviews(reviews_on_page):
    total = 0.0
    for review in reviews_on_page:
        total += review["reviewRating"]["ratingValue"]
    try:
        return float(f"{total / len(reviews_on_page):0.3f}")
    except ZeroDivisionError:
        return None


def percent_calc(fraction):
    return float(f"{(fraction * 100):0.3f}")


def turn_to_float(number):
    return float(f"{number:0.3f}")
