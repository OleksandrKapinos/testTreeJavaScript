// Creating a tree of any level of attachment
//Basic method is recursive
function treeData(items, parent) {
    parent = parent || null;
    let result = [];

    items.forEach(function (item){
        if (item.parent === parent) {
            result.push(item);
            item.children = treeData(items, item.id);
            if (!item.children.length) {
                delete item.children;
            }
        }
    });
    return result;
};

//Creating TreeDOM with data getting from function teraData
//Basic method is recursive
function createTree(node) {
    let treeLI = document.createElement('li');
    let treeTitle = document.createElement('div');
    treeTitle.className = 'node_el';
    treeLI.appendChild(treeTitle);

    treeTitle.innerHTML = node.id;
    if (node.children) {
        let children = document.createElement('ul');
        node.children.forEach(function(node) {
            children.appendChild(createTree(node));
        });
        treeLI.appendChild(children);
    };
    return treeLI;
};

// Add created tree in body
function treeBuilder(res) {
    let data = treeData(res);
    let treeBox = document.createElement('div');
    let treeUL = document.createElement('ul');
    treeBox.className = 'tree-box';
    treeBox.appendChild(treeUL);
    document.getElementById('container').appendChild(treeBox);
    treeUL.appendChild( createTree(data[0]));
}

// function for hide preloader
let preloader = document.getElementById("preload");
function loaderOff(el){
    el.style.opacity = 1;
    let interpreloader = setInterval(function(){
        el.style.opacity = el.style.opacity - 0.05;
        if (el.style.opacity <=0.05){
            clearInterval(interpreloader);
            preloader.style.display = "none";
        }
    },12);
};






