
const About = () => {
  return (
    
    <div>
      {/* Hero Section */}
      <section >

        <h1 className="text-4xl font-bold bg-black bg-opacity-50 p-4 rounded-lg">
          DISCOVER YOUR PLACE — WHERE CONNECTION, GROWTH, AND FULFILLMENT COME TO LIFE
        </h1>
        <p className="mt-4 text-lg bg-black bg-opacity-50 p-2 rounded-lg">
          Since 2003, we've been transforming spaces into dynamic hubs for the young (also at heart).
        </p>
      </section>

      {/* Section 1: What is in */}
      <section className="container my-5 text-center border border-gray-200 rounded-lg p-5">
  <h2 className="text-3xl font-bold mb-5">What is in?</h2>
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
        <p className="mb-0">{item.text}</p>
      </div>
    ))}
  </div>
</section>

      {/* Section 2: Pamper Me Add-ons */}
      <section className="bg-light py-5 text-center border border-gray-200 rounded-lg p-8">
        <h2 className="text-3xl font-bold">
          <img src="/assets/Gift.png" alt="Pamper" className="me-2" style={{width: "34px"}}/>
          Pamper Me Add-ons (Coming Soon) 
        </h2>
        <div className="mt-3">
        <p className="d-flex align-items-center justify-content-center mb-2">
          <img src="/assets/Airplane.png" alt="transportation" className="me-2" style={{width: "24px"}} />
          Airport transportation
          </p>
          <p className="d-flex align-items-center justify-content-center mb-2">
            <img src="/assets/Car.png" alt="chauffeur" className="me-2" style={{width: "24px"}} />
            chauffeur
          </p>
          <p className="d-flex align-items-center justify-content-center mb-2">
            <img src="/assets/chef.png" alt="cook" className="me-2" style={{width: "24px"}} />
            cook
          </p>
          <p className="icon-text">
            <img src="/assets/Discount.png" alt="Bills Included" className="me-2" style={{width: "24px"}} />
            spa discounts</p>
            </div>
      </section>

      {/* Section 3: Why Choose Cocoon? */}
      <section className="container my-5 text-center border border-gray-200 rounded-lg p-8">
        <h2 className="text-3xl font-bold">Why Choose Cocoon?</h2>
        <p className="mt-3">We offer top-tier coliving experiences with flexibility, community, and comfort.</p>
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
              <a href="#" className="d-flex align-items-center p-3 border rounded shadow-sm text-decoration-none text-dark bg-white">
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
export default About;
