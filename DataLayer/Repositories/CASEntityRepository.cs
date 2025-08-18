using DataLayer.Context;
using DataLayer.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLayer.Repositories
{
    public class CASEntityRepository : ICASEntityRepository
    {
        private readonly CASContext _context;
        public CASEntityRepository(CASContext context) {
            _context = context;
        }

        public List<CASEntity> List()
        {
            return _context.cases.ToList();
        }

        public CASEntity? GetById(int id)
        {
            return _context.cases.Where(x => x.Id == id).FirstOrDefault();
        }

        public CASEntity Add(CASEntity casEntity)
        {
            casEntity.CreatedDate = DateTime.Now;
            _context.cases.Add(casEntity);
            int x = _context.SaveChanges();
            return casEntity;
        }

        public CASEntity Update(CASEntity casEntity)
        {
            var item = _context.cases.Where(x => x.Id == casEntity.Id).FirstOrDefault();
            if (item != null) { 
                item.FirstName = casEntity.FirstName;
                item.LastName = casEntity.LastName;
                item.DateOfBirth = casEntity.DateOfBirth;
                item.ModeifiedDate = DateTime.Now;
                _context.cases.Update(item);
                int x = _context.SaveChanges();
            }
            //_context.Entry(item).State = EntityState.Modified;
            return casEntity;
        }

        public int Delete(int id)
        {
            var item = _context.cases.Where(x => x.Id == id).FirstOrDefault();
            if (item != null) {
                _context.cases.Remove(item);
                return _context.SaveChanges();
            }
            return 0;
        }
    }
}
