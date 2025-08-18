using BusinessLayer.DTOs;
using BusinessLayer.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Api.Controllers
{
    [Route("api/cas/")]
    [ApiController]
    public class CASEntityController : ControllerBase
    {
        private ICASEntityService _casEntityService;

        public CASEntityController(ICASEntityService casEntityService) { 
            _casEntityService = casEntityService;
        }

        [HttpGet]
        [Route("list")]
        public async Task<ActionResult<List<CASEntityGet>>> GetListAsync()
        {
            var list = await _casEntityService.ListAsync();

            if (list == null)
            {
                return NotFound();
            }

            return Ok(list);
        }

        [HttpGet]
        [Route("get")]
        public async Task<ActionResult<List<CASEntityGet>>> GetAsync(int id)
        {
            var item = await _casEntityService.GetByIdAsync(id);

            if (item == null)
            {
                return NotFound();
            }

            return Ok(item);
        }

        [HttpPost]
        [Route("create")]
        public async Task<ActionResult<CASEntityGet>> CreateAsync(CASEntityCreate item)
        {
            return Ok(await _casEntityService.AddAsync(item));
        }

        [HttpPut]
        [Route("update")]
        public async Task<ActionResult<CASEntityGet>> UpdateAsync(CASEntityUpdate item)
        {
            return Ok(await _casEntityService.UpdateAsync(item));
        }

        [HttpDelete]
        [Route("delete")]
        public async Task<ActionResult<int>> DeleteAsync(int id)
        {
            return Ok(await _casEntityService.DeleteAsync(id));
        }
    }
}
