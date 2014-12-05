var testData = {"baseUrl": "localhost:3000","urls":
    [
    {
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
             "expectation":0,
             "result":"" }
     ]
},
    {
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
]}

