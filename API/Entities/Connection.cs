namespace API.Entities
{
    public class Connection
    {
        public Connection()
        {
            
        }
        public Connection(string connectionId, string username)
        {
            ConnectionID = connectionId;
            Username = username;
        }

        public string ConnectionID { get; set; }
        public string Username { get; set; }
    }
}