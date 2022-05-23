using FlightService.Models;
using Microsoft.EntityFrameworkCore;

namespace FlightService.Data {
    public static class FSInitializer {
        //Creates a method that will check if the database has any info in the tables. If not, it will add a bunch of new flights and passengers to the database
        public static void Initialize(IServiceProvider serviceProvider) {
            using (var context = new FSContext(serviceProvider.GetRequiredService<DbContextOptions<FSContext>>())) {
                //context.Database.EnsureDeleted();
                context.Database.EnsureCreated();

                //if (!context.Flights.Any()) {
                //    var flightsToAdd = new Flight[] {
                //        new Flight{ FlightNumber=1094, DepartureDate= new DateTime(2022, 5, 5, 6, 00, 0), ArrivalDate= new DateTime(2022, 5, 5, 6, 00, 0), DepartureTime=new TimeSpan(6, 00, 00), ArrivalTime=new TimeSpan(10, 30, 0), DepartureAirport="Salt Lake City, UT", ArrivalAirport="Dallas, TX", PassengerLimit=150},
                //        new Flight{ FlightNumber=5944, DepartureDate= new DateTime(2022, 5, 5, 10, 00, 0), ArrivalDate= new DateTime(2022, 5, 5, 20, 30, 0), DepartureTime=new TimeSpan(10, 0, 0), ArrivalTime=new TimeSpan(20, 30, 0), DepartureAirport="San Diego, CA", ArrivalAirport="Oahu, HI", PassengerLimit=150},
                //        new Flight{
                //            FlightNumber = 1377,
                //            DepartureDate = DateTime.Parse("2021-10-26 08:34:24"),
                //            ArrivalDate = DateTime.Parse("2022-01-02 17:52:26"),
                //            DepartureTime = TimeSpan.Parse("15:08:51"),
                //            ArrivalTime = TimeSpan.Parse("8:10:51"),
                //            DepartureAirport = "Teodoro Schmidt",
                //            ArrivalAirport = "Gapan",
                //            PassengerLimit = 94
                //        },
                //        new Flight{
                //            FlightNumber = 8509,
                //            DepartureDate = DateTime.Parse("2022-03-23 06:00:09"),
                //            ArrivalDate = DateTime.Parse("2022-09-27 15:44:34"),
                //            DepartureTime = TimeSpan.Parse("15:52:23"),
                //            ArrivalTime = TimeSpan.Parse("6:19:32"),
                //            DepartureAirport = "Ternate",
                //            ArrivalAirport = "Gangtok",
                //            PassengerLimit = 60
                //        },
                //        new Flight{
                //            FlightNumber = 7813,
                //            DepartureDate = DateTime.Parse("2022-10-20 22:42:46"),
                //            ArrivalDate = DateTime.Parse("2021-11-28 05:46:40"),
                //            DepartureTime = TimeSpan.Parse("23:01:35"),
                //            ArrivalTime = TimeSpan.Parse("10:47:44"),
                //            DepartureAirport = "Palma de Mallorca",
                //            ArrivalAirport = "Grave",
                //            PassengerLimit = 172
                //        },
                //        new Flight{
                //            FlightNumber = 1648,
                //            DepartureDate = DateTime.Parse("2021-05-29 19:09:41"),
                //            ArrivalDate = DateTime.Parse("2022-07-15 11:24:20"),
                //            DepartureTime = TimeSpan.Parse("5:44:48"),
                //            ArrivalTime = TimeSpan.Parse("10:07:55"),
                //            DepartureAirport = "Nagar",
                //            ArrivalAirport = "Harnoncourt",
                //            PassengerLimit = 90
                //        },
                //        new Flight{
                //            FlightNumber = 1597,
                //            DepartureDate = DateTime.Parse("2022-11-03 14:44:29"),
                //            ArrivalDate = DateTime.Parse("2022-03-16 23:54:04"),
                //            DepartureTime = TimeSpan.Parse("13:18:32"),
                //            ArrivalTime = TimeSpan.Parse("14:24:11"),
                //            DepartureAirport = "Brevik",
                //            ArrivalAirport = "Neiva",
                //            PassengerLimit = 135
                //        },
                //        new Flight{
                //            FlightNumber = 7047,
                //            DepartureDate = DateTime.Parse("2022-04-16 20:27:54"),
                //            ArrivalDate = DateTime.Parse("2023-03-04 18:13:49"),
                //            DepartureTime = TimeSpan.Parse("1:40:44"),
                //            ArrivalTime = TimeSpan.Parse("2:28:39"),
                //            DepartureAirport = "Florencia",
                //            ArrivalAirport = "Escalante",
                //            PassengerLimit = 196
                //        },
                //        new Flight{
                //            FlightNumber = 4033,
                //            DepartureDate = DateTime.Parse("2021-09-26 12:25:21"),
                //            ArrivalDate = DateTime.Parse("2022-08-24 05:53:22"),
                //            DepartureTime = TimeSpan.Parse("20:19:43"),
                //            ArrivalTime = TimeSpan.Parse("3:47:55"),
                //            DepartureAirport = "Tây Ninh",
                //            ArrivalAirport = "Louisville",
                //            PassengerLimit = 58
                //        },
                //        new Flight{
                //            FlightNumber = 2005,
                //            DepartureDate = DateTime.Parse("2023-04-25 01:18:36"),
                //            ArrivalDate = DateTime.Parse("2022-10-19 21:01:13"),
                //            DepartureTime = TimeSpan.Parse("17:23:26"),
                //            ArrivalTime = TimeSpan.Parse("18:27:10"),
                //            DepartureAirport = "New Plymouth",
                //            ArrivalAirport = "Belém",
                //            PassengerLimit = 42
                //        },
                //        new Flight{
                //            FlightNumber = 7064,
                //            DepartureDate = DateTime.Parse("2022-04-22 11:00:38"),
                //            ArrivalDate = DateTime.Parse("2021-06-26 21:07:29"),
                //            DepartureTime = TimeSpan.Parse("8:26:05"),
                //            ArrivalTime = TimeSpan.Parse("23:59:46"),
                //            DepartureAirport = "Mjölby",
                //            ArrivalAirport = "Cambiago",
                //            PassengerLimit = 52
                //        },
                //        new Flight{
                //            FlightNumber = 1590,
                //            DepartureDate = DateTime.Parse("2021-07-17 19:18:47"),
                //            ArrivalDate = DateTime.Parse("2023-04-29 00:16:24"),
                //            DepartureTime = TimeSpan.Parse("9:48:55"),
                //            ArrivalTime = TimeSpan.Parse("13:51:54"),
                //            DepartureAirport = "Donosti",
                //            ArrivalAirport = "Pocheon",
                //            PassengerLimit = 138
                //        },
                //        new Flight{
                //            FlightNumber = 2072,
                //            DepartureDate = DateTime.Parse("2021-07-13 14:32:30"),
                //            ArrivalDate = DateTime.Parse("2021-12-15 20:55:36"),
                //            DepartureTime = TimeSpan.Parse("13:51:29"),
                //            ArrivalTime = TimeSpan.Parse("19:51:26"),
                //            DepartureAirport = "Arica",
                //            ArrivalAirport = "El Tambo",
                //            PassengerLimit = 97
                //        },
                //        new Flight{
                //            FlightNumber = 9869,
                //            DepartureDate = DateTime.Parse("2022-04-14 23:15:35"),
                //            ArrivalDate = DateTime.Parse("2021-06-10 01:33:58"),
                //            DepartureTime = TimeSpan.Parse("11:53:06"),
                //            ArrivalTime = TimeSpan.Parse("22:52:32"),
                //            DepartureAirport = "Bregenz",
                //            ArrivalAirport = "Mohmand Agency",
                //            PassengerLimit = 151
                //        },
                //        new Flight{
                //            FlightNumber = 5641,
                //            DepartureDate = DateTime.Parse("2022-05-10 00:03:09"),
                //            ArrivalDate = DateTime.Parse("2021-07-18 16:24:57"),
                //            DepartureTime = TimeSpan.Parse("2:31:53"),
                //            ArrivalTime = TimeSpan.Parse("20:14:31"),
                //            DepartureAirport = "Lương Bằng",
                //            ArrivalAirport = "Ladysmith",
                //            PassengerLimit = 29
                //        },
                //        new Flight{
                //            FlightNumber = 2019,
                //            DepartureDate = DateTime.Parse("2023-01-05 04:59:09"),
                //            ArrivalDate = DateTime.Parse("2023-03-31 07:15:07"),
                //            DepartureTime = TimeSpan.Parse("17:55:58"),
                //            ArrivalTime = TimeSpan.Parse("20:12:20"),
                //            DepartureAirport = "Oslo",
                //            ArrivalAirport = "Morrinsville",
                //            PassengerLimit = 174
                //        },
                //        new Flight{
                //            FlightNumber = 2198,
                //            DepartureDate = DateTime.Parse("2021-11-24 15:28:30"),
                //            ArrivalDate = DateTime.Parse("2021-09-30 09:29:02"),
                //            DepartureTime = TimeSpan.Parse("13:04:43"),
                //            ArrivalTime = TimeSpan.Parse("7:35:30"),
                //            DepartureAirport = "Melilla",
                //            ArrivalAirport = "Alexandra",
                //            PassengerLimit = 124
                //        },

                //};
                //    context.Flights.AddRange(flightsToAdd);
                //    context.SaveChanges();
                //}

                //if (!context.Passengers.Any()) {
                //    var passengersToAdd = new Passenger[] {
                //        new Passenger{Name="Chet Pettingill", Profession="Softare Developer", Email="c.pettingill@skillstorm.com", Age=29},
                //        new Passenger{
                //            Name = "Lev Thomas",
                //            Profession = "Quis Massa LLP",
                //            Email = "dolor.dapibus.gravida@yahoo.couk",
                //            Age = 31
                //        },
                //        new Passenger{
                //            Name = "Lilah Barnes",
                //            Profession = "Lorem Ipsum Ltd",
                //            Email = "massa.rutrum@icloud.ca",
                //            Age = 76
                //        },
                //        new Passenger{
                //            Name = "Chanda Dixon",
                //            Profession = "Proin Nisl LLC",
                //            Email = "elit.pharetra@google.edu",
                //            Age = 67
                //        },
                //        new Passenger{
                //            Name = "Gabriel Perry",
                //            Profession = "Amet Consectetuer LLP",
                //            Email = "sodales.nisi@yahoo.couk",
                //            Age = 94
                //        },
                //        new Passenger{
                //            Name = "Dolan Bradley",
                //            Profession = "Elit Fermentum Risus Incorporated",
                //            Email = "placerat.augue.sed@google.org",
                //            Age = 51
                //        },
                //        new Passenger{
                //            Name = "Kenneth Hays",
                //            Profession = "Ultricies Sem Corporation",
                //            Email = "justo.proin.non@outlook.ca",
                //            Age = 95
                //        },
                //        new Passenger{
                //            Name = "Meghan Kim",
                //            Profession = "Risus Corporation",
                //            Email = "et.rutrum@outlook.net",
                //            Age = 29
                //        },
                //        new Passenger{
                //            Name = "Leo Riggs",
                //            Profession = "Pretium Et Rutrum Incorporated",
                //            Email = "quisque.ac@yahoo.com",
                //            Age = 53
                //        },
                //        new Passenger{
                //            Name = "Nayda Calhoun",
                //            Profession = "Amet Foundation",
                //            Email = "a.auctor@protonmail.ca",
                //            Age = 74
                //        },
                //        new Passenger{
                //            Name = "Pandora Greene",
                //            Profession = "Commodo LLP",
                //            Email = "amet@icloud.couk",
                //            Age = 31
                //        },
                //        new Passenger{
                //            Name = "Wylie Hayden",
                //            Profession = "Curabitur Foundation",
                //            Email = "dapibus.id.blandit@icloud.org",
                //            Age = 89
                //        },
                //        new Passenger{
                //            Name = "Gannon Buchanan",
                //            Profession = "Lorem Ipsum Institute",
                //            Email = "cum.sociis@yahoo.ca",
                //            Age = 37
                //        },
                //        new Passenger{
                //            Name = "Armand Hurley",
                //            Profession = "Consequat Dolor Vitae Foundation",
                //            Email = "sed.leo@protonmail.net",
                //            Age = 42
                //        },
                //        new Passenger{
                //            Name = "Maya Mejia",
                //            Profession = "Proin Ultrices Duis Incorporated",
                //            Email = "magna.a.tortor@google.edu",
                //            Age = 90
                //        },
                //        new Passenger{
                //            Name = "Gloria Johns",
                //            Profession = "Ridiculus LLC",
                //            Email = "senectus.et.netus@hotmail.net",
                //            Age = 82
                //        },
                //        new Passenger{
                //            Name = "Knox Stevenson",
                //            Profession = "Duis Volutpat Industries",
                //            Email = "egestas.nunc@icloud.net",
                //            Age = 43
                //        },
                //        new Passenger{
                //            Name = "Ferdinand English",
                //            Profession = "Sed Dolor Industries",
                //            Email = "enim@outlook.net",
                //            Age = 73
                //        },
                //        new Passenger{
                //            Name = "Darryl Fleming",
                //            Profession = "A Aliquet PC",
                //            Email = "ullamcorper.duis@google.couk",
                //            Age = 50
                //        },
                //        new Passenger{
                //            Name = "Flynn Burke",
                //            Profession = "Morbi Tristique Inc.",
                //            Email = "nec.eleifend@outlook.org",
                //            Age = 84
                //        },
                //        new Passenger{
                //            Name = "Maxine Chaney",
                //            Profession = "Amet Luctus Associates",
                //            Email = "odio.semper@icloud.edu",
                //            Age = 51
                //        },
                //        new Passenger{
                //            Name = "Iris Chavez",
                //            Profession = "Mollis Company",
                //            Email = "aliquam.gravida.mauris@google.edu",
                //            Age = 76
                //        },
                //        new Passenger{
                //            Name = "Phoebe Lane",
                //            Profession = "Feugiat Nec Inc.",
                //            Email = "non.cursus@outlook.com",
                //            Age = 69
                //        },
                //        new Passenger{
                //            Name = "Bernard Harrison",
                //            Profession = "Quisque Imperdiet Foundation",
                //            Email = "fringilla.cursus.purus@outlook.net",
                //            Age = 71
                //        },
                //        new Passenger{
                //            Name = "Kaye House",
                //            Profession = "Quisque Varius Nam Corporation",
                //            Email = "condimentum.eget.volutpat@protonmail.org",
                //            Age = 89
                //        },
                //        new Passenger{
                //            Name = "Savannah Wiggins",
                //            Profession = "Duis Sit Amet Consulting",
                //            Email = "feugiat@icloud.ca",
                //            Age = 63
                //        },
                //        new Passenger{
                //            Name = "Liberty Glover",
                //            Profession = "Eu Associates",
                //            Email = "hendrerit.a@google.edu",
                //            Age = 46
                //        },
                //        new Passenger{
                //            Name = "Sonya Castaneda",
                //            Profession = "Tellus Eu LLP",
                //            Email = "et.commodo@protonmail.net",
                //            Age = 82
                //        },
                //        new Passenger{
                //            Name = "Sydney Gill",
                //            Profession = "Consectetuer Adipiscing Corporation",
                //            Email = "rhoncus.proin@protonmail.ca",
                //            Age = 52
                //        },
                //        new Passenger{
                //            Name = "Marsden Kidd",
                //            Profession = "Vel Ltd",
                //            Email = "quisque@outlook.edu",
                //            Age = 78
                //        },
                //        new Passenger{
                //            Name = "Charde Cannon",
                //            Profession = "Dapibus Inc.",
                //            Email = "dolor.dapibus.gravida@outlook.org",
                //            Age = 70
                //        },
                //        new Passenger{
                //            Name = "Solomon Jordan",
                //            Profession = "Phasellus Libero Mauris PC",
                //            Email = "lacinia.vitae@outlook.ca",
                //            Age = 31
                //        },
                //        new Passenger{
                //            Name = "Ingrid Scott",
                //            Profession = "Gravida Corp.",
                //            Email = "velit.eget.laoreet@yahoo.com",
                //            Age = 24
                //        },
                //        new Passenger{
                //            Name = "Dennis Smith",
                //            Profession = "Proin Vel Arcu Institute",
                //            Email = "malesuada@icloud.org",
                //            Age = 69
                //        },
                //        new Passenger{
                //            Name = "Branden Summers",
                //            Profession = "Risus Quis Corp.",
                //            Email = "pede.sagittis@hotmail.edu",
                //            Age = 37
                //        },
                //        new Passenger{
                //            Name = "Inez Bolton",
                //            Profession = "Dis Parturient Corporation",
                //            Email = "convallis.ligula@hotmail.edu",
                //            Age = 47
                //        },
                //        new Passenger{
                //            Name = "Travis Riggs",
                //            Profession = "Eleifend Corp.",
                //            Email = "nisl.arcu.iaculis@google.couk",
                //            Age = 22
                //        },
                //        new Passenger{
                //            Name = "Graham Hester",
                //            Profession = "Magna LLC",
                //            Email = "suspendisse.non@yahoo.edu",
                //            Age = 31
                //        },
                //        new Passenger{
                //            Name = "Ulric Hogan",
                //            Profession = "Cras Convallis Convallis Associates",
                //            Email = "ut.lacus.nulla@icloud.org",
                //            Age = 41
                //        },
                //        new Passenger{
                //            Name = "Uta Delacruz",
                //            Profession = "Consequat Auctor Nunc LLP",
                //            Email = "semper@outlook.ca",
                //            Age = 66
                //        },
                //        new Passenger{
                //            Name = "Kylee Collier",
                //            Profession = "Lorem Fringilla Limited",
                //            Email = "sed.est@google.com",
                //            Age = 99
                //        },
                //        new Passenger{
                //            Name = "Maile Burnett",
                //            Profession = "Eu Sem Industries",
                //            Email = "ultrices@outlook.com",
                //            Age = 95
                //        },
                //        new Passenger{
                //            Name = "Alma Bradford",
                //            Profession = "Mauris Eu Elit Inc.",
                //            Email = "nullam.ut@hotmail.org",
                //            Age = 54
                //        },
                //        new Passenger{
                //            Name = "Yen Pitts",
                //            Profession = "Vel Limited",
                //            Email = "ipsum.suspendisse@outlook.couk",
                //            Age = 64
                //        },
                //        new Passenger{
                //            Name = "Jacob Harvey",
                //            Profession = "Fringilla Purus Corporation",
                //            Email = "et.malesuada@icloud.ca",
                //            Age = 91
                //        },
                //        new Passenger{
                //            Name = "Flynn Tran",
                //            Profession = "Nulla Corp.",
                //            Email = "nec@hotmail.ca",
                //            Age = 41
                //        },
                //        new Passenger{
                //            Name = "Rudyard Downs",
                //            Profession = "Duis Volutpat Institute",
                //            Email = "aliquam@aol.edu",
                //            Age = 56
                //        },
                //        new Passenger{
                //            Name = "Dorothy Jacobson",
                //            Profession = "Nullam Suscipit Est Ltd",
                //            Email = "pellentesque@aol.ca",
                //            Age = 46
                //        },
                //        new Passenger{
                //            Name = "Hilary Goff",
                //            Profession = "Lorem Ut Aliquam LLC",
                //            Email = "id.enim@icloud.edu",
                //            Age = 43
                //        },
                //        new Passenger{
                //            Name = "Iona Morton",
                //            Profession = "Gravida Industries",
                //            Email = "aliquam.ultrices.iaculis@icloud.ca",
                //            Age = 79
                //        },
                //        new Passenger{
                //            Name = "Ria Kirk",
                //            Profession = "Mauris Suspendisse PC",
                //            Email = "nec.euismod.in@google.com",
                //            Age = 75
                //        }
                //    };
                //    context.Passengers.AddRange(passengersToAdd);
                //    context.SaveChanges();
                //}
            }
        }
    }
}
