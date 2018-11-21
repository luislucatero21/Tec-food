//SCHEMAS

var schema = {
    "type": "object",
    "required": [
        "id",
        "user_name",
        "email",
        "password"
    ],
    "properties": {
        "id": {"type": ["number","null"]},
        "user_name": {"type": "string"},
        "email": {"type": "string"},
        "password": {"type": "string"}
    }
};

module.exports = schema;