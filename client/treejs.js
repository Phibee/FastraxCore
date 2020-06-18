var arr = [
      {
            isEnable: false,
            moduleName: "Equipment Management",
            accessModuleId: 1,
            parentAccessModuleId: null,
      },
      {
            isEnable: true,
            moduleName: "Authorized Equipment",
            accessModuleId: 2,
            parentAccessModuleId: 1,
      },
      {
            isEnable: true,
            moduleName: "Maintenance",
            accessModuleId: 3,
            parentAccessModuleId: 2,
      },
      {
            isEnable: true,
            moduleName: "Work Order",
            accessModuleId: 4,
            parentAccessModuleId: 2,
      },
];

unflatten = function (array, parent, tree) {
      tree = typeof tree !== "undefined" ? tree : [];
      parent =
            typeof parent !== "undefined" ? parent : { accessModuleId: null };

      var children = _.filter(array, function (child) {
            return child.parentAccessModuleId == parent.accessModuleId;
      });

      if (!_.isEmpty(children)) {
            if (parent.accessModuleId == null) {
                  tree = children;
            } else {
                  parent["children"] = children;
            }
            _.each(children, function (child) {
                  unflatten(array, child);
            });
      }

      return tree;
};

tree = unflatten(arr);

console.log(tree);
document.body.innerHTML = "<pre>" + JSON.stringify(tree, null, " ");
