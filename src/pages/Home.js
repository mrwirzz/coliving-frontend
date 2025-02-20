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
            <img src="/assets/Electricity.png" alt="Bills Included" className="icon" />
            Bills included
          </p>
          <p className="icon-text">
            <img src="/assets/Wifi On.png" alt="Free Wi-Fi" className="icon" />
            Free Wi-Fi
          </p>
          <p className="icon-text">
            <img src="/assets/workplace.png" alt="Workspaces" className="icon" />
            Workspaces in each room
          </p>
          <p className="icon-text">
            <img src="/assets/Lock 04.png" alt="Long Term Rentals" className="icon" />
            Mid to long term rentals
          </p>
          <p className="icon-text">
            <img src="/assets/Phone call.png" alt="Swift Assistance" className="icon" />
            Swift assistance
          </p>
        </div>
      </section>

      {/* Section 2: Pamper Me Add-ons */}
      <section className="bg-light py-5 text-center">
        <h2 className="text-3xl font-bold">Pamper Me Add-ons (Coming Soon)</h2>
        <p className="mt-3">Airport transportation, chauffeur, cook, spa discounts...</p>
      </section>

      {/* Section 3: Why Choose Cocoon? */}
      <section className="container my-5 text-center">
        <h2 className="text-3xl font-bold">Why Choose Cocoon?</h2>
        <p className="mt-3">We offer top-tier coliving experiences with flexibility, community, and comfort.</p>
      </section>
    </div>
  );
};

export default Home;
