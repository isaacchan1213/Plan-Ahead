# First, create react client with  % npx create-react-app client

# % python3 -m venv venv
# % source venv/bin/activate

# % pip3 install flask

# Ready to write python file

from flask import Flask, request

app = Flask(__name__)

# Members (example) API route
@app.route("/add_todo", methods=["POST"])
def add_todo():
    print("data entered flask")
    todo_data = request.get_json() 
    print('todo_data defined')
    print(todo_data)
    return todo_data


@app.route("/members")
def members():
    return {"members": ["Member 1", "Member 2", "Member 3"]}

if __name__ == '__main__':
    app.run(debug=True)

#