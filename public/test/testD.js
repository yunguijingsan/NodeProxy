var testData = [   {
    name:"groupC",
    dependencies:[],
    urls:[ {
        "name":"getOperation",
        "dependencies":[],
        "path": "/mathB/getOperation",
        "method": "POST",
        "type":"query",
        "params":["operation"],
        "cases":[
            {
            "params":{
                operation:{
                    "docResponseMessages": [
                        {
                            "code": 0,
                            "message": "1134"
                        }
                    ],
                    "method": "",
                    "nickname": "",
                    "notes": "",
                    "parameters": [
                        {
                            "description": "",
                            "name": "",
                            "paramType": "",
                            "required": false,
                            "type": ""
                        }
                    ],
                    "summary": "",
                    "type": ""
                }
            },
            "description": "default operation",
            "expectation": {
                "docResponseMessages": [
                    {
                        "code": 0,
                        "message": "1134"
                    }
                ],
                "method": "",
                "nickname": "",
                "notes": "",
                "parameters": [
                    {
                        "description": "",
                        "name": "",
                        "paramType": "",
                        "required": false,
                        "type": ""
                    }
                ],
                "summary": "",
                "type": ""
            },
            "result":""
        }
        ]
    }]
}
]