import _ from "lodash";

const unflatten = (array, parent, tree) => {
      tree = typeof tree !== "undefined" ? tree : [];
      parent =
            typeof parent !== "undefined" ? parent : { accessModuleId: null };

      var children = _.filter(array, function (child) {
            return child.parentAccessModuleId == parent.accessModuleId;
      });

      if (!_.isEmpty(children)) {
            if (parent.accessModuleId == null) tree = children;
            else parent["children"] = children;

            _.each(children, function (child) {
                  unflatten(array, child);
            });
      }

      return tree;
};

export { unflatten };
