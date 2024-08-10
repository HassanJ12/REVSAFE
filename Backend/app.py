
# import numpy as np
# import pandas as pd
# from transformers import AutoTokenizer, AutoModelForSequenceClassification
# import torch
# import requests

# import re

# from flask import Flask , request
# from pymongo import MongoClient
# from werkzeug.utils import secure_filename
# import hashlib
# from flask import Flask, request, jsonify
# from flask_jwt_extended import JWTManager, create_access_token, get_jwt_identity, jwt_required
# import datetime
# import hashlib


# import os
# # import tensorflow as tf
# # from pymongo import ObjectId
# from bson.objectid import ObjectId



# import requests

# from io import BytesIO



# app = Flask(__name__)
# jwt = JWTManager(app) # initialize JWTManager
# app.config['JWT_SECRET_KEY'] = '38dd56f56d405e02ec0ba4be4607eaab'
# app.config['JWT_ACCESS_TOKEN_EXPIRES'] = datetime.timedelta(days=1)
# app.config['UPLOAD_FOLDER'] = 'csv_data'
# #region  
# client = MongoClient('mongodb+srv://aza-e-hussain:cz9Am1Y4VJHrf8ZY@cluster0.oakgoec.mongodb.net/')
# #endregion


# db=client.sentimental_analysis


# user = db.user
# sentiment=db.sentimental
# result = db.result


# tokenizer = AutoTokenizer.from_pretrained('nlptown/bert-base-multilingual-uncased-sentiment')

# model = AutoModelForSequenceClassification.from_pretrained('nlptown/bert-base-multilingual-uncased-sentiment')

# def sentiment_score(review):
#     tokens = tokenizer.encode(review, return_tensors='pt')
#     result = model(tokens)
#     return int(torch.argmax(result.logits))+1

# ALLOWED_EXTENSIONS = {'csv'}

# def allowed_file(filename):
#     return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS







# @app.route('/', methods=('GET', 'POST'))
# def index():
#     if request.method == "GET":
#     #    doctor.insert_one({"name":"zaryab"})
#        return 'saved'




# # region begin for user


# @app.route("/api/user/signup",methods=["POST"])
# def userregister():
#     if request.method == "POST":
#         new_user = request.get_json() # store the json body request
#         # Creating Hash of password to store in the database
#         new_user["password"] = hashlib.sha256(new_user["password"].encode("utf-8")).hexdigest() # encrpt password
#         # Checking if user already exists
#         doc = user.find_one({"username": new_user["username"]}) # check if user exist
#         # If not exists than create one
#         if not doc:
#             # Creating user
#             new_user["createdAt"]= datetime.datetime.today()
#             user.insert_one(new_user)
#             return jsonify({'msg': 'User created successfully'}), 201
#         else:
#             return jsonify({'msg': 'Username already exists'}), 409
        




# @app.route("/api/user/login", methods=["post"])
# def userlogin():
#     # Getting the login Details from payload
#     login_details = request.get_json() # store the json body request
#     # Checking if user exists in database or not
#     user_from_db = user.find_one({'username': login_details['username']})  # search for user in database
#     # If user exists
#     if user_from_db:
#         # Check if password is correct
#         encrpted_password = hashlib.sha256(login_details['password'].encode("utf-8")).hexdigest()
#         if encrpted_password == user_from_db['password']:
#             # Create JWT Access Token
#             access_token = create_access_token(identity=user_from_db['username']) # create jwt token
#             # Return Token
#             return jsonify(access_token=access_token), 200
#     return jsonify({'msg': 'The username or password is incorrect'}), 401    


# @app.route("/user/sentimental/upload",methods=["POST"])
# def sentimental():
#     if 'file' not in request.files:
#         return jsonify({'error': 'No file part'}), 400
#     file = request.files['file']
#     if file.filename == '':
#         return jsonify({'error': 'No selected file'}), 400
#     if file and allowed_file(file.filename):
#         filename = secure_filename(file.filename)
#         print(filename)
#         file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
#         df=pd.read_csv(os.path.join(app.config['UPLOAD_FOLDER'], filename))

#         df.columns = map(str.upper, df.columns)
        
