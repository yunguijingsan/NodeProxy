var testData = [
    {
        name:"groupA",
        dependencies:[],
        urls:[
            {
                "name":"url1",
                "dependencies":[],
                "path": "/mathB/sum",
                "method": "GET",
                "type":"query",
                "params":["a","b"],
                "cases":[{
                    "params":{
                        a:1,
                        b:2
                    },
                    "description": "1+2",
                    "expectation": 3,
                    "result":""
                }]
            },
            {
                "name":"url2",
                "dependencies":[],
                "path": "/mathB/sum",
                "method": "GET",
                "type":"query",
                "params":["a","b"],
                "cases": [
                    {
                        "params":{
                            a:1,
                            b:2
                        },
                        "description": "1+2",
                        "expectation": 3,
                        "result":""
                    },{
                        "params":{
                            a:0,
                            b:2
                        },
                        "description":"0+2",
                        "expectation": 2,
                        "result":""
                    },{
                        "params":{
                            a:-1,
                            b:2
                        },
                        "description": "-1+2",
                        "expectation": 1,
                        "result":""
                    }]},
            {
                "name":"url3",
                "dependencies":[],
                "path": "/mathB/test",
                "method": "GET",
                "type":"query",
                "cases":[
                    {
                        "params":{
                            a:1,
                            b:2
                        },
                        "description": "1/2",
                        "expectation": 0.5,
                        "result":""
                    },{
                        "params":{
                            a:0,
                            b:2
                        },
                        "description":"0/2",
                        "expectation":1,
                        "result":"" }
                ]
            },
            {
                "name":"url4",
                "dependencies":["url1"],
                "path": "/mathB/max",
                "method": "GET",
                "type":"query",
                "cases":[
                    {
                        "params":{
                            a:1,
                            b:2
                        },
                        "description": "max(1,2)",
                        "expectation": 2,
                        "result":""
                    },{
                        "params":{
                            a:0,
                            b:2
                        },
                        "description":"max(0,2)",
                        "expectation": 2,
                        "result":"" }
                ]
            }
        ]
    }
]