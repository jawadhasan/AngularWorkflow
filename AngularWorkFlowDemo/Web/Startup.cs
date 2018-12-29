using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Data;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Web.Helpers;

namespace Web
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
          services.AddCors();
          services.AddDbContext<AppDbContext>(options =>
          {
            options.UseInMemoryDatabase("InMemoryDb");
          });
            services.AddTransient<DbSeeder>();

          services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, DbSeeder dbseeder)
        {
          app.UseCors(builder =>
          {
            builder
              .AllowAnyHeader()
              .AllowAnyMethod()
              .AllowAnyOrigin();
          });

      if (env.IsDevelopment())
            {
                app.UseBrowserLink();
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
            }

            app.UseDefaultFiles();
            app.UseStaticFiles();

            app.UseMvc();

             dbseeder.SeedAsync(app.ApplicationServices).Wait();

        }
    }
}
