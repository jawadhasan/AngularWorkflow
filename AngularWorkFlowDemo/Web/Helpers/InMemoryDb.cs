using System.Collections.Generic;
using System.Linq;
using Core;

namespace Web.Helpers
{
  public class InMemoryDbContext
  {
    private List<Company> _Companies = new List<Company>
    {
      new Company{Id = 1, Name = "Company1", IsActive = true},
      new Company{Id = 2, Name = "Company2", IsActive = false},
      new Company{Id = 3, Name = "Company3", IsActive = true}
    };

    public List<Company> GetCompanies()
    {
      return _Companies;
    }

    public void AddCompany(Company company)
    {
      company.Id = _Companies.Max(c => c.Id) + 1;
      _Companies.Add(company);
    }

    public void UpdateCompany(Company company)
    {
      var editablecompany = _Companies.FirstOrDefault(c => c.Id == company.Id);
      if (editablecompany != null)
      {
        editablecompany.Name = company.Name;
        editablecompany.IsActive = company.IsActive;
      }
    }


    public void DeleteCompany(long id)
    {
      var company = _Companies.FirstOrDefault(c => c.Id == id);
      _Companies.Remove(company);
    }
  }

}
