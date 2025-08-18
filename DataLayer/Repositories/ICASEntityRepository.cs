using DataLayer.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLayer.Repositories
{
    public interface ICASEntityRepository
    {
        List<CASEntity> List();
        CASEntity? GetById(int id);
        CASEntity Add(CASEntity casEntity);
        CASEntity Update(CASEntity casEntity);
        int Delete(int id);
    }
}
