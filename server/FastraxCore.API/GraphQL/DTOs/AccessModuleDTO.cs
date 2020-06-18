namespace FastraxCore.API.GraphQL.DTOs
{
    public class AccessModuleDTO
    {
        public long AccessModuleId { get; set; }
        public long? ParentAccessModuleId { get; set; }
        public string ModuleName { get; set; }
        public bool IsEnable { get; set; }
    }
}