#         # Ensure 'review' column exists
#         if 'REVIEW' not in df.columns:
#             return jsonify({'error': 'No review column in the dataframe'}), 400
#         else:
#             try:
#                 df['sentiment'] = df['REVIEW'].apply(lambda x: sentiment_score(x[:512]))
#             except TypeError or ValueError:
#                 return jsonify({'error': 'Error calculating sentiment score. Type Error or Value error'}), 400
#         json=df.to_json(orient='records', indent=4)
#         data = df.to_dict(orient='records')

#         if(json):
#             sentiment.insert_one({"result":data}) 
#         print(json)  
                               
#         return json


#         # return jsonify({'message': 'File successfully uploaded'}), 200
#     else:
#         return jsonify({'error': 'Allowed file types are csv'}), 400





# if __name__ == "__main__" :
#     # setup()
#     app.run(debug=True)














import string
import numpy as np
import pandas as pd
from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch
import requests
# from bs4 import BeautifulSoup
import re
import pickle as pickle
import sklearn
from flask import Flask , request
from pymongo import MongoClient
from werkzeug.utils import secure_filename
import hashlib
from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token, get_jwt_identity, jwt_required
import datetime
import hashlib
import lxml
from selenium import webdriver
from bs4 import BeautifulSoup
import time
import csv
import os
# import tensorflow as tf
# from pymongo import ObjectId
from bson.objectid import ObjectId
from bson.json_util import dumps
import nltk
# nltk.download('stopwords')
from nltk.corpus import stopwords




import requests

from io import BytesIO

def open_image_from_url(url):
    try:
        response = requests.get(url)
        response.raise_for_status()  # Check if request was successful
        image = Image.open(BytesIO(response.content))
        return image
    except Exception as e:
        print("Error:", e)
        return None

app = Flask(__name__)
CORS(app)
jwt = JWTManager(app) # initialize JWTManager
app.config['JWT_SECRET_KEY'] = '38dd56f56d405e02ec0ba4be4607eaab'
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = datetime.timedelta(days=1)
app.config['UPLOAD_FOLDER'] = 'csv_data'
#region  
client = MongoClient('mongodb+srv://hassan:hassan123@cluster0.gkdadom.mongodb.net/')
#endregion


db=client.sentimental_analysis


user = db.user
result = db.result
feedback = db.feedback





# Function to scrape product reviews
def scrape_product_reviews(driver, url):
    print(driver)
    print(url)

    driver.get(url)
    time.sleep(5)  # Adjust based on page load time
    soup = BeautifulSoup(driver.page_source, 'html.parser')
    
    # Find all review divs using their class name
    review_tags = soup.find_all(class_='review-content-sl')
    print(review_tags)
    
    # List to hold all reviews from this page
    reviews = []
    
    # Loop through each review tag and extract the text
    for review_tag in review_tags:
        review_text = review_tag.text.strip() if review_tag else 'Not Found'
        reviews.append(review_text)
    
    return reviews

# Set up WebDriver




tokenizer = AutoTokenizer.from_pretrained('nlptown/bert-base-multilingual-uncased-sentiment')

model = AutoModelForSequenceClassification.from_pretrained('nlptown/bert-base-multilingual-uncased-sentiment')

def sentiment_score(review):
    tokens = tokenizer.encode(review, return_tensors='pt')
    result = model(tokens)
    return int(torch.argmax(result.logits))+1
def text_process(review):
    nopunc = [char for char in review if char not in string.punctuation]
    nopunc = ''.join(nopunc)
    return [word for word in nopunc.split() if word.lower() not in stopwords.words('english')]
with open('model.pkl', 'rb') as f:
    loaded_model = pickle.load(f)

ALLOWED_EXTENSIONS = {'csv'}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS







@app.route('/', methods=('GET', 'POST'))
def index():
    if request.method == "GET":
    #    doctor.insert_one({"name":"zaryab"})
       return 'saved'




# region begin for user


@app.route("/api/user/signup",methods=['POST'])
def userregister():
    
        new_user = request.get_json() # store the json body request
        # Creating Hash of password to store in the database
        new_user["password"] = hashlib.sha256(new_user["password"].encode("utf-8")).hexdigest() # encrpt password
        # Checking if user already exists
        doc = user.find_one({"username": new_user["username"]}) # check if user exist
        # If not exists than create one
        if not doc:
            # Creating user
            new_user["createdAt"]= datetime.datetime.today()
            user.insert_one(new_user)
            return jsonify({'msg': 'User created successfully'}), 201
        else:
            return jsonify({'msg': 'Username already exists'}), 409
        




