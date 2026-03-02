import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { searchByLicensePlate } from '../services/vehicles';
import { areFriends } from '../services/friends';
import { UserProfile } from '../types';
import VehicleSilhouette from '../components/VehicleSilhouette';

const SearchPage: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [plate, setPlate] = useState('');
  const [result, setResult] = useState<UserProfile | null | undefined>(undefined);
  const [isFriend, setIsFriend] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!plate.trim()) return;
    setLoading(true);
    setError('');
    setResult(undefined);
    try {
      const profile = await searchByLicensePlate(plate.trim());
      setResult(profile);
      if (profile && user) {
        const friend = await areFriends(user.uid, profile.uid);
        setIsFriend(friend);
      }
    } catch {
      setError('Search failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const targetVehicle = result?.vehicles?.find(
    (v) => v.licensePlate === plate.toUpperCase().replace(/\s/g, '')
  );

  return (
    <div className="page">
      <h1 className="page-title">Search by Plate</h1>
      <form onSubmit={handleSearch}>
        <div className="form-group">
          <label htmlFor="plate">License Plate</label>
          <input
            id="plate"
            type="text"
            value={plate}
            onChange={(e) => setPlate(e.target.value.toUpperCase())}
            placeholder="ABC-1234"
            autoCapitalize="characters"
          />
        </div>
        <button className="btn-primary" type="submit" disabled={loading || !plate.trim()}>
          {loading ? 'Searching…' : 'Search'}
        </button>
      </form>

      {error && <p className="error-text" role="alert">{error}</p>}

      {result === null && (
        <div className="search-empty card">
          <p>No vehicle found for plate <strong>{plate}</strong>.</p>
        </div>
      )}

      {result && targetVehicle && (
        <div className="card search-result">
          <VehicleSilhouette color={targetVehicle.color} size={100} />
          <div className="search-result-info">
            <p className="search-plate">{targetVehicle.licensePlate}</p>
            <p className="search-vehicle">{targetVehicle.make} {targetVehicle.model}</p>
            <p className="search-color">{targetVehicle.color}</p>
          </div>
          <div className="search-actions">
            <button
              className="btn-primary"
              onClick={() => navigate(`/compose?recipientId=${result.uid}&vehicleId=${targetVehicle.id}&plate=${targetVehicle.licensePlate}&isFriend=${isFriend}`)}
            >
              Send Message
            </button>
            {!isFriend && (
              <button
                className="btn-secondary"
                onClick={() => navigate(`/compose?recipientId=${result.uid}&vehicleId=${targetVehicle.id}&plate=${targetVehicle.licensePlate}&friendRequest=true`)}
              >
                Add as Friend
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
