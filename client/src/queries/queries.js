import gql from "graphql-tag";

const getDepartmentsQuery = gql`
      {
            departments {
                  id
                  title
                  description
            }
      }
`;

const createDepartmentMutation = gql`
      mutation createDepartment($title: String, $description: String) {
            createDepartment(
                  department: { title: $title, description: $description }
            ) {
                  id
                  title
                  description
            }
      }
`;

const deleteDepartmentMutation = gql`
      mutation deleteDepartment($id: Long!) {
            deleteDepartment(department: { id: $id }) {
                  id
            }
      }
`;

const getUserAccessQuery = gql`
      query userAccessModules($roleId: Int!, $userId: Long!) {
            userAccessModules(roleId: $roleId, userId: $userId) {
                  isEnable
                  moduleName
                  accessModuleId
                  parentAccessModuleId
            }
      }
`;

export {
      createDepartmentMutation,
      getDepartmentsQuery,
      deleteDepartmentMutation,
      getUserAccessQuery,
};