@app.route("/api/user/login", methods=["post"])
def userlogin():
    # Getting the login Details from payload
    login_details = request.get_json() # store the json body request
    # Checking if user exists in database or not
    user_from_db = user.find_one({'username': login_details['username']})  # search for user in database
    # If user exists
    if user_from_db:
        # Check if password is correct
        encrpted_password = hashlib.sha256(login_details['password'].encode("utf-8")).hexdigest()
        if encrpted_password == user_from_db['password']:
            # Create JWT Access Token
            access_token = create_access_token(identity=user_from_db['username']) # create jwt token
            # Return Token
            return jsonify(access_token=access_token), 200
    return jsonify({'msg': 'The username or password is incorrect'}), 401    


@app.route("/user/sentimental/upload",methods=["POST"])
@jwt_required()
def sentimental():
    current_user = get_jwt_identity() # Get the identity of the current user
    user_from_db = user.find_one({'username' : current_user})
    if(user_from_db):
        form = request.form
        if 'file' not in request.files:
            return jsonify({'error': 'No file part'}), 400
        file = request.files['file']
        if file.filename == '':
            return jsonify({'error': 'No selected file'}), 400
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            print(filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            df=pd.read_csv(os.path.join(app.config['UPLOAD_FOLDER'], filename))

            df.columns = map(str.upper, df.columns)
            
            # Ensure 'review' column exists
            if 'REVIEW' not in df.columns:
                return jsonify({'error': 'No review column in the dataframe'}), 400
            else:
                try:
                    df['sentiment'] = df['REVIEW'].apply(lambda x: sentiment_score(x[:512]))
                    predictions = loaded_model.predict(df['REVIEW'])
                    df['Predictions']=predictions
                    df['Predictions']= df['Predictions'].apply(lambda x: 'Fake' if x == 'CG' else 'Genuine')

                except TypeError or ValueError:
                    return jsonify({'error': 'Error calculating sentiment score. Type Error or Value error'}), 400
            json=df.to_json(orient='records', indent=4)
            data = df.to_dict(orient='records')
            print(user_from_db)
            created_result=result.insert_one({"result":data,"datasetname":form["name"],"userId":str(user_from_db["_id"])})
            # created_result["_id"]=str(created_result["_id"])
            # print(created_result)
            # inserted_document = result.find_one({"_id": created_result["inserted_id"]})
            print(created_result.inserted_id)
            inserted_document = result.find_one({"_id":ObjectId(created_result.inserted_id)})
            inserted_document["_id"] = str(inserted_document["_id"])
            return jsonify(inserted_document)


            # return jsonify({'message': 'File successfully uploaded'}), 200
        else:
            return jsonify({'error': 'Allowed file types are csv'}), 400

@app.route("/user/sentimental/results",methods=["GET"])
@jwt_required()
def all_sentimental():
    current_user = get_jwt_identity() # Get the identity of the current user
    user_from_db = user.find_one({'username' : current_user})
    if(user_from_db):
        get_data=result.find({"userId":str(user_from_db["_id"])})
        print(get_data)
        get_data=list(get_data)
        if(get_data):
            for i in range(len(get_data)):
                get_data[i]["_id"]=str(get_data[i]["_id"])
            return {"result":get_data}
        else:
            return jsonify({"message":"no data found"})


@app.route("/user/sentimental/results/<string:id>",methods=["GET"])
@jwt_required()
def one_sentimental(id):
    current_user = get_jwt_identity() # Get the identity of the current user
    user_from_db = user.find_one({'username' : current_user})
    if(user_from_db):
        get_data=result.find_one({"userId":str(user_from_db["_id"]),"_id":ObjectId(id)})
        print(get_data)
        if(get_data):
            get_data["_id"]=str(get_data["_id"])
           
            return {"result":get_data}
        else:
            return jsonify({"message":"no data found"})



custom_headers = {
    "Accept-language": "en-GB,en;q=0.9",
    "Accept-Encoding": "gzip, deflate, br",
    "Cache-Control": "max-age=0",
    "Connection": "keep-alive",
    "User-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.1 Safari/605.1.15",
}

def get_soup(url):
    response = requests.get(url, headers=custom_headers)
    print(url)
    if response.status_code != 200:
        return None
    soup = BeautifulSoup(response.text, "lxml")
    return soup

def get_reviews(soup):
    review_elements = soup.select("div.review")
    scraped_reviews = []

    for review in review_elements:
        r_author_element = review.select_one("span.a-profile-name")
        r_author = r_author_element.text if r_author_element else None

        r_rating_element = review.select_one("i.review-rating")
        r_rating = r_rating_element.text.replace("out of 5 stars", "") if r_rating_element else None

        r_title_element = review.select_one("a.review-title")
        r_title_span_element = r_title_element.select_one("span:not([class])") if r_title_element else None
        r_title = r_title_span_element.text if r_title_span_element else None

        r_content_element = review.select_one("span.review-text")
        r_content = r_content_element.text if r_content_element else None

        r_date_element = review.select_one("span.review-date")
        r_date = r_date_element.text if r_date_element else None

        r_verified_element = review.select_one("span.a-size-mini")
        r_verified = r_verified_element.text if r_verified_element else None

        r_image_element = review.select_one("img.review-image-tile")
        r_image = r_image_element.attrs["src"] if r_image_element else None

        r = {
            "author": r_author,
            "rating": r_rating,
            "title": r_title,
            "content": r_content,
            "date": r_date,
            "verified": r_verified,
            "image_url": r_image
        }
        scraped_reviews.append(r)

    return scraped_reviews
@app.route('/ByLink', methods=['POST'])
@jwt_required()
def scrape_reviews():
    
    current_user = get_jwt_identity()  # Get the identity of the current user
    user_from_db = user.find_one({'username': current_user})
    search_url = request.get_json()["url"]
    name = request.get_json()["name"]

    soup = get_soup(search_url)
    if soup is None:
        return jsonify({"error": "Failed to retrieve the webpage"}), 500

    data = get_reviews(soup)
    df = pd.DataFrame(data=data)
    csv_path = "amzl.csv"
    df.to_csv(csv_path, index=False)
    df = pd.read_csv(csv_path)

    df.columns = map(str.upper, df.columns)

    # Ensure 'CONTENT' column exists
    if 'CONTENT' not in df.columns:
        return jsonify({'error': 'No review column in the dataframe'}), 400
    else:
        try:
            content_df = df[['CONTENT']]  # Select only the 'CONTENT' column
            content_df.rename(columns={'CONTENT': 'REVIEW'}, inplace=True)  # Rename 'CONTENT' to 'REVIEW'
            content_df['sentiment'] = content_df['REVIEW'].apply(lambda x: sentiment_score(x[:512]))
            predictions = loaded_model.predict(content_df['REVIEW'])
            content_df['Predictions'] = predictions
            content_df['Predictions'] = content_df['Predictions'].apply(lambda x: 'Fake' if x == 'CG' else 'Genuine')

        except (TypeError, ValueError):
            return jsonify({'error': 'Error calculating sentiment score. Type Error or Value error'}), 400

    json_result = content_df.to_json(orient='records', indent=4)
    data = content_df.to_dict(orient='records')
    print(user_from_db)
    created_result = result.insert_one({"result": data, "datasetname": name, "userId": str(user_from_db["_id"])})
    print(created_result.inserted_id)
    inserted_document = result.find_one({"_id": ObjectId(created_result.inserted_id)})
    inserted_document["_id"] = str(inserted_document["_id"])
    return jsonify(inserted_document)



@app.route("/submit_contact_form",methods=["POST"])
def submit_contact_form():
    if request.method == 'POST':
        form_data = request.json
        
        # Data validation
        if not all(key in form_data for key in ['name', 'email', 'message']):
            return jsonify({'error': 'Missing required fields'}), 400
        
        name = form_data.get('name')
        email = form_data.get('email')
        message = form_data.get('message')
        
        # Check for duplicate message
        if feedback.find_one({'message': message}):
            return jsonify({'error': 'Duplicate message'}), 400
        
        # Processing the form data
        print("Received form data:")
        print("Name:", name)
        print("Email:", email)
        print("Message:", message)
        
        # Insert into MongoDB
        feedback.insert_one(form_data)
        
        return jsonify({'message': 'Form submitted successfully'}), 200



if __name__ == "__main__" :
    # setup()
    app.run(debug=True)