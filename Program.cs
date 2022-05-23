using Microsoft.EntityFrameworkCore;
using FlightService.Data;
using System.Text.Json;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

var corsPolicy = "Cors";

builder.Services.AddCors(options => {
    options.AddPolicy(name: corsPolicy,
        policy => {
            policy.AllowAnyMethod();
            policy.AllowAnyHeader();
            policy.AllowAnyOrigin();
        });
});

// Creates a new configuration manager - used to add a new DBContext
ConfigurationManager configuration = builder.Configuration;

// Add services to the container.

//var options = new JsonSerializerOptions() { ReferenceHandler = ReferenceHandler.IgnoreCycles };

builder.Services.AddControllers().AddJsonOptions(options => { 
    options.JsonSerializerOptions.PropertyNamingPolicy = null;
    options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;
});

builder.Services.AddDbContext<FSContext>(options =>
    options.UseSqlServer(configuration.GetConnectionString("FSContext")));

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Runs the FSInitialer class to populate the tables in the database
using (var scope = app.Services.CreateScope()) { 
    var services = scope.ServiceProvider;
    FSInitializer.Initialize(services);
}

    // Configure the HTTP request pipeline.
    if (app.Environment.IsDevelopment()) {
        app.UseSwagger();
        app.UseSwaggerUI();
    }

app.UseHttpsRedirection();

app.UseCors(corsPolicy);

app.UseAuthorization();

app.MapControllers();

app.Run();
