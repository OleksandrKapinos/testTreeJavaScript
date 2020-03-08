window.TreeAPI.getData().then(
    result => {
        // if fulfilled call next functions with result data
        treeBuilder(result.data1);
        treeBuilder(result.data);
        setTimeout(function(){loaderOff(preloader);},200);
    },
    error => {
        // if rejected
        alert("Rejected: " + error);
    }
);