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
      <section className="container my-5 text-center">
        <h2 className="text-3xl font-bold">What is in?</h2>
        <div className="mt-4">
          <p className="d-flex align-items-center justify-content-center mb-2">
          <img src="/assets/Laptop.png" alt="Web Booking" className="me-2" style={{width: "24px"}} />
            Web booking
          </p>
          <p className="d-flex align-items-center justify-content-center mb-2">
            <img src="/assets/couch.PNG" alt="Furnished Houses" className="me-2" style={{width: "24px"}} />
            Fully furnished houses
          </p>
          <p className="d-flex align-items-center justify-content-center mb-2">
            <img src="/assets/utensils_and_plate.png" alt="Equipped Kitchen" className="me-2" style={{width: "24px"}} />
            Fully equipped kitchen
          </p>
          <p className="icon-text">
            <img src="/assets/Electricity.png" alt="Bills Included" className="me-2" style={{width: "24px"}} />
            Bills included
          </p>
          <p className="icon-text">
            <img src="/assets/Wifi On.png" alt="Free Wi-Fi" className="me-2" style={{width: "24px"}} />
            Free Wi-Fi
          </p>
          <p className="icon-text">
            <img src="/assets/workplace.png" alt="Workspaces" className="me-2" style={{width: "24px"}} />
            Workspaces in each room
          </p>
          <p className="icon-text">
            <img src="/assets/Lock 04.png" alt="Long Term Rentals" className="me-2" style={{width: "24px"}} />
            Mid to long term rentals
          </p>
          <p className="icon-text">
            <img src="/assets/Phone call.png" alt="Swift Assistance" className="me-2" style={{width: "24px"}} />
            Swift assistance
          </p>
        </div>
      </section>

      {/* Section 2: Pamper Me Add-ons */}
      <section className="bg-light py-5 text-center">
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
      <section className="container my-5 text-center">
        <h2 className="text-3xl font-bold">Why Choose Cocoon?</h2>
        <p className="mt-3">We offer top-tier coliving experiences with flexibility, community, and comfort.</p>
      </section>
      {/* Section 4: Rooms */}
      <section className="container my-5 text-center">
        <h2 className="text-3xl font-bold">Rooms</h2>
        <p className="mt-3">Reserve your perfect space</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-5">
          {["Deluxe single bedroom", "Premier single room", "Junior double bedroom", "Executive double bedroom"].map((room, index) => (
            <div key={index} className="p-4 border rounded-lg shadow">
              <div className="h-40 bg-gray-200 flex items-center justify-center mb-3">[Image Placeholder]</div>
              <h3 className="text-xl font-semibold">{room}</h3>
              <p className="text-sm">Starting from xxx PLN</p>
              <ul className="text-left mt-2 text-sm">
                <li>Fully furnished</li>
                <li>{room.includes("single") ? "Sofa bed" : "Luxurious double bed"}</li>
                <li>Desk and chair</li>
                <li>Wardrobe with full-length mirror</li>
                <li>Flexible annual lease</li>
                <li>Penalty-free 30-day notice</li>
                <li>Fixed monthly online payments</li>
                <li>All utilities included</li>
                <li>No broker fees</li>
                <li>No bills hassle</li>
                </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
