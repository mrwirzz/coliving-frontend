import { useEffect, useState } from 'react';
import { supabase } from '../config/supabase';

const Account = () => {
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      
      if (user) {
        // Получаем бронирования пользователя
        const { data: bookings, error } = await supabase
          .from('bookings')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false });

        if (error) {
          console.error('Error fetching bookings:', error);
        } else {
          setBookings(bookings);
        }

        // Получаем список комнат
        const { data: rooms, error: roomsError } = await supabase
          .from('rooms')
          .select('*')
          .eq('is_available', true);

        if (roomsError) {
          console.error('Error fetching rooms:', roomsError);
        } else {
          setRooms(rooms);
        }
      }
      setLoading(false);
    };

    getUser();
  }, []);

  const handleBooking = async (e) => {
    e.preventDefault();
    
    if (!selectedRoom || !checkInDate || !checkOutDate) {
      alert('Please, fill all fields');
      return;
    }

    try {
      const selectedRoomData = rooms.find(room => room.id === selectedRoom);
      
      const { data, error } = await supabase
        .from('bookings')
        .insert([
          {
            user_id: user.id,
            room_id: selectedRoom,
            room_name: selectedRoomData.name,
            check_in_date: checkInDate,
            check_out_date: checkOutDate,
            status: 'pending'
          }
        ]);

      if (error) throw error;

      // Обновляем список бронирований
      const { data: newBookings } = await supabase
        .from('bookings')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      setBookings(newBookings);
      
      // Очищаем форму
      setSelectedRoom('');
      setCheckInDate('');
      setCheckOutDate('');

      alert('Done with booking!');
    } catch (error) {
      console.error('Error creating booking:', error);
      alert('Some booking error!');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>Please log in...</div>;
  }

  return (
    <div className="container mt-5">
      <h2>Account</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">User Info</h5>
              <p>Email: {user.email}</p>
              <p>Name: {user.user_metadata?.name || 'No data'}</p>
            </div>
          </div>

          {/* Форма бронирования */}
          <div className="card mt-4">
            <div className="card-body">
              <h5 className="card-title">New Booking</h5>
              <form onSubmit={handleBooking}>
                <div className="mb-3">
                  <label className="form-label">Choose a room</label>
                  <select 
                    className="form-select"
                    value={selectedRoom}
                    onChange={(e) => setSelectedRoom(e.target.value)}
                    required
                  >
                    <option value="">Choose a room</option>
                    {rooms.map(room => (
                      <option key={room.id} value={room.id}>
                        {room.name} - {room.price} PLN
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Checkin date</label>
                  <input
                    type="date"
                    className="form-control"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Checkout date</label>
                  <input
                    type="date"
                    className="form-control"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Book
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">My bookings</h5>
              {bookings.length === 0 ? (
                <p>no bookings right now</p>
              ) : (
                <div className="list-group">
                  {bookings.map((booking) => (
                    <div key={booking.id} className="list-group-item">
                      <h6>{booking.room_name}</h6>
                      <p>status: {booking.status}</p>
                      <p>checkin: {new Date(booking.check_in_date).toLocaleDateString()}</p>
                      <p>checkout: {new Date(booking.check_out_date).toLocaleDateString()}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
