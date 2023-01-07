import requests

def get_currencies():
    return requests.get('https://api.nanswap.com/v1/get-currencies').json()

def get_estimate(from_, to, amount):
    return requests.get(f'https://api.nanswap.com/v1/get-estimate?from={from_}&to={to}&amount={amount}').json()

def get_estimate_reverse(from_, to, amount):
    return requests.get(f'https://api.nanswap.com/v1/get-estimate-reverse?from={from_}&to={to}&amount={amount}').json()

def get_limits(from_, to):
    return requests.get(f'https://api.nanswap.com/v1/get-limits?from={from_}&to={to}').json()

def create_order(api_key, from_, to, amount, to_address):
    return requests.post('https://api.nanswap.com/v1/create-order', json={
        'from': from_,
        'to': to,
        'amount': amount,
        'toAddress': to_address
    }, headers={
        'nanswap-api-key': api_key
    }).json()

def get_order(id_):
    return requests.get(f'https://api.nanswap.com/v1/get-order?id={id_}').json()

def get_currencies_partner():
    return requests.get('https://api.nanswap.com/v1/get-currencies-partner').json()

def get_estimate_partner(from_, to, amount):
    return requests.get(f'https://api.nanswap.com/v1/get-estimate-partner?from={from_}&to={to}&amount={amount}').json()

def get_limits_partner(from_, to):
    return requests.get(f'https://api.nanswap.com/v1/get-limits-partner?from={from_}&to={to}').json()

def create_order_partner(api_key, from_, to, amount, to_address):
    return requests.post('https://api.nanswap.com/v1/create-order-partner', json={
        'from': from_,
        'to': to,
        'amount': amount,
        'toAddress': to_address
    }, headers={
        'nanswap-api-key': api_key
    }).json()

def get_order_partner(id_):
    return requests.get(f'https://api.nanswap.com/v1/get-order-partner?id={id_}').json()

def get_last_claim(crypto):
    return requests.get(f'https://data.nanswap.com/get-last-claims?ticker={crypto}').json()

def get_stats():
    return requests.get(f'https://data.nanswap.com/get-stats').json()

def get_market():
    return requests.get(f'https://data.nanswap.com/get-markets').json()

def get_invite_stats(id_):
    return requests.get(f'https://data.nanswap.com/get-invite-stats?paymentAddress={id_}').json()
