import backgroundImage from "../assets/backgroundwindow.png";
import BookButton from "../features/bookingbutton.js"; // Кнопка бронирования
import PamperMeOptions from "../features/PamperMeOptions"; // Добавляем компонент
import backgroundImagewhatsin from "../assets/whatsin.jpg";

const Home = () => {
  const handleBookClick = (roomTitle) => {
    alert(`Booking for ${roomTitle}`); // Логика бронирования
  };

  const rooms = [
    {
      title: "Deluxe Single Bedroom",
      price: "xxx PLN",
      img: "/assets/room1.jpg",
      desc: "Fully furnished, Sofa bed, Desk and chair, Wardrobe with full-length mirror",
    },
    {
      title: "Premier Single Room",
      price: "xxx PLN",
      img: "/assets/room2.jpg",
      desc: "Fully furnished, Luxurious sofa bed, Desk and chair, Wardrobe with full-length mirror",
    },
    {
      title: "Junior Double Bedroom",
      price: "xxx PLN",
      img: "/assets/room3.jpg",
      desc: "Fully furnished, Luxurious double bed, Nightstand with lamp, Desk and chair",
    },
    {
      title: "Executive Double Bedroom",
      price: "xxx PLN",
      img: "/assets/room4.jpg",
      desc: "Fully furnished, Luxurious double bed, Two nightstands with lamps, Balcony",
    },
  ];

  const options = [
    { icon: "/assets/Airplane.png", text: "Airport transportation" },
    { icon: "/assets/Car.png", text: "Chauffeur" },
    { icon: "/assets/chef.png", text: "Cook" },
    { icon: "/assets/Discount.png", text: "Spa discounts" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="text-center text-white p-10"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 className="text-4xl font-bold bg-black bg-opacity-50 p-4 rounded-lg border border-black">
          DISCOVER YOUR PLACE — WHERE CONNECTION, GROWTH, AND FULFILLMENT COME TO LIFE
        </h1>
        <p className="mt-4 text-lg bg-black bg-opacity-50 p-2 rounded-lg border border-black">
          Since 2003, we've been transforming spaces into dynamic hubs for the young (also at heart).
        </p>
      </section>

      {/* Section: What is in */}
      <section className="container my-5 text-center p-5 shadow-sm border border-black rounded-lg"
      style={{
        backgroundImage: `url(${backgroundImagewhatsin})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <h2 className="text-3xl font-bold mb-5 border-bottom border-black pb-2">What is in</h2>
        <div className="row">
          {[
            { icon: "/assets/Laptop.png", text: "Web booking" },
            { icon: "/assets/couch.PNG", text: "Fully furnished houses" },
            { icon: "/assets/utensils_and_plate.png", text: "Fully equipped kitchen" },
            { icon: "/assets/Electricity.png", text: "Bills included" },
            { icon: "/assets/Wifi On.png", text: "Free Wi-Fi" },
            { icon: "/assets/workplace.png", text: "Workspaces in each room" },
            { icon: "/assets/Lock 04.png", text: "Mid to long term rentals" },
            { icon: "/assets/Phone call.png", text: "Swift assistance" },
          ].map((item, index) => (
            <div key={index} className="col-md-6 d-flex align-items-center justify-content-center mb-3">
              <img src={item.icon} alt={item.text} className="me-2" style={{ width: "24px" }} />
              <p className="mb-0 border border-black px-2 py-1 rounded">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Pamper Me Add-ons */}
        <PamperMeOptions options={options} style={{ border: "2px solid black", padding: "10px", borderRadius: "10px" }} />
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="container my-5 text-center">
        <h2 className="fw-bold mb-4 border-bottom border-black pb-2">Rooms</h2>
        <div className="row row-cols-1 row-cols-md-2 g-4 justify-content-center">
          {rooms.map((room, index) => (
            <div key={index} className="col">
              <div
                className="p-3 rounded shadow-sm text-dark hover-effect border border-black"
                style={{ backgroundColor: "rgba(248, 202, 196, 0.93)" }}
              >
                <img
                  src={room.img}
                  alt={room.title}
                  className="img-fluid rounded me-3 border border-black"
                  style={{ width: "150px", height: "100px", objectFit: "cover" }}
                />
                <div className="text-start">
                  <h3 className="h5 fw-bold">{room.title}</h3>
                  <p className="mb-1 fw-semibold">Starting from {room.price}</p>
                  <p className="text-muted small">{room.desc}</p>
                    <BookButton onClick={() => handleBookClick(room.title)} />
                  </div>
                </div>
              </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
