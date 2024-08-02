from flask import Flask, request, jsonify
import joblib
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

model = joblib.load('spam_classifier_model.pkl')
vectorizer = joblib.load('tfidf_vectorizer.pkl')

@app.route('/api/predict', methods=['POST'])
@cross_origin()
def predict():
    data = request.get_json(force=True)
    email_text = data['email_text']
    email_features = vectorizer.transform([email_text])
    prediction = model.predict(email_features)
    prediction_proba = model.predict_proba(email_features)

    return jsonify({
        'prediction': ['spam', 'ham'][int(prediction[0])],
        'prediction_probability': prediction_proba[0].tolist()
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
    

