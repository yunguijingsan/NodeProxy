var groups = [];
var cartman = (function () {
    var STATUS = {
        SUCCESS: 'success',
        DEFAULT: 'default',
        DANGER: 'danger'
    }
    var _groups = [];
    var _$scope = {};
    var init = function ($scope,groups) {
        _$scope = $scope;
        _groups = groups;
        _groups.forEach(function(group){
            group.state=STATUS.DEFAULT;
            group.id = createUUID();
            for(var i =0; i<group.urls.length;i++){
                var url = group.urls[i];
                url.state = STATUS.DEFAULT;
                url.id = createUUID();
                for(var j=0;j<url.cases.length;j++){
                    var cas = url.cases[j];
                    cas.state = STATUS.DEFAULT;
                    cas.id = createUUID();
                }
            }
        })

        _groups.forEach(function(group){
            executeGroup(group);
        })
    }
    var executeGroup = function (group) {
        if(group.state!=STATUS.DEFAULT){
            return;
        }
        var state = STATUS.SUCCESS;
        group.dependencies.forEach(function (g) {
            if (getGroupState(g.name) != STATUS.SUCCESS) {
                state = STATUS.DANGER;
                return;
            }
        });
        if (state == STATUS.SUCCESS) {
            group.urls.forEach(function (url) {
                    executeUrl(url,group);
            });
        }
    };
    var getGroupState = function (groupName) {
        var state = STATUS.DEFAULT;
        _groups.forEach(function (group) {
            if (group.name == groupName) {
                state =  group.state;
            }
        })
        return state;
    }
    var getUrlState = function(group,uName){
        var state = STATUS.DEFAULT;
        group.urls.forEach(function(url){
            if(url.name == uName){
               state = url.state;
            }
        })
        return state;
    }
    var executeUrl = function(url,group){
        if(url.state !=STATUS.DEFAULT){
            return;
        }
        var st = STATUS.SUCCESS;
        url.dependencies.forEach(function(u){
            if (getUrlState(group,u) != STATUS.SUCCESS) {
                st = STATUS.DANGER;
                return;
            }
        });
        if(st==STATUS.SUCCESS){
            url.cases.forEach(function(cas){
                executeCase(cas,url,group);
            });
        }
    }
    var executeCase = function(aCase,url,group){
        if(aCase.state != STATUS.DEFAULT){
            return;
        }
        $.ajax({
            url: url.path,
            type: url.method,
            data: aCase.params,
            success: function(data) {
                if(data == aCase.expectation){
                    aCase.state = "success";
                }else{
                    aCase.state = "danger";
                    aCase.result = data;
                }
               applyUrl(url,group);
            },
            error: function(xhr, err, exp) {
                aCase.state = "danger";
                aCase.result = err.stack;
                applyUrl(url,group);
            }
        });
    }
    var applyUrl = function(url,group){
        var i = 0;
        url.cases.forEach(function(cas){
            if(cas.state ==STATUS.DEFAULT){
                executeCase(cas,url,group);
            }else{
                if(cas.state==STATUS.DANGER){
                    url.state = STATUS.DANGER;
                    return;
                }
                if(cas.state == STATUS.SUCCESS){
                    i++
                }
            }
        });

        if(url.cases.length == i){
            url.state = STATUS.SUCCESS;
            applyGroup(group);
        }
    }
    var applyGroup = function(group){
        var i = 0;
        group.urls.forEach(function(url){
            if(url.state == STATUS.DEFAULT){
                executeUrl(url,group);
            }else{
                if(url.state == STATUS.DANGER){
                    group.state = STATUS.DANGER;
                    return;
                }
                if(url.state == STATUS.SUCCESS){
                    i++;
                }
            }
        })
        if(i==group.urls.length){
            group.state = STATUS.SUCCESS;
        }
       apply();
    }
    var apply = function(){
        _$scope.$apply();
    }
    var createUUID = (function(uuidRegEx, uuidReplacer) {
        return function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(uuidRegEx, uuidReplacer).toUpperCase();
        };
    })(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
            v = c == "x" ? r : (r & 3 | 8);
        return v.toString(16);
    });
    return {
        init: init,
        status: STATUS
    }
})();






