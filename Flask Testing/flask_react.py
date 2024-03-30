# First, create react client with  % npx create-react-app client

# % python3 -m venv venv
# % source venv/bin/activate

# % pip3 install flask

# Ready to write python file

from flask import Flask, request

app = Flask(__name__)

from io import BytesIO
from flask import jsonify, request

@app.route('/url_route', methods=['POST'])
def file_validate():
    """Handles the upload of a file."""
    d = {}
    try:
        file = request.files['file_from_react']
        filename = file.filename
        print(f"Uploading file {filename}")
        file_bytes = file.read()
        file_content = BytesIO(file_bytes).readlines()
        print(file_content)
        d['status'] = 1
        print('huh?')

    except Exception as e:
        print(f"Couldn't upload file {e}")
        d['status'] = 0

    return jsonify(d)

@app.route('/save_as_json', methods=['POST'])
def upload_file():
    file = request.files['file_from_react']
    filename = file.filename
    print(f"Uploading file {filename}")
    file_bytes = file.read()
    file_content = BytesIO(file_bytes).readlines()
    print(file_content)

    return jsonify(file_content)


@app.route("/add_todo", methods=["POST"])
def add_todo():
    print("data entered flask")
    todo_data = request.get_json() 
    print('todo_data defined')
    print(todo_data)
    return todo_data

# Members (example) API route
@app.route("/members")
def members():
    return {"members": ["Member 1", "Member 2", "Member 3"]}

if __name__ == '__main__':
    app.run(debug=True)

#