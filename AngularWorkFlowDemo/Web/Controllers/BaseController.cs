using Microsoft.AspNetCore.Mvc;
using Web.Infrastructure;

namespace Web.Controllers
{
    public class BaseController : Controller
    {
        protected new IActionResult Ok()
        {
            return base.Ok(Envelop.Ok());
        }

        protected IActionResult Ok<T>(T result)
        {
            return base.Ok(Envelop.Ok(result));
        }

        protected IActionResult Error(string errorMessage)
        {
            return BadRequest(Envelop.Error(errorMessage));
        }
    }
}