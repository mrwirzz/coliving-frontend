import React, { useEffect, useState } from 'react';
import { supabase } from '../config/supabase';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const MASTER_EMAIL = 'slovlagri@gmail.com';

const Account = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const navigate = useNavigate();

  const isAdmin = user?.email === MASTER_EMAIL;

  useEffect(() => {
    const getUser = async () => {
      console.log('Current user:', user);
      console.log('Is admin:', isAdmin);
      
      if (!user) {
        setLoading(false);
        return;
      }
      
      try {
        // Получаем бронирования
        let query = supabase
          .from('bookings')
          .select('*')
          .order('created_at', { ascending: false });

        // Добавляем фильтр только если это не админ
        if (!isAdmin) {
          query = query.eq('user_id', user.id);
        }

        const { data: bookings, error } = await query;

        console.log('Fetched bookings:', bookings);
        console.log('Fetch error:', error);

        if (error) throw error;
        setBookings(bookings || []);

        // Получаем список комнат
        const { data: rooms, error: roomsError } = await supabase
          .from('rooms')
          .select('*')
          .eq('is_available', true);

        console.log('Fetched rooms:', rooms);
        console.log('Rooms error:', roomsError);

        if (roomsError) throw roomsError;
        setRooms(rooms || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, [user, isAdmin]);

  const handleDeleteAccount = async () => {
    if (window.confirm('Are you sure what you want to delete your account?')) {
      try {
        const { error: bookingsError } = await supabase
          .from('bookings')
          .delete()
          .eq('user_id', user.id);

        if (bookingsError) throw bookingsError;

        const { error: deleteError } = await supabase.auth.admin.deleteUser(user.id);
        if (deleteError) throw deleteError;

        await supabase.auth.signOut();
        navigate('/');
      } catch (error) {
        console.error('Error deleting account:', error);
        alert('Error deleting account');
      }
    }
  };

  const handleDeleteBooking = async (bookingId) => {
    if (window.confirm('Are you sure what you want to cancel this booking?')) {
      try {
        const { error } = await supabase
          .from('bookings')
          .delete()
          .eq('id', bookingId);

        if (error) throw error;

        setBookings(bookings.filter(booking => booking.id !== bookingId));
        alert('Booking canceled');
      } catch (error) {
        console.error('Error deleting booking:', error);
        alert('Error deleting booking');
      }
    }
  };

  const updateStatus = async (bookingId, newStatus) => {
    try {
      const { error } = await supabase
        .from('bookings')
        .update({ status: newStatus })
        .eq('id', bookingId);

      if (error) throw error;

      setBookings(prev =>
        prev.map(b =>
          b.id === bookingId ? { ...b, status: newStatus } : b
        )
      );
    } catch (err) {
      console.error('Status update error:', err);
      alert('Could not update status');
    }
  };

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

      const { data: newBookings } = await supabase
        .from('bookings')
        .select('*')
        .eq(isAdmin ? 'id' : 'user_id', isAdmin ? undefined : user.id)
        .order('created_at', { ascending: false });

      setBookings(newBookings);
      
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
      <h2>{isAdmin ? 'Admin Dashboard' : 'Account'}</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">User Info</h5>
              <p>Email: {user.email}</p>
              <p>Name: {user.user_metadata?.name || 'No data'}</p>
              <p>Is Admin: {isAdmin ? 'Yes' : 'No'}</p>
              {!isAdmin && (
                <button 
                  onClick={handleDeleteAccount}
                  className="btn btn-danger mt-3"
                  style={{
                    backgroundColor: "#dc3545",
                    color: "white",
                    border: "2px solid black"
                  }}
                >
                  Delete account
                </button>
              )}
            </div>
          </div>

          {!isAdmin && (
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
          )}
        </div>

        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{isAdmin ? 'All Bookings' : 'My Bookings'}</h5>
              {bookings.length === 0 ? (
                <p>No bookings yet</p>
              ) : (
                <div className="list-group">
                  {bookings.map((booking) => (
                    <div key={booking.id} className="list-group-item mb-3">
                      <h6>{booking.room_name}</h6>
                      <p><strong>User ID:</strong> {booking.user_id}</p>
                      <p><strong>Check-in:</strong> {new Date(booking.check_in_date).toLocaleDateString()}</p>
                      <p><strong>Check-out:</strong> {new Date(booking.check_out_date).toLocaleDateString()}</p>
                      <p>
                        <strong>Status:</strong>{' '}
                        <span style={{
                          color:
                            booking.status === 'confirmed'
                              ? 'green'
                              : booking.status === 'rejected'
                              ? 'red'
                              : 'orange'
                        }}>
                          {booking.status}
                        </span>
                      </p>
                      {isAdmin ? (
                        <div className="btn-group">
                          <button className="btn btn-success" onClick={() => updateStatus(booking.id, 'confirmed')}>
                            Confirm
                          </button>
                          <button className="btn btn-secondary" onClick={() => updateStatus(booking.id, 'rejected')}>
                            Reject
                          </button>
                          <button className="btn btn-danger" onClick={() => handleDeleteBooking(booking.id)}>
                            Delete
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => handleDeleteBooking(booking.id)}
                          className="btn btn-danger mt-2"
                          style={{
                            backgroundColor: "#dc3545",
                            color: "white",
                            border: "2px solid black"
                          }}
                        >
                          Cancel booking
                        </button>
                      )}
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
