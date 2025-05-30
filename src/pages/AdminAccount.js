import React, { useEffect, useState } from 'react';
import { supabase } from '../config/supabase';
import { useAuth } from '../contexts/AuthContext';

const MASTER_EMAIL = 'slovlagri@gmail.com';

const AdminAccount = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      if (!user || user.email !== MASTER_EMAIL) {
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('bookings')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setBookings(data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [user]);

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

  const deleteBooking = async (bookingId) => {
    if (!window.confirm('Are you sure you want to delete this booking?')) return;

    try {
      const { error } = await supabase
        .from('bookings')
        .delete()
        .eq('id', bookingId);

      if (error) throw error;

      setBookings(prev => prev.filter(b => b.id !== bookingId));
    } catch (err) {
      console.error('Delete error:', err);
      alert('Could not delete booking');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!user || user.email !== MASTER_EMAIL) return <div>Access denied</div>;

  return (
    <div className="container mt-5">
      <h2>Admin Dashboard</h2>
      <div className="card">
        <div className="card-body">
          <h3>All Bookings</h3>
          {bookings.length === 0 ? (
            <p>No bookings yet</p>
          ) : (
            <div className="list-group">
              {bookings.map((booking) => (
                <div key={booking.id} className="list-group-item mb-3">
                  <h5>{booking.room_name}</h5>
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
                  <div className="btn-group">
                    <button className="btn btn-success" onClick={() => updateStatus(booking.id, 'confirmed')}>
                      Confirm
                    </button>
                    <button className="btn btn-secondary" onClick={() => updateStatus(booking.id, 'rejected')}>
                      Reject
                    </button>
                    <button className="btn btn-danger" onClick={() => deleteBooking(booking.id)}>
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminAccount;
