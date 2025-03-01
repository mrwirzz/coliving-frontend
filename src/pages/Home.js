import backgroundImage from '../assets/backgroundwindow.png';

const Home = () => {
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
          alignItems: "center"
        }}
      >

        <h1 className="text-4xl font-bold bg-black bg-opacity-50 p-4 rounded-lg">
          DISCOVER YOUR PLACE — WHERE CONNECTION, GROWTH, AND FULFILLMENT COME TO LIFE
        </h1>
        <p className="mt-4 text-lg bg-black bg-opacity-50 p-2 rounded-lg">
          Since 2003, we've been transforming spaces into dynamic hubs for the young (also at heart).
        </p>
      </section>

      {/* Section 1: What is in */}
      <section className="container my-5 text-center border border-gray-200 rounded-lg p-5">
  <h2 className="text-3xl font-bold mb-5">What is in</h2>
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
      { icon: "/assets/Gift.png", text: "Pamper Me Add-ons (Coming Soon)" },
      { icon: "/assets/Airplane.png", text: "Airport transportation" },
      { icon: "/assets/Car.png", text: "Chauffeur" },
      { icon: "/assets/chef.png", text: "Cook" },
      { icon: "/assets/Discount.png", text: "Spa discounts" }

    ].map((item, index) => (
      <div key={index} className="col-md-6 d-flex align-items-center justify-content-center mb-3">
        <img src={item.icon} alt={item.text} className="me-2" style={{ width: "24px" }} />
        <p className="mb-0">{item.text}</p>
      </div>
    ))}
  </div>
</section>
      {/* Section 4: Rooms */}
           {/* Rooms Section */}
           <section className="container my-5 text-center">
        <h2 className="fw-bold mb-4">Rooms</h2>
  <div className="row row-cols-1 row-cols-md-2 g-4 justify-content-center">
    {[
      { title: "Deluxe Single Bedroom", price: "xxx PLN", img: "/assets/room1.png", desc: "Fully furnished, Sofa bed, Desk and chair, Wardrobe with full-length mirror" },
      { title: "Premier Single Room", price: "xxx PLN", img: "/assets/room2.png", desc: "Fully furnished, Luxurious sofa bed, Desk and chair, Wardrobe with full-length mirror" },
      { title: "Junior Double Bedroom", price: "xxx PLN", img: "/assets/room3.png", desc: "Fully furnished, Luxurious double bed, Nightstand with lamp, Desk and chair" },
      { title: "Executive Double Bedroom", price: "xxx PLN", img: "/assets/room4.png", desc: "Fully furnished, Luxurious double bed, Two nightstands with lamps, Balcony" }
    ].map((room, index) => (
      <div key={index} className="col">
        <a href="#" className="d-flex align-items-center p-3 border rounded shadow-sm text-decoration-none text-dark bg-white hover-effect">
          <img src={room.img} alt={room.title} className="img-fluid rounded me-3" style={{ width: "150px", height: "100px", objectFit: "cover" }} />
          <div className="text-start">
            <h3 className="h5 fw-bold">{room.title}</h3>
            <p className="mb-1 fw-semibold">Starting from {room.price}</p>
            <p className="text-muted small">{room.desc}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default Home;
