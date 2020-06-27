from flask import Flask,render_template,request,session,jsonify,abort
from flask_restful  import Api,Resource,reqparse
import json
import datetime
import jwt
from  functools import wraps

app = Flask(__name__)
api = Api(app)
app.config['secret_key'] = 'abc123'

def authendication(func):
  @wraps(func)
  def decorated(*args, **kwargs):
    if('token' in kwargs):
      try:
        user = jwt.decode(kwargs.get('token'),app.config['secret_key'])
        return func(*args, **kwargs)
      except (jwt.ExpiredSignatureError, jwt.InvalidTokenError) as e:
        print(e)
        return jsonify({'error': e.args})
    else:
      return jsonify({'error': 'Token is missing'})
  return decorated
class Login(Resource):
  def post(self):
    data = request.get_json()
    if(data.get('email')  == 'cvaleads@live.in'):
      token = jwt.encode({'user': data.get('email'), 'exp' : datetime.datetime.utcnow() + datetime.timedelta(minutes=1)},app.config['secret_key'])
      return jsonify({'success': 'Validated successfully','token': token.decode('utf-8')})
    else:
      #abort(422, 'Incorrect login credentials!')
      return jsonify({'error':'Incorrect login credentials!'})
  def get(self):
    #http authendication
    if request.authorization and request.authorization.username == 'siva' and request.authorization.password == 'test':
      return jsonify({'message': 'ok!'})
    else:
      return jsonify({'message': 'invalid authendication'})
class UserInfo(Resource):
  @authendication
  def get(self, id=None,token=None):
    if id is None:
      print(id)
      return jsonify({'message':{1:'a',2:'b',3:'c'}})
    elif id is not None:
      return jsonify({'message':{1:id}})
    else:
      print('id+++++++++++++')
class TokenVerify(Resource):
  def get(self, token=None):
    print('token')
    print(token)
    if(token):
      try:
        user = jwt.decode(token,app.config['secret_key'])
        return jsonify({'response': 1}) 
      except (jwt.ExpiredSignatureError, jwt.InvalidTokenError) as e:
        return jsonify({'response': 0})
    else:
      return jsonify({'response': 0})



api.add_resource(Login,'/login')
api.add_resource(UserInfo,'/user/<string:token>','/user/<int:id>/<string:token>',methods =['GET','PUT','DELETE'])
api.add_resource(TokenVerify,'/identity/<string:token>')


if __name__ == '__main__':
  app.run(host='127.0.0.1', port=8000,debug=True)


'''
def greet(func):
  def wrapper(*args, **kwargs):
    print('Hi Welcome')
    return func(*args, **kwargs)
  return wrapper

class Say():
  @greet
  def sayName(self):
    print('Sivamani')

Say().sayName()

'''