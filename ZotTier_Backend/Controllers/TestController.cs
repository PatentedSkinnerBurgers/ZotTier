using Microsoft.AspNetCore.Mvc;

namespace ZotTier_Backend.Controllers {
    [ApiController]
    [Route("[controller]")]
    public class TestController : ControllerBase {
        [HttpGet]
        public string TestJson() {
            return "Hello! You just gotted!";
        }
    }
}