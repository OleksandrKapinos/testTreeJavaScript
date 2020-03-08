!function () {
    var n = {
        data: [ {id: "1", parent: null},
            {id: "2", parent: "1"},
            {id: "3", parent: "1"},
            {id: "4", parent: "3"},
            {id: "5", parent: "3"},
            {id: "6", parent: "3"},
            {id: "7", parent: "4"}],

        data1: [{id: "1", parent: null},
            {id: "2", parent: "1"},
            {id: "3", parent: "1"},
            {id: "4", parent: "3"},
            {id: "5", parent: "3"},
            {id: "6", parent: "3"},
            {id: "7", parent: "4"},
            {id: "8", parent: "1"},
            {id: "9", parent: "8"},
            {id: "10", parent: "8"},
            {id: "11", parent: "10"},
            {id: "12", parent: "10"},
            {id: "13", parent: "11"},
            {id: "14", parent: "11"}]
    };
    window.TreeAPI = {
        getData: function () {
            return new Promise(function (t) {
                setTimeout(function () {
                    t(n)
                }, 1e3 * Math.random())
            })
        }
    }
}();