var testData = [
    {
        name: "groupC",
        dependencies: [],
        urls: [
            {
                "name": "url1",
                "dependencies": [],
                "path": "/mathA/docInfo",
                "method": "POST",
                "cases": [
                    {
                        "params": {"docInfo": {
                            "contact": "我",
                            "description": "",
                            "license": "",
                            "licenseUrl": "",
                            "termsOfServiceUrl": "",
                            "title": ""
                        }},
                        "description": "我",
                        "expectation": {
                            "contact": "我",
                            "description": "",
                            "license": "",
                            "licenseUrl": "",
                            "termsOfServiceUrl": "",
                            "title": ""
                        },
                        "result": ""
                    },
                    {
                        "params": {"docInfo": {
                            "contact": "我的",
                            "description": "",
                            "license": "",
                            "licenseUrl": "",
                            "termsOfServiceUrl": "",
                            "title": ""
                        }},
                        "description": "我的",
                        "expectation": {
                            "contact": "我的",
                            "description": "",
                            "license": "",
                            "licenseUrl": "",
                            "termsOfServiceUrl": "",
                            "title": ""
                        },
                        "result": ""
                    }
                ]
            },
        ]
    },
    {
        name: "groupA",
        dependencies: [],
        urls: [
            {
                "name": "url1",
                "dependencies": [],
                "path": "/mathA/sum",
                "method": "GET",
                "type": "query",
                "params": ["a", "b"],
                "cases": [
                    {
                        "params": {
                            a: 1,
                            b: 2
                        },
                        "description": "1+2",
                        "expectation": 3,
                        "result": ""
                    }
                ]
            },
            {
                "name": "url2",
                "dependencies": [],
                "path": "/mathA/sum",
                "method": "GET",
                "type": "query",
                "params": ["a", "b"],
                "cases": [
                    {
                        "params": {
                            a: 1,
                            b: 2
                        },
                        "description": "1+2",
                        "expectation": 3,
                        "result": ""
                    },
                    {
                        "params": {
                            a: 0,
                            b: 2
                        },
                        "description": "0+2",
                        "expectation": 2,
                        "result": ""
                    },
                    {
                        "params": {
                            a: -1,
                            b: 2
                        },
                        "description": "-1+2",
                        "expectation": 1,
                        "result": ""
                    }
                ]},
            {
                "name": "url3",
                "dependencies": [],
                "path": "/mathA/test",
                "method": "GET",
                "type": "query",
                "cases": [
                    {
                        "params": {
                            a: 1,
                            b: 2
                        },
                        "description": "1/2",
                        "expectation": 0.5,
                        "result": ""
                    },
                    {
                        "params": {
                            a: 0,
                            b: 2
                        },
                        "description": "0/2",
                        "expectation": 0,
                        "result": "" }
                ]
            },
            {
                "name": "url4",
                "dependencies": ["url1"],
                "path": "/mathA/max",
                "method": "GET",
                "type": "query",
                "cases": [
                    {
                        "params": {
                            a: 1,
                            b: 2
                        },
                        "description": "max(1,2)",
                        "expectation": 2,
                        "result": ""
                    },
                    {
                        "params": {
                            a: 0,
                            b: 2
                        },
                        "description": "max(0,2)",
                        "expectation": 2,
                        "result": "" }
                ]
            }
        ]
    },
    {
        name: "groupB",
        dependencies: [],
        urls: [
            {
                "name": "url1",
                "dependencies": [],
                "path": "/mathB/sum",
                "method": "POST",
                "type": "query",
                "params": ["a", "b"],
                "cases": [
                    {
                        "params": {
                            a: 1,
                            b: 2
                        },
                        "description": "1+2",
                        "expectation": 3,
                        "result": ""
                    }
                ]
            },
            {
                "name": "url2",
                "dependencies": [],
                "path": "/mathB/sum",
                "method": "POST",
                "type": "query",
                "params": ["a", "b"],
                "cases": [
                    {
                        "params": {
                            a: 1,
                            b: 2
                        },
                        "description": "1+2",
                        "expectation": 3,
                        "result": ""
                    },
                    {
                        "params": {
                            a: 0,
                            b: 2
                        },
                        "description": "0+2",
                        "expectation": 2,
                        "result": ""
                    },
                    {
                        "params": {
                            a: -1,
                            b: 2
                        },
                        "description": "-1+2",
                        "expectation": 1,
                        "result": ""
                    }
                ]},
            {
                "name": "url3",
                "dependencies": [],
                "path": "/mathB/test",
                "method": "POST",
                "type": "query",
                "cases": [
                    {
                        "params": {
                            a: 1,
                            b: 2
                        },
                        "description": "1/2",
                        "expectation": 0.5,
                        "result": ""
                    },
                    {
                        "params": {
                            a: 0,
                            b: 2
                        },
                        "description": "0/2",
                        "expectation": 0,
                        "result": "" }
                ]
            },
            {
                "name": "url4",
                "dependencies": ["url1"],
                "path": "/mathB/max",
                "method": "POST",
                "type": "query",
                "cases": [
                    {
                        "params": {
                            a: 1,
                            b: 2
                        },
                        "description": "max(1,2)",
                        "expectation": 2,
                        "result": ""
                    },
                    {
                        "params": {
                            a: 0,
                            b: 2
                        },
                        "description": "max(0,2)",
                        "expectation": 2,
                        "result": "" }
                ]
            }
        ]
    }
]
